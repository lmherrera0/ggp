# GGP Analysis Templates Index

## Overview
Analysis templates are consulting-grade frameworks for conducting structured analyses with verified, grounded content. They integrate with the GGP workflow during **Phase 3 — Create + Validate + Deliver** (SKILL.md step 3e) when the deliverable type is an analytical output rather than a narrative or presentation piece.

## How Analysis Templates Integrate with the GGP Workflow

```
GGP PHASE SEQUENCE (see SKILL.md)
│
├─ Phase 1: Load Rules (QUICK_REFERENCE.md or individual files)
├─ Phase 2: Load Channel + Conditionals
│   ├─ Channel template (format, tone, limits)
│   ├─ Conditional: 4.data-analytics-expertise.md (if data content)
│   └─ Conditional: analysis-templates/ ← YOU ARE HERE
│       ├─ Load _index.md (this file)
│       └─ Load matching template (e.g., gap-analysis.md)
│
└─ Phase 3: Create + Validate + Deliver
    ├─ 3a. Classify (channel, audience, risk, complexity)
    ├─ 3b. Information Audit (tag claims with GGP markers)
    ├─ 3c. Iteration Control (max 2 rounds)
    ├─ 3d. Reasoning Gate (CONFIRMED / UNVERIFIED / INFERENCE / RISK)
    ├─ 3e. Create Content — apply analysis template here
    ├─ 3f. Devil's Advocate (8 dimensions scored 1-3)
    ├─ 3g. Validation Gate (8/8 required)
    └─ 3h. Refinement + Clean Output
```

**Key Integration Point:** The *channel* (Phase 2) determines the overall format (PowerPoint, Word doc, one-pager). The *analysis template* (Phase 3, step 3e) determines the internal methodology and structure. Together they ensure both professional presentation and grounded content.

---

## Template Directory

| Analysis Type | File | When to Use | Key Risk Area |
|---|---|---|---|
| **Use Case Analysis** | `use-cases.md` | Presenting business/technology scenarios, implementation roadmaps, capability requests | Fabricated ROI numbers, invented timelines |
| **Benchmark Analysis** | `benchmark-analysis.md` | Competitive positioning, performance comparison, best practice identification | Invented industry averages, cherry-picked metrics |
| **Gap Analysis** | `gap-analysis.md` | Current vs. desired state assessment, capability maturity, compliance readiness | Assumed current state, fabricated maturity levels |
| **SWOT Analysis** | `swot-analysis.md` | Strategic planning, risk assessment, opportunity identification | Generic strengths, invented market trends |
| **Cost-Benefit Analysis** | `cost-benefit-analysis.md` | Investment justification, ROI calculations, business case development | Fabricated vendor costs, invented ROI percentages |
| **Maturity Assessment** | `maturity-assessment.md` | Capability assessment, digital/data maturity evaluation, baseline establishment | Inflated scores, fabricated evidence, wrong model |
| **Stakeholder Analysis** | `stakeholder-analysis.md` | Influence mapping, communication planning, change management prep | Assumed org structure, invented attitudes, outdated data |

---

## How to Use These Templates

### 1. Select the Right Template
Match your analytical requirement to the template type above. Most consulting engagements combine multiple analyses.

### 2. Review GGP Requirements Section
This is **critical**. Each template has a GGP Verification Requirements section that identifies what this analysis type most commonly fabricates or misrepresents. Read it first.

### 3. Gather Sources BEFORE Templating
Complete GGP Phases 1-2 (load rules, identify channel, load conditionals) before filling the template. Do not fill the template and then search for sources—you will hallucinate.

### 4. Apply GGP Markers Consistently
As you populate the template:
- [🟢 **CONFIRMED**] = Tier 1-3 verified source attached
- [🔴 **GAP**] = Data you need but don't have
- [🟡 **INFERENCE**] = Reasonable assumption (declare it)
- [🟠 **UNVERIFIED**] = Could not verify or Tier 4 source
- [⚠️ **RISK**] = Reputational, legal, or credibility risk

### 5. Complete the Quality Checklist
Before submitting the analysis, verify all items in the quality checklist specific to that analysis type.

---

## Common Patterns Across All Templates

### Source Tiers & Markers

For the full source tier hierarchy and citation format, see QUICK_REFERENCE.md §2-3 (always loaded in Phase 1). Below are analysis-specific marker usage rules.

### GGP Marker Usage Rules

**[🟢 CONFIRMED] — When You Can Use This**
- You have a Tier 1-3 source in your source list
- You can cite the source directly
- Data is current (within 1-2 years for market data)
- The specific claim appears in the source

**[🟡 INFERENCE] — When You Must Declare Assumptions**
- Making a reasonable logical leap from data (e.g., "if Company X grew 15% in market growing 8%, market share increased" = [🟡 **INFERENCE**])
- Using internal knowledge (e.g., "typical project team size is 8-12" based on experience)
- Extrapolating from limited data
- **Always declare the assumption explicitly**

**[🔴 GAP] — When You're Missing Data**
- Critical information needed but not available within timeline
- Do not try to fill it—flag it
- Use sparingly; flag forces action

**[🟠 UNVERIFIED] — When Sources Are Weak**
- Information from Tier 4 sources only
- Claims that seem reasonable but you cannot confirm
- Self-reported competitor data
- Never present as fact; always flag

**[⚠️ RISK] — When There's a Credibility Threat**
- Conflicts of interest
- Outdated information presented as current
- Political/sensitive claims without strong source
- Minority opinions presented as consensus
- Reputational or legal exposure if wrong

---

## Anti-Hallucination Checklist (All Templates)

Before marking anything [🟢 **CONFIRMED**], verify:

- [ ] Can I cite this to a specific source?
- [ ] Is that source Tier 1-3?
- [ ] Is the data current (within 1-2 years)?
- [ ] Am I cherry-picking data?
- [ ] If this is a "standard" or "best practice," where is it defined?
- [ ] If this is a number, did I invent it or find it?
- [ ] If this is a timeline, did I make assumptions about complexity?
- [ ] If this is a benchmark, is it comparable scope?

---

## Which Templates Go Together?

Common analysis combinations in consulting engagements:

**Strategy Project**
- SWOT Analysis → Maturity Assessment → Stakeholder Analysis

**Business Case / Investment Approval**
- Gap Analysis → Cost-Benefit Analysis → Stakeholder Analysis

**Competitive Position**
- Benchmark Analysis → SWOT Analysis

**Digital Transformation**
- Maturity Assessment → Gap Analysis → Use Case Analysis → Cost-Benefit Analysis

**Capability Development**
- Stakeholder Analysis → Gap Analysis → Use Case Analysis

---

## Template Quality Standards

All analysis templates in this folder meet these standards:

✓ GGP-first: Every factual claim can be marked [🟢 **CONFIRMED**]/[🔴 **GAP**]/[🟡 **INFERENCE**]/[🟠 **UNVERIFIED**]/[⚠️ **RISK**]
✓ Consulting-grade: Suitable for partner/executive presentation
✓ Anti-hallucination: Explicit guidance on what NOT to invent
✓ Methodology-focused: Step-by-step process, not just a form
✓ Source-aware: Different guidance for Tier 1 vs. Tier 3 sources
✓ Bias-resistant: Checklists to catch common analytical errors

---

## Document History

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-02-06 | Initial release: 7 analysis templates + index |

---

## Next Steps

1. **Choose your analysis type** from the directory above
2. **Open the corresponding template file**
3. **Read the GGP Verification Requirements section first** — this is where the anti-hallucination rules live
4. **Complete GGP Phases 1-2** (rules + channel + conditionals) before touching the template
5. **Fill the template** using GGP markers to show verification status
6. **Run the Quality Checklist** before submitting

Good analyses are *grounded analyses*. Every claim you make should be traceable to a source or explicitly marked as an assumption.

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this template's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load template → Create analysis → Template checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

