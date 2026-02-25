# Gap Analysis

## Purpose
Gap analysis compares current state with desired state to identify capability, process, compliance, or technology gaps. It answers "Where are we now? Where should we be? What's missing?" Use this when a brief asks to "assess readiness," "identify capability gaps," "measure against standards," or "plan improvements."

## When to Use
- Baseline establishment (where are we today?)
- Capability maturity assessment
- Compliance readiness evaluation
- Digital transformation gap identification
- Technology modernization planning
- Process improvement roadmapping
- Skills/resource gap identification
- Change management preparation (showing what must shift)

---

## GGP Verification Requirements

**This is where gap analysis hallucinates most:**

### Primary Fabrication Risks

1. **Assumed Current State Without Assessment** — AI invents what "current state" is
   - RULE: Current state must come from [CONFIRMED] actual assessment (interviews, audits, data review)
   - RULE: Never assume current state; if not assessed, mark [GAP] and plan assessment
   - RULE: If using past assessment (e.g., "2023 audit"), disclose date and assess for change

2. **Fabricated Maturity Scores** — AI assigns levels without evidence
   - RULE: Every maturity score must be supported by [CONFIRMED] specific evidence or [INFERENCE] described as inference
   - RULE: Never score "3 out of 5" without stating what evidence you have
   - Common fabrication: "We're at Level 2 maturity" (based on what?)

3. **Wrong Maturity Model Applied** — AI uses generic model when specific standard exists
   - RULE: Identify which maturity model you're using (CMMI, Digital Maturity Model, ITIL, etc.)
   - RULE: If standard exists (SOX, PCI-DSS, ISO), use it; don't invent a generic model
   - RULE: Disclose if you're applying non-standard model and why

4. **Desired State Based on Opinion, Not Standard** — AI assumes "good" without referencing standard
   - RULE: Desired state must reference [CONFIRMED] industry standard, [CONFIRMED] best practice, or [INFERENCE] explicit stakeholder target
   - RULE: Never assume "Level 5 maturity" is desired unless that's the strategic choice
   - Common fabrication: "Everyone should be at Level 4" (says who?)

5. **Effort & Timeline Estimates for Remediation** — AI invents how long things take
   - RULE: All remediation effort estimates are [INFERENCE] (assumptions), not [CONFIRMED] facts
   - RULE: Flag dependency and sequencing clearly (some gaps block others)
   - RULE: Mark confidence in timeline estimates (high/medium/low based on complexity)

6. **Hidden/Underestimated Gaps** — AI misses the hard gaps (organisational, skills, cost)
   - RULE: Technical gaps are easier to identify than change management gaps
   - RULE: Always surface organisational/behavioural gaps, not just capability gaps
   - Common error: "Process gap: implement new system" (but who runs it? Do they have skills?)

### Source Tier Rules for Gap Analysis
| Element | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Current state | ✓ Internal assessment/audit | ✓ Recent audit report | [INFERENCE] Participant interview | ✗ |
| Desired state | ✓ Industry standard (SOX, ISO) | ✓ Best practice (analyst) | ✓ Strategic plan | ✗ |
| Maturity scoring | ✓ Assessor-led rubric | ✓ Independent assessment | [INFERENCE] Self-assessment | ✗ |
| Remediation effort | [INFERENCE] Project estimate | [INFERENCE] Industry benchmark | [INFERENCE] Rough estimate | ✗ |
| Compliance gaps | ✓ Audit findings | ✓ Regulatory guidance | ✓ Policy docs | ✗ |

---

## Template

### Gap Analysis Matrix (Single Dimension or Multi-Dimension)

```
# GAP ANALYSIS: [Dimension]

## Dimension Definition

**What We're Assessing:** [Specific capability, process, or compliance area]

**Scope:**
- Includes: [What's in scope]
- Excludes: [What's not included]
- Assessment method: [How did we gather current state data?]

**Current Date:** [When was assessment conducted?]

---

## Current State Assessment

### How We Know Current State (Evidence)

[CONFIRMED] — Data sources:
- [Internal audit conducted Dec 2025; participants: Finance lead, 2 process owners]
- [Document review: process flows, policies, control logs]
- [System access review: who has what permissions]

[INFERENCE] — Assumptions:
- [Sample size of 10 interviews represents broader organisation]
- [Informal processes observed = standard practice]

[GAP] — What we didn't assess:
- [Employee training documentation incomplete; estimated 20% of staff surveyed]

**Assessment Limitations:**
- [RISK] [Assessment based on Q4 2025 snapshot; processes may evolve]
- [INFERENCE] [Staff interviews may reflect perception, not reality]

---

## Current State Scoring

### Maturity Model: [Name Model]

**Definition:** [Which maturity model are we using? CMMI? Digital Maturity? Custom?]

**Maturity Levels:**
| Level | Name | Definition | Example |
|---|---|---|---|
| 1 | Initial | Ad hoc, inconsistent, undocumented | Process run informally; depends on individuals |
| 2 | Repeatable | Basic documented process; some consistency | Process documented; team follows steps most of the time |
| 3 | Defined | Documented standard; consistent execution | Process is standard; training materials exist; audited |
| 4 | Managed | Measured, controlled; data-driven improvement | KPIs tracked; continuous improvement cycle |
| 5 | Optimised | Continuous improvement; innovation embedded | Process constantly refined; lessons learned captured |

### Current State Scoring

| Dimension | Current Level | Evidence | Assessor Confidence | Date Assessed |
|---|---|---|---|---|
| **Process Documentation** | [INFERENCE] 2 (Repeatable) | 70% of process steps documented; gaps in edge cases | Medium | Dec 2025 |
| **Process Compliance** | [INFERENCE] 1-2 (Initial-Repeatable) | Compliance checked occasionally; no systematic audit | Low | Nov 2025 |
| **System Integration** | [INFERENCE] 2 (Repeatable) | Manual data entry between systems; 2-day lag | Medium | Dec 2025 |
| **Team Skills** | [INFERENCE] 2 (Repeatable) | Core team trained; new staff get informal onboarding | Medium-Low | Oct 2025 |

**Overall Current State:** [INFERENCE] **Level 2 (Repeatable)**
- Basic documented process exists
- Execution inconsistent, depends on individual expertise
- No systematic measurement or continuous improvement
- Risk: Prone to errors; hard to scale; vulnerable to key person dependency

**Confidence in Assessment:** [INFERENCE] Medium
- Based on interviews + document review
- Some functions not fully assessed (compliance check was sample-based)
- May underestimate actual gaps if employees gave optimistic views

---

## Desired State Definition

### Strategic Target

**Target Maturity Level:** [INFERENCE] **Level 3 (Defined)**

**Why Level 3, not Level 4 or 5?**
- [CONFIRMED] Aligns with [strategic plan objective: "standardise and scale"]
- [INFERENCE] Realistic given [resource constraints]
- Cost/benefit: Level 3 = 80/20 solution for our context

**Target Achievement Timeline:** [INFERENCE] 18-24 months

**Definition of Success:**
- All process steps documented in standard procedures
- Systematic compliance auditing (quarterly)
- Systems integrated with <1 day data lag
- All team members trained; <10% defect rate in execution
- Measurement dashboard exists (KPIs tracked monthly)

---

## Gap Analysis Matrix

| Dimension | Current Level | Target Level | Gap Severity | Priority | Remediation | Effort | Owner |
|---|---|---|---|---|---|---|---|
| **Process Documentation** | 2 | 3 | [INFERENCE] Medium (gap = 1 level) | P1 | Complete missing docs; create training materials | [INFERENCE] 200 hours | Process owner |
| **Process Compliance** | 1 | 3 | [GAP] High (gap = 2 levels) | P1 | Establish audit schedule; create control checklist | [INFERENCE] 150 hours + ongoing |  |
| **System Integration** | 2 | 3 | [INFERENCE] Medium | P2 | [Depends on IT roadmap; Phase 2] | [INFERENCE] 60 days dev time | IT lead |
| **Team Skills** | 2 | 3 | [INFERENCE] Medium | P1 | Formal training program; certification | [INFERENCE] 160 hours training |  |
| **Culture/Ownership** | [GAP] [Not assessed] | 3 | [GAP] Unknown | P3 | Change management; accountability framework | [INFERENCE] TBD | HR + Process |

---

## Gap Severity Scoring

**Rating Criteria (1-5 Scale):**

| Severity | Definition | Business Impact | Remediation Complexity | Example |
|---|---|---|---|---|
| [CONFIRMED] **1 — Minor** | Gap exists but no immediate risk | Low (workaround exists) | Low (simple to close) | Missing documentation for rare edge case |
| [INFERENCE] **2 — Moderate** | Gap affects efficiency; some risk | Medium (affects metrics/cost) | Medium (1-3 month fix) | 50% of process step missing; occasional defects |
| [UNVERIFIED] **3 — Significant** | Gap affects capability; compliance risk | High (regulatory/operational impact) | Medium-High (3-6 month fix) | Process not standardised; compliance audit findings |
| [GAP] **4 — Critical** | Major gap; significant risk/cost | Very High (regulatory, financial) | High (6-12 month fix) | System down; compliance violation; revenue impact |
| [RISK] **5 — Blocking** | Prevents operation/strategy; urgent | Blocking (can't proceed) | Very High (12+ month fix) | Legacy system EOL; no succession plan for key role |

### Our Gaps Scored

| Gap | Severity | Rationale |
|---|---|---|
| Process compliance not audited | [GAP] 4 — Critical | Internal controls gap; audit risk; SOX exposure if public |
| Documentation incomplete | [UNVERIFIED] 3 — Significant | Limits scaling; quality risk; onboarding slow |
| System integration manual | [INFERENCE] 2 — Moderate | Inefficiency; 2-day lag acceptable for current volume |
| Team skills informal | [UNVERIFIED] 3 — Significant | Quality risk; key person dependency; compliance risk |

---

## Gap Prioritisation Framework

### Impact vs. Effort Matrix

```
        High Impact
            △
            │ P1: Do First
            │ (Process compliance, team skills)
         ___|_______________
        │      │           │
    Med │      │  P2: Plan │ (System integration)
     Impact │  │           │
        │      │___________|
        │
        └─────┼────────────▶ Easy ────── Hard
             Low Effort      Remediation Effort
```

**Priority Sequence:**
1. **P1 — High Impact, Feasible Effort (Do First)**
   - Process compliance audit (severity 4, but 6-week fix)
   - Process documentation (severity 3, but 5-week fix)
   - Timeline: Months 1-3

2. **P2 — Medium Impact, Medium Effort (Plan + Sequence)**
   - System integration (severity 2, but 3-month dependency on IT roadmap)
   - Timeline: Months 4-6 (pending IT approval)

3. **P3 — Lower Priority / Longer Timeline**
   - Culture/accountability framework
   - Timeline: Months 9-12 (after process stabilization)

---

## Remediation Roadmap

### Wave 1: Compliance & Documentation (Months 1-3)

| Gap | Remediation Action | Resources | Timeline | Owner | Success Criteria | Risk |
|---|---|---|---|---|---|---|
| **Compliance** | 1. Create audit checklist based on [policy/standard] | Process owner (40h), finance (20h) | Weeks 1-2 | Finance SVP | Checklist [CONFIRMED] approved | Underestimating control points |
| | 2. Conduct baseline audit | Same team + 2 finance staff | Weeks 3-4 | Finance lead | Audit complete; gaps documented | Time availability |
| | 3. Establish quarterly audit schedule | Finance + compliance | Week 5 | Finance SVP | Calendar set; owners assigned | Adoption |
| **Documentation** | 1. Map all process steps | Process owner (80h) | Weeks 2-4 | Process owner | Flowcharts [CONFIRMED] complete | Discovering undocumented steps |
| | 2. Create procedures + training materials | Process owner (60h), trainer (40h) | Weeks 5-8 | Process owner | Materials complete; reviewed | Translation to multiple languages needed? |
| | 3. Train team | Trainer (40h), all staff (16h × N) | Week 9 | HR + process | 100% completion; < 5% defect rate | Low adoption |

### Wave 2: System & Skills (Months 4-6)

| Gap | Remediation | Timeline | Owner | Dependency | Risk |
|---|---|---|---|---|---|
| **System Integration** | Pilot integration on [subset] | [INFERENCE] 8 weeks | IT lead | IT roadmap approval (P3 Q1) | Scope creep |
| **Team Skills** | Formal certification program | 10 weeks | HR + ops | Documentation complete | Backfill coverage for training time |

### Wave 3: Culture (Months 9-12)

| Gap | Remediation | Timeline | Effort | Owner |
|---|---|---|---|---|
| **Accountability** | Define ownership; link to performance reviews | [INFERENCE] 6 weeks | Moderate | HR + operations |

---

## Risk & Dependency Analysis

### Blocking Dependencies
- [RISK] System integration depends on IT roadmap (currently scheduled Q1 2026)
- [RISK] If compliance audit finds regulatory violations, might require emergency escalation
- [INFERENCE] Team training requires backfill coverage; operations may resist

### Assumptions Underlying Roadmap
- [INFERENCE] Process owner has 40-50% capacity available (confirm with manager)
- [INFERENCE] No major process redesign needed (beyond documentation)
- [INFERENCE] Adoption rate >90% after training

### Risk Mitigation
| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Low adoption of new process | Medium | High | Executive sponsor + accountability in performance reviews |
| Team turnover during ramp-up | Medium | High | Create knowledge base; formal documentation |
| Compliance audit finds major violation | Low | Critical | External advisor review upfront ($ cost) |
| IT integration delayed | Medium | Medium | Start documentation remediation independently |

---

## Measurement & Verification

### How We'll Know We've Closed the Gap

| Dimension | Current KPI | Target | Measurement Frequency | Owner |
|---|---|---|---|---|
| **Compliance** | 0% audit findings | <1 finding per audit | Quarterly | Audit committee |
| **Documentation** | 60% of steps documented | 100% documented, up-to-date | Quarterly review | Process owner |
| **System integration** | 2-day lag | <4-hour lag | Daily monitoring | IT |
| **Skills** | Informal training | 100% certified; annual refresher | Annual assessment | HR |

### Success Metrics (Outcome-Level)
- [CONFIRMED] Process throughput increases 15% (efficiency gain from standard process)
- [CONFIRMED] Error rate drops from 5% to <2% (quality improvement)
- [CONFIRMED] Onboarding time reduces from 20 days to 10 days (capability gain)

---

## Governance

**Gap Analysis Approval:** [Owner] by [date]

**Remediation Roadmap Approval:** [Steering committee] by [date]

**Gated Review Points:**
- End of Wave 1 (Month 3): Compliance audit complete; documentation ready
- End of Wave 2 (Month 6): System integration pilot results; team certification rates
- Month 12: Full target state assessment (repeat current state assessment to verify)

---

```

### Gap Analysis Summary (Executive Format)

```
# GAP ANALYSIS EXECUTIVE SUMMARY

## Overall Assessment

[INFERENCE] **Current State: Level 2 (Repeatable)**
- Process is documented but inconsistently executed
- No systematic measurement or compliance verification
- Vulnerable to key person dependency
- Scalability limited

[INFERENCE] **Target State: Level 3 (Defined)**
- Reason: Aligns with "scale and standardise" strategy
- Timeline: 18 months
- Investment: [INFERENCE] ~$250K (labour + training)

[GAP] **Critical Gap: Compliance**
- Audit findings: No systematic compliance checking
- Risk: SOX exposure; potential audit finding
- Priority: Close within 6 weeks

## Gap Summary

| Gap | Severity | Effort to Close | Timeline | Owner |
|---|---|---|---|---|
| Compliance | [GAP] Critical | [INFERENCE] 6 weeks | Months 1-3 | Finance SVP |
| Documentation | [UNVERIFIED] Significant | [INFERENCE] 8 weeks | Months 2-3 | Process owner |
| System integration | [INFERENCE] Moderate | [INFERENCE] 3 months | Months 4-6 | IT |
| Skills | [UNVERIFIED] Significant | [INFERENCE] 10 weeks | Months 2-4 | HR |

## Roadmap Summary

- **Months 1-3:** Close critical gaps (compliance, documentation, skills)
- **Months 4-6:** System integration (pending IT roadmap)
- **Months 9-12:** Culture/accountability

## Key Risks

[RISK] **Compliance Audit Risk:** If audit finds major violation, timeline could accelerate

[RISK] **Resource Availability:** Process owner needs 40-50% capacity; confirm with manager

[INFERENCE] **Adoption Risk:** New process requires behaviour change; link to performance reviews

## Recommendation

Approve and fund Wave 1 (Months 1-3) immediately. Compliance gap is critical. Concurrent work on documentation and skills training.

---

```

---

## Methodology

### Step 1: Define Current State Assessment Approach
1. **Choose assessment method(s):**
   - Document review (process docs, policies, audit reports)
   - Interview-based (staff, process owners, customers)
   - Observation (watch process in action)
   - System review (capability audit)
2. **Define scope:** What will you assess? What's out of scope?
3. **Identify maturity model:** Will you use standard (CMMI, SOX, PCI-DSS)? Or create custom model?
4. **Plan participation:** Who will you talk to? Representative sample? Entire team?

### Step 2: Conduct Current State Assessment (Real Data, Not Assumption)
1. **Gather evidence:** Documents, interview notes, observation logs
2. **Score current state:** Use maturity model consistently
3. **Disclose limitations:** What didn't you assess? Why?
4. **Mark confidence:** High (extensive data), Medium (some gaps), Low (incomplete picture)

**Critical:** Never assume current state. If not assessed, mark [GAP].

### Step 3: Define Desired State (Reference to Standard or Strategy)
1. **Identify target maturity level:**
   - Is there a mandatory standard (SOX, GDPR)? → That's your target
   - Is there a strategic objective? → Define target level that supports strategy
   - Are there resource constraints? → Target Level 3 may be more realistic than Level 5
2. **Explain target choice:** Why Level 3 and not Level 4? Based on what?
3. **Define success criteria:** What does Level 3 actually look like in your context?

**Critical:** Don't assume "everyone should be at Level 5." Make the target explicit and justified.

### Step 4: Calculate Gaps
For each dimension:
1. Current level vs. target level = gap size (in levels)
2. Assess severity (1-5 scale) based on business impact
3. Assess remediation complexity (easy, medium, hard)
4. Map to remediation effort and timeline

### Step 5: Identify Hidden Gaps
- Technical gaps are obvious (missing system, undocumented process)
- Don't miss organisational gaps (no owner, skills missing, culture resistant)
- These often take longer to fix than technical gaps

### Step 6: Build Remediation Roadmap
1. **Sequence:** Some gaps block others (document process before training)
2. **Prioritise:** Impact vs. effort matrix
3. **Estimate effort:** [INFERENCE] All effort estimates are assumptions; disclose them
4. **Name dependencies:** What must be true for this to succeed?
5. **Identify risks:** What could derail this?

### Step 7: Define Success Metrics
1. **Input metrics:** How do we know we did the work? (% documented, audit scheduled)
2. **Output metrics:** How do we know the gap closed? (error rate dropped, compliance audit passed)
3. **Outcome metrics:** How do we know this matters? (throughput up, cost down)

---

## Common Hallucination Traps

### Trap 1: Fabricating Current State Without Assessment
**[FABRICATION]:** "Current state assessment shows our process is at Level 2"
✓ **GROUNDED:** "We conducted [interview-based assessment with 12 process participants, document review of 15 process artifacts, system audit of controls] in Dec 2025. [CONFIRMED] Current state is Level 2 based on: [specific evidence]. [INFERENCE] This assumes recent observations reflect standard practice."

### Trap 2: Maturity Scores Without Evidence
**[FABRICATION]:** "We assess compliance as Level 1"
✓ **GROUNDED:** "[CONFIRMED] Evidence: 'Compliance audit conducted Nov 2025 found 0 systematic audit controls, no documented checklist, checks performed ad-hoc.' Score: Level 1 (Initial). [INFERENCE] This assumes current ad-hoc approach is standard."

### Trap 3: Desired State Based on Opinion
**[FABRICATION]:** "Target should be Level 4 (Managed)"
✓ **GROUNDED:** "[CONFIRMED] Strategic plan specifies 'standardise and scale' operations. Level 3 (Defined) sufficient to achieve this goal. Level 4 requires 24-36 months and $500K investment — not justified for current scale. [INFERENCE] Target Level 3 (achievable in 18 months with $250K)."

### Trap 4: Underestimating Hidden Gaps
**[FABRICATION]:** "Gap: Missing system integration. Fix: Deploy API (3 months)"
✓ **GROUNDED:** "Technical gap: System integration (2-3 months to build). [UNVERIFIED] Hidden gaps that could delay: IT team capacity (currently 80% allocated), data quality issues (estimated 2-week cleanup), change management/adoption (estimated 6 weeks post-launch)."

### Trap 5: Unrealistic Remediation Timelines
**[FABRICATION]:** "Close all gaps in 6 months with current team"
✓ **GROUNDED:** "[INFERENCE] Realistic roadmap: Months 1-3 (compliance, documentation) with dedicated effort. Months 4-6 (system integration) depends on IT availability. Months 9-12 (culture/accountability). Total: 12 months. Assumes [process owner 50% capacity, IT reallocation Q1]."

### Trap 6: Missing Adoption/Change Gap
**[FABRICATION]:** Remediation roadmap is 100% technical (document, implement, measure)
✓ **GROUNDED:** "Technical roadmap 60% of effort. Change management 40% (training, role clarification, accountability linkage, resistance management). Adoption risk is critical to gap closure."

### Trap 7: Assuming Level 3 Without Defined Criteria
**[FABRICATION]:** "Target maturity Level 3"
✓ **GROUNDED:** "Target Level 3 definition in our context: Process documented + audit checklist, all staff trained and certified, compliance audit <2 findings, 95% process adherence. Success measured by [KPI 1], [KPI 2], [KPI 3]."

---

## Examples

### Good Example: Gap Analysis (Properly Grounded)

```
# GAP ANALYSIS: Financial Close Process

## Current State Assessment

**Assessment Conducted:** December 2025
**Method:** Interview-based (6 process owners), document review (process flows, close checklists), observation (2 close cycles)
**Confidence:** [INFERENCE] Medium (team-based assessment; external verification not conducted)

**Maturity Model Used:** CMMI Level 1-5 (standard for financial processes)

### Current State Scoring

| Area | Level | Evidence | Gaps |
|---|---|---|---|
| Process definition | 2 | Close procedures documented; not followed 100% | Manual workarounds for non-standard items |
| Compliance controls | 1 | No documented control checklist; checks are ad-hoc | Audit findings: missing control evidence |
| Tool/system support | 2 | Manual data entry between systems; 3-day lag | No automated reconciliation |
| Team skills | 2 | Core team trained; new staff informal onboarding | High error rate (3%) on first close |

**Overall Current State: [INFERENCE] Level 1.5 (Initial-Repeatable)**
- Process has basic documentation
- Execution highly dependent on individual knowledge
- High quality variance month-to-month
- No systematic compliance verification

**Confidence:** [INFERENCE] Medium — based on process owner interviews; may underestimate compliance issues if people gave optimistic views

---

## Desired State Definition

**Target: [INFERENCE] Level 3 (Defined)**

**Why Level 3, not Level 4?**
- Strategic plan calls for "repeatable, auditable close" (not "real-time automated")
- Resource constraints: Can't invest in full automation
- Cost-benefit: Level 3 addresses audit risk at reasonable investment

**Timeline:** [INFERENCE] 12 months

**Success Definition:**
- 100% process adherence (documented, trained, audited)
- <1 compliance audit finding per close
- 10-day close (vs. current 12-14 days)
- <1% error rate

---

## Gap Matrix

| Area | Current | Target | Gap | Severity | Priority | Remediation | Effort | Timeline |
|---|---|---|---|---|---|---|---|---|
| Process definition | 2 | 3 | 1 level | [UNVERIFIED] Medium | P1 | Formalize procedures; create training | [INFERENCE] 120 hours | Month 1-2 |
| Compliance controls | 1 | 3 | 2 levels | [GAP] Critical | P1 | Create audit checklist; implement quarterly | [INFERENCE] 80 hours + 20h/quarter | Month 1 |
| Tool/system | 2 | 3 | 1 level | [INFERENCE] Moderate | P2 | Implement data feed (depends on IT) | [INFERENCE] IT: 60 days | Month 4-6 |
| Team skills | 2 | 3 | 1 level | [UNVERIFIED] Medium | P1 | Formal training; certification; new hire onboarding | [INFERENCE] 160 hours | Month 2-3 |

---

## Remediation Roadmap

### Wave 1: Compliance & Skills (Months 1-3)

| Action | Owner | Timeline | Effort | Success Criteria |
|---|---|---|---|---|
| 1. Create control checklist based on audit findings + SOX requirements | Controller | Week 1-2 | 40h | [CONFIRMED] Checklist approved by audit |
| 2. Implement monthly compliance review (mini-audit) | Controller | Week 3-4 | 20h initial | Calendar set; assigned |
| 3. Formalize close procedures (gap documentation) | Process lead | Week 2-4 | 80h | Flowcharts + step-by-step docs |
| 4. Train team on procedures + compliance checklist | Trainer | Week 5-6 | 160h (people) + 40h prep | 100% attendance; <5% defect rate |

### Wave 2: System & Sustainment (Months 4-6)

| Action | Owner | Timeline | Effort | Dependency |
|---|---|---|---|---|
| 1. Design data feed between GL and reporting system | IT + Finance | Week 8-10 | 60 days dev | IT roadmap approval (Month 3) |
| 2. Pilot integration; test reconciliation | Finance + IT | Week 11-14 | 3 weeks testing | System ready |
| 3. Deploy and monitor | IT + Finance | Week 15-16 | ongoing | Pilot successful |

### Wave 3: Continuous Improvement (Ongoing)

| Action | Frequency | Owner |
|---|---|---|
| Monthly compliance review + lessons learned | Monthly | Controller |
| Quarterly process audit + gap closure tracking | Quarterly | Audit + Controller |
| Annual refresher training + skills assessment | Annual | HR + Finance |

---

## Risks & Mitigation

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Compliance audit during remediation window | Low | Critical | Communicate timeline to audit; expedite Month 1 checklist |
| IT system integration delayed | Medium | Medium | Proceed with process/training fixes independently |
| Team adoption of new checklist is slow | Medium | High | Link compliance checklist completion to bonus/performance |
| Key person turnover during ramp-up | Low | Medium | Document process early; train 2 people per role |

---

## Measurement

### Tracking Progress (Monthly)

| Metric | Current | Target | Frequency |
|---|---|---|---|
| % Process adherence (spot check) | 65% | 95% | Monthly close review |
| Audit findings per close | 3-4 | <1 | Monthly checklist review |
| Days to close | 13 | 10 | Every close |
| Error rate (rework items) | 3% | <1% | Every close |

### Gate Reviews

- **End of Month 3:** Compliance audit complete; team trained; procedures in use. Continue or escalate?
- **End of Month 6:** System integration live; error rate <2%. Proceed to sustainability phase?
- **Month 12:** Maturity reassessment; measure vs. target.

---

## Governance & Approval

- [CFO/Controller approval of roadmap and budget]
- [Audit committee notification of compliance gap remediation]
- [Monthly steering committee review of progress]

```

### Bad Example: Gap Analysis (Common Fabrications)

```
# GAP ANALYSIS: Financial Close FAIL PROBLEMS BELOW

## Current State
"Our financial close process is at Level 2 maturity" ← NO ASSESSMENT MENTIONED
- How did you score it? Interview? Observation? Assumption?
- What's the evidence?

## Desired State
"Target is Level 4 maturity" ← NO JUSTIFICATION
- Why Level 4? Because it's higher?
- Resource constraints? Timeline? Strategic justification?

## Gaps
"Gap 1: Process not standardised — fix by documenting (2 months)"
- What does "documenting" entail? Hours required? Who does it?
- "2 months" based on what assumptions?

"Gap 2: Compliance risk exists — implement audit checklist (1 month)"
- Audit checklist for what? SOX? Custom? What's the standard?
- Hidden assumption: "1 month to implement" → never happens in reality

## Remediation Timeline
"6-month remediation to close all gaps"
- 6 months = guess or based on what?
- All gaps in parallel? Or sequenced?
- What if IT integration is required (not mentioned)?

## Risks
"Risk: Team may not adopt new process" ← TOO VAGUE
Should include: "Mitigation: Link compliance checklist completion to performance bonus (incentive for adoption)"

## Hidden Assumptions
- No mention of resource availability (process lead's time)
- No mention of IT dependencies
- No change management plan
- No success metrics

```

---

## Quality Checklist

Before submitting gap analysis:

**Current State Assessment**
- [ ] Assessment method is documented (interview, document review, observation)
- [ ] Participants/sample identified (who did you talk to?)
- [ ] Evidence cited for each score (not assumed)
- [ ] Assessment date noted (is it current?)
- [ ] Confidence level stated (high/medium/low and why)
- [ ] [GAP] items named if assessment incomplete

**Maturity Model**
- [ ] Maturity model named (CMMI, DMM, custom?)
- [ ] If standard used, cite the standard
- [ ] If custom model created, define each level clearly with examples
- [ ] Consistent scoring across all dimensions

**Current State Scores**
- [ ] Every score has supporting evidence (not assumption)
- [ ] Evidence is specific (not generic like "team is experienced")
- [ ] Scores explained in context (why Level 2 and not Level 3?)
- [ ] No unscored dimensions

**Desired State Definition**
- [ ] Target level is explicit (not vague like "improve significantly")
- [ ] Target is justified (references standard or strategic plan)
- [ ] Timeline is realistic and disclosed ([INFERENCE] as assumption)
- [ ] Success criteria are measurable and specific
- [ ] Target level selection explained (why not higher? cost/benefit?)

**Gap Identification**
- [ ] Gap size calculated (current vs. target)
- [ ] Gap severity rated (1-5 using consistent rubric)
- [ ] Severity justified (business impact, remediation effort)
- [ ] Hidden/organisational gaps surfaced (not just technical gaps)
- [ ] Both capability and adoption gaps addressed

**Remediation Roadmap**
- [ ] Sequencing logic explained (which gaps block others?)
- [ ] All effort estimates marked [INFERENCE] (they are assumptions)
- [ ] Dependencies named (what must be true for success?)
- [ ] Risks identified and mitigations proposed
- [ ] Resource requirements stated (who/how much effort?)
- [ ] Timeline realistic (phased, not "fix everything at once")

**Prioritisation**
- [ ] Impact vs. effort framework used consistently
- [ ] P1/P2/P3 ranking justified
- [ ] Quick wins identified
- [ ] Critical path explained

**Success Metrics**
- [ ] Input metrics (how do we know we did the work?)
- [ ] Output metrics (how do we know the gap closed?)
- [ ] Outcome metrics (how do we know it matters?)
- [ ] Measurement frequency stated

**Governance & Risk**
- [ ] Approval authority named
- [ ] Gated review points defined (when do we reassess?)
- [ ] Escalation path clear if risks materialize
- [ ] Change/adoption risks explicitly addressed
- [ ] [RISK] markers used for critical/blocking risks

**GGP Compliance**
- [ ] Every claim has marker ([CONFIRMED]/[INFERENCE]/[GAP]/[UNVERIFIED]/[RISK])
- [ ] No "assumed current state" without assessment
- [ ] No fabricated maturity scores without evidence
- [ ] All timeline estimates marked [INFERENCE] with assumptions stated
- [ ] Effort estimates realistic (not optimistic)
- [ ] Hidden gaps surfaced, not papered over


---

## GGP Mandatory Validation — Return to SKILL.md

After completing this template's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load template → Create analysis → Template checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

