# Maturity Assessment

## Purpose
Maturity assessment evaluates organisational capability or process maturity against a defined model (CMMI, digital maturity, data maturity, etc.). It answers "What is our current capability level? Where should we be? How mature are we relative to peers?" Use this when a brief asks to "assess capability," "establish baseline," "define improvement roadmap," or "measure progress against standard."

## When to Use
- Digital/technology transformation baseline assessment
- Data governance/analytics maturity evaluation
- Process capability assessment
- IT operations/service management maturity
- Change management capability assessment
- Organisational change readiness
- Capability benchmarking (where do we rank vs. peers?)
- Roadmap establishment for multi-year programs

---

## GGP Verification Requirements

**This is where maturity assessment hallucinates most:**

### Primary Fabrication Risks

1. **Fabricated Maturity Scores Without Evidence** — AI assigns levels without assessment
   - RULE: Every maturity score must be [CONFIRMED] based on actual assessment (interviews, document review, evidence) or [INFERENCE] explicitly flagged as inference
   - RULE: Never score "Level 3" without stating what evidence supports that level
   - RULE: If assessment incomplete, mark [GAP] and note what's missing

2. **Wrong or Custom Maturity Model** — AI uses generic 1-5 scale when industry standard exists
   - RULE: If standard exists (CMMI for software, CMM for IT, DMM for data), use it
   - RULE: If using custom model, define each level clearly with examples
   - RULE: Disclose if you're creating custom model; don't pretend it's a standard

3. **Self-Assessment Confusion** — AI conflates aspirational/theoretical maturity with actual
   - RULE: Actual maturity = what we do every day (evidenced)
   - RULE: Aspired maturity = what we hope to be (not current state)
   - RULE: Mark self-assessed scores as [INFERENCE]; mark independently verified as [CONFIRMED]

4. **Missing Evidence or Criteria** — AI assigns maturity without showing work
   - RULE: For each level, define clear criteria (what does "Level 2" actually look like?)
   - RULE: For each score, cite evidence (interview notes, document review, observations)
   - RULE: If criteria fuzzy, score is unreliable

5. **Inflated Maturity from Organisational Bias** — Organisation rates itself higher than reality
   - RULE: Independent assessor (external or impartial internal) more reliable than self-assessment
   - RULE: If self-assessed, discount by 1 level (people are optimistic about their own capability)
   - RULE: Flag gap between self-assessment and independent assessment

6. **Ignoring Capability Gaps Within Organisation** — AI gives single score when pockets of maturity vary
   - RULE: Maturity may vary by team/department; note this variation
   - RULE: Assess at appropriate granularity (org-wide vs. business unit vs. team)
   - RULE: Flag if 1 team is Level 4 and another is Level 1; don't average

7. **Maturity Model Mismatch** — AI applies wrong maturity model for the context
   - RULE: Choose model based on assessment goal (CMMI for software process, DMM for data, etc.)
   - RULE: Don't apply software maturity model to data governance; they're different
   - RULE: Disclose which model was selected and why

### Source Tier Rules for Maturity Assessment
| Element | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Current maturity score | ✓ Independent assessment | ✓ Structured interviews (10+) | [INFERENCE] Self-assessment (documented) | ✗ |
| Evidence for score | ✓ Direct observation + docs | ✓ Interview notes + artifacts | [INFERENCE] Self-reported | ✗ |
| Maturity model | ✓ Industry standard (CMMI) | ✓ Analyst model (Gartner DMM) | ✓ Published framework | ✗ Custom without definition |
| Target maturity | ✓ Strategic alignment (board doc) | ✓ Peer benchmarking (case study) | [INFERENCE] Internal assessment | ✗ |
| Gap assessment | ✓ Detailed remediation plan | ✓ Estimated roadmap | [INFERENCE] High-level gap | ✗ |

---

## Template

### Maturity Assessment Report

```
# MATURITY ASSESSMENT: [Capability Area]

## Assessment Overview

**What We're Assessing:** [Digital maturity? Data maturity? Process capability?]
**Maturity Model Used:** [Name: CMMI, Digital Maturity Model, Custom DMM, etc.]
**Assessment Scope:** [Entire organisation? Business unit? Specific capability?]
**Assessment Method:** [Interviews, document review, observation, system audit, etc.]
**Assessment Date:** [When conducted?]
**Independent vs. Self-Assessed:** [Conducted by external/internal assessor OR self-assessed]

---

## Maturity Model Definition

### Maturity Levels (1-5 Scale)

| Level | Name | Definition | Key Characteristics | Example |
|---|---|---|---|---|
| **1** | Initial | Ad hoc, inconsistent, undocumented | Depends on individuals; not repeatable; high risk | Capability exists informally; no standard process |
| **2** | Repeatable | Basic process documented; some consistency | Documented process; basic training; inconsistent execution | Process exists; followed most of the time; gaps in edge cases |
| **3** | Defined | Documented standard; consistent execution | Process is standard across organisation; training materials; periodic audit | Process is standardised; training materials exist; audited; <5% non-compliance |
| **4** | Managed | Measured, controlled; data-driven improvement | KPIs tracked; continuous improvement cycle; process metrics reviewed | Process measured monthly; improvement backlog tracked; 95%+ compliance |
| **5** | Optimising | Continuous improvement embedded; innovation | Lessons learned captured; process constantly refined; innovation cycle | Process reviewed quarterly for improvement opportunities; new approaches piloted |

**Model Source:** [CMMI (software), Custom adapted from Gartner DMM, etc.]

---

## Capability Dimensions & Scoring

### Dimension 1: [Capability Name]

**What We're Assessing:** [Specific capability, e.g., "Data governance processes"]

**Current Maturity Score: [INFERENCE] Level 2 (Repeatable)**

**Evidence Supporting This Score:**

[CONFIRMED] — Document Review:
- [Process documentation exists, reviewed; covers [X%] of activities]
- [Data governance policy dated [date]; last updated [date]]
- [Process flows exist for [processes]; missing for [processes]]

[CONFIRMED] — Interviews (Conducted [date]):
- Participants: [5 data stewards, 2 data owners, 1 compliance officer]
- [4/5] participants confirmed process exists; [1] noted workarounds
- [3/5] follow documented process; [2] use informal approaches

[INFERENCE] — Observations:
- Spot check of [activity] confirmed [X] of [Y] instances followed process
- Assumption: This sample is representative

**Gaps from Level 3:**
- [GAP] Training materials exist but not comprehensive (covers main path, not edge cases)
- [GAP] Audit of process compliance is ad-hoc, not systematic
- [GAP] No KPI dashboard for process metrics
- [GAP] Lessons learned not formally captured

**Confidence in Score: [INFERENCE] Medium**
- Based on interviews (5 participants may not represent all 50 users)
- Document review was sample-based (not 100% comprehensive)
- Risk: If full audit conducted, might find lower maturity

**Assessor Notes:**
- [Observation 1]
- [Observation 2]
- [Key blocker to reaching Level 3: no formal audit mechanism]

---

### Dimension 2: [Capability Name]

**Current Maturity Score: [GAP] Level 1 (Initial)**

**Evidence:**
- [CONFIRMED] Process does not exist (confirmed by [role])
- [INFERENCE] Capability exists informally in [department]; not standardised
- [GAP] No documented process; training only by person-to-person knowledge transfer

**Gaps to Level 2:**
- [Complete process documentation needed]
- [Role definitions needed]
- [Training materials needed]

**Effort to Reach Level 2: [INFERENCE] 3-4 months (100 hours)**

---

### Dimension 3: [Capability Name]

**Current Maturity Score: [INFERENCE] Level 2-3 (Transitioning)**

**Evidence:** [Documented but inconsistently applied; some teams at Level 3, others at Level 1]

**Variation Across Organisation:**
- [Team A]: Level 3 (fully standardised and audited)
- [Team B]: Level 2 (documented but inconsistent)
- [Team C]: Level 1 (no formal process)
- **Overall: [INFERENCE] Level 2** (weighted average or lowest level?)

**Recommendation:** When variation exists, present as portfolio; note that org-wide maturity is the lowest level.

---

## Overall Maturity Assessment

### Maturity Heat Map (Multi-Dimension)

| Dimension | Level | Trend | Target | Gap | Priority |
|---|---|---|---|---|---|
| [Capability 1] | 2 | Stable | 3 | 1 level | P1 |
| [Capability 2] | 1 | Declining | 3 | 2 levels | P1 (Critical) |
| [Capability 3] | 3 | Improving | 4 | 1 level | P2 |
| [Capability 4] | 2 | Stable | 3 | 1 level | P3 |

**Overall Organisation Maturity: [INFERENCE] Level 1.75 (between Initial and Repeatable)**
- Calculation method: [Weighted average by importance / Lowest score / Median]
- Interpretation: [Organisation is predominantly Level 2, with critical gap in [Capability 2]]

---

## Current State Assessment Summary

**Overall Maturity:** [INFERENCE] **Level 2 (Repeatable)**

**What This Means:**
- Basic processes exist and are documented
- Execution is inconsistent (depends on team and individual capability)
- No systematic measurement or continuous improvement
- High risk of regression if key people depart
- Difficult to scale to new teams

**Strengths (Level 2 Achievements):**
- [CONFIRMED] Processes are documented (we know what we should do)
- [CONFIRMED] Core team follows processes consistently
- [CONFIRMED] Basic training exists

**Vulnerabilities (Gaps to Level 3):**
- [GAP] Process compliance is not audited systematically
- [GAP] No KPI tracking (we don't measure how well we're doing)
- [GAP] Lessons learned not captured (we don't improve systematically)
- [GAP] Process depends on key people (risk if they leave)
- [INFERENCE] Training is informal (new staff take longer to become productive)

**Risk Assessment:**
- [RISK] If key person [name] departs, capability could drop to Level 1
- [RISK] As volume increases, process inconsistency becomes bigger problem
- [RISK] Audit risk: If external auditor assesses, could find non-compliance

---

## Target Maturity & Strategic Rationale

**Target Maturity Level: [INFERENCE] Level 3 (Defined)**

**Why Level 3?**
- [CONFIRMED] Aligns with strategic goal: "Scale and standardise" capability
- [INFERENCE] Resource realistic: Can achieve Level 3 in 18 months with available budget
- Level 4 would require $[X] investment and 24+ months (not justified for current scale)

**Target Definition in Our Context:**
- All processes documented, standardised, and updated annually
- Systematic compliance audit (quarterly)
- Training program (formal, with certification)
- Process metrics tracked (KPI dashboard)
- <2% non-compliance rate
- New staff productive within 30 days (vs. current 60 days)

**Timeline to Level 3: [INFERENCE] 18 months**

**Why 18 months?**
- Documentation (2-3 months)
- Audit mechanism implementation (1-2 months)
- Training program build & delivery (2-3 months)
- Stabilization & continuous improvement cycle (6-9 months)

---

## Gap Analysis & Remediation Roadmap

### Gap Identification

| Current State (Level 2) | Target State (Level 3) | Gap | Remediation | Effort | Timeline |
|---|---|---|---|---|---|
| Process documentation incomplete | 100% documented | [GAP] 30% of processes missing detailed docs | Complete documentation for [X] processes | [INFERENCE] 200 hours | 8 weeks |
| Compliance audit ad-hoc | Systematic quarterly audit | [GAP] No audit mechanism | Create audit checklist; implement monthly/quarterly | [INFERENCE] 120 hours | 6 weeks |
| Training informal | Formal training + certification | [GAP] Training is person-to-person | Build training curriculum + certification | [INFERENCE] 160 hours | 8-10 weeks |
| No process metrics | KPI dashboard with trends | [GAP] Can't measure process health | Define KPIs; build dashboard; integrate with systems | [INFERENCE] 80 hours | 4 weeks |
| Key person dependency | Documented procedures reduce dependency | [INFERENCE] Process still depends on [person]; need backup | Cross-train [#] people; document [person]'s knowledge | [INFERENCE] 100 hours | 12 weeks |

### Remediation Roadmap

#### Phase 1: Documentation & Audit Foundation (Months 1-3)

| Activity | Owner | Timeline | Effort | Success Criteria |
|---|---|---|---|---|
| Map all processes | Process lead | Weeks 1-2 | 40h | Process map approved |
| Complete documentation | Process lead + team | Weeks 3-8 | 200h | [X]% documentation complete; quality review passed |
| Create audit checklist | Compliance + process | Weeks 4-6 | 80h | Checklist aligned with [standard/regulation] |
| Pilot audit (1 team) | Audit + process | Week 9 | 20h | Audit findings documented; process gaps identified |

**Deliverable:** Documented processes + audit checklist ready for full implementation

#### Phase 2: Systematic Audit & Training (Months 4-9)

| Activity | Timeline | Effort | Owner |
|---|---|---|---|
| Implement quarterly audit schedule | Month 4 | 10h setup | Audit lead |
| Build training curriculum | Months 4-6 | 160h | Training + process |
| Deliver training to all staff | Months 7-8 | 40h (instructional) + [people time] | Training lead |
| Post-training audit (measure compliance) | Month 9 | 20h | Audit |

**Deliverable:** All staff trained; process compliance audited

#### Phase 3: Metrics & Continuous Improvement (Months 10-18)

| Activity | Timeline | Effort |
|---|---|---|
| Define KPIs | Month 10 | 20h |
| Build KPI dashboard | Months 11-12 | 60h |
| Review metrics monthly; identify improvements | Ongoing starting Month 13 | Ongoing |
| Stabilize at Level 3; begin improvements toward Level 4 | Months 13-18 | Ongoing |

**Deliverable:** Level 3 maturity achieved and sustained

---

## Implementation Risks & Dependencies

### Critical Dependencies

| Dependency | Status | Impact if Missing | Mitigation |
|---|---|---|---|
| Executive sponsorship for training time | [CONFIRMED] Confirmed | If not prioritised, adoption slow | Secure CFO sign-off upfront |
| Process owner availability (40-50% FTE) | [INFERENCE] Assumed | If not available, timeline slips | Confirm with process owner's manager |
| Audit team capacity | [INFERENCE] Assumed | If audit not resourced, compliance not measured | Hire audit coordinator or reallocate |
| Technology/system capability for KPI tracking | [INFERENCE] TBD | If system can't capture metrics, KPI dashboard fails | Assess system capability early |

### Implementation Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Process documentation reveals gaps in actual practice | Medium | Scope creeps (more work than planned) | Allocate 20% time buffer |
| Staff resistance to standardisation (prefer existing ways) | Medium-High | Adoption slow; full maturity delayed | Change management + clear incentives |
| Audit findings too extensive (more non-compliance than expected) | Low-Medium | Remediation effort higher; timeline extends | Phase 1 audit will reveal scope |
| Key person turnover during ramp-up | Low | Timeline impact + knowledge loss | Cross-train 2 people per role; document early |

---

## Peer Benchmarking (Optional)

### Competitive Maturity Comparison

If applicable, compare your maturity to peer organisations:

| Organisation | Digital Maturity | Our Assessment | Gap | Source |
|---|---|---|---|---|
| Our Company | Level 2 | [INFERENCE] Self-assessed + interviews | | |
| Peer A (competitor) | [INFERENCE] Level 3 | Estimated (analyst report) | -1 level | Gartner case study |
| Peer B (industry leader) | [INFERENCE] Level 4 | Estimated (analyst report) | -2 levels | Published report |
| Industry Average | [INFERENCE] Level 2.5 | Based on analyst benchmark | -0.5 level | Gartner DMM study 2025 |

**Interpretation:**
- We are at industry average level (Level 2)
- Peers with competitive advantage are at Level 3+
- To match peers, must reach Level 3 within [X] timeframe

---

## Measurement & Monitoring

### Success Metrics (Post-Implementation)

| Metric | Current | Target | Frequency | Owner |
|---|---|---|---|---|
| Documentation completeness | 70% | 100% | Quarterly | Process lead |
| Process compliance rate (audit) | 65% | >95% | Quarterly | Audit |
| Training completion rate | 50% | 100% | Quarterly | HR |
| New staff time-to-productivity | 60 days | 30 days | Quarterly | Manager |
| Process improvement ideas per team | 1/quarter | 1/month | Monthly | Process lead |

### Maturity Reassessment Schedule

**Initial Assessment:** [Completed this month]
**Reassessment 1:** [6 months — check progress on Phase 1/2]
**Reassessment 2:** [12 months — confirm Level 3 achievement]
**Annual Reassessment:** [Going forward, annually]

### Decision Gates

| Gate | Timeline | Criteria to Proceed |
|---|---|---|
| Gate 1: Continue to Phase 2 | End Month 3 | Documentation >90% complete; audit checklist approved |
| Gate 2: Full implementation | End Month 6 | Pilot audit clean; training curriculum complete |
| Gate 3: Level 3 achievement | End Month 18 | Compliance >95%; all staff trained; KPI dashboard live |

---

## Governance & Sponsorship

**Executive Sponsor:** [Role]
**Process Owner:** [Name, role]
**Steering Committee:** [Frequency, members]

**Approval Required From:** [CFO / [Committee]]

---

```

### Maturity Comparison Across Teams (Portfolio View)

```
# MATURITY ASSESSMENT: Portfolio View (Multi-Team)

## Team-by-Team Maturity

| Team | Dimension 1 | Dimension 2 | Dimension 3 | Overall | Trend | Risk |
|---|---|---|---|---|---|---|
| Team A (Finance) | 3 | 2 | 3 | 2.7 | Stable | Lowest is 2 |
| Team B (Operations) | 2 | 1 | 2 | 1.7 | Declining | 1 level critical gap |
| Team C (Sales Ops) | 1 | 1 | 1 | 1.0 | Declining | Very immature |

**Organisation Overall (Lowest):** Level 1 (since Team C is Level 1)

**Organisation Overall (Weighted by Size):** [INFERENCE] Level 2 (Team A is larger; brings up average)

**Recommendation:** Organisation maturity is only as strong as weakest team. Prioritise Team C for capability building.

---

```

---

## Methodology

### Step 1: Select Maturity Model
1. **Choose appropriate model:** CMMI (software)? Gartner DMM (digital)? ITIL (IT service)? Custom?
2. **Define each level clearly:** Don't assume everyone understands Level 3; provide examples
3. **Align with assessment goal:** If assessing "data maturity," use data-specific model, not generic

### Step 2: Define Dimensions to Assess
1. **Which capabilities matter most?** (data governance, process efficiency, technology, people, etc.)
2. **Granularity:** Assess at org-wide level or team-by-team?
3. **Scope:** Is this assessment of entire org or specific function?

### Step 3: Plan Assessment Approach
1. **Method:** Interview-based? Document review? Observation? System audit?
2. **Sample:** How many people to interview? Which documents to review?
3. **Independence:** Self-assessment vs. independent assessor (external = more credible, costs more)
4. **Timeline:** How long will assessment take?

### Step 4: Conduct Assessment (Real Data, Not Assumption)
1. **Gather evidence:** Interview notes, document samples, observation logs
2. **Score dimension:** Use maturity model criteria consistently
3. **Disclose limitations:** What didn't you assess? Why?
4. **Mark confidence:** High (comprehensive), Medium (some gaps), Low (limited data)

**Critical:** Never assume maturity. If you can't assess, mark [GAP].

### Step 5: Compare Current vs. Target
1. **Define target:** Based on strategic need, not just "higher = better"
2. **Justify target:** Why Level 3 and not Level 4? (cost, timeline, strategic fit)
3. **Calculate gap:** Current vs. target = gap size

### Step 6: Identify Remediation Path
1. **Sequential:** Some levels build on others (can't do Level 3 without Level 2)
2. **Estimate effort:** Each gap closure takes time and resources
3. **Prioritise:** Which gaps are highest impact?
4. **Identify dependencies:** What must be true to close gaps?

### Step 7: Plan for Continuous Monitoring
1. **Success metrics:** How will you know you've reached Level 3?
2. **Reassessment schedule:** When will you re-assess?
3. **Gate reviews:** When will you decide to pause/accelerate/pivot?

---

## Common Hallucination Traps

### Trap 1: Fabricated Maturity Score Without Assessment
**[FABRICATION]:** "Our data maturity is Level 2"
✓ **GROUNDED:** "[CONFIRMED] Conducted interviews with 8 data stakeholders (Nov 2025) and reviewed [X] documents. Evidence: Data governance process exists but is applied inconsistently by [teams]. Audit mechanism does not exist (ad-hoc compliance checks). Score: Level 2 (Repeatable). Confidence: Medium (interviews may be optimistic; independent audit would validate)."

### Trap 2: Wrong Maturity Model Applied
**[FABRICATION]:** Using generic 1-5 maturity scale (made up on the spot)
✓ **GROUNDED:** "Using Gartner Digital Maturity Model (published 2024; adapted for our context). Model defines 5 levels: Initial → Repeatable → Defined → Managed → Optimising. Each level has clear criteria [provided above]."

### Trap 3: Self-Assessment Overconfidence
**[FABRICATION]:** "We self-assessed as Level 3 (Defined)"
✓ **GROUNDED:** "[INFERENCE] Self-assessment by process team: Level 3. [INFERENCE] Confidence: Low (self-assessments are typically 1 level optimistic). Recommend independent assessment to validate."

### Trap 4: Single Score Ignoring Team Variation
**[FABRICATION]:** "Organisation maturity is Level 2.5" (averaging teams at 1, 2, 3)
✓ **GROUNDED:** "[INFERENCE] Maturity varies by team: Team A is Level 3, Team B is Level 2, Team C is Level 1. Organisation-wide maturity is Level 1 (lowest team sets the bar). Portfolio assessment shows mixed capability."

### Trap 5: Missing Evidence for Scores
**[FABRICATION]:** "Process maturity: Level 2" (no evidence cited)
✓ **GROUNDED:** "Process maturity: Level 2. Evidence: [CONFIRMED] Process document reviewed; covers [X%] of activities. [CONFIRMED] Interviews with [5] people: [3] follow process; [2] use workarounds. Current state: Repeatable but inconsistent. Gaps to Level 3: Audit mechanism needed."

### Trap 6: Inflated Target Without Justification
**[FABRICATION]:** "Target is Level 5 (Optimising)"
✓ **GROUNDED:** "Target is Level 3 (Defined) — chosen because: [CONFIRMED] Aligns with 'scale and standardise' strategy. [INFERENCE] Estimated 18 months, $[X] investment to achieve. Level 4 would require 24+ months and higher investment (not justified for current scale)."

### Trap 7: Ignoring Blockers to Maturity Progression
**[FABRICATION]:** "Roadmap to Level 3: 6 months"
✓ **GROUNDED:** "Roadmap to Level 3: 18 months. Critical blockers: [GAP] No audit mechanism exists (must build from scratch). [GAP] Training is informal (must develop curriculum). [INFERENCE] Key person dependency; need cross-training. Effort phased: Months 1-3 (docs + audit foundation), Months 4-9 (training + systematic audits), Months 10-18 (metrics + continuous improvement)."

---

## Examples

### Good Example: Maturity Assessment (Properly Grounded)

```
# MATURITY ASSESSMENT: Data Governance

## Assessment Overview

**Maturity Model:** Gartner Digital Maturity Model (Data/Analytics domain)
**Assessment Method:** 8 interviews (data stewards, data owners, compliance) + document review
**Assessment Date:** November 2025
**Independence:** Internally conducted by [assessor name]; recommend external validation

---

## Maturity Model Definition (Gartner DMM)

| Level | Name | Definition |
|---|---|---|
| 1 | Initial | Ad hoc data management; no governance process |
| 2 | Repeatable | Basic data governance process; inconsistent application |
| 3 | Defined | Documented data governance; standardised and audited |
| 4 | Managed | Data governance is measured and optimised |
| 5 | Optimising | Data governance is continuously improved |

---

## Current State Assessment

### Dimension 1: Data Governance Process

**Current Score: [INFERENCE] Level 2 (Repeatable)**

**Evidence:**
- [CONFIRMED] Data governance policy exists (dated 2024; last updated [date])
- [CONFIRMED] Data steward roles defined and assigned (5 stewards identified)
- [INFERENCE] [4/5] stewards follow process; [1] notes workarounds around [issue]
- [GAP] Process documentation incomplete (covers [X%] of data lifecycle)
- [GAP] No systematic compliance audit (compliance checks are ad-hoc)

**Gaps to Level 3:**
- Comprehensive process documentation (all steps, edge cases, exceptions)
- Training program (formal, not person-to-person)
- Systematic audit mechanism (quarterly check)

**Confidence: Medium** (interviews may reflect best practices, not actual average behaviour)

### Dimension 2: Data Quality & Management

**Current Score: [INFERENCE] Level 1-2 (Transitioning)**

**Evidence:**
- [CONFIRMED] Data quality issues identified by [team] (missing values, inconsistencies)
- [INFERENCE] Informal data quality checks; not standardised
- [GAP] No data quality SLAs or targets
- [GAP] No root cause analysis or improvement cycle

**Confidence: Low** (data quality not systematically measured; issues may be larger than known)

### Dimension 3: Analytics Capability

**Current Score: [INFERENCE] Level 2 (Repeatable)**

**Evidence:**
- [CONFIRMED] Dashboards exist; developed by [team]
- [INFERENCE] [3 critical dashboards] are maintained regularly; [2] are stale
- [GAP] Analytics process not documented (dashboards depend on key analyst)
- [INFERENCE] No analytics governance (anyone can request new analytics)

**Confidence: Medium** (interviews with 2 analysts; may not represent full analytics ecosystem)

---

## Overall Maturity Assessment

**Organisation Data Maturity: [INFERENCE] Level 1.5 (Initial-Repeatable)**

- **Strongest dimension:** Governance process (Level 2) — policy exists but execution inconsistent
- **Weakest dimension:** Data quality (Level 1) — not systematically managed
- **At-risk:** Analytics (Level 2 but fragile) — depends on key people

**Key Finding:** Organisation is at the "we have processes but they're not consistently applied or measured" stage. At risk if key people depart.

---

## Target Maturity & Roadmap

**Target: Level 3 (Defined)**

**Why Level 3?**
- [CONFIRMED] Aligns with strategic goal: "Data-driven decision making requires standardised, reliable data"
- [INFERENCE] Achievable in 18-24 months with dedicated investment
- Level 4 would require organisational change (not in scope for this phase)

**Target Definition:**
- Data governance process documented, trained, audited quarterly
- Data quality standards defined and measured (SLAs in place)
- Analytics governance framework (request → prioritise → build → maintain)
- Data catalog/metadata
- <5% compliance violations

---

## Remediation Roadmap

### Phase 1: Foundation (Months 1-3)

| Activity | Effort | Timeline | Owner |
|---|---|---|---|
| Document data governance process (all steps) | 100h | Weeks 1-4 | Process lead + stewards |
| Define data quality standards & SLAs | 60h | Weeks 3-6 | Quality + governance |
| Create data steward training curriculum | 80h | Weeks 4-8 | Training + governance |
| Implement audit checklist | 40h | Weeks 6-8 | Compliance |

### Phase 2: Execution (Months 4-12)

| Activity | Timeline | Effort |
|---|---|---|
| Train all data stewards (3-day program) | Month 4 | [people time] |
| Implement quarterly compliance audits | Starting Month 5 | 20h/quarter |
| Deploy data quality metrics dashboard | Months 8-10 | 120h (dev) |
| Audit analytics process; document (governance framework) | Months 6-8 | 80h |

### Phase 3: Stabilization (Months 13-18)

| Activity | Timeline |
|---|---|
| Continuous improvement cycle (monthly process reviews) | Ongoing |
| Training refresher & certification | Quarter 2 of Year 2 |
| Maturity reassessment | Month 18 |

---

## Risks & Mitigation

| Risk | Probability | Mitigation |
|---|---|---|
| Data steward time unavailable (competing priorities) | Medium | Secure executive commitment upfront; link to performance reviews |
| Data quality worse than assessment revealed | Medium | Phase 1 audit will provide full picture; adjust roadmap if needed |
| Key analyst turnover | Low | Cross-train 2 people; document analytics process early |

---

## Success Metrics

| Metric | Current | Target | Frequency |
|---|---|---|---|
| Documentation completeness | 40% | 100% | Quarterly |
| Audit compliance rate | 60% | >95% | Quarterly |
| Data steward training completion | 0% | 100% | One-time, Month 4 |
| Data quality SLA achievement | 0% (not measured) | >90% | Monthly (starting Month 10) |

---

## Reassessment Plan

- **Checkpoint 1 (Month 6):** Are Phase 1 deliverables complete? Can we proceed to Phase 2?
- **Checkpoint 2 (Month 12):** Process audits showing improved compliance? Training effective?
- **Full Reassessment (Month 18):** Maturity assessment completed; are we at Level 3?

---

## Recommendation

**APPROVE this maturity assessment and improvement roadmap.**

- Current state assessment is sound (Level 1.5 is realistic based on evidence)
- Target Level 3 is achievable and strategically aligned
- Roadmap is detailed and sequenced logically
- Risks identified and mitigations in place

**Next Steps:**
1. Secure executive sponsor (CFO)
2. Allocate resources (process lead FTE, training budget)
3. Kick off Phase 1 in January 2026

```

### Bad Example: Maturity Assessment (Common Fabrications)

```
# MATURITY ASSESSMENT: Data Governance FAIL PROBLEMS

## Current Maturity

"Data governance maturity: Level 3"
- FAIL NO ASSESSMENT DESCRIBED
- FAIL No evidence cited (interviews? documents?)
- FAIL How many people involved? Which processes assessed?

## Assessment Details

"Process is documented and consistently applied"
- FAIL No proof of documentation (% completeness not stated)
- FAIL "Consistently" based on what? No metrics shown

"Team is well-trained"
- FAIL Training exists? (No evidence provided)
- FAIL How many trained? 100%? 50%?

## Gaps

"Minor gaps exist" ← TOO VAGUE
- What gaps exactly? Where? How long to close?

## Roadmap

"Reach Level 4 in 12 months"
- FAIL No plan shown
- FAIL What activities? Resources? Dependencies?
- FAIL Level 3 → Level 4 is big step; 12 months unrealistic

## Problems

- No actual assessment conducted (just opinion)
- No evidence for maturity score
- No comparison to model definitions
- No realistic roadmap
- No risk assessment
- Confidence not disclosed

```

---

## Quality Checklist

Before submitting maturity assessment:

**Assessment Methodology**
- [ ] Maturity model named (CMMI, Gartner DMM, etc.)
- [ ] If custom model, each level clearly defined with examples
- [ ] Assessment method documented (interviews, document review, observation)
- [ ] Sample size adequate (interviews >5 people; documents >10% reviewed)
- [ ] Assessment date noted and current
- [ ] Independence disclosed (self vs. independent assessor)

**Current State Scoring**
- [ ] Every dimension has evidence cited (not assumed)
- [ ] Evidence is specific (interview notes, document samples, observation)
- [ ] Score justified with reference to maturity model criteria
- [ ] Confidence level stated for each score
- [ ] Gap between teams identified if maturity varies
- [ ] Organisation-wide score reflects lowest level (if any team is Level 1, org is Level 1)

**Evidence Quality**
- [ ] Interview notes document which questions asked and responses
- [ ] Document review shows what % of documents reviewed
- [ ] Observation provides specific examples (not just impressions)
- [ ] Self-assessment flagged as such (confidence reduced by 1 level)
- [ ] [GAP] items identified (what wasn't assessed)

**Target Maturity Definition**
- [ ] Target level is explicit (not vague like "improve significantly")
- [ ] Target justified (strategic alignment, realistic timeline, resource availability)
- [ ] Target definition specific (what does Level 3 actually look like in our context?)
- [ ] Timeline realistic (phased, not "improve to Level 4 in 6 months")
- [ ] Resource requirements stated (people, budget, dependencies)

**Remediation Roadmap**
- [ ] Sequencing logic explained (which gaps block others?)
- [ ] Each phase has clear deliverables
- [ ] Effort estimated for each activity (hours, FTE, or days)
- [ ] Timeline realistic and phased (not everything in parallel)
- [ ] Dependencies identified (what must be true for success?)
- [ ] Risks identified and mitigated

**Gap Analysis**
- [ ] Current state gaps identified dimension by dimension
- [ ] Gap severity assessed (critical, important, nice-to-have)
- [ ] Effort to close each gap estimated
- [ ] Timeline to reach target calculated
- [ ] Key blockers identified (what makes it hard?)

**Success Metrics**
- [ ] Input metrics (how do we know we did the work?)
- [ ] Output metrics (how do we know the gap closed?)
- [ ] Outcome metrics (how do we know it matters?)
- [ ] Measurement frequency specified
- [ ] Reassessment schedule planned (when will we validate maturity improvement?)

**GGP Compliance**
- [ ] Every claim has marker ([CONFIRMED]/[INFERENCE]/[GAP]/[UNVERIFIED])
- [ ] No fabricated scores (all evidenced or flagged [INFERENCE])
- [ ] No assumed current state (all assessed or marked [GAP])
- [ ] Confidence tiers disclosed (high/medium/low and why)
- [ ] Maturity model named and criteria clear
- [ ] Assumptions disclosed (adoption rate, timeline, resource availability)
- [ ] Self-assessed scores flagged and confidence reduced


---

## GGP Mandatory Validation — Return to SKILL.md

After completing this template's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load template → Create analysis → Template checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

