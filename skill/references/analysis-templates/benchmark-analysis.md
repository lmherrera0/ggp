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

