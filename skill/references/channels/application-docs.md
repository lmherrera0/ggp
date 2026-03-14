# Application Documentation

## Goal
Provide operators, developers, and incident responders with complete, tested deployment and runbook documentation so they can deploy, troubleshoot, and recover systems without guesswork.

## Success Metrics (2025-2026)
- All deployment commands tested in staging before publication (0% "this should work")
- 100% of URLs/ports/configs verified against actual infrastructure
- Runbooks reduce mean time to resolution (MTTR) by 30%
- New operator can deploy from documentation alone in <60 minutes
- Zero incidents caused by stale documentation (quarterly verification)

## Limits & Restrictions

### Technical
- All commands must be tested against actual environment (staging, then canary production)
- URLs, ports, hostnames, credentials placeholder format validated before publication
- System architecture diagrams must match current deployment (verified by deployment tool outputs)
- Configuration examples must work with pinned versions (Node 18.12.0, not ^18)
- Rollback procedures must be executable and tested quarterly

### Platform/Context
- Lives in `/docs/deployment/`, `/docs/runbooks/`, wiki, README
- Primary audience: platform engineers, SREs, on-call engineers, security teams
- Lifecycle: Updated with each infrastructure change; tested quarterly
- Discoverability: Indexed by incident type in runbook system; linked from alerts

### GGP Etiquette
- Never fabricate system specifications (memory, CPU, disk) — source from CloudFormation, Terraform
- Never invent port numbers or URLs — verify against actual service registry or DNS
- Flag single points of failure explicitly (SPOF: database failover, DNS provider)
- Mark all assumptions about runtime environment as [INFERENCE] until verified
- Declare deployment risks: breaking changes, data loss potential, service interruption window

## Template

```markdown
# [System Name] — Architecture & Deployment

## System Overview
[What does this system do? Who depends on it?]

## Architecture Diagram
\`\`\`
[ASCII or Mermaid diagram showing components]
\`\`\`

## Components

| Component | Type | Role | Failover | Scaling |
|---|---|---|---|---|
| API Server | Compute | Request handling | ALB + ASG | Horizontal (2-10 instances) |
| RDS PostgreSQL | Database | Transactional store | Multi-AZ failover (automatic) | Vertical only |
| Redis Cache | Cache | Session/query cache | Single node; no failover [RISK] | Manual provisioning |
| S3 Bucket | Storage | Asset storage | Multi-region replication | Unlimited |

## Dependencies & Critical Services
- AWS RDS Postgres (required: v14.7+)
- Redis cluster (required; no local fallback)
- SQS queue for async jobs (degraded mode: process inline)

## Deployment Prerequisites
- Terraform v1.4.0+
- AWS CLI v2.13.0+
- SSH access to bastion host
- Valid AWS credentials (assume-role: prod-deploy)

## Deployment Guide

### Staging Deployment
\`\`\`bash
# 1. Validate infrastructure changes
terraform plan -var-file=staging.tfvars

# 2. Apply and verify
terraform apply -var-file=staging.tfvars
terraform output api_url

# 3. Run smoke tests
curl -s https://[api_url]/health | jq .
\`\`\`

### Production Deployment
\`\`\`bash
# 1. Create change ticket: [Jira link]
# 2. Announce deployment window: #devops Slack
# 3. Verify no deploys in flight: aws codepipeline list-pipelines

# 4. Blue-green deployment
terraform plan -var-file=prod.tfvars -target=aws_autoscaling_group.blue
# Verify blue group healthy before switching

# 5. Monitor
watch -n 5 'aws autoscaling describe-auto-scaling-groups --query "AutoScalingGroups[*].[AutoScalingGroupName, Instances[*].HealthStatus]"'
\`\`\`

### Rollback Procedure
\`\`\`bash
# 1. Identify broken version: git log --oneline | head -5
# 2. Revert: git revert [commit-hash]
# 3. Redeploy: terraform apply (reverted code)
# 4. Verify: aws elasticloadbalancing describe-target-health
\`\`\`

## Runbook: [Incident Type]

### Symptoms
[What does the user/monitoring observe?]

### Severity
- **SEV-1:** Service down, data loss risk
- **SEV-2:** Degraded (higher latency/errors), users impacted
- **SEV-3:** Minor issue, workaround available

### Root Causes
[Possible causes with detection steps]

### Resolution Steps
1. [Step]
2. [Step]
3. Verify: [How to confirm resolution]

### Escalation
If unresolved after 15 minutes → page on-call engineer (PagerDuty)
```

## Examples

### Good Example
```markdown
# Payment API — Deployment & Runbooks

## System Overview
Processes customer payments via Stripe; validates, authorises, and captures transactions. Dependency for checkout and billing systems (2 downstream services). Handles $2M/day in transactions.

## Architecture
\`\`\`
       API Gateway (ALB)
             ↓
   [api-1, api-2, api-3] (ASG: min=2, max=10)
             ↓
   RDS PostgreSQL (Multi-AZ failover)
       ↓           ↓
   [Primary]   [Replica]
             ↓
   Redis Sentinel cluster (3 nodes, auto-failover)
             ↓
   External: Stripe API (via API key rotation)
\`\`\`

## Critical Dependencies
| Service | Required | Failover | Location |
|---|---|---|---|
| RDS Postgres v14.7 | YES | Automatic (Multi-AZ) | us-east-1 |
| Redis Sentinel | YES | Automatic (2/3 quorum) | us-east-1 |
| Stripe API | YES (real-time auth) | None (degrades to manual review) | External |
| CloudWatch Logs | NO (degraded: console logs only) | None | us-east-1 |

## Pre-Deployment Checklist
- [ ] Code review approved (2+ approvals)
- [ ] Unit tests passing (pytest 95%+ coverage)
- [ ] Integration tests passing (Stripe sandbox environment)
- [ ] Performance tests run (p95 latency < 500ms)
- [ ] Staging deployment successful
- [ ] Database migration tested (rollback script available)

## Production Deployment

### Blue-Green Deployment Process
\`\`\`bash
# 1. Build and push image
docker build -t payment-api:v2.3.1 .
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/payment-api:v2.3.1

# 2. Create new "blue" launch template (parallel to current "green")
aws ec2 create-launch-template \
  --launch-template-name payment-api-blue-v2.3.1 \
  --version-description "Stripe rate-limit handling, bug fix"

# 3. Launch blue ASG (parallel to green)
# ASG: payment-api-blue, 2-4 instances, same AZs as green

# 4. Verify blue instances healthy
# ✓ All instances: running, passing ELB health checks
aws elb describe-instance-health --load-balancer-name payment-api-lb

# 5. Gradual traffic shift (ALB: 10% → 50% → 100%)
# Monitor: CloudWatch error rate, latency, business metrics (transaction success rate)

# 6. If green stable: terminate green ASG
# If issues detected: re-route 100% to green, keep blue for debugging
\`\`\`

### Deployment Windows & Blackout Periods
- Daily: Mon-Fri 9am-4pm UTC (peak transaction time) — HIGH RISK
- Blackout: Dec 20 - Jan 5 (holiday shopping)
- Preferred: Sun-Mon 2am-4am UTC (lowest volume)

### Post-Deployment Verification
\`\`\`bash
# 1. Health check
curl -s https://payment-api.internal/health | jq .

# 2. Smoke test (Stripe sandbox)
TEST_CARD=4242424242424242 TEST_AMOUNT=1050 pytest tests/smoke_test.py

# 3. Monitor metrics
# - Error rate: target <0.1%
# - p95 latency: target <500ms
# - Stripe API errors: target 0
watch -n 10 'curl -s https://prometheus.internal/api/v1/query?query=payment_api_error_rate'
\`\`\`

---

## Runbook: Database Connection Pool Exhaustion

### Symptoms
- Errors: "FATAL: too many connections"
- API response time: > 5 seconds (normally 100-200ms)
- CloudWatch alarm: `payment-api-db-connections-exhausted`

### SEV-2 (Degraded; transactions delayed but not lost)

### Root Causes
1. Database query hanging (lock contention) → connections not released
2. Deployment with leaking connection pooling code
3. RDS max_connections exceeded (default 100; should be 500+)

### Immediate Resolution (5-10 min)
\`\`\`bash
# 1. Check pool state
psql -h payment-db.internal -U admin -c "SELECT count(*) FROM pg_stat_activity WHERE state='active';"
# Expected: 20-50 active; if >200, pool leak suspected

# 2. Identify long-running queries
psql -h payment-db.internal -U admin -c "\
SELECT query, duration FROM pg_stat_statements \
WHERE mean_exec_time > 5000 \
ORDER BY mean_exec_time DESC LIMIT 10;"

# 3. If suspected connection leak in code:
# Redeploy previous stable version
git log --oneline | head -5  # Identify last known-good commit
git revert [commit-hash]
terraform apply -auto-approve

# 4. Monitor recovery
watch -n 2 'curl -s https://prometheus.internal/query?expr=pg_stat_activity_count'
# Target: <100 active connections, error rate drops below 0.1%
\`\`\`

### If Unresolved After 15 Minutes
1. Page on-call database engineer (PagerDuty: #database-oncall)
2. Prepare for manual intervention: kill idle connections, scale RDS up temporarily
3. Initiate incident post-mortem (SEV-2 requires root cause analysis within 24h)

### Post-Resolution
- [ ] Root cause identified and fixed
- [ ] Code review: connection pool logic
- [ ] Monitoring alert sensitivity reviewed
- [ ] Post-mortem documented in [incident ticket]
```

**Why this works:** Architecture matches actual deployment. All commands tested (not pseudocode). Runbook includes specific symptoms, detection, resolution steps, and escalation. Failover modes documented. Rollback procedure executable.

---

### Bad Example
```markdown
# Payment API Deployment

## How to Deploy
\`\`\`bash
push the code to prod
terraform apply (if needed)
\`\`\`

## If Something Goes Wrong
Restart the service or check the logs. Database might need more memory sometimes.

## Runbook
If payment errors happen, check if Stripe is down. Then restart the app maybe?
```

**Why this fails:** Commands not executable (pseudocode). No testing mentioned. No prerequisites. No actual error handling. Runbook vague and untestable. Single point of failure (database) not mentioned.

## Tactical Guidance

**Architecture Diagrams:**
- Use CloudFormation/Terraform outputs to generate; don't hand-draw
- Link to actual infrastructure as code (GitHub commit hash)
- Update with each deployment; stale diagrams are dangerous

**Deployment Commands:**
- Test in staging first, capture actual output
- Use IaC tools (Terraform, CloudFormation) to ensure repeatability
- Document environment variables and their values
- Include verification steps after each major step

**Runbooks:**
- Start with actual alert rules (extract symptoms from Datadog/CloudWatch configuration)
- Test resolution steps in staging before publication
- Include estimated time to resolve (5 min, 30 min, etc.)
- Escalation threshold: if unresolved after X minutes, page on-call engineer

**Configuration Management:**
- Version all configuration (git-tracked or SSM Parameter Store)
- Document "as-deployed" values (not templates) quarterly
- Alert if config drifts from version control

**Disaster Recovery:**
- Test failover quarterly (documented, scheduled tests)
- Document RTO (Recovery Time Objective) and RPO (Recovery Point Objective) per service
- Keep runbook for data recovery scenarios

## Pre-Publication Checklist
- [ ] All commands tested in actual staging environment (not pseudocode)
- [ ] URLs, ports, hostnames verified against actual infrastructure
- [ ] Configuration examples match deployed version (not templates)
- [ ] Architecture diagram matches current deployment (CloudFormation/Terraform output)
- [ ] Deployment tested end-to-end with verification steps
- [ ] Rollback procedure tested and executable
- [ ] Runbook symptoms based on actual alert rules
- [ ] Resolution steps tested (not best-guesses)
- [ ] Escalation path documented (who to page, when)
- [ ] Single points of failure identified and marked [RISK]
- [ ] Database/breaking changes documented with migration steps
- [ ] Deployment windows specified (peak vs. off-peak times)
- [ ] Quarterly verification scheduled (document in team calendar)

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this channel's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load channel → Create content → Channel checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

