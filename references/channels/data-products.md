# Data Products Documentation

## Goal
Define data product contracts (schema, SLA, quality) so consumers understand guarantees, dependencies, and service levels without discovering failures in production.

## Success Metrics (2025-2026)
- 100% of data products have published SLAs with measured compliance (>95% uptime)
- Data contracts matched to actual schema (0% contract-code mismatches)
- Data quality issues detected and alerted before consumer impact
- SLA breach resolution within documented RTO (Recovery Time Objective)
- Consumer adoption tracked: 80% of teams reference published data contracts

## Limits & Restrictions

### Technical
- Data product schema must be validated against actual tables (not inferred)
- SLAs must be measured, not estimated (freshness, completeness, accuracy metrics)
- Quality thresholds must be based on historical performance, not aspirational targets
- Data contracts must be versioned; breaking changes require consumer notification
- All quality metrics testable and continuously monitored

### Platform/Context
- Lives in data catalog (Collibra, Alation), data mesh platforms (dbt Semantic Layer, metadata stores)
- Primary audience: data consumers, analytics engineers, ML practitioners, product teams
- Lifecycle: Versioned; updated when schema or SLA changes; test coverage required
- Discoverability: Indexed by owner, domain, business context in data catalog

### GGP Etiquette
- Never fabricate SLA numbers — source from monitoring (99.9% must be measured)
- Never assume quality thresholds — base on actual historical measurements
- Mark inferred SLAs as [INFERENCE] with confidence level
- Flag dependencies: if upstream fails, when does this product fail?
- Consumer list must be verified quarterly (are they actually using this?)

## Template

```markdown
# Data Product: [Name]

## Data Product Card

**Owner:** [Team/Person]
**Domain:** [Business area]
**Status:** [Active, Sunset, Beta]
**Created:** YYYY-MM-DD
**Last Updated:** YYYY-MM-DD

## What is This?
[Business description: what question does this answer?]

## Who Uses It?
- Analytics Team: Sales Dashboard
- Product Team: Lead Scoring ML Model
- Finance: Revenue Recognition Report

## Schema

| Field Name | Data Type | Nullable | Description | Example |
|---|---|---|---|---|
| product_id | BIGINT | No | Unique product identifier | 12345 |
| revenue | NUMERIC(12,2) | No | USD revenue | 99.99 |
| created_at | TIMESTAMP | No | UTC creation time | 2025-01-15 10:30:00 |

## Data Contract

**Provider:** [Team name]
**Consumer:** [List of teams]
**Version:** 1.2.0
**Last Modified:** YYYY-MM-DD

### Freshness SLA
- Target: Data refreshed every [X hours]
- Measured: [Average delay from source → table availability]
- Alert Threshold: >2 hours delay
- Breach Notification: Slack #data-alerts

### Completeness SLA
- Target: [X%] of expected rows present
- Measured: Daily validation; expected row count = [source count]
- Alert Threshold: <98% completeness
- Acceptable Exceptions: [Any known data quality issues]

### Accuracy SLA
- Target: [X%] of values match upstream source
- Measured: Row-by-row comparison with source system
- Sampling: 100% for key columns, 10% for others
- Alert Threshold: <99.5% accuracy

### Support & Escalation
- Primary Contact: [Owner email]
- Response Time: <2 hours (during business hours)
- Escalation: If unresolved >4 hours → page on-call data engineer

## Data Quality Dimensions

| Dimension | Metric | Target | Current | Status | Last Measured |
|---|---|---|---|---|---|
| Freshness | Max data age | <4 hours | 1h 45m | [CONFIRMED] HEALTHY | 2025-01-15 09:00 |
| Completeness | NOT NULL rate | ≥99% | 99.8% | [CONFIRMED] HEALTHY | 2025-01-15 09:00 |
| Accuracy | Match source | ≥99% | 99.2% | [CONFIRMED] HEALTHY | 2025-01-14 23:00 |
| Uniqueness | Duplicate keys | 0 | 0 | [CONFIRMED] HEALTHY | 2025-01-15 09:00 |
| Validity | Format/range pass | ≥98% | 98.5% | [CONFIRMED] HEALTHY | 2025-01-15 09:00 |

## Access & Authentication
- **Data Location:** Redshift schema `analytics`, table `products`
- **Access Control:** [Role-based; query analytics_read role]
- **Authentication:** AWS IAM (assume role: data-consumer)
- **Network:** VPN required for external access

## Dependencies & Upstream Services
- Source: Salesforce Product API
- ETL: dbt model `stg_salesforce_products`
- Monitoring: [CloudWatch dashboard link]

## Changelog
- v1.2.0 (2025-01-15): Added `product_tier` field
- v1.1.0 (2024-12-01): Removed `legacy_id` (deprecated)
- v1.0.0 (2024-01-01): Initial release
```

## Examples

### Good Example
```markdown
# Data Product: fct_customer_transaction

## Data Product Card

**Owner:** Analytics Engineering Team
**Domain:** Finance & Commerce
**Status:** Active (Production)
**SLA:** 99.5% uptime, <2h freshness
**Created:** 2023-03-15
**Last Updated:** February 2026

## What is This?
Daily fact table of customer transactions (orders, returns, refunds). Used for revenue reporting, customer segmentation, and fraud detection. Grain: 1 row per transaction.

## Who Uses It?
- Finance Team: Revenue Recognition Dashboard (daily)
- Product Analytics: Cohort Analysis & LTV Models
- Risk Team: Fraud Detection Pipeline
- Marketing: Customer Segmentation (6 teams)

## Schema (v2.1.0)

| Field Name | Data Type | Nullable | Description | PII | Example |
|---|---|---|---|---|---|
| transaction_id | BIGINT | No | Unique transaction identifier | No | 987654321 |
| customer_id | BIGINT | No | Customer ID (FK to dim_customers) | Yes (encrypted) | 12345 |
| order_date | DATE | No | Date of transaction (UTC) | No | 2025-01-15 |
| total_amount | NUMERIC(10,2) | No | USD amount including tax | No | 149.99 |
| transaction_type | VARCHAR(20) | No | ENUM: PURCHASE, RETURN, REFUND | No | PURCHASE |
| is_fraud_flagged | BOOLEAN | No | Risk score >= 0.8 | No | false |

## Data Contract v2.1.0

**Provider:** Analytics Engineering Team
**Consumers:** Finance, Product Analytics, Risk, Marketing
**Effective Date:** 2025-01-15
**Breaking Changes:** None since v2.0.0

### Freshness SLA
- **Target:** Data loaded by 08:00 UTC daily (T+1 from transaction date)
- **Measured:** Query `MAX(created_at) FROM analytics.transaction_load_log` nightly
- **Actual (2025-01-15):** 07:47 UTC (13 min early) ✓
- **Alert Threshold:** >120 minutes delay from target
- **Escalation:** Slack #data-operations, then page on-call (>150 min delay)

### Completeness SLA
- **Target:** 100% of transactions in source system present (within 24 hours)
- **Measured:** Row count validation; `SELECT COUNT(*) FROM fact_table WHERE order_date = CURRENT_DATE - 1` vs. source API count
- **Actual (2025-01-14):** 99,847 rows in table vs. 99,847 expected = 100% ✓
- **Alert Threshold:** <98% (indicates dropped records)
- **Known Exception:** Refunds from Shopify process 24-48h post-return; included in next day load

### Accuracy SLA
- **Target:** 100% of key columns (amount, type, customer_id) match source
- **Measured:** Row-level comparison: transformation test `test_fact_transactions_amounts.sql` (compares against Salesforce API)
- **Sampling:** 100% for financial fields; 20% random sample for descriptive fields
- **Actual (2025-01-14):** 99.97% match (3 edge-case refunds reconciled) ✓
- **Alert Threshold:** <99% match rate
- **Known Issue:** Rounding in tax calculation (USD cents) <0.01% variance acceptable

### Support & Escalation
- **Primary Contact:** @data-analytics-team (Slack #data-team)
- **Response Time (Business Hours):** <30 min
- **Response Time (Outside Hours):** On-call data engineer (page via PagerDuty)
- **Escalation:** If unresolved >2 hours → escalate to Data Director

## Data Quality Dashboard

| Dimension | Metric | SLA | Actual (2025-01-15 09:00) | Status | Last Alert |
|---|---|---|---|---|---|
| Freshness | Load completion time | 08:00 UTC | 07:47 UTC | [CONFIRMED] On SLA | None |
| Completeness | Row count variance | ≤1% | 0.002% | [CONFIRMED] On SLA | 2024-12-20 (missed delivery) |
| Accuracy | Column match vs. source | ≥99% | 99.97% | [CONFIRMED] Exceeds | None |
| Timeliness | Data latency | <4 hours from source | 2h 15m avg | [CONFIRMED] On SLA | None |
| Validity | NOT NULL compliance | ≥99.9% | 100% | [CONFIRMED] Exceeds | None |

## Access & Authentication

**Data Location:**
- Redshift: `analytics.fct_customer_transaction`
- Snowflake (read replica): `analytics.fact_customer_transaction`

**Access Control:**
- Employees: IAM role `data-consumer` (read-only)
- External Partners: Row-level security; customer_id masked for non-approved teams
- PII Handling: Encrypted at rest; access logged

**Query Examples:**
\`\`\`sql
-- Query 1: Daily revenue (all transactions)
SELECT
  order_date,
  transaction_type,
  COUNT(*) AS transaction_count,
  SUM(total_amount) AS daily_revenue
FROM analytics.fct_customer_transaction
WHERE order_date >= CURRENT_DATE - 30
GROUP BY order_date, transaction_type;

-- Query 2: Fraud rate trend
SELECT
  order_date,
  COUNT(*) AS total_transactions,
  SUM(CASE WHEN is_fraud_flagged THEN 1 ELSE 0 END) AS fraud_count,
  ROUND(100.0 * SUM(CASE WHEN is_fraud_flagged THEN 1 ELSE 0 END) / COUNT(*), 2) AS fraud_rate_pct
FROM analytics.fct_customer_transaction
WHERE order_date >= CURRENT_DATE - 90
GROUP BY order_date;
\`\`\`

## Dependencies & Upstream Services

| Upstream | Type | Criticality | Failure Mode |
|---|---|---|---|
| Salesforce SFDC API | Source | High | [CONFIRMED] Verified: CDC stream active, backup CSV pull available |
| Redshift Cluster | Database | High | [CONFIRMED] Verified: Multi-AZ failover auto-enabled |
| dbt Cloud Job | Transformation | High | [INFERENCE] Single job; no redundancy; recovery time ~15 min |
| Fivetran | ELT | High | [CONFIRMED] Verified: Scheduled + event-triggered; backup manual load available |

## Changelog & Version History

**v2.1.0 (2025-01-15)**
- Added: `is_fraud_flagged` field (boolean, populated by risk ML model)
- Change: `transaction_type` ENUM expanded to include PARTIAL_REFUND (was only REFUND)
- Performance: Partitioned by `order_date` (query speed +40%)
- Migration: Existing code using `REFUND` still works; `PARTIAL_REFUND` captured going forward

**v2.0.0 (2024-06-01)** — BREAKING CHANGE
- Removed: `legacy_customer_key` (use `customer_id` instead)
- Changed: `amount` split into `subtotal`, `tax`, `total_amount` (granularity improvement)
- Migration Path: Join with `dim_customer_mapping` to translate old keys

**v1.0.0 (2023-03-15)** — Initial Release
- Core schema: transaction_id, customer_id, amount, date, type

## Testing & Validation

**Automated Tests:**
- Schema validation: dbt test (every deployment)
- Freshness check: CloudWatch rule (nightly 08:30 UTC)
- Accuracy check: Row comparison vs. source (nightly)
- Referential integrity: customer_id matches dim_customers (nightly)

**Manual Quarterly Validation:**
- [ ] Spot-check 100 random rows against source system
- [ ] Verify consumer teams still active users
- [ ] Review error logs and alert history
- [ ] Document any SLA misses and root causes
```

**Why this works:** Schema validated. SLAs measured, not estimated. Quality metrics actual (not targets). Consumers verified. Dependencies documented. Access control specified. Changelog tracks breaking changes.

---

### Bad Example
```markdown
# Customer Transaction Data

Data about customer transactions. Updated daily-ish.

Schema:
- transaction_id
- customer_id
- amount (probably in USD)
- date

Quality: Generally pretty good. Should be accurate most of the time.

Access: Ask someone on the data team.
```

**Why this fails:** No SLA. No quality metrics. No measured freshness. No consumer list. Schema ambiguity ("probably USD"). No access controls documented. Not a contract.

## Tactical Guidance

**Data Product Cards:**
- Include business context (why does this exist? what problem does it solve?)
- Document actual consumers (not "people who might use this")
- Link to data lineage (where does data come from?)
- Version schema; track breaking changes

**SLA Contracts:**
- Measure, don't estimate: query monitoring systems (Datadog, CloudWatch)
- Document what "freshness" means (delivery time? data availability? source lag?)
- Set thresholds based on historical performance (90th percentile, not best-case)
- Include escalation path and expected response time

**Data Quality Dimensions:**
- Freshness: Time from source event to table availability
- Completeness: % of expected rows present (validate against source count)
- Accuracy: % of values matching upstream (row-level spot check)
- Validity: % matching expected format/range
- Uniqueness: 0 duplicate keys on primary key

**Breaking Changes:**
- Announce 2+ weeks before implementation
- Document migration path (how do consumers update code?)
- Provide dual-write period (old and new columns available)
- Support queries on both old and new versions briefly

**Consumer Tracking:**
- Quarterly: verify who is querying this table (query CloudWatch logs)
- Alert if zero queries detected (is this orphaned?)
- Collect feedback: is SLA meaningful? Would different freshness help?

## Pre-Publication Checklist
- [ ] Schema validated against actual database tables
- [ ] SLAs measured (not estimated) from monitoring; historical data available
- [ ] Quality metrics based on actual historical performance (90th percentile, not best-case)
- [ ] Consumers list verified — teams actively querying this table
- [ ] Data contract versioned; breaking changes documented
- [ ] Upstream dependencies listed and failure modes understood
- [ ] Access control tested; roles and permissions verified
- [ ] All URLs, schemas, and field names match actual infrastructure
- [ ] Escalation path defined with expected response times
- [ ] Data quality tests implemented and running
- [ ] GGP markers applied: [CONFIRMED] for verified SLAs, [INFERENCE] for inferred thresholds, [GAP] for gaps
- [ ] Quarterly validation schedule documented in team calendar

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this channel's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load channel → Create content → Channel checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

