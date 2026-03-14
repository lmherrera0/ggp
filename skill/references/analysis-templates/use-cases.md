# Use Case Analysis

## Purpose
Use case analysis structures business requirements, technology adoption scenarios, and implementation roadmaps by capturing the problem statement, proposed solution, stakeholders, and success criteria. It bridges the gap between business need and technical/operational execution. Use this when a consulting brief asks to "identify opportunities," "justify a capability investment," or "present implementation scenarios."

## When to Use
- Client wants to justify a technology or process investment
- Building an implementation roadmap or phased deployment plan
- Translating business strategy into concrete operational scenarios
- Presenting capability requirements to technical teams
- Portfolio planning (comparing and prioritising multiple scenarios)
- Change management communication (showing "what will change and why")

---

## GGP Verification Requirements

**This is where use case analysis hallucinates most:**

### Primary Fabrication Risks
1. **ROI Numbers** — AI invents "30% cost savings" or "2 FTE reduction" without source data
   - RULE: Never estimate savings without actual cost baseline ([CONFIRMED] internal data) or industry benchmark ([CONFIRMED] Tier 2 source)
   - ALWAYS mark benefit estimates as [INFERENCE] if based on assumption

2. **Implementation Timelines** — AI assumes linear complexity, inverts schedules, ignores dependencies
   - RULE: Flag all timeline estimates as [INFERENCE] (they are always assumptions)
   - RULE: Never present "3-month implementation" without explicit assumptions listed

3. **Effort Estimates** — AI invents team sizes ("1 FTE") without scoping methodology
   - RULE: All effort figures must reference actual project plans ([CONFIRMED]) or be marked [INFERENCE] with assumptions stated

4. **Technology Capability Claims** — AI assumes technology "will enable X" without verification
   - RULE: Capability claims need [CONFIRMED] vendor documentation or [INFERENCE] explicit assumption marking
   - RULE: Flag technology assumptions as high-risk in risk section

5. **Stakeholder Consensus** — AI assumes adoption will be smooth without evidence
   - RULE: Resistance and friction must be explicitly identified (don't assume greenfield)
   - RULE: All stakeholder sentiments must be [CONFIRMED] based on interviews or meetings

### Source Tier Rules for Use Cases
| Element | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Business baseline (costs, headcount) | ✓ Internal finance | ✓ Industry analyst | ✗ | ✗ |
| Benefit benchmarks | ✓ Case studies | ✓ Analyst reports | ✓ Company website | ✗ |
| Technology capabilities | ✓ Vendor documentation | ✓ Analyst reviews | ✓ Blog posts | ✗ |
| Implementation timeline | ✓ Similar project history | [INFERENCE] Estimated | [INFERENCE] Estimated | ✗ |
| Effort estimates | ✓ Resource allocation plan | [INFERENCE] Industry average | [INFERENCE] Industry average | ✗ |
| ROI projections | [INFERENCE] With assumptions | [INFERENCE] With assumptions | [INFERENCE] With assumptions | ✗ |

---

## Template

### Use Case Card (Single Use Case)

```
# USE CASE: [Name]

## Problem Statement
**Context:** [Background on why this is an issue]
[CONFIRMED] / [INFERENCE] / [GAP]: [Specific business problem being addressed]

**Current Impact:**
- [Impact 1 with marker and source if quantified]
- [Impact 2 with marker and source if quantified]

**Why Now?** [Business driver or urgency — market, regulatory, competitive, or operational]

## Proposed Solution
**Description:** [What will change, at high level]

**Scope:** [What is included / what is NOT included]

**Key Capabilities Required:**
- [Capability 1] — [CONFIRMED] [Available today] / [INFERENCE] [Requires investment] / [UNVERIFIED] [Uncertain capability]
- [Capability 2] — [Marker and status]

## Affected Stakeholders
| Role/Group | Power | Interest | Current Position | Required Engagement |
|---|---|---|---|---|
| [Stakeholder] | High/Med/Low | High/Med/Low | Supportive/Neutral/Resistant | [What they need to enable this] |
| | | | | |

**Key Success Factors:** [What these stakeholders must do for this to succeed]

## Business Case Summary

### Benefits (Quantified & Sourced)
| Benefit | Metric | Baseline | Projected | Assumption | Source/Confidence |
|---|---|---|---|---|---|
| [Benefit] | [KPI] | [Current state] | [Future state] | [INFERENCE] [What must be true] | [CONFIRMED] / [INFERENCE] / [UNVERIFIED] |
| | | | | | |

**Total Annual Benefit:** [INFERENCE] [Range] (with [INFERENCE] confidence level)

**Supporting Evidence:** [Which claims have [CONFIRMED] sources; which are [INFERENCE] inferences]

### Costs (Detailed & Sourced)
| Cost Category | One-Time | Recurring (Annual) | Assumption | Source |
|---|---|---|---|---|
| Software licensing | [INFERENCE] $[estimate] | [CONFIRMED] $[based on] | | |
| Implementation/integration | [INFERENCE] $[estimate] | | [INFERENCE] [team size/duration] | |
| Change management | [INFERENCE] $[estimate] | | | |
| Training | [INFERENCE] $[estimate] | | [INFERENCE] [headcount/hours] | |
| Ongoing support | | [CONFIRMED] $[if available] | [INFERENCE] [staffing model] | |
| **Total** | | | | |

**Assumptions Disclosed:** [List all assumptions, especially effort/timeline estimates]

### Financial Summary
- **Payback Period:** [INFERENCE] [X months] — assumes [assumptions]
- **3-Year NPV:** [INFERENCE] [Range] — discount rate [X%]
- **ROI:** [INFERENCE] [X%] — **HIGHLY DEPENDENT ON:** [Which assumptions drive the math]
- **Risk to Business Case:** [RISK] [Biggest threats to benefits realization]

## Implementation Approach

### Phased Timeline
| Phase | Duration | Key Activities | Dependencies | Risks |
|---|---|---|---|---|
| Phase 1: [Name] | [INFERENCE] [Months] | - [Activity] | [What must be ready] | [What could go wrong] |
| Phase 2: [Name] | [INFERENCE] [Months] | - [Activity] | | |
| Phase 3: [Name] | [INFERENCE] [Months] | - [Activity] | | |

**Timeline Confidence:** [INFERENCE] [All timelines are assumptions. List the key drivers.]

### Required Resources
- **Core Team:** [INFERENCE] [#] FTE (assumption: [role mix])
- **Steering:** [Governance model]
- **Skills Required:** [Technical, change, domain expertise needed]
- **Key Milestones:** [Gated decisions or approval points]

## Dependencies & Risks

### Critical Dependencies
- [CONFIRMED] [Dependency] — Status: [In progress / Not started / Blocked]
- [INFERENCE] [Assumed dependency] — Risk if not met: [Impact]
- [GAP] — This dependency is unresolved

### Risk Register
| Risk | Probability | Impact | Mitigation | Owner |
|---|---|---|---|---|
| [RISK] [Technology doesn't deliver capability] | [High/Med/Low] | [High/Med/Low] | [Plan B] | [Role] |
| [RISK] [Stakeholder adoption slower than planned] | | | | |
| [RISK] [Hidden integration complexity] | | | | |
| [RISK] [Benefit realization delayed] | | | | |

## Success Criteria

### Quantified Success Measures
| Measure | Target | Baseline | How Measured | Owner |
|---|---|---|---|---|
| [KPI] | [INFERENCE] [Target] | [CONFIRMED] [Current] | [Source of truth] | |

### Qualitative Success Factors
- [Qualitative outcome — e.g., "Stakeholder adoption rate >80%"]
- [Change readiness indicator]
- [Technical stability indicator]

## Governance & Decision Points

**Decision Required:** [What approval or sign-off is needed?]
- Owner: [Role]
- Gate Criteria: [What must be true to proceed?]
- Timeline: [By when?]

---

```

### Use Case Portfolio Template (Multiple Use Cases)

```
# USE CASE PORTFOLIO

## Overview
[CONFIRMED]: [Number] use cases identified across [scope]
[INFERENCE]: Prioritisation based on [criteria source]
[GAP]: Missing use case data for [what's not covered]

## Portfolio Summary Table
| Use Case | Business Problem | Annual Benefit | Implementation Effort | Strategic Alignment | Priority | Status |
|---|---|---|---|---|---|---|
| [Name] | [1 sentence] | [INFERENCE] $[K] | [INFERENCE] [Months] | [High/Med/Low] | P1/P2/P3 | Scoped / In Planning / On Hold |
| | | | | | | |

## Prioritisation Framework

### Criteria & Scoring (1-5 Scale)
- **Strategic Alignment:** How well does this advance the [CONFIRMED] [stated strategy]?
- **Business Value:** Quantified benefits ([CONFIRMED] sourced or [INFERENCE] estimated)
- **Implementation Effort:** Risk-adjusted timeline and resource requirements
- **Technical Risk:** Dependency complexity and capability uncertainty
- **Stakeholder Readiness:** Organisational change capacity

### Priority Matrix
```
     High Impact
         △
         │    P1 (Quick Wins + Strategic)
         │    _______________
    _____|___/ P2 (Strategic)  \
        │  /                    \
    Medium \________________    P3 (Consider)
         \ \               /
          \ \             /
           \│____________/___________▶ Easy Implementation
            Low            High
```

## Sequencing & Interdependencies
- **Wave 1 (Months 1-6):** [P1 use cases] — Objectives: [Quick wins / foundation building]
- **Wave 2 (Months 6-12):** [P2 use cases] — Dependent on: [Wave 1 outcomes]
- **Wave 3 (Months 12+):** [P3 use cases] — Dependent on: [Operational stabilization]

**Critical Path:** [Which use cases must complete before others begin]

## Portfolio Financial Summary
| Metric | Value | Confidence | Assumption |
|---|---|---|---|
| **Total 3-Year Benefit** | [INFERENCE] $[Range] | [INFERENCE] [Low/Med/High] | [Key assumption] |
| **Total Investment** | [INFERENCE] $[Range] | [INFERENCE] [Low/Med/High] | [Key assumption] |
| **Blended ROI** | [INFERENCE] [X%] | [INFERENCE] [If all assumptions hold] | |
| **Payback (Portfolio)** | [INFERENCE] [X months] | [INFERENCE] [If benefits sequence as planned] | |

**Financial Health Warnings:**
- [INFERENCE] [Which assumptions are most optimistic?]
- [RISK] [Biggest financial risk?]
- [GAP] [What cost data is missing?]

## Approval Checklist
- [ ] Portfolio scope [CONFIRMED] approved by [Owner]
- [ ] Prioritisation criteria [CONFIRMED] aligned with strategy
- [ ] Financial assumptions [INFERENCE] disclosed and [CONFIRMED] validated
- [ ] Stakeholder impacts mapped in [Stakeholder Analysis]
- [ ] Implementation capacity confirmed by [Operations lead]
- [ ] Dependency risks identified and mitigated

```

---

## Methodology

### Step 1: Problem Validation (NOT assumption)
1. **Define the business problem** using [CONFIRMED] CONFIRMED data:
   - Current state metrics (costs, cycle time, error rates, headcount) from internal systems
   - Root cause analysis — why is this a problem now?
   - Business impact — quantify the cost of inaction if possible
2. **Flag what you DON'T know:**
   - Missing baseline data → [GAP]
   - Assumed root cause → [INFERENCE] with assumption stated
   - Unclear stakeholder impact → [INFERENCE] [assumption about who cares]

### Step 2: Solution Design with Capability Verification
1. **Define the solution** at capability level (not technology level)
2. **For each capability, verify it exists:**
   - [CONFIRMED] Vendor documentation or analyst review? Use [CONFIRMED]
   - [INFERENCE] Reasonable assumption based on vendor marketing? Use [INFERENCE] + assumption
   - [UNVERIFIED] Unverified or Tier 4 source? Use [UNVERIFIED]
3. **Never assume**: "AI will solve this," "cloud is cheaper," "automation will be easy"
   - These are [INFERENCE] at best; verify with vendor data or analyst reports

### Step 3: Benefit Estimation with Confidence Tiers
1. **Identify benefit types:** Cost reduction, revenue growth, risk mitigation, agility
2. **Source the benefit:**
   - [CONFIRMED] Case study from similar organisation? Use it with caveats
   - [INFERENCE] Industry benchmark (e.g., "RPA typically reduces headcount 20-30%")? Mark [INFERENCE] + state assumptions
   - [UNVERIFIED] Made-up number? Mark [UNVERIFIED] or don't include
3. **Adjust for YOUR context:**
   - Baseline size matters ("20% of 2 FTE ≠ 20% of 20 FTE")
   - Realization timeline matters ("benefits in Year 2, not Month 1")
   - Risk matters ("assumes adoption >80%")

### Step 4: Cost Estimation (Ruthlessly Honest)
1. **Software/licensing costs:**
   - [CONFIRMED] Ask vendor for actual pricing or reference customer deals
   - [UNVERIFIED] If estimate only, mark clearly and note assumptions
2. **Implementation/services:**
   - [INFERENCE] Use project estimation based on scope + complexity + team experience
   - Disclose team size assumption, calendar time vs. effort, learning curve
3. **Hidden costs** (where AI habitually underestimates):
   - Integration complexity (always harder than initial scope)
   - Change management (human time, training, resistance)
   - Ongoing support (new skill requirements, additional headcount)
   - Data migration/cleanup (rarely quick)

### Step 5: Effort & Timeline Estimation (Declare Everything)
1. **Never present a timeline as fact.** Always mark [INFERENCE] and state assumptions:
   - Team size: "assumes 1 PM, 2 developers, 1 BA"
   - Parallel vs. sequential: "assumes [X] parallel streams"
   - Rework factor: "assumes first implementation, 1 major change cycle"
   - External dependencies: "assumes [vendor/client/partner] delivers on time"
2. **Buffer language:** "Estimated 6 months assumes [assumptions]. If [risk occurs], likely 8-10 months."

### Step 6: Stakeholder & Risk Mapping
1. **Stakeholders:** Interview or review actual org charts ([CONFIRMED]), don't assume reactions
2. **Risks:** Be honest about what could fail:
   - Technical risks (capability gap, integration issues)
   - Organisational risks (adoption resistance, skill gaps)
   - Financial risks (benefit realization slower than modeled)
3. **Mitigations:** For each risk, name a concrete mitigation (not "manage closely")

### Step 7: Portfolio Prioritisation (If Multiple Use Cases)
1. **Criteria:** Use [CONFIRMED] strategic document + stakeholder input
2. **Scoring:** Transparent rubric (1-5 scale with definitions)
3. **Sequence:** Identify dependencies and quick wins
4. **Acknowledge tradeoffs:** "Prioritising use cases P1, P2, P3 means [What gets deferred?]"

---

## Common Hallucination Traps

### Trap 1: "Industry Standard" ROI Without Source
**[FABRICATION]:** "RPA typically delivers 30% cost reduction"
✓ **GROUNDED:** "[CONFIRMED] Forrester case study of 50 RPA implementations showed median 25% headcount reduction (range 15-40% depending on process maturity). [INFERENCE] We estimate [your process] at lower end (20%) due to [reason]."

### Trap 2: Implementation Timeline = Unicorn Time
**[FABRICATION]:** "3-month implementation with 1 project manager"
✓ **GROUNDED:** "[INFERENCE] Estimated 6 months assuming: 1 PM (60%), 2 developers (100%), 1 BA (50%), parallel design/build, 1 major scope change, internal testing capacity available. If [dependency] delays or [change] occurs, likely 8-9 months."

### Trap 3: Benefit Stacking Without Reality Check
**[FABRICATION]:** "Cost savings: $500K, Revenue uplift: $200K, Risk reduction: $100K" (total $800K with no cross-check)
✓ **GROUNDED:** "[INFERENCE] Conservative estimate: $500K cost reduction (assumes 25% headcount savings on $2M payroll, [INFERENCE] confidence 70% due to adoption risk). Revenue uplift ($200K) is dependent on sales tool adoption [INFERENCE] (assumed 80%, currently 0%). Total: $500K-$700K range."

### Trap 4: Technology Capability Assumption
**[FABRICATION]:** "Cloud platform will enable real-time analytics and AI insights"
✓ **GROUNDED:** "[CONFIRMED] Platform documentation shows real-time query capability. [INFERENCE] AI insights require [data prep], which is [GAP] not currently scoped. Assumption: AI effectiveness depends on data quality improvements."

### Trap 5: Ignoring Organisational Friction
**[FABRICATION]:** "All stakeholders committed to change"
✓ **GROUNDED:** "[INFERENCE] Interviews with 5 department heads: 2 strong support (P&L impact), 2 neutral (process-agnostic), 1 resistant (fears consolidation). Mitigation: [Specific engagement plan]. Risk: [RISK] Consolidation signal could trigger retention risk in [department]."

### Trap 6: Missing Hidden Costs
**[FABRICATION]:** "Implementation cost $200K (software + 3 months of services)"
✓ **GROUNDED:** "Direct costs: [CONFIRMED] $150K software + [INFERENCE] $120K services (6 developers × 4 months). Hidden costs: [INFERENCE] $80K internal PM/BA time, [INFERENCE] $60K training/change management, [INFERENCE] $40K data migration. Total investment: [INFERENCE] $450K (not $200K). Break-even: Year 1.5, not Year 1."

### Trap 7: Conflating Correlation with Causation
**[FABRICATION]:** "Company X implemented this tool and grew 40% → our company will too"
✓ **GROUNDED:** "[CONFIRMED] Company X (similar industry, size) implemented tool and grew 40%. [INFERENCE] Their growth drivers: new market entry (40%), tool improvement (estimated 5-10%), market tailwinds (10%). Assumption: Our growth context is [similar/different]. Conservative estimate: [INFERENCE] 5-8% impact, not 40%."

---

## Examples

### Good Example: Use Case Card (Properly Grounded)

```
# USE CASE: Vendor Management Portal

## Problem Statement
**Context:** Finance currently manages vendor relationships through email, spreadsheets, and multiple disconnected systems.

[CONFIRMED]: Current vendor onboarding takes 15-20 business days (verified via finance process audit, Oct 2025).
[INFERENCE]: Estimated 0.5 FTE annual cost of manual vendor file maintenance = $40K.
[GAP]: Exact cost of payment delays due to missing documentation not quantified.

**Current Impact:**
- Vendor relationships strained by slow onboarding (feedback in Sep 2025 vendor satisfaction survey)
- Compliance risk: [INFERENCE] Estimated 10% of vendors not in compliance checks annually (assumption based on audit sample)

## Proposed Solution
**Description:** Deploy vendor self-service portal allowing vendors to upload compliance docs, bank details, tax forms. Finance reviews and approves. Reduces manual data entry and accelerates payment cycles.

**Capability Requirements:**
- [CONFIRMED]: DocuSign eSignature available in current contract; supports vendor workflow
- [INFERENCE]: Integration with accounts payable will require 3-4 weeks (assumption: AP team estimated this)
- [UNVERIFIED]: "Automated compliance checking" — vendor claims this; analyst review pending

## Business Case Summary

### Benefits
| Benefit | Metric | Baseline | Projected | Source/Confidence |
|---|---|---|---|---|
| Faster onboarding | Days to vendor activate | [CONFIRMED] 18 days (avg) | [INFERENCE] 5 days (assumes 95% self-service adoption) | [INFERENCE] Medium |
| Reduced manual entry | Finance FTE on vendor data | [CONFIRMED] 0.5 FTE | [INFERENCE] 0.1 FTE (0.4 FTE savings) | [INFERENCE] Medium |
| Improved compliance | % vendors in compliance | [INFERENCE] 90% (estimated from sample) | [INFERENCE] 98% | [INFERENCE] Medium |

**Annual Benefit:** [INFERENCE] $65K (0.4 FTE × $160K all-in cost + process efficiency)

**Key Assumptions:**
- [INFERENCE] Vendor adoption >95% (assumption: incentivised via payment terms)
- [INFERENCE] Finance team redeployed (not eliminated) — assumes cost savings
- [INFERENCE] No major integration rework needed

### Costs
| Category | Amount | Source |
|---|---|---|
| Software (annual) | [CONFIRMED] $48K | Vendor proposal, Dec 2025 |
| Implementation/integration | [INFERENCE] $80K | 4 weeks, 2 FTE (assumption) |
| Training/comms | [INFERENCE] $15K | Change management budget |
| **Total Year 1** | [INFERENCE] $143K | |

### Financial Summary
- **Payback:** [INFERENCE] 2.2 years (Year 1: -$143K + $65K benefit = -$78K; Year 2: breaks even)
- **3-Year NPV:** [INFERENCE] $60K (assumes benefits sustain; if adoption drops, NPV negative)
- **ROI Year 3:** [INFERENCE] 45%

**Risk to Business Case:** [RISK] Vendor adoption <80% would push payback to 3+ years

## Implementation Approach

### Phased Timeline
| Phase | Duration | Activities |
|---|---|---|
| Phase 1: Design & Build | [INFERENCE] 8 weeks | Vendor config, AP integration, testing (assumption: parallel streams) |
| Phase 2: Pilot | [INFERENCE] 4 weeks | 20-vendor pilot, feedback loops |
| Phase 3: Full Rollout | [INFERENCE] 6 weeks | All vendors, final training |

**Timeline Confidence:** [INFERENCE] Assumes AP team available and no major scope changes. If [integration complexity], add 4 weeks.

### Required Resources
- [INFERENCE] 1 PM (60%), 1 technical lead (100% × 3 months), 1 finance BA (50% × 4 months)

## Risks & Mitigations
| Risk | Mitigation |
|---|---|
| Vendor adoption slow | Early-bird incentive (faster payment for early adopters) |
| AP integration complex | Dedicated integration architect allocated upfront |
| Compliance checking gap | Hybrid approach: portal + manual review for first 6 months |

## Governance
**Decision Gate:** Finance SVP approval required before Phase 2 (Pilot)
**Success Criteria:** >90% vendor adoption by Month 3 of rollout; onboarding <7 days average

```

### Bad Example: Use Case Card (Common Fabrications)

```
# USE CASE: AI-Powered Analytics Platform FAIL PROBLEMS BELOW

## Problem Statement
"Analytics platform will transform decision-making" ← TOO VAGUE

## Proposed Solution
"Deploy AI platform. Will enable real-time insights and predictive analytics." ← UNVERIFIED capability claims

## Benefits
| Benefit | Metric | Baseline | Projected |
|---|---|---|---|
| Faster decisions | Decision cycle time | 2 weeks | 1 day ← FABRICATED; no basis |
| Cost savings | Operations cost | $1M | $600K ← INVENTED NUMBER; where did "40%" come from? |
| Revenue growth | Annual revenue | $10M | $15M ← HALLUCINATION; no mechanism described |

**Annual Benefit: $2M** ← STACKED WITHOUT SOURCE

## Costs
"Estimated $500K for implementation" ← INCOMPLETE
Missing: Software cost, ongoing support, team ramp-up, data engineering

## Timeline
"6-month implementation" ← NO ASSUMPTIONS DISCLOSED
- No mention of data prep complexity
- No team size stated
- No risk factors
- What if data is poor quality? Still 6 months?

## Risks
"Platform might not integrate" ← TOO VAGUE
Should be: "Integration with [system] complexity estimated [based on what?]. Mitigation: [specific plan]"

```

---

## Quality Checklist

Before submitting use case analysis:

**Problem & Context**
- [ ] Current state baseline is [CONFIRMED] (verified from actual data, not assumed)
- [ ] Problem quantified: cost/time/risk impact is stated with source
- [ ] Root cause is validated (not assumed)
- [ ] Urgency/timing justified (regulatory, competitive, or operational driver stated)

**Solution & Capabilities**
- [ ] Solution described at capability level, not technology level
- [ ] Each capability is marked [CONFIRMED]/[INFERENCE]/[UNVERIFIED] (not left unmarked)
- [ ] Technology assumptions are explicitly stated (don't hide them)
- [ ] Scope is clear (in/out of scope explicitly listed)

**Benefits**
- [ ] Every benefit estimate has a source marker ([CONFIRMED]/[INFERENCE]/[UNVERIFIED])
- [ ] Assumptions are disclosed ("assumes X% adoption")
- [ ] Conservative estimates chosen over optimistic ones
- [ ] No benefit stacking without reality check
- [ ] Benefits are measurable and traceable

**Costs**
- [ ] All cost categories listed (software, services, internal time, training, support)
- [ ] Sources stated (vendor quote [CONFIRMED], estimate [INFERENCE], assumption [INFERENCE])
- [ ] No hidden costs (integration, change, support)
- [ ] Hidden cost buffer added explicitly
- [ ] Assumptions about team size/duration disclosed

**Timeline & Effort**
- [ ] All timelines marked [INFERENCE] (they are always assumptions)
- [ ] Key assumptions listed explicitly
- [ ] Dependencies stated (what must be true?)
- [ ] Risk buffer added (e.g., "6 months plus/minus 2 months if...")
- [ ] Parallel vs. sequential activity explained

**Financials**
- [ ] ROI calculation disclosed (formula visible)
- [ ] Payback period realistic (accounts for phased benefit realization)
- [ ] Key assumptions highlighted (which factors drive the math?)
- [ ] Confidence tier stated (high/medium/low based on assumption quality)
- [ ] Downside scenario included (what if X assumption fails?)

**Risks & Stakeholders**
- [ ] Stakeholder resistance or friction not glossed over
- [ ] Technical risks explicitly named (not hidden)
- [ ] Adoption risk quantified (not assumed 100%)
- [ ] Mitigation plans are concrete (not vague)
- [ ] [RISK] markers used for reputational/legal exposure

**Portfolio (If Multiple Use Cases)**
- [ ] Prioritisation criteria are transparent and [CONFIRMED] source-aligned
- [ ] Sequencing explains dependencies and quick wins
- [ ] Financial aggregation avoids double-counting
- [ ] Stakeholder capacity is confirmed (can org execute?)

**GGP Compliance**
- [ ] Every factual claim has a marker ([CONFIRMED]/[INFERENCE]/[GAP]/[UNVERIFIED]/[RISK])
- [ ] No claim is left unmarked
- [ ] Inferences ([INFERENCE]) have explicit assumption statements
- [ ] Gaps ([GAP]) are named and action items assigned
- [ ] High-risk items ([RISK]) have escalation path


---

## GGP Mandatory Validation — Return to SKILL.md

After completing this template's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load template → Create analysis → Template checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

