# GGP Analysis Templates — Consolidated Knowledge Base
## For Claude Projects / Knowledge Base Upload

> This document consolidates all 7 analysis templates plus the index from GGP into a single reference.

---

## Document Contents

1. **Analysis Index**
2. **Benchmark Analysis**
3. **Cost-Benefit Analysis**
4. **Gap Analysis**
5. **Maturity Assessment**
6. **Stakeholder Analysis**
7. **SWOT Analysis**
8. **Use Cases**

---

# 1. Analysis Index
> Source: `references/analysis-templates/_index.md`

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



---

# 2. Benchmark Analysis
> Source: `references/analysis-templates/benchmark-analysis.md`

# Benchmark Analysis

## Purpose
Benchmark analysis compares organisational performance, capabilities, or competitive position against industry peers, best-in-class operators, or industry standards. It answers "How do we stack up?" and identifies gaps, improvement opportunities, and competitive positioning. Use this when a brief asks to "assess competitive position," "identify best practices," or "measure performance against peers."

## When to Use
- Competitive positioning assessment (where do we rank vs. competitors?)
- Performance improvement opportunity identification (which metrics are underperforming?)
- Best practice identification (what are best-in-class operators doing?)
- Strategic capability comparison (how do our capabilities compare?)
- Investment justification (industry benchmark shows we're X% behind)
- Digital/technology maturity comparison
- Cost/efficiency benchmarking (unit economics vs. peers)
- Quality/service level comparison

---

## GGP Verification Requirements

**This is where benchmark analysis hallucinates most:**

### Primary Fabrication Risks

1. **"Industry Average" Without Source** — AI invents benchmark numbers
   - RULE: NEVER state "industry average" without a Tier 2 source
   - RULE: If you cannot cite the source, mark as [INFERENCE] and state how you derived it
   - Common fabrication: "Average company spends 3% of revenue on IT" (where did this come from?)

2. **Competitive Metric Assumptions** — AI assumes competitor data it doesn't have
   - RULE: Competitor metrics require [CONFIRMED] public filings, analyst reports, or [UNVERIFIED] industry surveys
   - RULE: Never invent competitor data; if unavailable, mark [GAP]
   - RULE: Self-reported competitor data (their website) is Tier 3 max; mark clearly

3. **Comparing Incompatible Scopes** — AI compares apples to oranges
   - RULE: Define EXACTLY what you're measuring (e.g., "Cost per transaction" must have identical scope)
   - RULE: Flag scope differences explicitly (e.g., "Competitor X excludes outsourcing; we include")
   - RULE: Never present normalized figures without explaining normalization method

4. **Best-in-Class Extrapolation** — AI assumes best-in-class is achievable
   - RULE: Flag gap between best-in-class and realistic target
   - RULE: State what enabled best-in-class (context matters: size, geography, stage)
   - RULE: Never use best-in-class as achievable target without business case

5. **Outdated or Subset Benchmarks** — AI uses old data or limited sample
   - RULE: Benchmark currency: use data within 1-2 years for market metrics
   - RULE: For analyst reports, note sample size and methodology
   - RULE: If benchmark based on <10 peers, mark confidence as [INFERENCE] and note limitation

6. **Cherry-Picking Metrics** — AI selects benchmarks that favour the organisation
   - RULE: If we look bad on Metric A, don't hide it by benchmarking Metric B instead
   - RULE: Present balanced set of metrics (gaps and strengths)
   - RULE: If we're weak, state it; propose mitigation, don't ignore

### Source Tier Rules for Benchmarks
| Data Type | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Industry average metrics | ✓ Gartner/Forrester/McKinsey | ✓ Industry analyst reports | [INFERENCE] Case studies (limited sample) | ✗ |
| Competitor financial data | ✓ Public filings (SEC, regulatory) | ✓ Analyst research | ✓ Company website (with care) | ✗ |
| Competitor capabilities | ✓ Analyst comparison | ✓ Product reviews | ✓ Website/demo | ✗ |
| Internal peer benchmarks | ✓ Client data sharing (privacy OK) | ✓ Industry groups/consortiums | [INFERENCE] Industry survey | ✗ |
| Best practice identification | ✓ Published case studies | ✓ Analyst reports | ✓ Company websites | ✗ |
| Technology benchmarks | ✓ Gartner Magic Quadrant | ✓ Analyst reviews | ✓ Independent reviews | ✗ |

---

## Template

### Benchmark Comparison Matrix (Single Dimension)

```
# BENCHMARK ANALYSIS: [Dimension]

## Dimension Definition
**What We're Measuring:** [Specific metric name and definition]

**Example:** "Cost per transaction = Annual transaction costs / Annual transactions processed"
[CONFIRMED]: Our definition aligns with [Gartner / McKinsey / Industry standard]

**Scope Notes:**
- Includes: [What's in scope]
- Excludes: [What's not included — critical for fair comparison]
- Time period: [Year/period measured]
- Currency/normalization: [If applying conversion, state clearly]

**Data Currency:**
- Our data: [CONFIRMED] [Current as of Q4 2025] / [INFERENCE] [Q2 2025, assuming no change]
- Benchmark data: [CONFIRMED] [2025 study] / [INFERENCE] [2024 study, adjusted] / [UNVERIFIED] [2023 or older]

---

## Benchmark Data

### Comparison Table

| Organisation | Metric Value | Source | Data Year | Confidence | Notes |
|---|---|---|---|---|---|
| **Our Company** | [CONFIRMED] $[X] | Internal finance, verified | 2025 Q4 | [CONFIRMED] High | [Methodology if adjusted] |
| **Competitor A** | [INFERENCE] $[X] | Company website, calculated | 2025 | [INFERENCE] Medium | Annual report; excluded outsourced costs |
| **Competitor B** | [UNVERIFIED] $[X] | Estimate from analyst review | 2024 | [UNVERIFIED] Low | Based on sample of [peers]; not directly comparable |
| **Competitor C** | [GAP] | Not publicly available | — | — | Should be assessed via [method] |
| **Industry Average** | [CONFIRMED] $[X] | Gartner 2025 Benchmarking Study | 2025 | [CONFIRMED] High | Sample: [N] companies; median value |
| **Best-in-Class** | [CONFIRMED] $[X] | [Company name] + analyst confirmation | 2025 | [CONFIRMED] High | Context: [Size/stage/geography of best performer] |

### Interpretation

**Where We Stand:**
- [CONFIRMED]: We are [X%] above/below industry average
- [INFERENCE]: Assuming peer comparison adjustments are valid, we rank [#X of Y]
- [GAP]: Competitor C data missing; if worse than Competitor B, we could rank [#X-#Y]

**Gap Analysis:**
- To reach industry average: [INFERENCE] [% improvement needed, e.g., 15% cost reduction]
- To reach best-in-class: [INFERENCE] [% improvement needed, e.g., 35% cost reduction]
- Realism check: [INFERENCE] [Is this achievable given context?]

**Confidence Issues:**
- [RISK] Competitor A data from website (self-reported); may be optimised presentation
- [RISK] Industry average is 2025 data; global sample may not match our geography
- [GAP] Competitor C missing; if included, could shift our ranking by [X positions]

---

## Benchmark Scoring Rubric

**Metric: [Name]**
**Direction:** Lower is better / Higher is better

| Score | Performance Level | Description | Example |
|---|---|---|---|
| 5 | Industry Leading | Top quartile; best-in-class or better | Bottom X% of cost |
| 4 | Above Average | Top 50% of peers; competitive | 25th percentile |
| 3 | At Industry Average | Median performer | 50th percentile |
| 2 | Below Average | Bottom 50% but not bottom quartile | 75th percentile |
| 1 | Lagging | Bottom quartile; significant improvement needed | Top X% of cost |

**Our Score: [INFERENCE] [2] — Below Average**

**Justification:**
- [CONFIRMED]: Our [metric] = $[X]
- [CONFIRMED]: Industry average = $[X]
- [INFERENCE]: We are [X%] worse than average, placing us at [percentile]
- Context: [INFERENCE] Our company is [smaller/larger/earlier-stage] than average peer in benchmark

---

## Multi-Dimension Benchmark (Radar Chart)

### Scoring Summary

| Dimension | Our Score | Industry Avg | Best-in-Class | Gap to Average | Status |
|---|---|---|---|---|---|
| Cost per unit | 2 | 3 | 5 | -1 level | [INFERENCE] Improvement opportunity |
| Quality/defect rate | 4 | 3 | 5 | +1 level | [CONFIRMED] Strength |
| Time to market | 2 | 3 | 4 | -1 level | [INFERENCE] Improvement opportunity |
| Customer satisfaction | 3 | 3 | 5 | 0 | At par |
| Technology currency | 2 | 3 | 4 | -1 level | [INFERENCE] Tech debt risk |

### Radar Chart Visualization
```
[Describe radar chart with 5 dimensions; our score vs. industry average vs. best-in-class]

Interpretation:
[CONFIRMED] Strengths: Quality is our competitive advantage (score 4 vs. industry 3)
[GAP] Gaps: Cost and tech currency lag (score 2 vs. industry 3)
[INFERENCE] Parity: Customer satisfaction on par with industry average
[RISK] Risk: Cost lag may impact competitiveness if market focuses on price
```

---

## Best Practice Identification

### Best-in-Class Operators (Benchmarks to Target)

| Practice | Best-in-Class Example | How It Works | Applicability to Us | Effort to Adopt |
|---|---|---|---|---|
| **Practice A** | Company X | [CONFIRMED] [Verified via case study] — [Description] | [INFERENCE] [Applicable with modifications because...] | [INFERENCE] [Effort estimate] |
| **Practice B** | Company Y | [CONFIRMED] [Verified via analyst report] — [Description] | [GAP] [Not applicable due to...] OR [INFERENCE] [Partially applicable] | — |

**Highest-Impact Practices to Pursue:**
1. [Practice with largest improvement potential + feasibility]
   - Current state: [CONFIRMED] [Our baseline]
   - Target: [INFERENCE] [Realistic improvement, not necessarily best-in-class]
   - Effort: [INFERENCE] [Implementation requirements]
   - Timeline: [INFERENCE] [12-month / 24-month]

2. [Second practice...]

---

## Visualization & Presentation

### Heat Map (Multi-Competitor, Multi-Metric)

```
           Cost  Quality  Speed  Service  Tech
Company A   [CONFIRMED]      [INFERENCE]     [CONFIRMED]      [GAP]
Company B   [INFERENCE]      [CONFIRMED]     [INFERENCE]      [CONFIRMED]
Company C   [GAP]    [CONFIRMED]      [INFERENCE]     [CONFIRMED]
Industry    [CONFIRMED]    [INFERENCE]     [CONFIRMED]      [INFERENCE]

Legend:
[CONFIRMED] Leading (top 25%)
[INFERENCE] Average (25-75%)
[GAP] Lagging (bottom 25%)
```

**Interpretation:** Company A leads on quality, cost, service but lags on tech. We are strong in [?], weak in [?].

### Positioning Map (2-Axis Comparison)

```
                  High Quality
                      △
                      │ Best-in-Class
                      │ (Company X)
         Us ([INFERENCE]) ______|_____ Competitor A
    Low Cost │         │        ([GAP] High Cost)
            │         │ Industry Average
            │         │ ([INFERENCE])
            └─────────┼─────────▶ Low Quality
```

**Position Interpretation:**
- We are at [cost, quality] coordinates
- Target position is [desired coordinates]
- Path to target: [What must improve?]

---

## Caveats & Limitations

### Data Quality Issues
- [INFERENCE] [Competitor A data is self-reported; confidence 60%]
- [INFERENCE] [Industry average includes companies of different sizes; we normalized but accuracy uncertain]
- [UNVERIFIED] [Competitor C data from 2024; market may have shifted]
- [GAP] [Could not find [metric] for [competitor]; gap in analysis]

### Scope Misalignment
- [RISK] [Industry average includes outsourcing; we measure internal only. Comparison not perfect.]
- [RISK] [Best-in-class operator is 10x our size; their unit economics may not be achievable at our scale]
- [RISK] [Competitor A operates in different market; regulatory/cost environment is not comparable]

### Sample Size & Methodology
- [INFERENCE] [Industry average based on [N] companies; if sample is <20, confidence is medium]
- [INFERENCE] [If methodology of benchmark study is unknown, verify via source publication]
- [UNVERIFIED] [Benchmark study is [years old]; market may have evolved]

---

```

### Heat Map Comparison (Multi-Peer, Multi-Dimension)

```
# MULTI-PEER BENCHMARK HEAT MAP

## Scoring Framework (1-5 Scale)

| Level | Definition | Financial Metrics | Capability Metrics |
|---|---|---|---|
| 5 | Best-in-Class | Top 10% | Industry-leading capability |
| 4 | Above Average | Top 25% | Competitive advantage |
| 3 | Industry Average | Median | Competitive parity |
| 2 | Below Average | Bottom 25% | Capability gap |
| 1 | Significantly Lagging | Bottom 10% | Major capability gap |

## Comparative Performance Matrix

```
               Cost    Quality  Speed  Service  Tech    Culture
OurCo          2 [INFERENCE]    4 [CONFIRMED]     2 [INFERENCE]    3 [INFERENCE]     2 [GAP]    3 [INFERENCE]
Competitor A   3 [INFERENCE]    3 [INFERENCE]     4 [CONFIRMED]    2 [GAP]    4 [CONFIRMED]    4 [CONFIRMED]
Competitor B   4 [CONFIRMED]    2 [INFERENCE]     3 [INFERENCE]    4 [CONFIRMED]    3 [INFERENCE]    2 [INFERENCE]
Competitor C   2 [GAP]    4 [CONFIRMED]     5 [CONFIRMED]    5 [CONFIRMED]    5 [CONFIRMED]    3 [INFERENCE]
Ind. Average   3 [CONFIRMED]    3 [INFERENCE]     3 [INFERENCE]    3 [INFERENCE]    3 [INFERENCE]    3 [INFERENCE]
Best-in-Class  5 [CONFIRMED]    5 [CONFIRMED]     5 [CONFIRMED]    5 [CONFIRMED]    5 [CONFIRMED]    5 [CONFIRMED]
```

## Key Insights

### Strength Areas (Score 4+)
- [CONFIRMED] Quality (4): We outperform average; competitive strength
  - Evidence: [CONFIRMED] [Defect rate data, customer satisfaction scores]
  - Competitive moat: [INFERENCE] [Is this defensible or easily copied?]

### Weakness Areas (Score 2 or Lower)
- [GAP] Tech Currency (2): Significant lag vs. competitors A, B, C
  - Risk: [RISK] [Could impact innovation speed, talent attraction]
  - Gap to average: [INFERENCE] 1 level; gap to Competitor C: 3 levels
  - Priority: [INFERENCE] [High — affects strategic positioning]

### Parity Areas (Score 3)
- Service levels at industry average; no competitive advantage but no liability

---

## Improvement Roadmap

### Quick Wins (6-12 months, Score 2 → 3)
- Technology modernization (select [X] systems)
- Process optimisation in [area]

### Medium-Term Initiatives (12-24 months, Score 3 → 4)
- [Capability building]

### Long-Term Aspirations (24+ months, Score 4 → 5)
- [World-class positioning]

---

```

---

## Methodology

### Step 1: Define the Dimension Precisely
1. **Name the metric:** Not "cost" but "cost per transaction"
2. **Define the scope:** What's included/excluded
3. **Set the unit:** $/transaction, FTE/thousand units, days to [outcome]
4. **Verify comparability:** Will you be able to find this metric for peers?
5. **Note assumptions:** How will you normalize (e.g., 2025 currency, adjusted for size)?

**Example:**
- FAIL "Operational efficiency" (too vague)
- ✓ "Cost per invoice processed ($) = Annual invoice processing costs / Annual invoices"

### Step 2: Gather Peer Data (Multi-Source Strategy)
1. **For public companies:** [CONFIRMED] Pull financial data from SEC filings / annual reports
2. **For analyst benchmarks:** [CONFIRMED] Use Gartner, Forrester, McKinsey published benchmarks
3. **For industry groups:** [CONFIRMED] Access consortium data (if member) or [INFERENCE] industry survey results
4. **For competitors:** Mix of [CONFIRMED] public data, [INFERENCE] analyst estimates, [UNVERIFIED] product/website info
5. **Always note source tier and data year**

**Red flags:**
- [RISK] If "industry average" has no source cited, it's fabricated
- [RISK] If competitor data comes only from their website, mark Tier 3 / confidence medium
- [RISK] If benchmark study is 3+ years old, note currency risk

### Step 3: Normalize for Scope Differences
1. **Identify scope mismatches:**
   - Competitor A: "excludes outsourcing" → adjust or note
   - Competitor B: "includes [business unit we don't have]" → extract or exclude
2. **Apply normalization formula:**
   - E.g., if Competitor A is 2x our size, does that matter for this metric?
   - E.g., if benchmark is global but we're regional, adjust for geography
3. **Disclose normalization:** Show the formula; don't hide adjustments

**Example:**
- Competitor A reported $2M cost / 500K transactions = $4/transaction
- But Competitor A outsources 30% of volume
- Normalized: ($2M + estimated $0.5M outsourced) / 500K = $5/transaction (now comparable)
- [INFERENCE] Mark as [INFERENCE] + disclose assumption

### Step 4: Score Our Performance Against Benchmark
1. **Calculate our position:**
   - Our metric value vs. industry average → what percentile?
   - Our metric value vs. best-in-class → how far behind?
2. **Assign score (1-5) using consistent rubric**
3. **Document evidence** for each score point
4. **Flag confidence:** High (multiple sources), Medium (1-2 sources), Low (estimate)

### Step 5: Identify Best Practices to Adapt
1. **For each competitor leading on a metric:** What are they doing differently?
   - [CONFIRMED] Case study / analyst report evidence
   - [INFERENCE] Informed estimate based on their organisation
   - [GAP] Unknown (can be investigated further)
2. **Assess applicability:** Can we adopt the same approach?
   - ✓ Yes, directly → effort estimate & timeline
   - [INFERENCE] Partially, with modifications → explain modifications
   - ✗ No, different context → explain why not applicable
3. **Prioritise:** Which practices have highest impact + feasibility?

### Step 6: Create Multi-Dimensional View (If Multiple Metrics)
1. **Radar chart or heat map:** Shows relative strengths/weaknesses
2. **Positioning map:** Maps us vs. competitors on 2 key axes
3. **Narrative interpretation:** What does the overall picture tell us?

### Step 7: Flag Data Quality & Caveats
- List all data sources, tiers, and confidence levels
- Call out scope misalignments
- Note outdated data (if >2 years old)
- Name missing data gaps ([GAP])

---

## Common Hallucination Traps

### Trap 1: Fabricating "Industry Average"
**[FABRICATION]:** "Industry average cost per transaction is $3.50"
✓ **GROUNDED:** "[CONFIRMED] Gartner 2025 Benchmarking Study of 200 financial services companies reports median cost per transaction of $3.50 (25th-75th percentile range: $2.80-$4.20). Our cost: $4.10, placing us at 60th percentile."

### Trap 2: Comparing Incompatible Scopes
**[FABRICATION]:** "Competitor A cost is $2/transaction vs. our $4, we're 2x higher"
✓ **GROUNDED:** "Competitor A reports $2/transaction but outsources 40% of volume. If we normalize for internal operations only, their effective cost is ~$3.30, still 20% lower than us. Gap is real but more modest than headline figure suggests."

### Trap 3: Assuming Best-in-Class Is Achievable
**[FABRICATION]:** "Best-in-class is $1.50/transaction, we should target that"
✓ **GROUNDED:** "Best-in-class operator (Competitor C) achieves $1.50/transaction. Context: they are 10x our size (economies of scale), operate in high-volume commodity market (vs. our complex transactions), have invested $50M in automation over 5 years. Realistic target for us: $2.80/transaction (industry 75th percentile) by Year 2."

### Trap 4: Cherry-Picking Favorable Metrics
**[FABRICATION]:** Benchmark us against competitors on "customer satisfaction" (where we lead) but ignore "cost efficiency" (where we lag)
✓ **GROUNDED:** Present balanced scorecard (heat map). We lead on quality, lag on cost. Both metrics are important to strategy. Address weakness explicitly: "Cost is a competitive vulnerability. Best practice adoption from Competitor A could reduce our cost by [X%]."

### Trap 5: Self-Reported Competitor Data as Fact
**[FABRICATION]:** "Competitor claims 99.5% uptime; that's our target"
✓ **GROUNDED:** "[INFERENCE] Competitor claims 99.5% uptime on their website (Tier 3, self-reported). [UNVERIFIED] Analyst review suggests actual availability closer to 99% based on incident reports. Independent verification would be needed for certainty. We'll use 99% as realistic target."

### Trap 6: Outdated Benchmark as Current
**[FABRICATION]:** Using 2023 industry average as "current" in 2026 without noting shift
✓ **GROUNDED:** "[INFERENCE] Most recent industry benchmark is 2024 McKinsey study (sample of 150 firms). Technology improvements suggest 2025 average may be 5-10% better, but we use 2024 data as most conservative baseline."

### Trap 7: Ignoring Sample Size or Methodology
**[FABRICATION]:** "Industry average is $3.50" (without noting if based on 10 or 1000 companies)
✓ **GROUNDED:** "Industry average is $3.50 (Gartner, N=200 companies, 2025). Sample is geographically diverse but weighted toward North America. Our company is EMEA-focused; regional average may differ by 5-10%."

---

## Examples

### Good Example: Benchmark Analysis (Properly Grounded)

```
# BENCHMARK ANALYSIS: Cost Per Invoice Processed

## Dimension Definition
**Metric:** Cost per invoice processed ($/invoice)
= Annual invoice processing costs / Annual invoices processed

**Scope:**
- Includes: Staff costs, software, facilities, training for invoice receipt → payment
- Excludes: Accounts payable staff managing supplier relationships (not transactional)
- Normalization: 2025 USD, inflation-adjusted

**Data Currency:**
- Our data: [CONFIRMED] 2025 Q3 actual
- Benchmarks: [CONFIRMED] 2025 analyst study (published Jan 2026)

## Benchmark Data

| Organisation | Cost/Invoice | Data Year | Confidence | Source/Notes |
|---|---|---|---|---|
| **Our Company** | [CONFIRMED] $3.80 | 2025 Q3 | High | Finance system export; verified by CFO |
| **Competitor A** | [INFERENCE] $2.10 | 2025 | Medium | Public filing; excludes outsourced; estimated scope adjustment -$0.30 → $2.40 comparable |
| **Competitor B** | [UNVERIFIED] $1.85 | 2025 | Low | Company website claim; not independently verified |
| **Industry Average** | [CONFIRMED] $3.20 | 2025 | High | Gartner study of 150 companies; median value |
| **Best-in-Class** | [CONFIRMED] $1.20 | 2025 | High | Competitor C (verified case study) |

## Scoring

**Our Score:** [INFERENCE] 2 (Below Average)
- We are $0.60 (19%) above industry average
- 75th percentile positioning (bottom 25%)
- Significant gap to best-in-class ($2.60 difference)

**Confidence Issues:**
- [RISK] Competitor A scope excluded outsourcing; our adjustment assumes comparable cost but is [INFERENCE] uncertain
- [RISK] Best-in-class is a much larger company; economies of scale not achievable at our size
- [INFERENCE] Industry average includes both Fortune 500 (better unit economics) and mid-market (similar to us)

## Realistic Benchmark Assessment

| Comparison | Value | Gap | Timeline | Confidence |
|---|---|---|---|---|
| Industry average | $3.20 | -$0.60 (19% improvement) | 18 months | [INFERENCE] Medium |
| Adjusted best practice | $2.40 | -$1.40 (37% improvement) | 24+ months | [INFERENCE] Medium |
| Best-in-class (unrealistic) | $1.20 | -$2.60 (68% improvement) | Not feasible at our scale | [UNVERIFIED] Low |

## Best Practices Identified

| Practice | Example | How It Works | Applicable? | Effort |
|---|---|---|---|---|
| AP Automation (RPA) | Competitor A | Rules-based routing, auto-matching with PO | ✓ Yes | [INFERENCE] 6-month pilot, $150K investment |
| 3-Way Matching Exception | Competitor B | Only exceptions require manual matching | ✓ Yes | [INFERENCE] Process change, 2-month |
| Vendor Portal | Competitor C | Invoice submission + auto-receipt → faster processing | ✓ Yes | [INFERENCE] 3-month build, $80K |

## Improvement Roadmap

**Year 1 Target: $3.10/invoice (19% improvement to average)**
- Implement 3-way matching exception process (Q1, -$0.30)
- Pilot RPA for invoice data entry (Q2-Q3, -$0.15) → decide full rollout
- Vendor portal soft launch (Q4, -$0.25)

**Year 2 Target: $2.40/invoice (37% improvement)**
- Full RPA rollout
- Expanded vendor adoption

---

## Risk Assessment

[RISK] **Optimisation Ceiling:** Best practices get us to ~$2.40, not $1.20. Competitor C's cost advantage comes from volume (100x ours) and operational context not fully achievable.

[RISK] **Hidden Costs:** RPA investment includes vendor license, internal integration, change management—full cost ~$200K, not $150K.

[GAP] **Missing Data:** Could not benchmark against Competitor D (private company). If they have achieved $1.50/invoice, our improvement roadmap may need acceleration.

```

### Bad Example: Benchmark Analysis (Common Fabrications)

```
# BENCHMARK ANALYSIS: Cost Per Invoice FAIL PROBLEMS BELOW

## Dimension
"Cost efficiency" ← TOO VAGUE; what metric exactly?

## Benchmark Data

| Organisation | Cost/Invoice |
|---|---|
| Our Company | $3.80 |
| Competitors | $2.50 ← FABRICATED AVERAGE; where did this come from? |
| Industry Average | $2.80 ← INVERTED WITHOUT SOURCE |

"Industry average is $2.80" ← NO SOURCE CITED

## Analysis
"We are 35% above average and need to improve" ← TOO SURFACE-LEVEL

## Best Practices
"Best practice is RPA automation" ← GENERIC; which competitor does this? What was their result?

"Implementing RPA will reduce cost to $1.50" ← HALLUCINATED NUMBER
- No methodology shown
- No scope considered
- No reality check (is $1.50 achievable at our volume?)

## Conclusion
"We should target best-in-class ($1.50) within 12 months" ← UNREALISTIC
- No implementation roadmap
- No acknowledgment that best-in-class has different economics
- Timeline is pure assumption

```

---

## Quality Checklist

Before submitting benchmark analysis:

**Dimension & Scope**
- [ ] Metric is precisely defined (not vague like "efficiency")
- [ ] Scope is explicitly stated (in/out of scope)
- [ ] Normalization method is disclosed (if applying adjustments)
- [ ] Data currency noted (year/quarter measured)

**Peer Data Collection**
- [ ] Every benchmark number has a source marker ([CONFIRMED]/[INFERENCE]/[UNVERIFIED])
- [ ] Data year disclosed (current or flagged if >2 years old)
- [ ] Confidence level stated (high/medium/low) with rationale
- [ ] Self-reported competitor data marked as Tier 3 max
- [ ] "Industry average" claim has a named, citable source (not fabricated)

**Scope Comparability**
- [ ] Scope differences between us and peers identified
- [ ] Normalization disclosed (formula or method shown)
- [ ] Incomparable data flagged as [RISK] or [GAP] (not hidden)
- [ ] Competitive data adjusted for known scope mismatches

**Scoring Rubric**
- [ ] 1-5 scale clearly defined with examples
- [ ] Each benchmark score is justified with evidence
- [ ] Evidence sources are marked [CONFIRMED]/[INFERENCE]/[UNVERIFIED]
- [ ] Confidence tier noted (high = multiple sources; low = single source/estimate)

**Best Practice Identification**
- [ ] Each best practice is traced to a specific peer or case study ([CONFIRMED] source)
- [ ] Applicability to our context assessed (✓ applicable, [INFERENCE] partial, ✗ not applicable)
- [ ] Effort to adopt estimated and disclosed
- [ ] Assumptions about implementation stated (not hidden)

**Multi-Dimensional View (If Applicable)**
- [ ] Heat map or radar chart shows full picture (strengths AND weaknesses)
- [ ] Interpretation avoids cherry-picking (we lead here, lag there)
- [ ] Balanced conclusion acknowledges both competitive advantages and vulnerabilities
- [ ] Actionable recommendations prioritised

**Caveats & Confidence**
- [ ] Data quality issues disclosed (self-reported, outdated, limited sample)
- [ ] Scope misalignments flagged
- [ ] Missing data ([GAP] GAPs) named with action items
- [ ] Sample size noted (if benchmark, N=?)
- [ ] Geographic/market context adjustments disclosed

**GGP Compliance**
- [ ] Every factual claim has marker ([CONFIRMED]/[INFERENCE]/[GAP]/[UNVERIFIED]/[RISK])
- [ ] No "industry average" without citable source
- [ ] No competitor data assumed (all verified or marked [UNVERIFIED]/[GAP])
- [ ] No best practice claimed without traced source
- [ ] Best-in-class gap includes reality check (is it achievable?)
- [ ] Hallucinations detected and resolved (no invented numbers)


---

## GGP Mandatory Validation — Return to SKILL.md

After completing this template's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load template → Create analysis → Template checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**



---

# 3. Cost-Benefit Analysis
> Source: `references/analysis-templates/cost-benefit-analysis.md`

# Cost-Benefit Analysis

## Purpose
Cost-benefit analysis (CBA) quantifies the financial case for an investment by comparing costs against benefits to calculate ROI, payback period, and net present value (NPV). It answers "Is this investment worth it? When does it break even? How do we prioritise between competing investments?" Use this when a brief asks to "build a business case," "justify investment," "calculate ROI," or "prioritise capital allocation."

## When to Use
- Investment approval decisions (technology, capability, infrastructure)
- Capital allocation (which projects to fund first?)
- Business case development for executive presentations
- Vendor/solution comparison (which option has better economics?)
- Make-vs-buy decisions
- Process improvement justification
- Digital transformation ROI
- Outsourcing vs. in-house decisions

---

## GGP Verification Requirements

**This is where cost-benefit analysis hallucinates most:**

### Primary Fabrication Risks

1. **Fabricated Cost Numbers** — AI invents vendor pricing or implementation costs
   - RULE: Every cost must be [CONFIRMED] sourced (actual quote, vendor pricing, benchmark) or [INFERENCE] estimated with assumptions
   - RULE: Never invent "software licensing = $50K/year"; contact vendor for actual pricing
   - RULE: All estimates must disclose assumptions (e.g., "assumes 1 PM, 2 developers, 4-month timeline")

2. **Invented ROI Percentages** — AI calculates "35% ROI" without disclosed math
   - RULE: ROI calculation must be transparent and auditable
   - RULE: Never present ROI without showing formula and assumptions
   - RULE: Disclose optimistic vs. conservative scenarios

3. **Benefit Assumption Without Basis** — AI assumes "20% cost savings" without evidence
   - RULE: Every benefit claim needs [CONFIRMED] actual baseline data or [INFERENCE] industry benchmark with disclosure
   - RULE: Mark all benefit projections with confidence level (high/medium/low)
   - RULE: If benefit is "20% reduction," show how: "20% of what? baseline = $[X], projected savings = $[Y]"

4. **Hidden Costs** — AI lists direct costs but misses implementation, change management, support
   - RULE: Cost categories include: direct costs, implementation, training, change, ongoing support, hidden
   - RULE: Use historical project data to estimate all-in cost, not just vendor fees
   - RULE: Add 20-30% buffer to estimates and disclose the buffer

5. **Unrealistic Timeline & Benefit Realization** — AI assumes linear benefit realization
   - RULE: Benefits rarely materialize 100% in Year 1; disclose phasing (e.g., "60% in Year 1, 80% in Year 2, 100% in Year 3")
   - RULE: Implementation timeline is [INFERENCE] always an assumption; disclose key dependencies
   - RULE: Mark payback period as uncertain if depends on behaviour change (adoption risk)

6. **Optimistic Adoption/Adoption Rates** — AI assumes 100% adoption without basis
   - RULE: Adoption assumptions must be realistic; <100% likely
   - RULE: If benefit depends on adoption, mark as high-risk; disclose confidence
   - RULE: Reference historical change management data (20% user resistance is common, not rare)

7. **Ignoring Discount Rate** — AI calculates NPV with vague discount rate
   - RULE: Disclose discount rate (typically 8-12% for corporate investments)
   - RULE: Explain why this rate (company cost of capital? risk adjustment?)
   - RULE: Sensitivity analysis: show NPV if discount rate is 5% vs. 10% vs. 15%

### Source Tier Rules for CBA
| Element | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Vendor pricing | ✓ RFP quote | ✓ Published price list | [INFERENCE] Website list price | ✗ |
| Implementation cost | [INFERENCE] Similar project history | [INFERENCE] Industry benchmark | [INFERENCE] Estimation | ✗ |
| Current baseline (cost, volume) | ✓ Internal finance system | ✓ Audit report | [INFERENCE] Estimate | ✗ |
| Benefit benchmark | ✓ Case study (comparable org) | ✓ Analyst report | [INFERENCE] Vendor claim | ✗ |
| Adoption rate | ✓ Historical data (similar change) | [INFERENCE] Industry average | [INFERENCE] Assumption | ✗ |
| Discount rate | ✓ Company financial policy | [INFERENCE] Industry standard | [INFERENCE] Assumption | ✗ |

---

## Template

### Business Case Executive Summary

```
# BUSINESS CASE: [Investment Name]

## Executive Summary

**Investment Opportunity:** [1-sentence description of what we're investing in and why]

**Financial Summary:**
- Total Investment (3-year): [INFERENCE] $[X] (Year 1: $[X], Years 2-3: $[X] annual)
- Total Benefit (3-year): [INFERENCE] $[X] (conservative estimate)
- Net Benefit (3-year NPV): [INFERENCE] $[X] (discount rate 10%)
- Payback Period: [INFERENCE] [X months] (assumes [key assumption])
- ROI: [INFERENCE] [X%] (Year 3)
- **Recommendation:** [APPROVE / CONDITIONAL / DEFER]

**Key Assumptions:**
- [INFERENCE] [Adoption rate X%]
- [INFERENCE] [Implementation timeline X months]
- [INFERENCE] [Benefit realization X% in Year 1, Y% in Year 2]

**Key Risks:**
- [RISK] [Critical risk and mitigation]
- [RISK] [Secondary risk and mitigation]

---

## Business Problem & Opportunity

**Current Situation:**
- [CONFIRMED]: Current state metrics (baseline)
- Cost of status quo: [INFERENCE] $[X] annually in [cost category]
- Business impact: [What problem are we solving?]

**Proposed Solution:**
- [High-level description of what we're doing]
- [Capability or outcome we'll gain]

**Why Now?**
- [CONFIRMED] Market driver: [Competitive, regulatory, market-driven reason]
- OR [INFERENCE] Operational driver: [Cost, quality, efficiency problem that's grown]
- Timeline urgency: [When must we decide/act?]

---

## Financial Analysis

### Cost Breakdown (All-In, 3-Year)

#### Year 1

| Cost Category | Amount | Source | Confidence | Notes |
|---|---|---|---|---|
| **Software/Licenses** | | | | |
| Vendor license (annual) | [CONFIRMED] $[X] | RFQ from vendor, Dec 2025 | High | Per [pricing model] |
| Subtotal | $[X] | | | |
| **Implementation** | | | | |
| Services (vendor) | [INFERENCE] $[X] | Vendor estimate; assumes [scope] | Medium | Actual cost may vary |
| Internal PM/BA time | [INFERENCE] $[X] | Estimated [#] FTE × [months] × [loaded cost] | Medium | Risk: scope creep |
| Integration/customisation | [INFERENCE] $[X] | Estimated [#] days × [daily rate] | Medium | Assumes [tech stack] |
| Subtotal | $[X] | | | |
| **Training & Change** | | | | |
| Training program | [INFERENCE] $[X] | [#] staff × [hours] × [cost/hour] | Medium | Assumes 3-day classroom |
| Change management | [INFERENCE] $[X] | Estimated [#] FTE for resistance management | Low | May be underestimated |
| Subtotal | $[X] | | | |
| **Ongoing Support (Year 1)** | | | | |
| Support/maintenance | [CONFIRMED] $[X] | 15% of software cost (industry standard) | High | Included in vendor contract |
| Subtotal | $[X] | | | |
| **TOTAL Year 1** | [INFERENCE] $[X] | | | |

#### Years 2-3

| Cost Category | Year 2 | Year 3 | Assumption |
|---|---|---|---|
| Software/licenses | [CONFIRMED] $[X] | [CONFIRMED] $[X] | 3% annual increase |
| Support | $[X] | $[X] | Included in license |
| Ongoing staff | [INFERENCE] $[X] | [INFERENCE] $[X] | 1 FTE support (new role) |
| **TOTAL** | $[X] | $[X] | |

**Cost Confidence & Risks:**
- [CONFIRMED] High confidence on software license (quoted price)
- [INFERENCE] Medium confidence on implementation (depends on actual complexity; if [hidden complexity], could add 20%)
- [INFERENCE] Low confidence on change management (often underestimated; risk = +$50K)

**Total 3-Year Investment: [INFERENCE] $[X] (range: $[X]-$[X] if risks materialize)**

---

### Benefit Quantification (Conservative, Realistic, Optimistic Scenarios)

#### Current Baseline
| Metric | Current State | Source | Notes |
|---|---|---|---|
| [Metric 1] | [CONFIRMED] $[X] | Finance system | Based on 2025 YTD |
| [Metric 2] | [CONFIRMED] [X] units | Operations data | Measured for 6 months |
| [Metric 3] | [CONFIRMED] [X] FTE | HR records | Headcount as of Dec 2025 |

#### Benefit 1: Cost Reduction

| Scenario | Year 1 | Year 2 | Year 3 | Assumption | Confidence |
|---|---|---|---|---|---|
| **Conservative** | [INFERENCE] $[X] | [INFERENCE] $[X] | [INFERENCE] $[X] | 50% adoption by Year 2; 70% by Year 3 | Medium |
| **Realistic** | [INFERENCE] $[X] | [INFERENCE] $[X] | [INFERENCE] $[X] | 70% adoption; full benefit realized by Year 2.5 | Medium |
| **Optimistic** | [INFERENCE] $[X] | [INFERENCE] $[X] | [INFERENCE] $[X] | 90% adoption; accelerated timeline | Low (high-risk) |

**Benefit Explanation:**
- Baseline: [CONFIRMED] [Metric] currently costs $[X]
- Projected change: [INFERENCE] Solution reduces [metric] by [X%]
- Calculation: $[X] × [X%] = $[Y] annual savings
- Confidence: [INFERENCE] Medium (assumes adoption [assumption]; industry benchmark shows [range] possible; we're using conservative end)

**Supporting Evidence:**
- [CONFIRMED] Case study: [Similar company] achieved 40% cost reduction (Company A annual report, 2024)
- [INFERENCE] Assumption: Their context (size, maturity, process stage) = ours; estimate 35-40% savings for us
- [RISK] Risk: If adoption <50%, savings could be 0

#### Benefit 2: Efficiency/Productivity Gain

| Benefit | Metric | Current | Projected | Savings | Timeline | Source |
|---|---|---|---|---|---|---|
| Faster processing | Days/transaction | [CONFIRMED] 3 days | [INFERENCE] 1 day | $[X] labour cost | Year 2 (assumes training ramp) | [INFERENCE] Estimated based on [process change] |
| Reduced errors | Error rate | [CONFIRMED] 3% | [INFERENCE] <1% | $[X] rework cost | Year 1.5 (after stabilization) | [INFERENCE] Assumption; [industry data shows similar] |
| Fewer FTE needed | Headcount | [CONFIRMED] 10 FTE | [INFERENCE] 7 FTE | $[X] (3 FTE × loaded cost) | Year 3 (attrition, not layoff) | [INFERENCE] Assumption; redeployed, not eliminated |

**Risk: If [adoption/behaviour] doesn't occur, benefits don't materialize**

#### Benefit 3: Risk/Compliance Reduction (Hard to Quantify)

| Risk Metric | Current | Projected | Benefit Valuation | Confidence |
|---|---|---|---|---|
| Audit findings | [CONFIRMED] 4/year | [INFERENCE] <1/year | [INFERENCE] $[X] (avoided costs + brand risk) | Medium |
| Compliance exposure | [INFERENCE] [Estimated at $[X]M risk] | Mitigated | [INFERENCE] $[X] (risk reduction value) | Low |

**Note:** Risk reduction benefits are harder to prove (prevents bad thing from happening). Value them conservatively.

---

### Financial Summary

#### Net Present Value (NPV) Calculation

**Assumptions:**
- Discount rate: 10% (company cost of capital)
- Time horizon: 3 years (beyond that, benefits uncertain)

| Year | Cost | Benefit | Net Cash Flow | Discount Factor | Present Value |
|---|---|---|---|---|---|
| Year 0 (Setup) | -$[X] | $0 | -$[X] | 1.0 | -$[X] |
| Year 1 | -$[X] | [INFERENCE] $[X] (40% realized) | [INFERENCE] $[X] | 0.91 | [INFERENCE] $[X] |
| Year 2 | -$[X] | [INFERENCE] $[X] (80% realized) | [INFERENCE] $[X] | 0.83 | [INFERENCE] $[X] |
| Year 3 | -$[X] | [INFERENCE] $[X] (100% realized) | [INFERENCE] $[X] | 0.75 | [INFERENCE] $[X] |
| **NPV (10% discount)** | | | | | [INFERENCE] **$[X]** |

**Sensitivity Analysis (What if discount rate changes?):**
| Discount Rate | NPV | Recommendation |
|---|---|---|
| 5% (low risk/cost of capital) | [INFERENCE] $[X] (higher) | Strongly positive |
| 10% (base case) | [INFERENCE] $[X] | Positive |
| 15% (high risk/cost of capital) | [INFERENCE] $[X] (lower) | Still positive / Marginal |

**Interpretation:** NPV is positive even at 15% discount rate, suggesting this is a robust investment.

#### Payback Period & ROI

**Payback Calculation:**
- Total investment: $[X]
- Annual benefit (steady state): [INFERENCE] $[X]
- Payback period: [INFERENCE] [X months] (assuming [benefit realization timeline])
- **Risk to payback:** If [key assumption fails], payback extends to [X months] or becomes negative

**Return on Investment (Year 3):**
- 3-year benefit: [INFERENCE] $[X]
- 3-year cost: $[X]
- ROI: [INFERENCE] [X%] (total return divided by investment)
- OR annualized ROI: [INFERENCE] [X%]

**Confidence in Financial Case:**
- [CONFIRMED] Costs are well-understood (vendor quotes + project data)
- [INFERENCE] Benefits depend on [key assumption] (adoption rate, behaviour change, timeline)
- [INFERENCE] Confidence: Medium — case is sound IF assumptions hold; at risk if [specific driver] fails

---

## Scenario Analysis

### Downside Case (Conservative/Risk Scenario)

**Assumptions:**
- [INFERENCE] Adoption rate: 50% (vs. 70% realistic case)
- [INFERENCE] Timeline: 20% slower than estimated
- [INFERENCE] Implementation cost overrun: +20%

**Results:**
- 3-year cost: $[X] (+$[X])
- 3-year benefit: $[X] (-$[X])
- NPV: [INFERENCE] $[X] (reduced but still positive)
- Payback: [INFERENCE] [X months] (extended by X months)

**When would we choose this case?** If risk factors materialize or adoption is slower than expected.

### Upside Case (Optimistic Scenario)

**Assumptions:**
- [INFERENCE] Adoption rate: 90% (highly engaged organisation)
- [INFERENCE] Benefits realized faster (6-month timeline for 80% benefit)
- [INFERENCE] No implementation overruns

**Results:**
- 3-year benefit: $[X] (much higher)
- NPV: [INFERENCE] $[X]
- Payback: [INFERENCE] [X months]

**When would we achieve this?** If leadership commitment is strong + change management is excellent + adoption is rapid.

**Recommendation:** Use realistic case for planning. Monitor against downside; celebrate if upside achieves.

---

## Risk Analysis & Mitigation

### Financial Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| [RISK] Implementation cost overrun | Medium | -$[X] (20% increase) | Fixed-price vendor contract; phased approach |
| [RISK] Adoption rate lower than 70% | Medium-High | Benefits drop 30% | Strong change management; user incentives |
| [RISK] Hidden integration costs | Medium | +$[X] | Early technical assessment; fixed scope |
| [RISK] Key person turnover | Low | Timeline delay | Knowledge documentation; 2-person trained |

### Assumption Risks

| Critical Assumption | Confidence | Upside if True | Downside if False | Monitoring Plan |
|---|---|---|---|---|
| [INFERENCE] 70% adoption within 12 months | Medium | Benefits fully realized | Benefits drop by 30% | Track adoption metrics monthly |
| [INFERENCE] 30% cost reduction achievable | Medium | Benefits higher | Benefits lower/zero | Pilot assessment in Month 2 |
| [INFERENCE] Timeline [X months] realistic | Medium | Year 1 benefits, faster payback | Extended timeline, delayed payback | Gated reviews at 25%/50%/75% |

---

## Decision Gate & Recommendations

### Approval Criteria

This investment meets approval criteria if:
- [ ] NPV is positive at 10% discount rate ✓ YES
- [ ] Payback is <[X] months ✓ YES (or conditional)
- [ ] Key risks have mitigation plans ✓ YES
- [ ] Executive sponsor confirmed ✓ [Pending]
- [ ] Adoption/change management plan exists ✓ [Pending]

### Recommendation

**Primary:** APPROVE with conditions
- Proceed if [key condition] is met (e.g., "vendor agrees to fixed-price implementation")
- Secure executive sponsor + change management lead before contract

**Alternative:** DEFER to [date]
- If [condition] is not met, recommend reconsidering

**Why this investment now?**
- [CONFIRMED] Market/competitive driver: [Why timing matters]
- Delay cost: If we wait X months, [competitive risk or cost implication]

---

## Governance & Next Steps

**Decision Authority:** [CFO / [Committee] by [date]

**If Approved, Next Steps:**
1. [Contract negotiation] — 2 weeks
2. [Project kickoff] — Week 3
3. [Delivery milestone 1] — Week [X]
4. [Gated review] — Month [X]

**Success Metrics (Post-Implementation):**
| Metric | Target | Frequency |
|---|---|---|
| Adoption rate | >70% | Monthly |
| [Benefit 1 metric] | [Target value] | Monthly |
| Cost tracking | Within 10% of estimate | Weekly |
| [ROI metric] | On track for payback [date] | Quarterly |

---

```

### Cost & Benefit Details (Appendix Format)

```
## APPENDIX A: Detailed Cost Assumptions

### Software Licensing
- **Product:** [Name]
- **Vendor Quote:** [CONFIRMED] $[X]/year per [unit]
- **Quantity:** [#] [units]
- **Annual cost Year 1:** [CONFIRMED] $[X]
- **Cost inflation assumption:** 3% annually
- **Included in price:** [Support, updates, etc.]
- **NOT included:** [Custom development, implementation]

### Implementation Services
- **Scope:** [Description]
- **Estimate method:** [INFERENCE] [Vendor estimate / Industry benchmark / Historical analogy]
- **Vendor estimate:** [INFERENCE] $[X] for [scope]
- **Assumptions:** [Team size, duration, complexity level]
- **Risk buffer:** 20% = $[X]
- **Total estimated:** [INFERENCE] $[X]

### Internal Resources
- **Project Manager:** [#] FTE × [duration in months] × [loaded cost/month] = $[X]
- **Business Analyst:** [#] FTE × [duration] × [cost] = $[X]
- **Technical Lead:** [#] FTE × [duration] × [cost] = $[X]
- **Data Migration Support:** [#] FTE × [duration] × [cost] = $[X]

### Change Management & Training
- **Training:** [#] staff × [hours/person] × [cost/hour] = $[X]
- **Change communication:** [#] FTE × [duration] = $[X]
- **Adoption support (first month):** [Cost] = $[X]

---

## APPENDIX B: Benefit Assumptions & Validation

### Benefit 1: Cost Reduction ([Metric])

**Baseline (Current State):**
- [CONFIRMED] Annual [metric] cost: $[X] (Finance system, 2025)
- Composition: [Details of what makes up this cost]

**Future State (After Solution):**
- [INFERENCE] Projected [metric] cost: $[X]
- Reduction: [X%]

**How we'll achieve it:**
- [Mechanism 1: e.g., "automation reduces headcount from X to Y"]
- [Mechanism 2: e.g., "process redesign cuts cycle time by X%"]
- [Mechanism 3]

**Evidence for this benefit:**
- [CONFIRMED] Case study: [Company A] achieved [X%] reduction (Published report, 2024)
- [INFERENCE] Our confidence: [X%] (lower than case study due to [reason])

**Timeline to realization:**
- [INFERENCE] Month 1-3: [0% benefit — still stabilizing]
- [INFERENCE] Month 4-6: [40% benefit — some adoption, some processes stabilizing]
- [INFERENCE] Month 7-12: [70% benefit — widespread adoption, process stable]
- [INFERENCE] Month 13-24: [100% benefit — fully optimised]

**Adoption dependency:**
- Benefit assumes [X%] of staff adopt solution
- If adoption drops to [Y%], benefit drops proportionally
- Confidence: [INFERENCE] Medium (based on historical change data showing X% adoption typical)

---

## APPENDIX C: Sensitivity Analysis

### What-If Analysis: Key Assumption Variations

**If Adoption Rate is 50% (vs. 70% base case):**
| Metric | Base Case | 50% Adoption | Impact |
|---|---|---|---|
| Year 3 benefit | $[X] | $[X] | -$[X] / -[X%] |
| Payback | [X months] | [X months] | Delayed by [X months] |
| NPV | $[X] | $[X] | Reduced by $[X] |

**Decision:** Still positive NPV; recommend proceeding but with strong change management.

**If Implementation Takes 6 Months Longer:**
| Metric | Base Case | +6 month delay | Impact |
|---|---|---|---|
| Year 1 benefit | $[X] | $[X] | Delayed to Year 2 |
| Payback | [X months] | [X months] | Delayed by 6 months |
| NPV | $[X] | $[X] | Reduced by $[X] (time value) |

**Decision:** Still acceptable; recommend gated review at Month 6 to course-correct.

**If Vendor Cost Is 20% Higher Than Quote:**
| Metric | Base Case | +20% cost | Impact |
|---|---|---|---|
| 3-year cost | $[X] | $[X] | +$[X] |
| NPV | $[X] | $[X] | Reduced by $[X] |
| ROI | [X%] | [X%] | Reduced by [X%] |

**Decision:** NPV still positive; negotiate fixed price with vendor to mitigate risk.

---

```

---

## Methodology

### Step 1: Define the Investment & Scope
1. **What are we investing in?** Be specific (not just "AI system" but "AI chatbot for customer service")
2. **Why this investment?** Problem we're solving, opportunity we're seizing, risk we're mitigating
3. **Who benefits?** What part of the org? What process improves?
4. **Time horizon:** 3-year business case is standard; adjust for longer-life assets

### Step 2: Establish Current Baseline (Real Data)
1. **Quantify current state:** Current costs, current productivity, current staffing
2. **Source the baseline:** Finance system, operational data, audit
3. **Mark as [CONFIRMED]:** This is your anchor point; must be solid

### Step 3: Estimate All-In Costs (Not Just Vendor Fees)
1. **Software/licensing:** Vendor quote [CONFIRMED] or price list [INFERENCE]
2. **Implementation:** Internal + vendor costs (don't underestimate)
3. **Training & change:** Often 20-30% of project cost
4. **Ongoing support:** First year + recurring years
5. **Hidden costs:** Integration, data migration, workarounds
6. **Buffer:** Add 15-20% for unknowns; disclose the buffer

**Critical:** Never present just vendor software cost. Total cost includes labour, training, support.

### Step 4: Identify & Quantify Benefits (With Confidence)
1. **Benefit type:** Cost reduction, efficiency, revenue growth, risk mitigation
2. **Baseline:** What's current state? (must be [CONFIRMED] verified)
3. **Mechanism:** How will the solution drive benefit? (must be specific, not vague)
4. **Evidence:** Case study? Benchmark? (source it with Tier 1-3)
5. **Our context:** Are we comparable to the case study? What's different?
6. **Conservative estimate:** Use lower end of range, not optimistic
7. **Timeline:** When does benefit materialize? (rarely 100% in Year 1)

**Critical:** Benefits depend on adoption and behaviour change. Mark adoption risk explicitly.

### Step 5: Calculate Financial Metrics
1. **NPV:** Net present value at discount rate (typically 10%)
2. **Payback period:** How long to recover investment?
3. **ROI:** Return on investment (Year 3 or steady state)
4. **Sensitivity analysis:** How do results change if key assumptions shift?

### Step 6: Identify Risks & Mitigations
1. **Financial risks:** Cost overrun, benefit shortfall, timeline delay
2. **Assumption risks:** What if adoption is lower? What if timeline slips?
3. **Mitigation plans:** For each risk, what's your plan to prevent or respond?

### Step 7: Scenario Analysis (Optional but Recommended)
1. **Downside case:** What if risks materialize? Is it still worth it?
2. **Upside case:** What if execution is excellent? Faster payback?
3. **Use realistic case for planning; monitor against downside**

---

## Common Hallucination Traps

### Trap 1: Fabricated Vendor Pricing
**[FABRICATION]:** "Software cost: $50K/year"
✓ **GROUNDED:** "[CONFIRMED] Vendor quote (RFQ Dec 2025): $[X]/transaction × [projected volume] = $50K/year, with 3% annual increase. Confirmed by [procurement contact]."

### Trap 2: Hidden Costs Omitted
**[FABRICATION]:** "Total implementation cost: $150K (vendor services + 3 months internal time)"
✓ **GROUNDED:** "Direct costs: $150K (vendor). Hidden costs: $80K internal PM/BA, $60K training, $40K data migration, $20K support ramp. Total: $350K. Vendor estimate often excludes [X%] of total effort."

### Trap 3: Unrealistic Benefit Realization
**[FABRICATION]:** "Year 1 benefit: $200K cost savings (full adoption)"
✓ **GROUNDED:** "[INFERENCE] Conservative benefit realization timeline: 40% Year 1 (=$80K), 75% Year 2 (=$150K), 100% Year 3 (=$200K). Assumes [adoption ramp]. If adoption is faster, benefits could be $150K Year 1."

### Trap 4: Adopted Adoption Rate Without Evidence
**[FABRICATION]:** "We estimate 85% adoption"
✓ **GROUNDED:** "[INFERENCE] Historical adoption data from [similar change] shows 65% adoption within 12 months. We'll assume 70% for this case (slightly better due to [improved change plan]). Risk: Could drop to 50% if [resistance factor]."

### Trap 5: Transparent Cost Calculation
**[FABRICATION]:** "NPV = $500K" (formula not shown, assumptions not disclosed)
✓ **GROUNDED:** "NPV calculation shown in table above. Assumes 10% discount rate, [X%] adoption, [Y%] benefit realization timeline. Sensitivity analysis: if discount rate is 15%, NPV reduces to $[X]. If adoption is 50%, NPV drops to $[X]."

### Trap 6: Ignoring Competing Investments
**[FABRICATION]:** "This investment should be approved" (no comparison to alternatives)
✓ **GROUNDED:** "Comparing 3 investment options [A, B, C]: Option A has best ROI ([X%]), fastest payback ([X months]), and lowest risk. Recommend Option A."

### Trap 7: Benefit Stacking Without Reality Check
**[FABRICATION]:** "Cost savings $200K + Efficiency gain $150K + Revenue growth $100K = Total $450K benefit"
✓ **GROUNDED:** "Conservative benefit estimate (single largest driver): $200K cost reduction. Secondary benefits (efficiency, revenue) are speculative; excluding for conservative case. If both materialize, could reach $450K, but confidence is low."

---

## Examples

### Good Example: Business Case (Properly Grounded)

```
# BUSINESS CASE: Cloud Migration

## Executive Summary

**Investment:** Migrate from on-premise infrastructure to cloud platform
**Total 3-Year Cost:** [INFERENCE] $800K (Year 1: $350K, Years 2-3: $225K/year)
**Total 3-Year Benefit:** [INFERENCE] $1.2M (conservative: cost reduction + efficiency)
**NPV (10% discount):** [INFERENCE] $250K
**Payback:** [INFERENCE] 18 months
**Recommendation:** APPROVE — positive NPV even at 15% discount rate; fast payback

---

## Cost Detail

### Year 1 Costs

| Item | Amount | Source | Notes |
|---|---|---|---|
| Cloud platform license | [CONFIRMED] $60K | Vendor quote, negotiated | $5/month per user × 1000 users |
| Migration services (vendor) | [INFERENCE] $120K | Vendor estimate | 3-month project, [X] staff |
| Internal migration team | [INFERENCE] $100K | Project plan: 1 PM (100%), 2 architects (50%, 3 months) | Loaded cost $80/hour |
| Training | [INFERENCE] $30K | 1000 staff × 1 day × [cost] | Assumes 80% attendance |
| Applications integration | [INFERENCE] $40K | Estimated 200 hours × $200/hour | Assumes moderate complexity |
| **Total Year 1** | [INFERENCE] $350K | | |

### Years 2-3

| Item | Year 2 | Year 3 | Notes |
|---|---|---|---|
| Cloud platform | $60K | $62K | 3% annual increase |
| Ongoing support | $100K | $105K | New Cloud Services team (1.2 FTE) |
| **Total** | $160K | $167K | |

---

## Benefits

### Benefit 1: Infrastructure Cost Reduction

**Baseline:** On-premise infrastructure annual cost = [CONFIRMED] $200K (IT budget 2025)
- Servers/hardware maintenance: $80K
- Data centre costs: $70K
- IT staff (50% of 2 FTE): $50K

**Future State:** Cloud cost = [CONFIRMED] $60K (as above)

**Savings:** $140K annual (starting Year 2, when migration complete)

**Timeline:**
- Year 1: 0% (still running both systems during migration)
- Year 2: 70% savings = $98K (hybrid environment first 6 months)
- Year 3: 100% savings = $140K

**Evidence:** [CONFIRMED] Gartner report shows cloud migration typically saves 30-40% on infrastructure; we conservatively estimate 70% (due to retiring legacy hardware).

---

### Benefit 2: Operational Efficiency

**Baseline:** Current system administration requires 2 FTE × $80K = [CONFIRMED] $160K/year

**Future State:** Cloud requires lighter touch; estimate 1 FTE = $80K/year

**Savings:** $80K annual (starting Year 1.5 after training stabilizes)

**Timeline:**
- Year 1: 0% (ramp-up, still supporting both systems)
- Year 2: 50% = $40K (team still learning; gradual reduction)
- Year 3: 100% = $80K (full efficiency)

**Evidence:** [INFERENCE] Assumption based on platform documentation and 3 customer interviews showing 30-50% FTE reduction. We use 50% as estimate.

**Risk:** If platform is more complex than expected, could achieve only 25% reduction.

---

### Benefit 3: Agility & Availability (Risk Mitigation)

**Baseline:** [CONFIRMED] Current system: 95% availability; incidents cost ~$50K/year (lost productivity + brand impact)

**Future State:** [INFERENCE] Cloud platform: 99.9% availability (per SLA); estimated $10K/year incident cost

**Savings:** [INFERENCE] $40K annual (risk mitigation value)

**Confidence:** Low (hard to prove — prevents bad thing from happening)

---

## Financial Summary

### NPV Calculation (3-Year, 10% Discount Rate)

| Year | Cost | Benefit | Net | Discount | PV |
|---|---|---|---|---|---|
| Year 0 | -$350K | $0 | -$350K | 1.0 | -$350K |
| Year 1 | -$160K | $40K | -$120K | 0.91 | -$109K |
| Year 2 | -$167K | $238K | $71K | 0.83 | $59K |
| Year 3 | -$167K | $260K | $93K | 0.75 | $70K |
| **NPV** | | | | | [INFERENCE] **-$330K** |

Wait, NPV is negative! Let me recalculate...

[Recalculating with realistic benefit timeline]

| Year | Cost | Benefit | Net | Discount | PV |
|---|---|---|---|---|---|
| Year 0 | -$350K | $0 | -$350K | 1.0 | -$350K |
| Year 1 | -$160K | $20K (efficiency starting) | -$140K | 0.91 | -$127K |
| Year 2 | -$167K | $178K (infra + efficiency) | $11K | 0.83 | $9K |
| Year 3 | -$167K | $220K (both benefits full) | $53K | 0.75 | $40K |
| **NPV** | | | | | [INFERENCE] **-$428K** |

Hmm, still negative. Let me check Year 2-3 benefit assumptions...

[Recalculating more carefully]

Actually, I realize I made error — Year 2 benefit should include infrastructure savings (which only start in Year 2). Let me recalculate Year 2: Infrastructure $98K + Efficiency $40K = $138K. Year 3: Infrastructure $140K + Efficiency $80K + Risk mitigation $40K = $260K.

| Year | Cost | Benefit | Net | Discount | PV |
|---|---|---|---|---|---|
| Year 0 | -$350K | $0 | -$350K | 1.0 | -$350K |
| Year 1 | -$160K | $20K | -$140K | 0.91 | -$127K |
| Year 2 | -$167K | $138K | -$29K | 0.83 | -$24K |
| Year 3 | -$167K | $260K | $93K | 0.75 | $70K |
| **NPV** | | | | | [INFERENCE] **-$431K** |

This is still negative, which suggests my benefit timeline is too conservative. Let me revise: if we assume 50% benefit in Year 1 (due to hybrid running), full benefit starts Year 2:

Revised:
| Year | Cost | Benefit | Net | Discount | PV |
|---|---|---|---|---|---|
| Year 0 | -$350K | $0 | -$350K | 1.0 | -$350K |
| Year 1 | -$160K | $70K (50% of Year 2 benefit) | -$90K | 0.91 | -$82K |
| Year 2 | -$167K | $200K (full benefit) | $33K | 0.83 | $27K |
| Year 3 | -$167K | $220K | $53K | 0.75 | $40K |
| **NPV** | | | | | [INFERENCE] **-$365K** |

Let me recalculate from scratch with clearer logic. If Year 3 benefit is $220K annually, payback should occur in ~2 years ($350K ÷ $175K average annual benefit). Let me use this simpler approach:

---

### Revised Financial Summary

**Investment:** $350K Year 1 + $160K Year 2 + $167K Year 3 = $677K total

**Benefits:**
- Year 1: $20K (early efficiency gains)
- Year 2: $180K (infrastructure savings + efficiency)
- Year 3: $260K (full benefits)

**3-Year Total:** $20K + $180K + $260K = $460K

**NPV (10% discount):** [INFERENCE] $460K - $677K = -$217K

**Interpretation:** Negative 3-year NPV. However, Year 4 onwards would have $260K annual benefit with minimal cost (so long-term NPV is positive). This is a long-payoff investment.

**Payback Period:** ($350K + $160K) ÷ $180K average = ~2.8 years (just under 3 years)

**Alternative Analysis — 5-Year View:**
- 5-year benefit: $20K + $180K + $260K + $260K + $260K = $980K
- 5-year cost: $677K + $167K + $167K = $1.011K
- Net: -$31K (breakeven, nearly)

**Decision:** This is a "breakeven or slightly negative" case depending on discount rate and time horizon. Recommend only if strategic value (agility, risk mitigation) justifies breakeven economics. Not a strong financial case on pure ROI.

**Revised Recommendation:** CONDITIONAL APPROVE
- Approve if [strategic requirement] justifies breakeven investment
- Alternative: Reduce scope to Phase 1 (critical systems only) to improve ROI

---

## Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Migration complexity exceeds estimate | Medium | Cost +$100K | Fixed-price contract; phased approach |
| Infrastructure cost savings less than expected | Medium | Benefit -$50K | Detailed cost baseline audit upfront |
| Adoption / behaviour change slow | Medium-High | Benefit -$70K | Strong change management; incentives |
| Cloud vendor increases pricing | Low | Recurring cost +20% | Long-term contract locks in pricing |

## Sensitivity Analysis

**If Adoption Is Slower (50% benefit realization Year 2 instead of 70%):**
- 3-year benefit drops to $380K
- NPV: -$297K (worse)
- Recommendation: Even more negative; would not recommend

**If We Extend to 5-Year View:**
- 5-year benefit: $980K
- NPV becomes positive (~$50K at 10% discount)
- Payback: ~3 years
- Recommendation: Long-term positive; acceptable if org can absorb 3-year payback

---

## Recommendation

**PRIMARY:** CONDITIONAL APPROVE
- Approve if [business requirement justifies long payback]
- Lock in infrastructure cost baseline upfront (audit current costs)
- Implement strong change management (critical to benefit realization)

**ALTERNATIVE:** REDUCE SCOPE
- Phase 1: Migrate critical systems only (smaller investment, better ROI)
- Phase 2: Migrate remaining systems after Phase 1 proves value

---

```

### Bad Example: Business Case (Common Fabrications)

```
# BUSINESS CASE: Cloud Migration FAIL PROBLEMS

## Cost

"Implementation cost: $200K"
- FAIL Only includes vendor implementation, not internal labour
- FAIL No training/change management included
- FAIL Will actually cost $500K+ once hidden costs included

## Benefits

"Annual infrastructure savings: $150K"
- FAIL No baseline given (how did you calculate savings?)
- FAIL No evidence cited (are you assuming 75% cost reduction? Why?)
- FAIL Assumes 100% adoption Year 1 (unrealistic)

"Agility improvements worth $200K/year"
- FAIL How did you value "agility"? No formula shown
- FAIL Invented number with no supporting data

## ROI

"3-Year ROI: 150%"
- FAIL Formula not shown
- FAIL Likely based on fabricated benefit numbers
- FAIL Doesn't match simple math ($200K cost ÷ $150K annual benefit = ~1.3 year payback, NOT 150%)

## Risks

"Risk: Adoption may be slow"
- FAIL Too vague; doesn't quantify impact
- FAIL No mitigation plan

"Alternative: Don't migrate"
- FAIL Not actually addressed as risk
- FAIL What happens if we don't migrate?

## Problems

- Cost is understated (only vendor, not all-in)
- Benefits are invented (no baseline, no evidence)
- ROI math doesn't match claimed numbers
- Risks identified but not quantified
- No sensitivity analysis (what if X assumption is wrong?)
- Reads like a proposal pitch, not a business case

```

---

## Quality Checklist

Before submitting cost-benefit analysis:

**Cost Estimation**
- [ ] All cost categories included (software, services, internal labour, training, change, support, hidden)
- [ ] Vendor costs are [CONFIRMED] quoted or [INFERENCE] estimated with transparency
- [ ] Internal labour costs estimated with FTE hours × loaded cost
- [ ] Implementation timeline disclosed (all effort estimates are [INFERENCE] assumptions)
- [ ] Change management/training costs included (not understated)
- [ ] Buffer added and disclosed (typically 15-20%)
- [ ] Cost confidence stated (high/medium/low)

**Benefit Quantification**
- [ ] Current baseline established with [CONFIRMED] verified data
- [ ] Benefit mechanism is specific (not "will improve efficiency" but "will reduce [metric] by X%")
- [ ] Benefits sourced (case study, industry benchmark, or [INFERENCE] assumption with disclosure)
- [ ] Benefit timeline realistic (rarely 100% Year 1; phases shown)
- [ ] Adoption risk disclosed (benefits depend on [X%] adoption)
- [ ] Benefit confidence tier stated
- [ ] Conservative scenario used (not optimistic)

**Financial Metrics**
- [ ] NPV calculation shown (not just final number)
- [ ] Discount rate disclosed and justified
- [ ] Payback period calculated correctly
- [ ] ROI formula shown and assumptions clear
- [ ] Sensitivity analysis conducted (what if key assumptions change?)
- [ ] Scenario analysis (downside, realistic, upside)

**Risk Assessment**
- [ ] Financial risks identified (cost overrun, benefit shortfall, timeline delay)
- [ ] Assumption risks identified (what if adoption is lower?)
- [ ] Each risk has probability and impact assessment
- [ ] Mitigation plan for each risk (not just "manage closely")
- [ ] Downside case shows business still makes sense or doesn't

**Governance**
- [ ] Decision authority named (who approves?)
- [ ] Approval criteria clear (what must be true to proceed?)
- [ ] Success metrics defined (how will we track post-implementation?)
- [ ] Gated review points defined (when do we reassess?)

**GGP Compliance**
- [ ] Every cost is marked [CONFIRMED] (quoted) or [INFERENCE] (estimated with assumptions)
- [ ] Every benefit is marked with confidence and source
- [ ] All assumptions disclosed and not hidden in numbers
- [ ] No fabricated costs or benefits
- [ ] NPV, ROI, payback calculations auditable
- [ ] Sensitivity analysis shows impact if assumptions change
- [ ] Downside case disclosed (is this still worth it if risks hit?)


---

## GGP Mandatory Validation — Return to SKILL.md

After completing this template's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load template → Create analysis → Template checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**



---

# 4. Gap Analysis
> Source: `references/analysis-templates/gap-analysis.md`

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



---

# 5. Maturity Assessment
> Source: `references/analysis-templates/maturity-assessment.md`

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



---

# 6. Stakeholder Analysis
> Source: `references/analysis-templates/stakeholder-analysis.md`

# Stakeholder Analysis

## Purpose
Stakeholder analysis identifies and maps stakeholders in a project or initiative by their power (influence over outcomes), interest (level of concern), current attitude, and required engagement strategy. It answers "Who matters? What do they want? How do we influence them? Who might resist?" Use this when a brief asks to "plan change management," "build support for initiative," "identify risks," or "develop communication strategy."

## When to Use
- Change management planning (who must adopt this?)
- Transformation initiative planning (who are key influencers?)
- Project planning (who should be involved? Who might resist?)
- Organisational restructuring planning
- Technology implementation (who are the end users? Who controls budget?)
- Merger/acquisition due diligence
- Strategic initiative communication planning
- Risk identification (who could block us?)

---

## GGP Verification Requirements

**This is where stakeholder analysis hallucinates most:**

### Primary Fabrication Risks

1. **Assumed Organisational Structure Without Verification** — AI invents reporting lines
   - RULE: Org structure must be [CONFIRMED] verified from current org chart, not assumed
   - RULE: If org chart unavailable, interview key people to understand structure; mark as [INFERENCE]
   - RULE: Flag if org chart is outdated (common problem); get current version
   - Common fabrication: "VP of X reports to C-suite" (may be wrong after recent reorganisation)

2. **Invented Stakeholder Attitudes Without Interview** — AI assumes someone "will resist" or "supports"
   - RULE: Attitudes must be [CONFIRMED] based on interviews or past behaviour, not assumptions
   - RULE: If you haven't asked, mark attitude as [INFERENCE] and state the assumption
   - RULE: Never assume "people resist change"; actual resistance varies by person and context

3. **Missing Shadow Influencers** — AI identifies formal stakeholders but misses informal power brokers
   - RULE: Always ask "Who really influences this decision?" (not just formal authority)
   - RULE: Interview people to identify informal leaders, trusted advisors, blockers
   - RULE: Flag shadow stakeholders explicitly

4. **Overstated Influence or Underestimated Resistance** — AI doesn't dig into actual power dynamics
   - RULE: Power isn't just about title; assess actual influence
   - RULE: Resistance often comes from unexpected places (not just the obvious suspects)
   - RULE: Flag if [person] has veto power; don't underestimate their blocking potential

5. **Incomplete Stakeholder List** — AI misses critical stakeholders
   - RULE: Start broad; then filter by power and interest
   - RULE: Ask each stakeholder "Who else should be involved?"
   - RULE: [GAP] mark if key stakeholders are unknown or unreachable

6. **Unverified Political Sensitivities** — AI doesn't surface conflicts or tensions
   - RULE: Ask about relationships, rivalries, turf wars
   - RULE: Flag [RISK] where stakeholder conflicts could derail initiative
   - RULE: Don't ignore politics; it's real and affects outcomes

7. **Unrealistic Engagement Strategies** — AI proposes engagement without knowing what people care about
   - RULE: Strategy must be based on what each stakeholder values
   - RULE: If you don't know what motivates [stakeholder], mark as [INFERENCE] and note need to learn

### Source Tier Rules for Stakeholder Analysis
| Element | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Organisational structure | ✓ Current org chart | ✓ Direct manager confirmation | [INFERENCE] Inferred from interviews | ✗ Rumor/LinkedIn |
| Stakeholder attitudes | ✓ Direct interview | ✓ Manager feedback on person | [INFERENCE] Inferred from behaviour | ✗ Third-hand rumor |
| Influence/power | ✓ Demonstrated behaviour (decision outcomes) | ✓ Manager assessment | [INFERENCE] Inferred from role | ✗ Assumed from title |
| Interests/motivations | ✓ Direct conversation (person tells you) | ✓ Manager knowledge | [INFERENCE] Inferred from role | ✗ Assumed |
| Potential resistance | ✓ Person has stated concerns | ✓ Manager knows their views | [INFERENCE] Inferred from context | ✗ Assumed |

---

## Template

### Stakeholder Map & Analysis

```
# STAKEHOLDER ANALYSIS: [Initiative Name]

## Stakeholder Identification

**Purpose of Analysis:** [Why are we doing this? What decision/change are we planning?]

**Initiative Context:** [Brief description of what we're planning and why]

**Assessment Method:** Interviews with [#] people conducted [dates]

**Org Chart Verification:** [CONFIRMED] Current org chart reviewed (dated [date]); confirms [scope]

---

## Stakeholder Map & Power-Interest Grid

### Power-Interest Matrix

```
                High Interest
                     △
                     │
    Manage Closely   │    Keep Satisfied
    (High Power,     │    (High Power,
     High Interest)  │     Low Interest)
    ─────────────────┼─────────────────
    Keep Informed    │    Monitor Only
    (Low Power,      │    (Low Power,
     High Interest)  │     Low Interest)
                     │
                     ▼
                Low Interest
```

### Stakeholder Positioning

| Stakeholder | Role | Power | Interest | Quadrant | Attitude | Strategy |
|---|---|---|---|---|---|---|
| **[Name]** | [Role/title] | High | High | Manage Closely | [CONFIRMED] Supportive | [Engagement strategy] |
| **[Name]** | [Role/title] | High | Low | Keep Satisfied | [INFERENCE] Neutral | [Strategy to maintain support] |
| **[Name]** | [Role/title] | Low | High | Keep Informed | [GAP] Resistant | [Mitigation strategy] |
| **[Name]** | [Role/title] | Low | Low | Monitor | [INFERENCE] Neutral | [Minimal engagement] |

---

## Detailed Stakeholder Profiles

### Stakeholder 1: [Name, Role]

**Demographics:**
- [CONFIRMED] Title: [Title] reporting to [Manager]
- [CONFIRMED] Organisation: [Department]
- [CONFIRMED] Tenure: [Years at company]
- [CONFIRMED] Key responsibilities: [What do they own?]

**Power Assessment (1-5 scale):**
- **Authority:** [Level] — Can make/block decisions related to [scope]
- **Influence:** [Level] — Respected by [peers/team]; sways opinions
- **Resources:** [Level] — Controls [budget/people/timeline]
- **Overall Power Score:** [INFERENCE] [4/5]

**Justification:** [CONFIRMED] [Person] controls budget for [initiative]; reports to CEO; serves on [committee]. Has demonstrated blocking power when they disagreed with [past decision]. Assumption: Power likely to continue.

**Interest Level (1-5 scale):**
- **Organisational impact:** Does this initiative affect their area? [CONFIRMED] Yes — affects [their metric]
- **Personal impact:** Does this affect their role/career? [INFERENCE] Possibly — could enhance their credibility or create work
- **Overall Interest Score:** [INFERENCE] [4/5]

**Current Attitude (Supportive / Neutral / Resistant):**
- [CONFIRMED]: Supportive
- **Evidence:** [Interview conducted Dec 2025] "I think this is essential. We've been asking for [capability] for years."
- **Why supportive:** [INFERENCE] [They believe initiative solves their problem / enhances their area / aligns with their goals]

**Key Interests & Motivations:**
- [CONFIRMED] [What they want from this initiative]
- [CONFIRMED] [What success means to them]
- [INFERENCE] [What concerns them (assumptions)]

**Potential Concerns:**
- [INFERENCE] [Possible resistance point 1] — Assumption: They may worry about [issue]
- [INFERENCE] [Possible resistance point 2]

**Engagement Strategy:**
- **Involvement level:** Core team member (decision-making authority)
- **Communication frequency:** Weekly steering committee
- **Key messages:** [What do they need to hear? What matters to them?]
- **How to influence (if resistant):** [If they were to resist, what would change their mind?]
- **Risk mitigation:** [If they withdraw support, initiative is at risk. Plan to maintain engagement.]

**Shadow Influence:**
- [INFERENCE] [Who else do they influence? Who influences them?]

---

### Stakeholder 2: [Name, Role]

**Power Score: [INFERENCE] [3/5]** (Manager, controls process decisions)

**Interest Score: [INFERENCE] [2/5]** (Implementation affects their team; they have medium interest)

**Current Attitude:**
- [INFERENCE]: Neutral (not yet engaged)
- **Evidence:** [Informal conversation] Seemed willing but not enthusiastic

**Engagement Strategy:**
- Inform them of decisions; request input on [specific aspect]
- Link initiative benefits to their metrics (efficiency, quality)
- Engage them in [phase] when their team is most affected

**Resistance Risk:**
- [INFERENCE] [Possible resistance point]: Implementation may require their team to change process
- **Mitigation:** Involve them in design; show benefits; provide training

---

### Stakeholder 3: [Name, Role]

**Power Score: [INFERENCE] [2/5]** (No formal authority; influential within their team)

**Interest Score: [INFERENCE] [4/5]** (Directly affected by initiative)

**Current Attitude:**
- [GAP] [RESISTANT]
- **Evidence:** [CONFIRMED] Direct quote from interview: "[Concern about initiative]"

**Key Concerns:**
- [CONFIRMED] [Specific concern 1 — stated directly]
- [CONFIRMED] [Specific concern 2]
- [INFERENCE] [Possible underlying concern — not stated but inferred]

**Why Resistant:**
- [CONFIRMED] [Initiative threatens their role / creates extra work / contradicts their beliefs / etc.]

**Engagement Strategy:**
- **Goal:** Move from Resistant to Neutral or Supportive
- **Approach:**
  - 1. Listen to their concerns (show you understand)
  - 2. Address specific concerns with data/plan
  - 3. Involve them in [phase] to build ownership
  - 4. Link to something they care about (e.g., "This will reduce [their pain point]")

- **Key messages:** [Craft message specifically for them, not generic]

- **Risk:** [INFERENCE] If they remain resistant, could influence their team to resist. Shadow influencer effect.

**Decision:** How critical is moving this person to supporter?
- If critical: Invest in engagement; may need to address specific concerns
- If not critical: Monitor; keep informed; don't force alignment

---

### Stakeholder 4: [Name, Role]

**Unknown/Shadow Stakeholder**
- [GAP]: [Person] was mentioned as influential but haven't interviewed them
- **Action:** Schedule interview before next phase
- **Risk:** If they're a hidden blocker, could derail initiative

---

## Stakeholder Summary Table

| Stakeholder | Power | Interest | Attitude | Priority | Engagement | Risk |
|---|---|---|---|---|---|---|
| [Name 1] | High | High | Supportive | P1 | Steer committee | Low |
| [Name 2] | High | Low | Neutral | P1 | Keep updated; maintain support | Medium |
| [Name 3] | Medium | High | Resistant | P1 | Intensive engagement; address concerns | High |
| [Name 4] | Low | High | Neutral | P2 | Keep informed; involve in execution | Low |
| [Name 5] | Low | Low | — | P3 | Minimal | Low |

**Key Findings:**
- [CONFIRMED] [Stakeholder 1] is a strong champion; leverage their support
- [RISK] [Stakeholder 3] is high-risk; resistance could cascade to team
- [GAP] [Unknown shadower] needs engagement before they become a problem

---

## Communication & Engagement Plan

### Phase 1: Initiative Approval (Month 1)

| Stakeholder | Message | Channel | Frequency | Owner |
|---|---|---|---|---|
| [Name 1] | "We need your leadership on steering committee" | Direct meeting | Weekly | Project sponsor |
| [Name 2] | "[Initiative] impacts your area; need your perspective" | Meeting + email | 2x/month | Project sponsor |
| [Name 3] | "Your team's concerns matter; let's work through this together" | 1:1 meeting | Bi-weekly | Change lead |
| [Name 4+] | Project overview; invitation to [meeting] | Email + optional call | As-needed | Project comms |

### Phase 2: Design & Scoping (Months 2-3)

| Stakeholder | Involvement | Message | Frequency |
|---|---|---|---|
| [Name 1] | Steering committee; final approval | Progress updates | Weekly |
| [Name 2] | Design review; input on [aspect] | Design drafts + decision requests | Bi-weekly |
| [Name 3] | Design working group (address concerns) | "We've incorporated your feedback on [point]" | Weekly |
| [Name 4+] | Informed; survey for input | "What questions do you have?" | Monthly |

### Phase 3: Implementation (Months 4+)

| Stakeholder | Involvement | Message |
|---|---|---|
| [Name 1] | Governance; escalation point | Regular updates |
| [Name 2] | Sponsor of their team's change | "Here's what's happening with your team" |
| [Name 3] | Change ambassador or co-designer | "You're shaping how this works for your team" |
| [Name 4+] | End user; training + support | Training; Q&A; feedback loops |

---

## RACI Matrix (Responsibility)

### For Key Decisions/Activities

| Decision / Activity | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Initiative scope approval | Project team | Steering sponsor ([Name 1]) | [Name 2], [Name 3] | [Name 4+] |
| Budget allocation | Finance | Sponsor | [Name 2], [Name 3] | Project team |
| Design approval | Project team | [Name 1] | [Name 2], [Name 3] | [Name 4+] |
| Implementation plan | Project team | [Name 1], [Name 2] | [Name 3] | [Name 4+] |
| Training program | Change lead | [Name 1] | [Name 3] | All staff |
| Go-live decision | Project team | [Name 1], [Name 2] | [Name 3], operations | All staff |

**Key:** R=Responsible (does work), A=Accountable (final say), C=Consulted (input), I=Informed (FYI)

---

## Resistance & Risk Mitigation

### Potential Resistance Points

| Resistance Source | Stakeholder | Form of Resistance | Impact | Mitigation |
|---|---|---|---|---|
| **Process change** | [Name 3] | "My team won't follow new process" | Adoption slow; benefits delayed | Design process WITH them; show benefits |
| **Budget impact** | [Name 2] | "This costs too much" | Project may be defunded | Align on ROI; show payback |
| **Turf/politics** | [Unknown] | "This threatens my department's scope" | Coalition against initiative | Early engagement; clarify roles |
| **Fatigue** | All | "We're doing too much change" | Low adoption; burnout risk | Sequence change; provide support |

### Influence Strategy (How to Get Support)

**For Each Resistant Stakeholder:**

| Stakeholder | Current Attitude | Why Resistant | Influence Lever | Action |
|---|---|---|---|---|
| [Name 3] | Resistant | Fears workload increase | Show efficiency gains outweigh burden | 1. Data on time savings for their work. 2. Pilot with small team first. 3. Training to reduce learning curve |
| [Unknown] | Unknown | [TBD] | [TBD] | Engage first to understand; then tailor approach |

**General Influence Principles:**
- [INFERENCE] Assumption: People support things that benefit them or align with their values
- Address concerns specifically (not generically)
- Involve them in solution design
- Show early wins
- Make adoption "easy" (training, tools, support)

---

## Organisational Change Readiness

**Assessment Question:** Is the organisation ready to change?

| Factor | Status | Assessment |
|---|---|---|
| Executive sponsorship | [CONFIRMED] Strong | [Name 1] is executive champion; visible support |
| Stakeholder buy-in | [INFERENCE] Partial | [Name 1] & [2] supportive; [3] resistant; [others] undecided |
| Resource availability | [INFERENCE] Uncertain | Depends on [dependency] |
| Competing initiatives | [INFERENCE] Risk | [Other change] happening in parallel; could compete for attention |
| Organisational appetite | [INFERENCE] Medium | Company has done [previous change]; people are change-fatigued |

**Readiness Score: [INFERENCE] MODERATE**
- Positive: Executive sponsorship + some key supporters
- Risk: Resistance from [stakeholder]; competing change; fatigue
- Mitigation: Strong change plan + early wins + visible progress

---

## Stakeholder Governance

**Steering Committee:**
- Members: [Name 1] (sponsor), [Name 2] (financial), [Name 3] (operations), [Name 4] (legal)
- Frequency: [Weekly / Bi-weekly]
- Decision authority: Approve scope, budget, timeline changes

**Escalation:**
- Issues escalated to Steering when [conditions]
- Unresolved conflicts escalated to [Executive]

**Feedback Mechanisms:**
- Monthly town hall for all-hands (Q&A)
- Anonymous feedback survey (monthly)
- Office hours (Project lead available for questions)

---

## Risks & Contingencies

### Key Stakeholder Risks

| Risk | Stakeholder | Impact | Probability | Mitigation |
|---|---|---|---|---|
| [RISK] [Name 1] loses support | Sponsor | Project could be cancelled | Low (strong alignment currently) | Keep momentum; show progress |
| [RISK] [Name 3] coalition against | Key resistor | Adoption drops; initiative at risk | Medium (they influence others) | Early intensive engagement; address concerns |
| [RISK] Key stakeholder departs | [Role] | Loss of institutional knowledge; support | Low | Cross-train backup; document decisions |
| [RISK] Political conflict | [Departments] | Initiative becomes weapon in turf war | Medium (history of tensions) | Clarify roles; get both sides aligned upfront |

---

## Monitoring & Course Correction

**Stakeholder Health Metrics (Monthly):**
- Steering committee attendance rate (measure of engagement)
- Stakeholder sentiment (survey or informal check-ins)
- Team adoption rate (measure of change cascade)
- Issue backlog related to stakeholder concerns (trending up = problem)

**Review Questions (Monthly):**
- Are we maintaining support from [Name 1]?
- Is [Name 3]'s resistance decreasing or increasing?
- Are we hearing concerns from unexpected stakeholders? (identifies shadow issues)
- What unexpected alliance or conflict has emerged?

**Decision Gates:**
- If [Name 1] becomes unsupportive → escalate immediately
- If [Name 3]'s team adoption <50% → intensify engagement
- If new stakeholder emerges as blocker → assess power/interest; adjust strategy

---

```

### RACI Matrix Template (Detailed)

```
# RACI MATRIX: [Initiative]

## Key Decision/Activity Matrix

| Decision/Activity | Owner/Responsible | Accountable (Final Authority) | Consulted (Input) | Informed (FYI) |
|---|---|---|---|---|
| Initiative charter | Project manager | Sponsor | Steering members | All staff |
| Scope definition | Project team | [Name 1] | [Name 2], [3] | [Name 4+] |
| Budget | Finance | CFO + Sponsor | Project lead | Team leads |
| Vendor selection | Procurement | [Name 2] | [Name 1], Project lead | [Name 3] |
| System design | Tech architect | [Name 2] | Project team, [Name 3] | All users |
| Implementation plan | Project team | [Name 1], [Name 2] | [Name 3], operations | [Name 4+] |
| Training curriculum | Learning + SMEs | Change lead | Project lead | All staff |
| Change communication | Change lead | [Name 1] | Project team | All staff |
| Risk escalation | Project manager | Steering | Affected teams | [Depends] |

---

```

---

## Methodology

### Step 1: Identify All Stakeholders
1. **Start broad:** Who touches this initiative? Who is affected? Who controls resources?
2. **Categories:** Executives, managers, team members, end users, customers, external parties
3. **Snowball:** Ask each stakeholder "Who else should I talk to?"
4. **Missing data:** Mark [GAP] if key stakeholders are unknown or unreachable

### Step 2: Map Power & Interest
1. **Power:** Can they influence outcomes? Do they control budget/decisions/resources?
2. **Interest:** Does initiative affect them? How much do they care?
3. **Place on matrix:** High power + high interest = "Manage Closely"
4. **Prioritise:** Focus engagement on high power/interest stakeholders

### Step 3: Assess Current Attitudes (Via Interview)
1. **Direct conversation:** Don't assume; ask "What do you think about [initiative]?"
2. **Evidence:** Quote what they said; note their tone
3. **Confidence:** If you haven't asked, mark [INFERENCE]
4. **Follow-up:** "What would make you supportive?" or "What are your concerns?"

### Step 4: Identify Interests & Motivations
1. **What matters to them?** Career advancement? Team success? Their metrics?
2. **How does initiative help/hurt?** What do they gain or lose?
3. **What's their pain point?** What problem could this solve for them?

### Step 5: Build Engagement Strategy (Tailored)
1. **For supporters:** How to maintain/strengthen support? How to leverage?
2. **For neutral:** How to move to supporter? What would change their mind?
3. **For resistors:** What are core concerns? Is it addressable? Who else do they influence?
4. **For unknowns:** How to engage and assess?

### Step 6: Create Communication Plan
1. **Who needs what info?** Different stakeholders need different messages
2. **When/how often?** Frequency varies by involvement level
3. **Message:** Tailor to what they care about
4. **Channel:** How do they prefer to communicate?

### Step 7: Identify Shadow Stakeholders & Power Dynamics
1. **Who really has power?** (Informal influencers, trusted advisors)
2. **What relationships matter?** (Who influences whom?)
3. **What conflicts exist?** (Turf wars, rivalries, past tensions?)
4. **Political landscape:** What makes this complicated?

---

## Common Hallucination Traps

### Trap 1: Assumed Organisational Structure
**[FABRICATION]:** "[Person] reports to [Boss]" (without checking org chart)
✓ **GROUNDED:** "[CONFIRMED] [Org chart dated Nov 2025] confirms [Person] reports to [Boss]. [INFERENCE] Assumption: This structure hasn't changed recently; verify with [Boss] directly."

### Trap 2: Invented Attitudes Without Interview
**[FABRICATION]:** "[Person] will likely resist because they prefer the status quo"
✓ **GROUNDED:** "[INFERENCE] [Person] may resist based on [past behaviour / their role]. NOT YET VERIFIED. Action: Schedule interview to understand their actual stance."

### Trap 3: Missing Shadow Influencers
**[FABRICATION]:** Stakeholder map lists [formal authority figures] only
✓ **GROUNDED:** "[INFERENCE] Identified informal leaders: [Name] (respected by technical team; influences adoption), [Name] (trusted advisor to [executive]). These informal influencers may matter as much as formal authority."

### Trap 4: Ignoring Political Context
**[FABRICATION]:** Engagement plan treats all stakeholders the same way
✓ **GROUNDED:** "[RISK] [Department A] and [Department B] have turf conflict. If initiative seen as favoring one side, other side may actively resist. Mitigation: Clarify roles upfront; involve both in design."

### Trap 5: Unrealistic Engagement Strategy
**[FABRICATION]:** "Engagement: Communicate to [Name] that this is good for them"
✓ **GROUNDED:** "[Name] may resist because it increases their workload. Mitigation: (1) Data showing net time savings, (2) Pilot with small team first, (3) Extra training/support in first 90 days, (4) Link to their metric (efficiency/quality)."

### Trap 6: Overstating Adoption Potential
**[FABRICATION]:** "All stakeholders will adopt this change"
✓ **GROUNDED:** "[INFERENCE] Based on interviews and change history, expect: 40% enthusiastic, 40% willing, 20% resistant. Mitigation: Intensive engagement with resistors; address specific concerns; provide extra support."

### Trap 7: Not Planning for Resistance
**[FABRICATION]:** Stakeholder plan includes no contingencies if someone blocks
✓ **GROUNDED:** "If [Name] withdraws support, project has [specific impact]. Contingency: Escalate to [higher authority]; emphasize [strategic importance]; involve [Name] in [aspect] to rebuild relationship."

---

## Examples

### Good Example: Stakeholder Analysis (Properly Grounded)

```
# STAKEHOLDER ANALYSIS: Automation Initiative

## Stakeholder Identification

**Initiative:** Implement RPA (Robotic Process Automation) in Finance Operations
**Scope:** Automate invoice processing, expense approvals, cash posting
**Assessment Period:** November-December 2025 (12 interviews conducted)

---

## Stakeholder Power-Interest Matrix

```
                    High Interest
                         ▲
                         │
    [CFO]              [VP Finance]     [Chief Accountant]
    [Controller]         │
─────────────────────────┼─────────────────────────
    [Accounting Mgr]     │              [CEO]
    [AP Supervisor]      │
                         │
                         ▼
                    Low Interest
     Low Power ◀─────────┼─────────▶ High Power
```

---

## Stakeholder Profiles

### Stakeholder 1: CFO (Chief Financial Officer)

**Power Assessment: [INFERENCE] [5/5] — Highest power**
- [CONFIRMED] Controls finance budget; reports to CEO
- [CONFIRMED] Authority over all finance operations
- [CONFIRMED] Has demonstrated blocking power on past initiatives

**Interest Assessment: [INFERENCE] [5/5] — Highest interest**
- [CONFIRMED] Direct responsibility for cost efficiency and audit compliance
- [CONFIRMED] RPA directly impacts their KPIs (cost per transaction, cycle time)

**Current Attitude:**
- [CONFIRMED]: Strong supporter
- **Evidence:** [Interview, Dec 2025] "This is a top priority. We've been looking for ways to improve our cost structure. RPA is the right answer."
- **Why:** Initiative directly supports their strategic goal: "Reduce cost per transaction by 25% in 2 years"

**Key Interests:**
- [CONFIRMED] Cost reduction (primary driver)
- [CONFIRMED] Competitive positioning (our cost structure vs. peers)
- [CONFIRMED] Audit readiness (better controls, fewer manual errors)

**Engagement Strategy:**
- **Involvement:** Executive sponsor; steering committee chair
- **Frequency:** Weekly steering updates
- **Key messages:** Progress toward 25% cost reduction goal; cost savings tracking
- **How to maintain support:** Monthly ROI update; escalation of any budget impacts immediately

**Risk:** If we miss timeline or budget, could lose support. Keep communication tight.

---

### Stakeholder 2: VP Finance Operations

**Power: [4/5]** (Manages the finance operations team; controls day-to-day decisions)
**Interest: [5/5]** (Their team will be most affected)

**Current Attitude:**
- [INFERENCE] [SUPPORTIVE BUT CAUTIOUS]
- **Evidence:** [Interview] "I see the benefits, but I'm concerned about how this affects my team. Will anyone lose their job? How do we manage the transition?"

**Key Interests:**
- [CONFIRMED] Team stability (no layoffs)
- [CONFIRMED] Success of automation (doesn't fail and make them look bad)
- [INFERENCE] Career impact (could this enhance their reputation?)

**Concerns:**
- [CONFIRMED] Job security concerns from their team ("Will RPA replace people?")
- [INFERENCE] Implementation risk (automation often fails; doesn't want to be blamed)
- [INFERENCE] Change management burden (their team will resist; they'll have to manage it)

**Engagement Strategy:**
- **Involvement:** Core team member; design decisions
- **Frequency:** Bi-weekly design reviews
- **Key messages:**
  - "RPA will eliminate tedious work; your team will do higher-value work"
  - "No layoffs; redeployment to [areas of need]"
  - "We're designing this together to ensure success"
- **How to move to strong supporter:**
  - 1. Guarantee no involuntary layoffs (in writing)
  - 2. Involve in design to build ownership
  - 3. Assign them success metrics (adoption rate, error reduction)
  - 4. Early wins (pilot success) to build confidence

**Risk:** If they feel threatened, could passively resist (slow team adoption). Mitigation: Early clarity + involvement.

---

### Stakeholder 3: Accounts Payable Supervisor

**Power: [2/5]** (Manages AP team; no budget authority)
**Interest: [4/5]** (Their process will change dramatically)

**Current Attitude:**
- [GAP] [RESISTANT]
- **Evidence:** [Interview] "I don't know much about automation, but this sounds risky. What if it breaks? We have invoices to pay; we can't afford downtime."
- **Tone:** Anxious, defensive

**Key Concerns:**
- [CONFIRMED] System reliability (fear of automation breaking and causing backlog)
- [CONFIRMED] Job security (will she be replaced?)
- [INFERENCE] Loss of control (used to direct the work; automation may bypass her)
- [INFERENCE] Technical intimidation (doesn't understand RPA; feels vulnerable)

**Engagement Strategy:**
- **Involvement:** Co-design team (AP process expert)
- **Frequency:** Weekly design sessions + 1:1 check-ins
- **Key messages:**
  - "You're the expert on AP. We need your knowledge to make this work."
  - "Your role will shift from processing transactions to managing the automation and handling exceptions."
  - "You'll have more time for strategic work (vendor management, cost optimisation)."
- **How to move to supporter:**
  - 1. Involve her in process design (show her we value her expertise)
  - 2. Training on RPA + new tools (reduce technical intimidation)
  - 3. Pilot with small volume first (reduce anxiety about reliability)
  - 4. New job description (clarify her future role; not elimination)
  - 5. Assign her a success metric (she owns AP automation success)

**Risk:** HIGH. If she remains resistant, her team will resist. She's influential with her staff. Invest heavily in moving her to supporter.

---

### Stakeholder 4: Chief Accountant

**Power: [4/5]** (Controls accounting standards; has CFO's ear)
**Interest: [2/5]** (Finance ops not their primary area, but compliance is)

**Current Attitude:**
- [INFERENCE] [NEUTRAL/WAIT AND SEE]
- **Evidence:** [Interview] "I need to understand how this affects our audit trail and compliance. If it's compliant, I'm okay with it."

**Key Interests:**
- [CONFIRMED] Audit compliance (SOX, external audit requirements)
- [CONFIRMED] Controls documentation (must be audit-ready)

**Engagement Strategy:**
- **Involvement:** Design review (compliance perspective only)
- **Frequency:** Monthly check-in
- **Key messages:** "RPA actually improves our control environment (better audit trail, fewer manual errors)"
- **Action:** Early technical review to confirm RPA system is audit-compliant

**Risk:** LOW. If we address compliance early, they'll support. Not a blocker.

---

### Stakeholder 5: CEO

**Power: [5/5]** (Ultimate authority)
**Interest: [1/5]** (Finance operations not their day-to-day focus)

**Current Attitude:**
- [INFERENCE] [SUPPORTIVE (If CFO supports)]
- **Evidence:** [Indirect] CEO mentioned cost reduction in annual strategy

**Engagement Strategy:**
- **Involvement:** Approve charter; quarterly updates
- **Frequency:** As-needed (don't over-communicate)
- **Key message:** Keep simple: "We're improving cost structure and competitiveness"
- **Risk:** If CFO loses support, CEO will likely follow

---

## Summary & Action Plan

### High-Priority Stakeholders to Engage

| Stakeholder | Priority | Action | Timeline |
|---|---|---|---|
| CFO | Maintain support | Weekly steering; ROI tracking | Ongoing |
| VP Finance Ops | Move to strong supporter | Involve in design; guarantee no layoffs | Weeks 1-4 |
| AP Supervisor | Move to supporter (critical) | Intensive engagement; assign ownership | Weeks 1-6 |
| Chief Accountant | Confirm compliance OK | Technical review; address concerns | Week 2 |

### Resistance Mitigation

**Main Resistance:** [AP Supervisor] and her team

**Root Causes:** Job security fears + change anxiety + lack of technical confidence

**Mitigation Strategy:**
1. **Early clarity:** Communicate no involuntary layoffs (week 1)
2. **Involvement:** Include AP Supervisor in design (weeks 2+)
3. **Training:** RPA technical overview + hands-on practice (month 2)
4. **Pilot:** Start with 20% of volume; build confidence (month 3)
5. **Quick wins:** Celebrate early successes publicly (month 3+)
6. **Ownership:** AP Supervisor owns KPIs (adoption rate, accuracy)

### Communication Calendar

**Week 1:** Kick-off meeting with CFO, VP Ops, AP Supervisor (frame & roles)
**Weeks 2-4:** 1:1 conversations with resistors (understand concerns; build trust)
**Month 2:** Design workshop (all stakeholders; co-create solution)
**Month 3:** Pilot launch + success celebration
**Ongoing:** Weekly steering (CFO) + bi-weekly operational updates (VP Ops, AP)

---

## Risk Assessment

[RISK] **Critical Risk:** AP Supervisor resistance cascades to team → slow adoption → benefits delayed

**Mitigation:** Invest in relationship; address concerns; involve in design; assign ownership

[INFERENCE] **Secondary Risk:** VP Finance Ops becomes overwhelmed by change management burden

**Mitigation:** Provide change management support; clear communication plan; celebrate progress

---

```

### Bad Example: Stakeholder Analysis (Common Fabrications)

```
# STAKEHOLDER ANALYSIS FAIL PROBLEMS BELOW

## Stakeholder List

"Key stakeholders: CFO, VP Finance, AP Manager, CEO"
- FAIL No assessment of their power/interest
- FAIL No interviews mentioned
- FAIL May be missing other key people

## Attitudes

"CFO: Supportive. VP Finance: Willing. AP Manager: Neutral."
- FAIL Based on what? Interviews? Assumptions?
- FAIL No evidence cited
- FAIL "Neutral" doesn't explain what they actually think

## Engagement Strategy

"Strategy: Communicate benefits and gain buy-in"
- FAIL Too vague; not tailored to each stakeholder
- FAIL Doesn't address concerns
- FAIL No specific actions

## Risks

"Risk: Low adoption by staff"
- FAIL Too vague; doesn't name who might resist or why
- FAIL No mitigation plan

## Problems

- No power/interest assessment
- No interviews; assumptions only
- Attitudes without evidence
- Generic engagement plan (not tailored)
- Risks identified but not explained
- No RACI matrix
- No consideration of informal influencers or political dynamics

```

---

## Quality Checklist

Before submitting stakeholder analysis:

**Stakeholder Identification**
- [ ] Comprehensive list created (started broad, then prioritised)
- [ ] "Snowball method" used (each stakeholder asked "who else?")
- [ ] Org chart verified (not assumed)
- [ ] [GAP] items noted if stakeholders unknown/unreachable
- [ ] Both formal and informal leaders identified

**Power & Interest Assessment**
- [ ] Power rated on consistent 1-5 scale (justified)
- [ ] Interest rated on consistent 1-5 scale (justified)
- [ ] Positioned on power-interest matrix (4 quadrants)
- [ ] Rationale provided for each rating
- [ ] Shadow influencers identified (informal power brokers)

**Attitude Assessment**
- [ ] Current attitudes based on [CONFIRMED] interviews, not assumptions
- [ ] Direct quotes provided (evidence)
- [ ] If not interviewed, marked [INFERENCE]
- [ ] If unknown, marked [GAP]
- [ ] Tone/sentiment captured (not just "supportive/resistant")

**Interests & Motivations**
- [ ] What matters to each stakeholder is explicit
- [ ] How initiative helps/hurts them identified
- [ ] Personal and organisational interests separated
- [ ] Underlying concerns surfaced (not just surface objections)

**Engagement Strategy**
- [ ] Tailored to each stakeholder (not generic)
- [ ] Based on what they care about
- [ ] For resistors: specific mitigation strategy (not just "manage closely")
- [ ] For supporters: strategy to maintain/leverage
- [ ] Frequency and channel appropriate to involvement level

**Communication Plan**
- [ ] Specific messages for each stakeholder (not one-size-fits-all)
- [ ] Frequency appropriate to involvement level
- [ ] Channel appropriate (how they prefer to communicate)
- [ ] Calendar provided (when will communication occur?)

**RACI Matrix** (if applicable)
- [ ] Key decisions/activities listed
- [ ] Responsible, Accountable, Consulted, Informed roles assigned
- [ ] No ambiguity (clear who has final say)

**Risk & Resistance**
- [ ] Potential resistance identified and sourced
- [ ] Root causes of resistance understood (not assumed)
- [ ] Impact if resistance occurs quantified
- [ ] Specific mitigation for each resistance point
- [ ] Escalation plan if resistance emerges
- [ ] Political/organisational dynamics surfaced (not ignored)

**Organisational Context**
- [ ] Change readiness assessed (ready to change or fatigued?)
- [ ] Competing initiatives identified
- [ ] Historical context provided (past successes/failures with change)
- [ ] Power dynamics and relationships documented

**GGP Compliance**
- [ ] Every stakeholder attitude claim marked [CONFIRMED]/[INFERENCE]/[GAP]
- [ ] No assumed attitudes (all evidenced by interview or marked [INFERENCE])
- [ ] Org structure verified as [CONFIRMED] (not assumed)
- [ ] Power & interest ratings justified (not arbitrary)
- [ ] Unknown/shadow stakeholders marked [GAP]
- [ ] Assumptions disclosed (not hidden in narrative)
- [ ] Political sensitivities and risks marked [RISK]


---

## GGP Mandatory Validation — Return to SKILL.md

After completing this template's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load template → Create analysis → Template checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**



---

# 7. SWOT Analysis
> Source: `references/analysis-templates/swot-analysis.md`

# SWOT Analysis

## Purpose
SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) provides a structured assessment of internal capabilities and external market context for strategic planning. It answers "What are our competitive advantages? What are our vulnerabilities? What can we capitalize on? What risks should we prepare for?" Use this when a brief asks to "develop strategy," "assess competitive position," "identify risk factors," or "plan market entry."

## When to Use
- Strategic planning (identifying strategic priorities)
- Competitive positioning assessment
- Risk identification and mitigation planning
- Market entry or expansion evaluation
- Product/service launch planning
- Organisational restructuring or capability building
- Annual strategy review and refresh
- M&A due diligence (assessment of target)

---

## GGP Verification Requirements

**This is where SWOT analysis hallucinates most:**

### Primary Fabrication Risks

1. **Generic Strengths Without Evidence** — AI lists obvious statements
   - RULE: Every strength must be [CONFIRMED] evidenced with data or [INFERENCE] contextualized against competitors
   - RULE: "Strong team" is worthless; "team includes 3 of the 5 people who built competitor X" is evidence
   - RULE: Mark competitive strengths with source (vs. what competitor? per what measure?)

2. **Invented Market Opportunities** — AI assumes market trends without source
   - RULE: Every opportunity claim needs [CONFIRMED] market data (analyst report, regulatory change, etc.)
   - RULE: Never state "growing market" without source; cite growth rate and source
   - RULE: Flag assumptions about market receptivity (would customers adopt this?)

3. **Unverified Competitive Threats** — AI assumes competitor threat without evidence
   - RULE: Threat claims require [CONFIRMED] competitor data or [INFERENCE] explicit assumption
   - RULE: Never assume "Competitor X will enter our market"; flag as [INFERENCE] with scenario
   - RULE: External threats need source (regulatory guidance, analyst perspective, market data)

4. **Confusing Strengths with Strategy** — AI lists strategic aspirations as current strengths
   - RULE: Strengths are what you have TODAY (evidenced); not what you plan to build
   - RULE: If something requires investment, it's an opportunity or initiative, not a strength

5. **Unbalanced SWOT** — AI focuses on strengths and opportunities, ignores weaknesses/threats
   - RULE: Balanced SWOT shows vulnerabilities and risks, not just upside
   - RULE: If all items are positive, you haven't dug deep enough

6. **Missing Strategic Implications** — AI lists items without connecting to strategy
   - RULE: SWOT is only useful if it drives decisions
   - RULE: Each item should connect to a strategic question or decision

### Source Tier Rules for SWOT
| Element | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Internal strength | ✓ Internal data/audit | ✓ Recent assessment | [INFERENCE] Employee survey | ✗ |
| Internal weakness | ✓ Internal audit | ✓ Assessment report | [INFERENCE] Anecdote | ✗ |
| Market opportunity | ✓ Analyst report (Gartner, McKinsey) | ✓ Published research | [INFERENCE] Customer feedback | ✗ |
| Market threat | ✓ Regulatory guidance | ✓ Analyst research | ✓ News articles | ✗ |
| Competitive claim | ✓ Competitor public data | ✓ Analyst review | ✓ Website/demo | ✗ |
| Market size/trend | ✓ Industry analyst | ✓ Government data | ✓ Published study | ✗ |

---

## Template

### SWOT Matrix (With GGP Markers)

```
# SWOT ANALYSIS: [Organisation/Product/Strategy]

## Context
**What We're Analyzing:** [Product line? Market entry? Competitive position?]
**Time Horizon:** [3-year strategic plan? 12-month outlook?]
**Assessment Date:** [When was this analysis conducted?]

---

## STRENGTHS (Internal, Positive)

**Definition:** Internal capabilities, assets, or advantages that give us competitive advantage TODAY.
**Verification Rule:** Every strength must be [CONFIRMED] evidenced or [INFERENCE] explicitly compared against competitors.

### Financial Strengths
- [CONFIRMED]: Strong cash position ($50M liquid reserves as of Q4 2025)
  - Source: Q4 financial statements
  - Competitive advantage: Enables rapid investment vs. competitors who are bootstrapping

- [INFERENCE]: Lower cost structure than competitors
  - Source: Internal cost analysis vs. Competitor A pricing
  - Assumption: Our process efficiency translates to sustainable cost advantage
  - Risk: Competitors can replicate (not defensible long-term)

### Talent & Organisation Strengths
- [CONFIRMED]: 40% of engineering team has prior [Industry] experience (vs. industry avg 20%)
  - Source: HR records and competitor LinkedIn analysis
  - Competitive advantage: Faster time to productivity on domain problems

- [INFERENCE]: Strong company culture (low turnover = 8% vs. industry avg 15%)
  - Source: HR data + employee satisfaction survey (N=45, response rate 80%)
  - Assumption: Low turnover indicates culture quality (could also indicate low growth/opportunity)

### Product/Technology Strengths
- [CONFIRMED]: Only player with [specific capability] in market
  - Source: Gartner Magic Quadrant 2025; vendor comparison shows we're unique
  - Competitive advantage: Differentiation; justifies premium pricing

- [INFERENCE]: Proprietary technology is defensible
  - Assumption: Pending patent approval; if denied, advantage may erode
  - Risk: Patent awarded but narrow scope (could be circumvented)

### Market/Brand Strengths
- [CONFIRMED]: Top-3 brand recognition in [market segment]
  - Source: Brand tracking study (2025, N=500 decision-makers)
  - Competitive advantage: First-look advantage in RFP processes

- [UNVERIFIED]: "Market leader in customer satisfaction"
  - Source: Company claim; independent verification unavailable
  - Action: Conduct third-party satisfaction study to verify

---

## WEAKNESSES (Internal, Negative)

**Definition:** Internal limitations, gaps, or vulnerabilities that impede competitive performance TODAY.
**Verification Rule:** Weaknesses are often hidden; be ruthless in identifying them.

### Financial Weaknesses
- [CONFIRMED]: Limited R&D budget (3% of revenue vs. industry avg 7%)
  - Source: Budget vs. Gartner tech spending benchmarks
  - Competitive risk: Slower innovation; risk of being leapfrogged

- [INFERENCE]: Acquisition would be expensive relative to EBITDA
  - Source: Market multiples vs. our EBITDA (4x vs. buyer multiples 8-10x)
  - Implication: Inorganic growth strategy is limited; must grow organically

### Talent & Capability Gaps
- [CONFIRMED]: 0 employees with [skill] expertise
  - Source: HR skills inventory; external recruitment search
  - Competitive risk: Can't pursue [opportunity] without external hire; 6-9 month gap

- [INFERENCE]: Sales team weak in [market segment]
  - Source: Win/loss analysis shows 40% close rate in Fortune 500 vs. 70% in mid-market
  - Implication: Complex sales capability is under-developed

### Product/Technology Gaps
- [CONFIRMED]: Architecture doesn't support [scaling requirement]
  - Source: Technical assessment by external architects
  - Competitive risk: Can't pursue enterprise market without $2M replatforming

- [GAP]: Data on whether [specific technology] could be built quickly
  - Competitive risk: Competitor X might have solved this; unknown if we're behind
  - Action: Competitive technology assessment needed

### Operational/Process Gaps
- [INFERENCE]: Onboarding/implementation slow (60 days vs. competitor claims 30)
  - Source: Implementation project data; competitor website claims
  - Competitive risk: Slower go-live = slower revenue realization; customer adoption friction

---

## OPPORTUNITIES (External, Positive)

**Definition:** External market or regulatory changes that could expand our addressable market or competitive position.
**Verification Rule:** Every opportunity needs [CONFIRMED] market data source. Never invent market trends.

### Market Growth Opportunities
- [CONFIRMED]: [Market segment] growing at 25% CAGR (2025-2028)
  - Source: Gartner Market Forecast 2025
  - Size: $2B market today, projected $4B by 2028
  - Our potential: If we capture 5% share, $200M opportunity by 2028
  - Risk: Assumes 5% market share is achievable (not guaranteed)

- [INFERENCE]: Regulatory change will mandate [requirement] by 2026
  - Source: Proposed regulation + industry commentary suggesting >80% likelihood of passage
  - Opportunity: All [market segment] companies will need our solution
  - Risk: Regulation could be weakened or delayed

### Customer/Segment Expansion
- [INFERENCE]: [New customer segment] has similar problems; adjacent market
  - Source: Customer interviews with [segment] companies; analyst perspective on market dynamics
  - Assumption: Solution is transferable with minimal adaptation
  - Risk: New segment has different buying process; competitive landscape different

### Competitive Positioning Opportunities
- [CONFIRMED]: Competitor A (market leader) appears distracted by IPO process
  - Source: Public SEC filings; industry news
  - Opportunity window: 12-18 months while they manage IPO execution
  - Risk: After IPO, they could accelerate investment and recapture ground

- [INFERENCE]: Consolidation wave in [industry] could create M&A opportunity for us
  - Source: Analyst commentary on industry consolidation trends
  - Assumption: We could be acquirer or strategic partner
  - Risk: Speculative; M&A may not happen

### Partnership/Channel Opportunities
- [CONFIRMED]: [Large partner] is actively recruiting [type] partners
  - Source: Partner program announcement; conversation with partner development manager
  - Opportunity: Reach their customer base; share go-to-market costs
  - Risk: Partnership terms could be unfavorable; resource commitment required

---

## THREATS (External, Negative)

**Definition:** External market or competitive changes that could reduce addressable market or competitive advantage.
**Verification Rule:** Threat claims require evidence; never assume threat without source.

### Competitive Threats
- [CONFIRMED]: Competitor X raised $[X]M funding (Series C, announcement Dec 2025)
  - Source: Crunchbase; company press release
  - Implication: They will accelerate product development and sales capacity
  - Our risk: Could leapfrog us on [specific capability] within 12-18 months

- [INFERENCE]: Tech giant [Company] rumored to be entering [market segment]
  - Source: Industry analyst speculation; analyst comment "if they enter, could reshape market"
  - Probability assessment: [INFERENCE] Medium (analyst opinion, not confirmed)
  - Our risk: If entered, could use platform leverage to dominate; we'd have hard time competing on price

- [UNVERIFIED]: Competitor B claims "open source alternative" will commoditize [market]
  - Source: Competitor marketing claim (self-serving); independent verification unavailable
  - Risk assessment: Low probability (open source solutions rarely displace enterprise software, but worth monitoring)

### Market/Regulatory Threats
- [CONFIRMED]: Proposed regulation would require [compliance measure]
  - Source: Regulatory guidance (published Jan 2026)
  - Impact: All vendors must implement [capability] by [date]
  - Our status: [INFERENCE] We have 18 months; estimated 6 months to implement
  - Risk: If implementation is harder than estimated, could miss deadline

- [INFERENCE]: Market may move to [new technology/approach] faster than we expect
  - Source: Analyst commentary on technology shifts; early customer signals
  - Risk: If adoption is rapid, our architecture could become outdated
  - Probability: [INFERENCE] Medium (speculative but worth preparing for)

### Customer/Revenue Threats
- [CONFIRMED]: Top-3 customers represent 45% of revenue
  - Source: Revenue analysis
  - Risk: Customer concentration; loss of 1 customer = 15% revenue impact

- [INFERENCE]: Customer churn may accelerate if [competitive feature] becomes standard
  - Source: Customer feedback; not yet confirmed in churn data
  - Risk: If competitors add feature we lack, may lose discretionary business

---

## Strategic Implications & Decisions

### Key Strategic Questions (From SWOT)

**Q1: How do we leverage our strength in [strength] while market is growing?**
- Opportunity: Market segment growing 25%; our strength in [capability] is defensible
- Decision: Accelerate hiring in [market segment] sales team
- Timeline: Q1 2026

**Q2: How do we address the gap in [weakness] before competitor threat materializes?**
- Weakness: We lack [capability]; Competitor X will have it within 18 months
- Decision: Either build ([R&D investment]) or acquire ([skill hire] or [acquisition])
- Timeline: Decide by Q2 2026; execute by Q4 2026

**Q3: Can we defend against [competitive threat] with our [strength]?**
- Threat: Tech giant might enter market
- Strength: We have stronger customer relationships + proprietary tech
- Decision: Deepen customer relationships; lock in partnerships before giant can enter
- Timeline: Ongoing

---

## Extended TOWS Matrix (Linking SWOT to Strategy)

### SO Strategies (Strength-Opportunity)
Use our strengths to pursue opportunities.

| Strength | Opportunity | Strategy | Timeline |
|---|---|---|---|
| [Strong tech + cash] | [Market growing 25%] | Accelerate market expansion in [segment] | 2026-2028 |
| [Brand leadership] | [Regulatory change] | Position as "regulatory compliance expert"; be first to market with solution | 2026 |

### WO Strategies (Weakness-Opportunity)
Address weaknesses to capture opportunities.

| Weakness | Opportunity | Strategy | Timeline |
|---|---|---|---|
| [Lack [capability]] | [Market segment needs [capability]] | Hire or acquire [skill]; build product feature | 2026 Q2-Q4 |
| [Weak enterprise sales] | [Enterprise segment growing] | Invest in enterprise sales team + marketing | 2026-2027 |

### ST Strategies (Strength-Threat)
Use strengths to mitigate threats.

| Strength | Threat | Strategy | Timeline |
|---|---|---|---|
| [Proprietary tech] | [Competitor X well-funded] | Accelerate patent filing; establish thought leadership | 2026 |
| [Customer relationships] | [Tech giant may enter] | Deepen customer lock-in (long-term contracts, integrations) | 2026-2027 |

### WT Strategies (Weakness-Threat)
Defend against threats despite weaknesses.

| Weakness | Threat | Strategy | Timeline |
|---|---|---|---|
| [Limited R&D budget] | [Market tech shift] | Partner with [vendor] to leverage their tech; don't try to build all ourselves | 2026 |
| [Talent gap in [skill]] | [Competitor X hiring aggressively] | Recruit proactively before talent shortage worsens; consider acquihire | Q1 2026 |

---

## Risk Assessment & Monitoring

### Critical Vulnerabilities (Threat + Weakness Intersection)

| Threat | Weakness | Combined Risk | Mitigation |
|---|---|---|---|
| Competitor X has better [capability] | We lack [capability] | [GAP] Could lose [segment] | Build/hire/acquire [capability] by [date] |
| Tech giant may enter market | We have limited R&D budget | [RISK] Can't out-invest them | Build partnerships; focus on niche positioning |

### Opportunity Readiness (Strength + Opportunity Intersection)

| Opportunity | Required Strength | Do We Have It? | Action |
|---|---|---|---|
| Market growth 25% | Sales/marketing capacity | [INFERENCE] Partial (have talent, need scaling) | Hire 3 regional sales managers Q1 2026 |
| Regulatory change | Compliance expertise | [GAP] No (single person currently) | Hire [role] by Sep 2025 |

---

## Monitoring & Update Plan

**Update Frequency:** Quarterly

**Review Triggers (Escalate If):**
- Competitor takes [action] that wasn't anticipated
- Market growth materially differs from forecast (>20% variance)
- Regulatory timeline accelerates or weakens
- Customer churn increases above [threshold]

---

```

### Extended SWOT Heat Map (Competitive Comparison)

```
# SWOT COMPETITIVE COMPARISON

## Multi-Competitor SWOT Positioning

```
                  Our Company          Competitor A         Competitor B
STRENGTHS
  - Strong tech       ★★★★★               ★★★☆☆               ★★☆☆☆
  - Brand            ★★★★☆               ★★★★★               ★★★☆☆
  - Customer base    ★★★★☆               ★★★☆☆               ★★★★☆

WEAKNESSES
  - R&D budget       ★★★☆☆ (weak)        ★★☆☆☆               ★★★★☆
  - Enterprise sales ★★★★☆               ★★★★★               ★★★☆☆
  - Geographic reach ★★☆☆☆               ★★★★☆               ★★★★☆

OPPORTUNITIES
  - Market growth    [Accessible to all 3]
  - [Segment] entry  [We're best positioned]
  - Partnerships     [Competitor A already has them]

THREATS
  - [Specific threat A]  [We're most exposed]
  - [Specific threat B]  [All equally exposed]
```

---

```

---

## Methodology

### Step 1: Define Scope & Context
1. **What are we analyzing?** Entire organisation? Specific product? Market entry?
2. **Competitive set:** Who are our key competitors? Who are we comparing against?
3. **Time horizon:** 1-year strategy? 3-year plan?
4. **Current context:** Market conditions, recent events that should shape analysis

### Step 2: Identify Internal Strengths (Real Data)
1. **Brainstorm:** Internal capabilities, assets, financial position, talent, products
2. **Verify:** Each strength gets a marker ([CONFIRMED]/[INFERENCE]/[UNVERIFIED])
3. **Benchmark:** How does each strength compare to competitors? Is it truly an advantage?
4. **Discard weak items:** "We have a website" is not a strength if every competitor does too

**Critical:** Every strength must be evidenced or explicitly competitive (vs. what competitor).

### Step 3: Identify Internal Weaknesses (Be Honest)
1. **Audit:** What are we bad at? Gaps in capability, talent, resources, process?
2. **Customer feedback:** What do customers complain about? What features are missing?
3. **Competitive comparison:** Where do we lose deals? On what dimensions?
4. **Financial analysis:** What metrics lag? Cost structure? Margins?

**Critical:** Weaknesses are hard to admit; push for honesty. This is where strategy gets made.

### Step 4: Identify External Opportunities (Source Data)
1. **Market trends:** Is the market growing? New segments emerging?
2. **Regulatory changes:** New laws creating demand? Compliance requirements creating market?
3. **Competitive moves:** Competitor A leaving market, creating opening?
4. **Technology shifts:** New tech enabling new business models?
5. **Customer signals:** Are customers asking for new capabilities? Entering new verticals?

**Critical:** Every opportunity claim needs a source. Don't invent market trends.

### Step 5: Identify External Threats (Verify Before Listing)
1. **Competitive threats:** New competitor? Well-funded competitor? Competitor entering our market?
2. **Market threats:** Market declining? Customer consolidation? Shift to different model?
3. **Regulatory threats:** Compliance requirements increasing? Data privacy rules?
4. **Technology threats:** Disruptive tech that could commoditize our business?
5. **Economic threats:** Economic downturn? Inflation affecting costs?

**Critical:** Threats feel real but may be speculative. Source everything. Distinguish confirmed threats from risks.

### Step 6: Link SWOT to Strategy (Not Just a List)
1. **For each strength:** How do we leverage this competitively?
2. **For each weakness:** What's our plan to address it? Build, hire, acquire, outsource?
3. **For each opportunity:** Do we have the strengths to pursue it? What gaps must we close?
4. **For each threat:** What's our mitigation? Which strengths help us defend?

### Step 7: Prioritise (What's Most Important?)
1. **High-impact strengths:** Which are most defensible? Most valuable to customers?
2. **Critical weaknesses:** Which gaps would most impede strategy?
3. **Highest-potential opportunities:** Which could expand addressable market the most?
4. **Biggest threats:** Which would most damage competitive position?

---

## Common Hallucination Traps

### Trap 1: Generic Strengths Without Evidence
**[FABRICATION]:** "Strengths: Strong team, good culture, high-quality products"
✓ **GROUNDED:** "[CONFIRMED] Team strength: 40% have prior [industry] experience vs. competitor avg 20% (verified via LinkedIn). Competitive advantage: Faster time to productivity on domain problems. [INFERENCE] Culture strength: 8% turnover vs. 15% industry avg (HR data); assumption: Low turnover indicates culture quality."

### Trap 2: Invented Market Opportunities
**[FABRICATION]:** "Opportunity: Growing market demand for [solution]"
✓ **GROUNDED:** "[CONFIRMED] [Market segment] growing at 25% CAGR per Gartner 2025 forecast. Market size projected to grow from $2B to $4B by 2028. [INFERENCE] We estimate 5% market share achievable given competitive positioning, assuming we close [specific gaps]."

### Trap 3: Unverified Competitive Threats
**[FABRICATION]:** "Threat: Competitor X will disrupt our market with new technology"
✓ **GROUNDED:** "[INFERENCE] Competitor X raised $50M (confirmed via Crunchbase). Analyst commentary suggests they may pursue [strategy]. Our risk: If they achieve [capability], could impact our market share. Probability: [INFERENCE] Medium (plausible but not confirmed). Mitigation: [Specific action]."

### Trap 4: Confusing Strategy with Current Strengths
**[FABRICATION]:** "Strengths: Enterprise sales capability, AI-powered analytics, global operations"
✓ **GROUNDED:** "Current strengths: [CONFIRMED] Mid-market customer base (proven sales model). Strategic opportunity: Build enterprise sales (currently weak, this is aspirational, not current strength). DO NOT list as strength today."

### Trap 5: Unbalanced SWOT (All Positive)
**[FABRICATION]:** 15 strengths, 2 opportunities, 0 weaknesses, 0 threats
✓ **GROUNDED:** Balanced SWOT with honest assessment of vulnerabilities. Every organisation has weaknesses and faces threats. If yours doesn't show, you haven't dug deep enough.

### Trap 6: Threats Without Probability Assessment
**[FABRICATION]:** "Threat: Tech giant may enter our market"
✓ **GROUNDED:** "[INFERENCE] Tech giant may enter market. Probability: Low (they have not signaled interest; analyst assessment suggests <20% chance within 2 years). Mitigation if occurs: [Specific plan]. Monitoring: [How we'll detect shift]."

### Trap 7: No Strategic Implication
**[FABRICATION]:** SWOT is a list with no connection to strategy or decisions
✓ **GROUNDED:** Each SWOT item connects to a strategic decision: "Given our strength in [X] and market opportunity in [Y], we will invest in [Z] team. Given weakness in [W], we will hire [role] by [date]. Given threat [T], we will deepen [mitigation]."

---

## Examples

### Good Example: SWOT Analysis (Properly Grounded)

```
# SWOT ANALYSIS: Market Entry — Enterprise Segment

## STRENGTHS

**Strong Brand in Mid-Market**
- [CONFIRMED]: Top-3 brand recognition in mid-market (brand tracking study, N=500, 2025)
- Competitive advantage: Early consideration in RFPs; trust with buyers
- Application to enterprise: Mid-market brand doesn't automatically transfer; will need separate enterprise marketing

**Proprietary Technology (Defensible)**
- [CONFIRMED]: Patent pending on [specific capability]; Gartner confirms only player with this feature
- Competitive advantage: Differentiation vs. 5 direct competitors
- Application to enterprise: Addresses enterprise-scale requirement that competitors don't meet

**Strong Customer Relationships**
- [CONFIRMED]: Net retention rate 115% (upsell/expansion); customer satisfaction 8.2/10
- Competitive advantage: Customers expanding with us; low churn
- Application to enterprise: We can use existing customers as reference accounts; easier to expand upmarket from existing base

**Weak Spot — Limited R&D Budget**
- [CONFIRMED]: R&D is 3% of revenue vs. industry avg 7% for enterprise vendors
- Competitive vulnerability: Slower to add features competitors can match
- Impact on enterprise entry: Will compete on reliability/service, not feature velocity

---

## WEAKNESSES

**No Enterprise Sales Experience**
- [CONFIRMED]: 0 enterprise deals closed; sales team focused on mid-market (4-person team, avg deal $500K)
- Competitive vulnerability: Enterprise sales is different (longer cycle, complex procurement, executive-level negotiations)
- Impact on enterprise entry: Must hire/train enterprise sales team (6-month ramp); estimated 2 enterprise sales hires needed

**Weak Brand in Enterprise Market**
- [CONFIRMED]: Brand awareness in enterprise segment only 12% (vs. 65% in mid-market); tracker doesn't recognise us
- Competitive vulnerability: Not in early consideration; have to win on merits, not recognition
- Impact on enterprise entry: Heavy marketing investment needed; maybe $500K/year to build awareness

**Limited Implementation Capacity**
- [CONFIRMED]: Current implementation team (3 people) handles 100+ mid-market customers (simple, standardised implementations)
- Competitive vulnerability: Enterprise customers need complex integrations; can't scale current model
- Impact on enterprise entry: Must hire professional services team OR require customers to use partners; estimated 3-5 implementation consultants

**Architecture Not Enterprise-Ready**
- [INFERENCE]: Current architecture handles mid-market scale (1M transactions/day); enterprise customers will demand 10M+ transactions/day
- Technical risk: May need significant replatforming; estimated $500K-$1M and 6-month timeline
- Impact on enterprise entry: Blocker; can't sell if we can't scale to enterprise volume

---

## OPPORTUNITIES

**Enterprise Segment Growing, Competitors Weak**
- [CONFIRMED]: Gartner forecasts 30% CAGR in [market segment] 2025-2028 for enterprise solutions
- [CONFIRMED]: Market leader [Competitor A] focused on SMB; has poor enterprise satisfaction (NPS 35)
- Market opening: Opportunity to position as "enterprise-focused" player
- Size: If we capture 3% of enterprise market by 2028, = $150M revenue opportunity

**Partnership Channel Emerging**
- [CONFIRMED]: [Large consulting firm] actively recruiting solutions partners; 500+ customer relationships
- Channel advantage: Could reach enterprise customers through partner's sales force
- Estimated impact: 20-30 enterprise deals/year through partnership channel

**Regulatory Change (GDPR-like)**
- [CONFIRMED]: Proposed regulation will require [compliance capability] by 2027
- Market implication: ALL enterprise customers will need vendors compliant with [requirement]
- Our position: [INFERENCE] We have [partial capability]; estimated 3-month build to be fully compliant
- First-mover advantage: If we're early with compliance, could differentiate vs. competitors still scrambling

---

## THREATS

**Well-Funded Competitors Pivoting to Enterprise**
- [CONFIRMED]: Competitor X (Series C, $50M funding) announced enterprise segment focus
- Competitive threat: They have budget to hire enterprise sales, invest in marketing, build out services
- Our vulnerability: Our weak enterprise brand means we'll compete head-to-head
- Timeline: They'll likely launch enterprise offering within 6-12 months

**Incumbent Vendor Defending Market Share**
- [UNVERIFIED] - Assumption: Incumbent [Competitor B] will drop prices to defend enterprise market
- Competitive threat: Price competition would compress our margins
- Our defensibility: Our proprietary tech justifies premium pricing IF we can convince enterprise buyers
- Risk: If price becomes primary decision factor, our differentiation doesn't matter

**Integration Complexity Could Be Blocker**
- [INFERENCE]: Enterprise customers will demand integration with [systems]. Our platform doesn't natively integrate.
- Technical threat: Could lose deals on integrations; would require custom work
- Mitigation: Open API + partner ecosystem; estimated $300K to build API marketplace

---

## Strategic Implications

### Decision 1: Replatform or Partner?
- **Weakness:** Architecture not enterprise-ready
- **Threat:** Competitors will have enterprise-ready solutions within 12 months
- **Decision:** Replatform (build in-house) vs. Partner with [platform vendor]
- **Timing:** Decide by Q2 2026; execute by Q4 2026

### Decision 2: Build Sales or Use Channel?
- **Weakness:** No enterprise sales team
- **Opportunity:** Partnership channel available
- **Decision:** Hybrid model — hire 2 enterprise account executives + invest in partner channel (consulting firm)
- **Timing:** Recruit by Q2 2026; partner agreement by Q1 2026

### Decision 3: Market Entry Sequencing
- **Opportunity:** Enterprise segment growing; competitors weak
- **Weakness:** Multiple gaps (brand, sales, tech, services)
- **Decision:** Pilot enterprise entry with 3-5 strategic customers (reference accounts); learn before scaling
- **Timeline:** Q2-Q4 2026

---

## Monitoring Metrics

| SWOT Element | Metric | Current | Target | Frequency |
|---|---|---|---|---|
| Strength (proprietary tech) | Patent status | Pending | Approved | Quarterly |
| Weakness (sales team) | Enterprise sales hires | 0 | 2 | Monthly |
| Opportunity (market growth) | Enterprise segment size | $[X]B | $[X]B | Quarterly (track vs. Gartner) |
| Threat (competitor entry) | Competitor X progress | Announced pivot | Product launch (monitor) | Monthly |

```

### Bad Example: SWOT Analysis (Common Fabrications)

```
# SWOT ANALYSIS FAIL PROBLEMS BELOW

## STRENGTHS
"Strong brand" ← NO EVIDENCE
"Innovative team" ← TOO VAGUE
"Market-leading products" ← SELF-SERVING
"Efficient operations" ← COMPARED TO WHOM?

Should be: Specific strengths with competitive context (vs. which competitor? per what measure?)

## WEAKNESSES
"Some staff turnover" ← UNDERSTATEMENT; AVOIDS HONEST ASSESSMENT
[Only 1-2 weaknesses listed] ← UNBALANCED

Should be: Honest, specific weaknesses with numbers. Every org has real gaps.

## OPPORTUNITIES
"Growing market" ← NO SOURCE
"Customer demand for X" ← BASED ON WHAT DATA?
"Regulatory change could help" ← SPECULATIVE WITHOUT SOURCE

Should be: Each opportunity sourced (Gartner, analyst, regulatory guidance)

## THREATS
[Barely any threats listed] ← UNREALISTIC
"Competitors might enter market" ← TOO VAGUE AND ASSUMED

Should be: Specific threats with probability and source

## Strategic Implication
[No discussion of how SWOT connects to strategy]
[No decisions or actions specified]

Should be: Each SWOT item should connect to a strategic decision or action plan

```

---

## Quality Checklist

Before submitting SWOT analysis:

**SWOT Content**
- [ ] Strengths are evidenced ([CONFIRMED]/[INFERENCE]) or explicitly competitive
- [ ] Weaknesses are honest and specific (not glossed over)
- [ ] Opportunities are sourced ([CONFIRMED]/[INFERENCE] backed by market data)
- [ ] Threats are verified (not invented) and probability-assessed
- [ ] All items have GGP markers ([CONFIRMED]/[INFERENCE]/[GAP]/[UNVERIFIED]/[RISK])

**Strength Assessment**
- [ ] Each strength is competitive (vs. specific competitor or industry average)
- [ ] Internal strengths evidenced (data, audit, assessment)
- [ ] Defensive strengths identified (which could be commoditized?)
- [ ] Aspirational items removed (should-have vs. have)

**Weakness Assessment**
- [ ] Weaknesses are honest, not sanitized
- [ ] Each weakness includes impact (so what? why does it matter?)
- [ ] Weakness sources clear (audit, customer feedback, competitive gap)
- [ ] No attempt to hide weaknesses in narrative

**Opportunity Assessment**
- [ ] Market trends sourced (analyst reports, regulatory guidance, customer feedback)
- [ ] Market size estimated with confidence level
- [ ] Applicability to our company assessed (do we have strengths to pursue?)
- [ ] No invented market trends

**Threat Assessment**
- [ ] Competitive threats sourced and probability-assessed
- [ ] External threats (regulatory, market, tech) evidenced
- [ ] Distinction between confirmed threats and risks
- [ ] No unsubstantiated "what-ifs"

**Strategic Connection**
- [ ] SWOT is not just a list; items connect to strategy
- [ ] SO, WO, ST, WT strategies identified
- [ ] High-impact SWOT elements highlighted
- [ ] Strategic decisions/actions stem from SWOT analysis

**Balanced Perspective**
- [ ] Strengths and weaknesses both present (not all positive)
- [ ] Opportunities and threats both present (realistic)
- [ ] Competitive set clearly defined
- [ ] Context and time horizon explicit

**GGP Compliance**
- [ ] Every claim has marker ([CONFIRMED]/[INFERENCE]/[GAP]/[UNVERIFIED]/[RISK])
- [ ] "Industry standard" claims sourced
- [ ] No fabricated market opportunities
- [ ] No invented competitive threats
- [ ] Confidence tiers disclosed (high/medium/low)
- [ ] Assumptions explicitly stated (not hidden)


---

## GGP Mandatory Validation — Return to SKILL.md

After completing this template's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load template → Create analysis → Template checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**



---

# 8. Use Cases
> Source: `references/analysis-templates/use-cases.md`

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



---
