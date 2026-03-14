# AI Agents & Model Documentation

## Goal
Enable reproducible AI system evaluation and safe deployment through transparent model cards, system prompt documentation, benchmark reporting, and bias assessment so stakeholders understand capabilities, limitations, and risks.

## Success Metrics (2025-2026)
- 100% of models have documented benchmark scores with confidence intervals
- All evaluation methodologies reproducible (code available, random seeds pinned)
- Zero hallucinations from models due to undocumented training data gaps (marked [INFERENCE])
- Agent safety assessments completed for 100% of production systems
- Bias testing documented for all protected attributes (gender, race, age)

## Limits & Restrictions

### Technical
- Benchmark scores must be reproducible with pinned code and seed
- Training data dates, sizes, and composition documented (not vague)
- Evaluation methodology must be testable (available benchmarks, defined metrics)
- Model limitations explicitly declared (no "works for all use cases")
- Hallucination risks identified and mitigated with specific guardrails

### Platform/Context
- Lives in model registry (MLflow, Weights & Biases), knowledge base, Hugging Face Model Cards
- Primary audience: ML engineers, product managers, compliance/risk teams, end users
- Lifecycle: Updated when model retrains; benchmarks re-run quarterly; safety reassessed annually
- Discoverability: Indexed by task, performance metric, safety rating

### GGP Etiquette
- Never fabricate benchmark scores — always report against named benchmarks with evidence
- Never hide evaluation methodology — declare sampling, train/test splits, cross-validation
- Mark all assumptions as [INFERENCE] (training data, model behaviour, failure modes)
- Flag hallucination risk areas explicitly (low-confidence outputs, extrapolation)
- Document bias testing for protected attributes; declare confidence in fairness claims

## Template

```markdown
# Model Card: [Model Name]

## Overview
[What task does this model perform? What is its primary use case?]

## Intended Use
- **Intended Users:** [Who should use this model?]
- **Intended Applications:** [Specific use cases]
- **Out-of-Scope Uses:** [What this model should NOT be used for]

## Model Details
- **Architecture:** [Model type, size, framework]
- **Training Data:** [Dataset name, source, date range, size]
- **Training Approach:** [Supervised/unsupervised, preprocessing, augmentation]
- **Validation:** [Train/test/val split, cross-validation strategy]

## Performance Metrics

### Benchmark Results

| Benchmark | Metric | Score | Confidence | Notes |
|---|---|---|---|---|
| [Benchmark Name] | Accuracy | 94.2% | 95% CI: [93.5%, 94.9%] | N=10,000 |
| [Benchmark Name] | Precision | 92.1% | 95% CI: [91.2%, 93.0%] | Class: positive |
| [Benchmark Name] | Recall | 89.3% | 95% CI: [88.1%, 90.5%] | Class: positive |

### Reproducibility
- **Code:** [GitHub commit hash]
- **Seed:** [Random seed value]
- **Environment:** Python 3.10, PyTorch 2.0.1
- **Compute:** GPU (NVIDIA A100), runtime ~24 hours

## Limitations & Biases

### Known Limitations
1. [Limitation and impact]
2. [Limitation and impact]

### Bias Assessment
- **Testing:** Yes, documented below
- **Protected Attributes Evaluated:** Gender, race, age, geography
- **Test Data:** [Dataset name, size, composition]

| Attribute | Group | Accuracy | Disparity | Notes |
|---|---|---|---|---|
| Gender | Male | 94.5% | +0.3% vs. baseline | Minimal |
| Gender | Female | 94.2% | 0.0% (baseline) | Baseline |
| Race | White | 94.8% | +0.6% vs. baseline | Minimal |
| Race | Black | 93.0% | -1.2% vs. baseline | [INFERENCE]: Sample size N=200; recommend larger validation set |

## Agent Configuration (If Applicable)

### System Prompt
\`\`\`
[Full system prompt; declare guardrails, escalation rules]
\`\`\`

### Tools & Capabilities
- [Tool 1]: [Purpose, input/output]
- [Tool 2]: [Purpose, input/output]

### Failure Modes & Guardrails
- Hallucination: [Detection method, mitigation]
- Out-of-distribution: [Edge cases, escalation rule]
- Adversarial: [Known jailbreak vectors, defenses]

## Safety Assessment

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---|---|---|---|
| Hallucination | Medium | High | Fact-checking guardrail | [CONFIRMED] Implemented |
| Bias | Low | Medium | Fairness monitoring | [INFERENCE] Partial (gender tested, race TBD) |
| Prompt Injection | Medium | High | Input validation | [CONFIRMED] Implemented |

## Changelog
- v2.0.0 (2025-01-15): [Changes]
- v1.0.0 (2024-06-01): Initial release
```

## Examples

### Good Example
```markdown
# Model Card: Sentiment Classification v2.1

## Overview
RoBERTa-based sentiment classifier for customer feedback (positive/negative/neutral). Deployed in feedback analysis pipeline processing 50k+ messages/day.

## Intended Use
- **Intended Users:** Product and customer success teams
- **Applications:** Categorizing customer feedback for dashboards, trend analysis
- **NOT Intended For:** Individual decision-making, moderation enforcement, bias assessment research
- **Constraints:** English text only; accuracy on non-English drops to 67%

## Model Details
- **Architecture:** RoBERTa-large (355M parameters), fine-tuned classification head
- **Framework:** PyTorch 2.0.1; HuggingFace transformers 4.35.0
- **Training Data:**
  - Source: Customer feedback database + Twitter sentiment corpus
  - Size: 250,000 labelled examples
  - Date Range: Jan 2023 - Dec 2024 (current year training data only)
  - Split: 70% train, 15% validation, 15% test
  - Preprocessing: Lowercasing, URL removal, emoji handling (mapped to tokens)

## Performance Metrics

### Benchmark Results (Test Set)
| Benchmark | Metric | Score | 95% CI | Sample Size |
|---|---|---|---|---|
| Internal Test Set | Accuracy | 93.8% | [93.2%, 94.4%] | N=10,800 |
| Internal Test Set | Weighted F1 | 0.939 | [0.933, 0.945] | N=10,800 |
| Internal Test Set | Precision (Positive) | 94.2% | [93.1%, 95.3%] | N=3,200 (positive examples) |
| Internal Test Set | Recall (Positive) | 92.1% | [90.8%, 93.4%] | N=3,200 |

### Real-World Performance (Production Monitoring, 2025-01-15)
| Metric | Value | Trend |
|---|---|---|
| User Feedback Disagreement Rate | 8.2% | ↓ (was 9.1% in Dec) |
| False Positives (negative misclassified as positive) | 5.1% | ↔ Stable |
| False Negatives (positive misclassified as negative) | 2.8% | ↓ (improved after v2.0) |

### Reproducibility
- **Code:** [GitHub: customer-feedback-models/sentiment-v2.1](https://github.com/company/models)
- **Commit:** a1b2c3d (Jan 10, 2025)
- **Random Seed:** 42
- **Training Script:** \`scripts/train_sentiment.py\`
- **Environment:** Python 3.10, PyTorch 2.0.1, CUDA 11.8
- **Compute:** NVIDIA A100 GPU, 18-hour training run
- **Data Snapshot:** Frozen 2025-01-10; available in S3: s3://ml-data/sentiment-v2.1/

**Reproduction Command:**
\`\`\`bash
git clone https://github.com/company/models.git
cd models && git checkout a1b2c3d
python scripts/train_sentiment.py --seed 42 --config configs/sentiment-v2.1.yaml
# Produces checkpoint with same test accuracy ± 0.1%
\`\`\`

## Limitations & Known Issues

1. **Language Limitation:** Trained on English only
   - Non-English accuracy: ~67% (not recommended)
   - Mitigation: Filter non-English with language detection model first
   - Impact: HIGH — produces incorrect labels on non-English text

2. **Sarcasm Handling:** Often misclassifies sarcastic negative feedback as positive
   - Frequency: ~15% of sarcastic examples misclassified
   - Mitigation: Manual review queue for human-uncertain predictions (confidence <0.70)
   - Impact: MEDIUM — affects trend analysis but caught by human review

3. **Demographic Data Gap:** Training set 68% US-based feedback; international usage introduces bias
   - Impact: MEDIUM — see bias assessment below
   - Mitigation: Quarterly retraining with balanced geographic data
   - Status: [INFERENCE] — confidence low; recommend validation study

## Bias Assessment

### Methodology
- **Data:** 3,000-sample stratified random subset of test set
- **Attributes:** Gender (inferred from name), geography (IP location), age (inferred from writing style)
- **Method:** Accuracy computed per demographic group; disparity measured vs. majority group

### Results

| Attribute | Group | Sample Size | Accuracy | Disparity vs. Baseline | Assessment |
|---|---|---|---|---|
| **Inferred Gender** | Female | 1,400 | 92.1% | -1.7% (significant) | [INFERENCE]: Gender classification inferred; low confidence |
| | Male | 1,450 | 93.8% (baseline) | — | Baseline |
| **Geography** | US | 2,100 | 94.2% | +0.4% (baseline) | [CONFIRMED] VERIFIED |
| | International | 900 | 91.8% | -2.4% (significant) | [GAP] GAP: Recommend collecting more intl. data |
| **Estimated Age** | 18-35 | 1,200 | 94.0% | +0.2% | [CONFIRMED] VERIFIED |
| | 35-55 | 1,100 | 93.9% | +0.1% | [CONFIRMED] VERIFIED |
| | 55+ | 700 | 92.1% | -1.9% (significant) | [INFERENCE]: Age inference low confidence; small sample |

### Fairness Status
- **Gender:** [INFERENCE] — Disparity detected but inference method unreliable; recommend human-labelled fairness study
- **Geography:** [GAP] GAP — International performance gap; priority for next training cycle
- **Age:** [CONFIRMED] VERIFIED — Minimal disparity; acceptable (age inference method validated separately)

### Mitigation Plan
1. Collect 5,000 international examples for v3.0 training (ETA: Q2 2025)
2. Use validated human gender labels (not inferred) for fairness evaluation
3. Quarterly disparity monitoring (automated test suite)

## Agent Configuration

### System Prompt
\`\`\`
You are a customer feedback sentiment analyser. Your job is to classify feedback as POSITIVE, NEGATIVE, or NEUTRAL.

Rules:
1. Analyse the literal text; don't infer intent beyond what's written.
2. If uncertain (confidence < 0.60), respond with "UNCERTAIN: [reason]"
3. Never make up context; cite specific words from feedback.
4. If feedback is primarily sarcasm, mark as SARCASM_ALERT.

Example:
Input: "This product is amazing!" → POSITIVE
Input: "Yeah, just what I needed, another bug." → SARCASM_ALERT, likely NEGATIVE
Input: "The app works." → NEUTRAL

Output Format:
{
  "sentiment": "POSITIVE|NEGATIVE|NEUTRAL|UNCERTAIN|SARCASM_ALERT",
  "confidence": 0.0-1.0,
  "reasoning": "[2-3 sentences explaining classification]"
}
\`\`\`

### Tools
- **Tool 1: Confidence Check** — If confidence < 0.60, escalate to human review
- **Tool 2: Sarcasm Detection** — Flag likely sarcasm; confirm with human
- **Tool 3: Language Detection** — Alert if non-English detected

### Failure Modes & Guardrails

| Failure Mode | Symptom | Likelihood | Mitigation |
|---|---|---|---|
| Hallucination (fabricated reasoning) | Explanation doesn't match input text | Low (fine-tuned model) | [CONFIRMED] Validated: Only uses words from input |
| Adversarial Prompt Injection | Model misled by embedded instructions in feedback | Medium | [INFERENCE] — Guardrail in place; not stress-tested against sophisticated attacks |
| Out-of-Distribution (non-English) | Low confidence but produces label | Medium | [CONFIRMED] Language detection filters non-English before classification |
| Bias Amplification | Demographic disparity in real-world usage | Medium (see bias assessment) | [INFERENCE] Monitoring enabled; remediation in progress |

## Safety Assessment

| Risk | Type | Likelihood | Impact | Status | Owner |
|---|---|---|---|---|---|
| Hallucinated Reasoning | Integrity | Low | Medium | [CONFIRMED] Mitigated: Guardrail verified | @ml-team |
| Bias Against Minorities | Fairness | Medium | Medium | [INFERENCE] Partial: Monitoring active; full remediation planned Q2 | @ml-team |
| Non-English Misclassification | Accuracy | Medium | Low | [CONFIRMED] Mitigated: Language detection filter | @ml-team |
| Prompt Injection | Security | Medium | Low | [INFERENCE] Partial: Basic guards; not tested vs. adversarial | @security-team |

## Changelog

**v2.1 (2025-01-10)**
- Improvement: Fine-tuned on sarcasm examples (15% → 8% sarcasm misclassification rate)
- Improvement: Confidence calibration improved (ECE reduced from 0.08 to 0.04)
- Addition: Language detection guardrail
- Data: +20k examples from Q4 2024 feedback

**v2.0 (2024-09-01)**
- Change: Switched from BERT to RoBERTa (accuracy +2.1%)
- Improvement: Added neutral class (was binary pos/neg)
- Data: Retrained on 2024 feedback only (removed 2023 data)

**v1.0 (2024-01-15)**
- Initial release; binary classification (pos/neg)

## Questions & Support
- Questions about performance: @ml-team
- Questions about bias/fairness: @ml-team + @ethics-committee
- Questions about deployment: @ml-ops
```

**Why this works:** Benchmarks reproducible. Training data documented (date range, size). Bias tested and results reported transparently. Failure modes listed with mitigations. Confidence intervals provided. Sarcasm limitation explicit.

---

### Bad Example
```markdown
# Sentiment Model

Model: RoBERTa-based

Performance: Very good, achieves 94% accuracy

Training: Done on feedback data

Limitations: Sometimes gets sarcasm wrong

Notes: Works well. Ready for production.
```

**Why this fails:** No benchmark name, no CI. Training data vague (when, what, how much?). Bias assessment missing. Failure mode ("gets sarcasm wrong") not quantified. No reproducibility. No safety assessment.

## Tactical Guidance

**Model Cards:**
- Document training data: size, date range, composition (how representative?)
- Benchmark against named, standard benchmarks (not custom measures)
- Confidence intervals required (shows statistical rigor)
- Declare intended use; don't claim "works for everything"

**Hallucination Prevention:**
- Limit model responses to fact-checking against known sources
- Require confidence scores; flag low-confidence outputs for human review
- Monitor production outputs for semantic drift
- Provide guardrails: "Only use information from: [sources]"

**Bias Testing:**
- Define protected attributes upfront (gender, race, age, geography)
- Use stratified sampling; ensure adequate group sizes
- Report disparity metric (% difference vs. baseline or between groups)
- Document confidence in fairness claims (small samples = low confidence)

**Agent Safety:**
- System prompt: explicit guardrails, escalation rules, tool usage limits
- Tool definitions: clear purpose, inputs, outputs, error modes
- Monitoring: log all uses, flag edge cases, alert on anomalies
- Quarterly safety review: test for adversarial inputs, jailbreak attempts

## Pre-Publication Checklist
- [ ] Benchmark scores reported with confidence intervals (not point estimates)
- [ ] Training data documented: source, size, date range, preprocessing
- [ ] Evaluation methodology reproducible: code available, random seed pinned
- [ ] Model limitations documented; intended use clear
- [ ] Bias testing completed for all protected attributes
- [ ] Bias test sample sizes adequate (≥300 per group); confidence documented
- [ ] Hallucination risk areas identified and guardrailed
- [ ] Agent system prompt includes escalation rules and tool limits
- [ ] Safety assessment completed; risks and mitigations documented
- [ ] Failure modes testable and reproducible (not hypothetical)
- [ ] Real-world performance monitored and compared to benchmarks
- [ ] Changelog updated with each version
- [ ] GGP markers applied: [CONFIRMED] for verified benchmarks/bias results, [INFERENCE] for inferred limitations, [GAP] for gaps
- [ ] Peer review or external validation completed

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this channel's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load channel → Create content → Channel checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

