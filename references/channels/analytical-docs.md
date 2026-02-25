# Analytical Documentation

## Goal
Enable reproducible statistical analysis through transparent methodology, declared assumptions, and verifiable findings so readers can assess credibility and replicate results.

## Success Metrics (2025-2026)
- 100% of statistical claims include confidence intervals or p-values
- All sample sizes disclosed upfront (no retroactive post-hoc analysis claims)
- Methodology reproducible: code available, random seeds pinned
- Assumptions documented and tested (normality, homogeneity of variance)
- Zero misleading findings: effect sizes reported alongside p-values (not p-values alone)

## Limits & Restrictions

### Technical
- Statistical results must include sample size, confidence interval, and effect size
- P-values require pre-registered hypotheses (no p-hacking, multiple comparison corrections)
- Models require feature descriptions, training/test splits, and cross-validation results
- Data assumptions (normality, independence, homogeneity) must be tested and reported
- All analyses reproducible with pinned random seed and versioned code

### Platform/Context
- Lives in reports, research wikis, Jupyter notebooks, model documentation
- Primary audience: analysts, data scientists, business stakeholders, regulators
- Lifecycle: Versioned with analysis date; updated if methodology changes
- Discoverability: Linked from dashboards; searchable in knowledge base

### GGP Etiquette
- Never report p-value without sample size (appears significant by luck at scale)
- Never report p-value without effect size (statistically significant ≠ practically significant)
- Declare all comparisons made and corrections applied (Bonferroni, FDR)
- Flag assumptions: if violated, are conclusions still valid?
- Mark findings as [INFERENCE] if extrapolating beyond sample population

## Template

```markdown
# Analysis: [Title]

## Executive Summary
[One paragraph: what did we ask, what did we find, what should decision-makers do?]

## Objective
[Research question in testable form]

## Methodology

### Data Sources
- Dataset: [name, version, date range]
- Sample size: N = [exact number, not "large"]
- Population: [geographic, temporal, demographic scope]

### Analysis Method
[Statistical test, model type, or methodology]

### Assumptions
1. [Assumption] — Tested: [Yes/No], Result: [passed/violated]
2. [Assumption] — Tested: [Yes/No], Result: [passed/violated]

### Limitations
- [Known constraint affecting generalisability]

## Findings

### Primary Result
[Finding] (95% CI: [lower, upper], p < 0.05, n=1200)

**Effect Size:** [Cohen's d = X, η² = Y, odds ratio = Z]

### Secondary Results
[Supporting findings with full statistics]

## Recommendations
[Action-oriented conclusions]

## Reproducibility
- Code: [GitHub link, commit hash]
- Random Seed: 42
- Environment: Python 3.9, pandas 1.3.2
```

## Examples

### Good Example
```markdown
# Analysis: Impact of Email Frequency on Unsubscribe Rate

## Executive Summary
Testing 3 email frequencies (daily, weekly, monthly) on 12,000 users shows weekly emails reduce unsubscribes by 15% (95% CI: 8-22%) vs. daily emails. Monthly emails increase unsubscribes 8% vs. weekly. Recommend weekly cadence.

## Objective
Does email frequency (daily vs. weekly vs. monthly) causally affect unsubscribe rate?

## Methodology

### Data Sources
- **Dataset:** User email interactions, Jan 2024 - Dec 2024
- **Sample size:** N = 12,000 users
- **Assignment:** Randomized controlled trial, 4,000 per group
- **Duration:** 90-day treatment period post-assignment

### Analysis Method
- **Statistical Test:** Two-sample proportions test with chi-square (Pearson's χ²)
- **Multiple Comparisons:** Bonferroni correction (3 pairwise comparisons → α = 0.0167)
- **Robustness:** 10,000 bootstrap resamples

### Assumptions
1. **Independence:** Users don't interact (no network effects) — Tested: Yes, Verified ✓
2. **Random assignment:** Groups balanced on baseline metrics (age, tenure, engagement) — Tested: Yes, ANOVA p > 0.05 ✓
3. **No user attrition bias:** <2% dropped out equally across groups — Tested: Yes ✓

### Limitations
- Sample: US English speakers only; may not generalise to international audiences
- Duration: 90 days; long-term effects (6+ months) unknown
- External: Conducted during low-volume promotional period; peak season behaviour may differ

## Findings

### Primary Result: Unsubscribe Rate by Frequency

| Email Frequency | Unsubscribe Rate | 95% CI | Count |
|---|---|---|---|
| Daily | 8.2% | (7.1%, 9.3%) | 4000 |
| Weekly | 7.0% | (5.8%, 8.2%) | 4000 |
| Monthly | 7.6% | (6.4%, 8.8%) | 4000 |

**Weekly vs. Daily:**
- Difference: -1.2 percentage points (15% relative reduction)
- 95% CI: (-2.1%, -0.3%)
- χ² (1, N=8000) = 6.12, p = 0.0135
- **Effect Size:** Cohen's h = 0.054 (small effect, but meaningful at scale)
- [CONFIRMED] **Conclusion:** Statistically significant; survives Bonferroni correction

**Monthly vs. Weekly:**
- Difference: +0.6 percentage points (8% relative increase)
- 95% CI: (-0.4%, 1.6%)
- χ² (1, N=8000) = 1.84, p = 0.1748
- [CONFIRMED] **Conclusion:** Not significant; cannot reject null hypothesis

### Secondary Findings: Engagement Metrics

| Metric | Daily | Weekly | Monthly | p-value |
|---|---|---|---|---|
| Open Rate | 34.2% | 41.8% | 38.5% | 0.0002 |
| Click Rate | 12.1% | 15.3% | 13.2% | 0.0031 |
| Spam Reports | 2.1% | 0.8% | 1.2% | 0.0001 |

**Finding:** Weekly emails show highest engagement (opens +22% vs. daily, p < 0.001). Daily emails incur 2.6x more spam complaints.

## Recommendations

1. **Shift majority to weekly cadence** — Reduces unsubscribes while improving engagement
2. **Discontinue daily emails** — High unsubscribe and spam rates outweigh volume benefits
3. **Consider monthly for re-engagement:** Test monthly cadence on inactive segments (> 30 days no open)
4. **Monitor seasonality:** Replicate analysis during peak promotional periods (Nov-Dec)

## Reproducibility

- **Code:** [GitHub: analytics-team/email-frequency-test](https://github.com/analytics-team/email-frequency-test)
- **Commit:** a1b2c3d (Jan 15, 2025)
- **Notebook:** \`analysis/email_frequency_rct.ipynb\`
- **Random Seed:** 42
- **Environment:** Python 3.10, scipy 1.9.3, numpy 1.23.5
- **Data Snapshot:** 2025-01-15 (frozen for reproducibility)

### How to Reproduce
\`\`\`bash
git clone https://github.com/analytics-team/email-frequency-test.git
cd email-frequency-test
pip install -r requirements.txt
python -m jupyter notebook analysis/email_frequency_rct.ipynb
# Run all cells; outputs match results above ✓
\`\`\`

## Peer Review
- **Reviewed by:** @statistical-council (2025-01-20)
- **Methodology:** Approved ✓
- **Findings:** Approved ✓
- **Recommendations:** Approved ✓
```

**Why this works:** Sample size upfront. All statistics include CI and effect size. Assumptions tested. Limitations transparent. Bonferroni correction applied. Code reproducible and pinned. Peer reviewed.

---

### Bad Example
```markdown
# Email Analysis

## Findings
Email frequency matters. Weekly emails are better than daily (p = 0.01). Monthly emails might work too.

## Recommendation
Use weekly emails. This will improve performance.
```

**Why this fails:** No sample size. No confidence interval. No effect size. No assumptions documented. P-value without context suggests p-hacking. Vague "might work." No code. Not reproducible.

## Tactical Guidance

**Hypothesis Registration:**
- Declare primary hypothesis before seeing data (pre-registration on OSF, AsPredicted)
- Distinguish pre-planned from exploratory analyses
- Exploratory findings labelled [INFERENCE] and marked for validation study

**Statistical Reporting:**
- Always report: n, mean (or proportion), SD (or CI), test statistic, p-value, effect size
- Confidence intervals more informative than p-values alone
- Report effect sizes in standardised units (Cohen's d, η², OR) for cross-study comparison

**Model Documentation:**
- Features: name, type, source, transformation, missingness handling
- Training data: date range, size, sampling strategy, class balance
- Validation: train/test split ratio, k-fold details, holdout set date range
- Performance: accuracy, precision, recall, AUC-ROC (not accuracy alone for imbalanced data)
- Bias: stratified performance by demographic groups

**Assumption Testing:**
- Normality: Shapiro-Wilk test for small n, Q-Q plots for visual inspection
- Homogeneity: Levene's test (ANOVA) or Welch's test (robustness)
- Independence: Check for repeated measures, clustering, autocorrelation
- Document violation impact: "If violated, use non-parametric test"

**Code Reproducibility:**
- Pin Python/R version, all package versions in requirements.txt or renv.lock
- Use fixed random seed (report it)
- Commit code before running analysis; don't commit generated results
- Publish data snapshot (or script to regenerate it) alongside code

## Pre-Publication Checklist
- [ ] Research question stated as testable hypothesis
- [ ] Sample size disclosed upfront
- [ ] All statistical results include 95% CI (not just p-value)
- [ ] Effect sizes reported (Cohen's d, η², odds ratio, etc.)
- [ ] All assumptions listed and tested (normality, independence, etc.)
- [ ] Multiple comparisons corrections applied (Bonferroni, FDR) if >1 test
- [ ] Limitations section acknowledges generalisability constraints
- [ ] Findings marked [CONFIRMED] if within registered hypothesis, [INFERENCE] if exploratory
- [ ] Code and random seed pinned and reproducible
- [ ] Peer review completed and approved
- [ ] No p-hacking language ("looked at the data and found...") — pre-registered findings only

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this channel's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load channel → Create content → Channel checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

