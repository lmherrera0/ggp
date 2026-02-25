# Data Lineage Documentation

## Goal
Map data flows from source to target with complete transformation transparency so stakeholders understand provenance, dependencies, and freshness of every field.

## Success Metrics (2025-2026)
- Every production data field traceable to source (0% unknown origins)
- Transformation logic documented and testable (runnable SQL, PySpark, dbt)
- Data freshness SLA compliance tracked with 98%+ uptime
- PII fields flagged in 100% of data dictionaries
- Impact analysis complete: 80% reduction in "where does this data come from?" questions

## Limits & Restrictions

### Technical
- Data lineage diagrams must show actual column-level transformations, not just table names
- Source-to-target mappings require SQL/transformation code reference (not prose descriptions)
- Schema definitions must be validated against actual database (not inferred)
- Data types, nullability, and precision must match production schema exactly
- Freshness timestamps must be testable through data quality metrics

### Platform/Context
- Lives in `/docs/data-lineage/`, data catalog tools (Collibra, Alation), wiki pages
- Primary audience: data engineers, analytics engineers, BI analysts, compliance officers
- Lifecycle: Updated when pipelines change; tested with each deployment
- Discoverability: Indexed by field name in data catalog; lineage graphs searchable

### GGP Etiquette
- Never fabricate schema definitions; always validate against `information_schema`
- Never assume transformation logic; trace actual code in dbt, SQL, or Spark jobs
- Mark all upstream dependencies as [CONFIRMED] (verified) or [GAP] (unavailable)
- Flag inferred field types as [INFERENCE] with verification status
- Data freshness must reference actual monitoring; don't guess SLA compliance

## Template

```markdown
# Data Lineage: [Schema].[Table]

## Overview
[Business context: what does this table represent?]

## Source-to-Target Mapping

| Source System | Source Field | Transformation | Target Field | Data Type | Business Rule | Freshness |
|---|---|---|---|---|---|---|
| Salesforce | `Account.Name` | UPPER() | account_name | VARCHAR(255) | Excludes test accounts | [CONFIRMED] Real-time |
| Custom App | `user_id` | SHA256 hash | user_id_encrypted | CHAR(64) | PII: encrypted at rest | [INFERENCE] Within 2h |

## Data Dictionary

| Field Name | Data Type | Nullable | Source | Owner | PII | Description | Business Rule |
|---|---|---|---|---|---|---|---|
| user_id | BIGINT | No | Salesforce | @data-eng | Yes | Unique identifier | Primary key, auto-increment |
| created_at | TIMESTAMP | No | App Log | @data-eng | No | Record creation time | UTC, no future dates |
| email | VARCHAR(255) | Yes | Salesforce CRM | @analytics | Yes | Contact email | Lowercase, normalized |

## Lineage DAG (Directed Acyclic Graph)

\`\`\`
Raw Source (Salesforce API)
  ↓
[ELT Job: salesforce_extract] — runs daily 02:00 UTC
  ↓
Staging Table: stg_salesforce_accounts
  ↓
[dbt Model: fct_accounts] — run: 03:00 UTC, test: account_name NOT NULL
  ↓
Production: analytics.accounts
\`\`\`

## Transformation Logic

### dbt Model Reference
- **File:** \`models/marts/fct_accounts.sql\`
- **Tested:** \`tests/data_quality/test_accounts.yml\`
- **Last Verified:** YYYY-MM-DD

### Sample Transformation
\`\`\`sql
SELECT
  UPPER(account_name) AS account_name,
  COALESCE(owner_id, 0) AS owner_id,
  created_at AT TIME ZONE 'UTC' AS created_at_utc
FROM stg_salesforce_accounts
WHERE deleted_flag = 0
\`\`\`

## Data Quality & Freshness

| Metric | Target | Actual (as of YYYY-MM-DD) | Status |
|---|---|---|---|
| Freshness (max age) | 2 hours | 1h 45m | [CONFIRMED] On track |
| Completeness (NOT NULL) | 99.5% | 99.8% | [CONFIRMED] Exceeds |
| Duplicates | 0 | 0 | [CONFIRMED] Clean |

## Downstream Consumers

- Dashboard: `Sales Performance Dashboard`
- ML Model: `Lead Scoring v3`
- Report: `Monthly Billing Extract`
```

## Examples

### Good Example
```markdown
# Data Lineage: analytics.fct_customer_lifetime_value

## Source-to-Target Mapping

| Source System | Source Field | Transformation | Target Field | Data Type | Business Rule | Freshness |
|---|---|---|---|---|---|---|
| PostgreSQL transactions | transactions.amount | SUM() grouped by customer_id | total_spend | NUMERIC(12,2) | Excludes refunds (status='completed') | [CONFIRMED] Verified: Real-time via CDC |
| Salesforce CRM | account.industry | CASE WHEN industry='Tech' THEN 'Technology' ELSE industry END | industry_normalized | VARCHAR(50) | Maps 23 Salesforce values to 5 standard categories | [CONFIRMED] Verified: Daily refresh 01:00 UTC |
| Redshift fact_returns | return_count | SUM() where return_date <= transaction_date + 90 | return_refund_count | INTEGER | Excludes warranty returns (claim_type='WARRANTY') | [INFERENCE]: Assumed 90-day window; verify business rule |

## Data Dictionary: Key Fields

| Field Name | Data Type | Nullable | Source | Owner | PII | Business Rule | Last Verified |
|---|---|---|---|---|---|---|---|
| customer_id | BIGINT | No | PostgreSQL | @data-eng | Yes (customer PII) | Unique identifier; matches fact_orders.customer_id | 2025-01-15 ✓ |
| total_spend | NUMERIC(12,2) | No | PostgreSQL | @analytics | No | Sum of all completed transactions; excludes refunds; USD | 2025-01-15 ✓ |
| days_since_last_purchase | INTEGER | No | Computed | @analytics | No | MAX(transaction_date) - TODAY(); NULL if no purchases | 2025-01-15 ✓ |

## Lineage DAG

\`\`\`
PostgreSQL fact_transactions (CREATED: 2020-01-01)
  └─ [Kinesis CDC stream] — captures INSERT/UPDATE in real-time
      └─ AWS Glue ETL job: pg_transactions_to_s3
          └─ S3: s3://data-lake/raw/transactions/
              └─ Redshift COPY: UNLOAD to raw_transactions
                  └─ dbt Model: stg_transactions (tests: uniqueness on id, not null on amount)
                      └─ dbt Model: fct_customer_lifetime_value (test: referential integrity to dim_customers)
                          └─ Redshift Table: analytics.fct_customer_lifetime_value
                              └─ [7 downstream dashboards, 2 ML models, 1 reporting system]
\`\`\`

## Transformation Logic (dbt)

**File:** \`models/marts/fct_customer_lifetime_value.sql\`
**Last Test Run:** 2025-01-15 09:47 UTC (PASSED)

\`\`\`sql
SELECT
  customer_id,
  SUM(amount) FILTER (WHERE status = 'completed') AS total_spend,
  COUNT(*) FILTER (WHERE status = 'completed') AS transaction_count,
  MAX(transaction_date) AS last_purchase_date,
  CURRENT_DATE - MAX(transaction_date) AS days_since_last_purchase,
  CASE
    WHEN SUM(amount) > 10000 THEN 'high'
    WHEN SUM(amount) > 1000 THEN 'medium'
    ELSE 'low'
  END AS customer_segment
FROM {{ ref('stg_transactions') }}
GROUP BY customer_id
HAVING COUNT(*) > 0
\`\`\`

## Data Quality Dashboard

| Metric | SLA | Actual (2025-01-15 09:00 UTC) | Status | Owner |
|---|---|---|---|---|
| Freshness (max data age) | ≤ 15 min | 3 min | [CONFIRMED] HEALTHY | @data-eng |
| Completeness (rows with NOT NULL values) | ≥ 99.5% | 99.87% | [CONFIRMED] HEALTHY | @data-eng |
| Accuracy (transactions match source count) | ≤ 0.1% variance | 0.02% | [CONFIRMED] HEALTHY | @analytics |
| Referential Integrity (all customer_ids exist in dim_customers) | 100% | 100% | [CONFIRMED] HEALTHY | @data-eng |
| Duplicate Check (no duplicate transactions) | 0 duplicates | 0 | [CONFIRMED] HEALTHY | @data-eng |

## PII & Compliance

- **PII Fields:** customer_id (encrypted at rest, masked in non-prod)
- **Retention:** 7 years (per GDPR Article 5)
- **Access Control:** [CONFIRMED] Verified: Only analytics team + approved stakeholders can query
- **Last Compliance Audit:** 2025-01-10

## Downstream Consumers (Verified 2025-01-15)

- Dashboard: Sales Performance Dashboard (Tableau)
- ML Pipeline: Customer Churn Prediction (Databricks)
- Report: Monthly Finance Extract (Looker)
- System: Customer 360 API (internal)
```

**Why this works:** Every field traced to source. Transformation code linked and tested. Data quality metrics actual, not estimated. PII flagged. Freshness verified through monitoring. Lineage shows full dependency chain.

---

### Bad Example
```markdown
# Customer Data

## Fields
- customer_id: probably from Salesforce
- total_spend: added up from somewhere
- days_since_purchase: calculated somehow
- status: not sure where this comes from

## How it's created
Data comes in from various sources and is joined together. Some transformations are done in SQL.

## Data quality
Generally looks good. Updates daily or so.
```

**Why this fails:** No source-to-target mapping. Transformation code missing. Freshness vague ("or so"). No verification status. No PII flagging. Downstream consumers unknown. Cannot trace dependencies.

## Tactical Guidance

**Source Mapping:**
- Extract from actual ETL logs and code, not from memory
- Test each transformation in development environment
- Pin specific dbt model versions or SQL file commits
- Document data type mismatches (e.g., Salesforce string → INT conversion)

**Data Freshness:**
- Use monitoring tools (dbt freshness tests, custom queries) to measure actual SLA compliance
- Document refresh window (e.g., "refreshes daily 02:00-03:30 UTC")
- Flag dependencies: if upstream is delayed, when does downstream fall out of SLA?

**PII Handling:**
- Scan schema for keywords: email, phone, ssn, passport, address, ip_address, dob
- Document encryption/masking/tokenization applied
- Link to data governance/compliance documentation

**Validation:**
- Run lineage against actual database schema monthly
- Update when pipelines change (dbt model additions, SQL rewrites)
- Test referential integrity: downstream IDs exist in upstream

## Pre-Publication Checklist
- [ ] Schema validated against actual database (SELECT * FROM information_schema)
- [ ] All transformation code located and linked (dbt, SQL, or job file)
- [ ] Data types match production schema exactly (not inferred)
- [ ] Freshness SLA tested through monitoring (not estimated)
- [ ] All PII fields identified and flagged
- [ ] Upstream dependencies marked [CONFIRMED] (verified) or [GAP] (unavailable)
- [ ] Lineage DAG matches actual deployment
- [ ] Transformation logic reproducible in dev environment
- [ ] Data quality thresholds tested (not guessed)
- [ ] Downstream consumers verified (systems still using this table?)
- [ ] GGP markers applied consistently throughout

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this channel's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load channel → Create content → Channel checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

