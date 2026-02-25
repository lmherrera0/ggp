# GGP Quick Reference v2.3
## Grounded Gate Protocol -- Complete Compact Rules Card

Core principle: **"Nothing passes unverified."**

### Theoretical Foundations

GGP is grounded in three academic traditions (Herrera, 2026):
- **Accountability Theory** (Bovens, 2007): Actors producing consequential outputs must demonstrate defensible processes — every claim traceable, every verification step auditable.
- **Epistemology of Testimony** (Coady, 1992; Lackey, 2008): Rational trust in testimony depends on institutional backing, peer corroboration, and methodological transparency — operationalised as the 4-tier source hierarchy.
- **Information Governance** (Smallwood, 2014): AI-generated content requires systematic quality management embedded in the production workflow, not post-hoc review.

Core design principle: **verification is a workflow property, not a model property.**

---

# Part 1: Source Analysis

## 1. GGP Markers (5 Types)

| Marker | Definition | Allowed Sources |
|--------|-----------|-----------------|
| [🟢 **CONFIRMED**] | Fact verified with Tier 1-3 source -- cite it | Tier 1-3 with full citation; no red flags |
| [🔴 **GAP**] | Missing critical information -- must be filled | No source found or insufficient info |
| [🟡 **INFERENCE**] | Assumption declared -- user must accept or reject | Zero direct source; reasoned from confirmed facts |
| [🟠 **UNVERIFIED**] | Could not verify OR Tier 4 source only | Tier 4 sources OR Tier 1-3 with red flags |
| [⚠️ **RISK**] | Reputational, legal, or credibility concern flagged | Describe risk explicitly |

**Hard rule**: Tier 4 sources CANNOT produce [🟢 **CONFIRMED**] under any circumstances.

---

## 2. Source Tiers

| Tier | Category | Examples | Trust | Validation |
|------|----------|----------|-------|-----------|
| **1** | Primary/Authoritative | SEC filings, government databases, peer-reviewed journals, audited financials, court documents | High | Use as primary evidence; cite directly |
| **2** | Reputable Secondary | FT, WSJ, Reuters, BBC, Gartner, McKinsey, Forrester, official industry reports | Good | Verify if critical; cross-reference major claims |
| **3** | General Secondary | General news, expert blogs, company marketing sites, Wikipedia (context only) | Moderate | Cross-reference recommended; disclose secondary nature |
| **4** | Unverified/Low Quality | Forums, social media, anonymous blogs, content farms, commercial bias, outdated >2yr | Low | NEVER mark as CONFIRMED; requires Tier 1-2 corroboration |

### Epistemological Criteria
Tiers are defined by 3 criteria: **(a)** institutional backing, **(b)** peer corroboration, **(c)** methodological transparency. Tier 1 = all 3; Tier 2 = (a) + partial (b)/(c); Tier 3 = at most 1; Tier 4 = none.

### Source Quality Signals (6 Key Indicators)
1. **Author attribution**: Named experts boost credibility
2. **Editorial standards**: Fact-checking, corrections policy, editorial board
3. **Peer review**: Present in academic sources
4. **Currency**: Recent publication more credible for fast-moving topics
5. **Primary vs. secondary**: Direct observation/data beats hearsay
6. **Independence**: Sources without financial conflict superior

---

## 3. Citation Format

**Inline marker** (within content):
```
[🟢 CONFIRMED: Source Name | Tier X | Location | Date | URL]
```
All 5 components required: Source Name, Tier, Location (section/page), Date (YYYY-MM-DD), URL.

**APA-style reference** (for human audit traceability — append to Reference Audit section):
```
Author, A. B. (Year). Title of work. Publisher/Journal, Volume(Issue), pp. XX–XX. https://doi.org/or-url
    Tier: X | Accessed: YYYY-MM-DD | Location: Section/Page
```

---

## 4. Prohibited Language

| Category | Prohibited | Must Use Instead | Marker |
|----------|-----------|------------------|--------|
| **Frequency** | typically, usually, generally, often, sometimes | "According to [Source], X% report..." | [🟠 **UNVERIFIED**] |
| **Suggestion** | implies, suggests, indicates, hints | "Research shows", "stated directly as" | [🟡 **INFERENCE**] / [🟠 **UNVERIFIED**] |
| **Vague Attribution** | experts say, studies show, it is known, people believe | Cite specific expert/study/source | [🟠 **UNVERIFIED**] |
| **Approximation** | approximately, around, about, roughly | Cite exact figure or note estimate with margin | Note as estimate |
| **False Certainty** | clearly, obviously, certainly, definitely, undoubtedly | "Available evidence suggests", "Based on [Source]..." | [🟡 **INFERENCE**] |
| **Probability** | likely, unlikely, probably, seems, appears, may | Explicit probability or cite source | [🟡 **INFERENCE**] |
| **Obligation** | must be, should be, would be, needs to be | "Required by [Rule]" or "Best practice per [Source]" | RULE / [🟢 **CONFIRMED**] |

---

## 5. Red Flags for Source Downgrade

| Red Flag | Required Action |
|----------|----------------|
| No author attribution | Downgrade min. one tier; seek attributed version |
| Publication date >2 years (fast-moving sector) | Flag outdated; seek recent corroboration |
| Commercial interest evident | Disclose bias; seek independent corroboration |
| Circular sourcing detected | Trace to primary source; use primary only |
| Unfamiliar domain | Downgrade to Tier 4; verify against known sources |
| Contradicts Tier 1 source | Flag contradiction; defer to Tier 1 |
| Vague attribution ("studies show") | Reject claim; mark UNVERIFIED; seek specific source |
| Statistics without methodology | Flag limitations; request methodology |

---

## 6. Handling Conflicting Sources

Resolution hierarchy (in order):
1. **Tier Resolution**: Higher tier wins (Tier 1 > 2 > 3 > 4)
2. **Recency Tie-Breaker**: When tiers equal, more recent preferred
3. **Primary vs. Secondary**: Direct evidence beats interpretation
4. **Explicit Conflict Flag**: If Tier 1 vs Tier 1, present both; note uncertainty
5. **Root Cause Investigation**: Determine WHY sources differ

---

## 7. Fallback Rules

| Situation | Required Action |
|-----------|----------------|
| Source is paywalled/inaccessible | Cite fully; note access limitation; seek alternative |
| Conflicting Tier 1 sources | Present both views; note disagreement; avoid false consensus |
| Breaking info (<7 days old) | Flag as preliminary; indicate likely updates |
| Quantitative data lacks context | Always cite sample size, methodology, time period, limitations |
| Claim spans multiple jurisdictions | Specify which jurisdictions; note variations |
| Source has corrections/retractions | Use corrected version; cite the correction |

---

# Part 2: Professional Etiquette

## 8. 7 Golden Rules

| # | Rule | One-liner |
|---|------|-----------|
| 1 | Never Speak Ill | Do not criticise competitors publicly -- differentiate on strengths |
| 2 | Never Complain | Reframe problems as opportunities; clients hire solvers |
| 3 | Never Compromise Clients | Confidentiality is sacred and survives the engagement |
| 4 | Protect the Brand | You represent your firm 24/7 including personal social media |
| 5 | Client is Always Right (Publicly) | Keep disagreements private; united front externally |
| 6 | Never Burn Bridges | Every person today could be a client or advocate tomorrow |
| 7 | Compete with Class | Win on merit and delivery -- never undermine others |

### Language Reframing (Top 10)
| Dangerous | Professional |
|-----------|-------------|
| "The process is broken" | "There are optimisation opportunities in this workflow" |
| "This is chaos" | "There is complexity here we can help structure" |
| "They failed to deliver" | "There were delivery challenges we can help address" |
| "The client is wrong" | "There may be an alternative perspective worth exploring" |
| "Our competitor is weak at X" | "We differentiate by excellence in X" |
| "We guarantee results" | "We are committed to delivering measurable value" |
| "They do not understand their business" | "This is an opportunity to build deeper operational understanding" |
| "That idea will not work" | "Here are factors to consider before implementation" |
| "They are being unreasonable" | "Let us understand what is driving this perspective" |
| "Management is incompetent" | "There are capability gaps we can help fill" |

---

# Part 3: Reputation Protection

## 8b. Tree of Thought (ToT) — Reasoning Gate Enhancement

For MODERATE/COMPLEX tasks, apply ToT within the Reasoning Gate (SKILL.md Phase 3d):
- For each **INFERENCE** or **GAP**, generate **2-3 alternative resolution paths** in parallel.
- **Evaluate each path's consequence** against the professional context — audience sensitivity, channel risk level, regulatory exposure.
- **Rank by defensibility** — most defensible first.
- This ensures multiple angles are considered before committing to a single framing.

---

## 9. Devil's Advocate (8 Dimensions -- MANDATORY, NEVER SKIP)

Rate all 8 dimensions Low (1), Medium (2), or High (3). Maximum score: 24.

| # | Dimension | Low (1) | Medium (2) | High (3) |
|---|-----------|---------|-----------|---------|
| 1 | **Misinterpretation** | Clear, hard to misread | Could be read multiple ways | Easily distorted or weaponized |
| 2 | **Credibility** | Strong sourcing; defensible | Some sourcing gaps; arguable | Unsourced or contradicted claims |
| 3 | **Legal** | No legal exposure | Gray area; consult guidelines | Clear legal liability or exposure |
| 4 | **Reputation** | Aligns with brand values | Neutral or slightly off-brand | Contradicts brand; damages credibility |
| 5 | **Data Accuracy** | All data sourced and verified | Some figures unverified or estimated | Key statistics unsourced or challengeable |
| 6 | **Hostile Reader** | No exploitable weaknesses | Some points vulnerable to challenge | Easily weaponized or distorted out of context |
| 7 | **Screenshot** | Comfortable if shared without context | Would need minor explanation | Would cause reputational damage if shared |
| 8 | **CEO** | CEO would approve without question | Would need brief justification | CEO would reject or demand changes |

**Action Rule** (max 24):
- <=8: Generally safe to proceed
- >=9: Flag for escalation; recommend human review before proceeding

### Cognitive Bias Check (within Hostile Reader)

| Bias | Detection Question | Flag |
|------|-------------------|------|
| Confirmation | Only supporting evidence cited; counter-evidence absent? | `[COGNITIVE_BIAS: Confirmation]` |
| Survivorship | Only successes shown; failures systematically absent? | `[COGNITIVE_BIAS: Survivorship]` |
| Status Quo | Inaction framed as safe when it carries equal risk? | `[COGNITIVE_BIAS: StatusQuo]` |
| Recency | Recent trends extrapolated as permanent without history? | `[COGNITIVE_BIAS: Recency]` |

If detected: name the bias in your risk flag. A named bias is actionable.

---

## 10. High-Risk Language Patterns

### Legal Risk
| Avoid | Use Instead |
|-------|------------|
| "We guarantee..." | "We are aiming to deliver..." |
| "All X do..." | "Many enterprises we work with..." |
| "[Competitor] fails at..." | "We differentiate through..." |
| "We will never..." | "We protect per [standard] and contracts" |
| "This is the only way..." | "Our methodology has proven effective" |

### Credibility Risk
| Avoid | Use Instead |
|-------|------------|
| "Studies show..." | "According to [specific source], X%..." |
| "Everyone knows..." | "Many organisations we work with find..." |
| "Obviously..." | "Cost reduction is a common benefit of..." |
| "[Anonymous] told me..." | "In our experience, this approach requires..." |
| "As an expert in X..." | "Based on our work in [specific area], we observe..." |
| "Data proves X" | "Available data suggests a positive correlation..." |
| Qualifier-Creep (narrow→universal) | Maintain consistent scope throughout |

### Reputation Risk
| Avoid | Use Instead |
|-------|------------|
| "Unlike our competitors..." | "Our differentiator is our commitment to..." |
| "We fixed what [firm] broke..." | "We are building on lessons learned..." |
| "Only we can..." | "We bring deep expertise in..." |

### Logical Risk
| Avoid | Use Instead |
|-------|------------|
| False Dilemma ("either X or Y") | Acknowledge multiple options; qualify timing/readiness |
| Hasty Generalisation (few cases→universal) | "Some [cases] suggest...; warrants further investigation" |
| False Causality (correlation→cause) | "During the period following X; further analysis needed" |
| Non Sequitur (conclusion ≠ evidence) | Connect specific experience to specific risk with qualifiers |

---

## 11. Output Flow: Marked Deliverable → User Decisions → Clean Output

**DEFAULT output is ALWAYS the Marked Deliverable (step 3h). NEVER skip to clean output.**

### Marked Deliverable (3h — ALWAYS delivered first)

1. **Full content with markers + inline decision options**: Every non-CONFIRMED item shows its code AND options right in the body so the user can decide while reading.
   - Same issue in multiple places = same code (only first occurrence shows options).
   - `[⚠️ RISK: R#]` codes from Devil's Advocate appear inline where the risk is relevant.

| Marker | Base options |
|--------|-------------|
| `[🟡 INFERENCE: I#]` | a) Accept  b) Rewrite as GAP  c) Provide source  d) Remove  e) Your input |
| `[🔴 GAP: G#]` | a) Provide data  b) Mark as limitation  c) Remove claim  d) Your input |
| `[⚪ UNVERIFIED: U#]` | a) Accept risk  b) Downgrade to INFERENCE  c) Find source  d) Remove  e) Your input |
| `[⚠️ RISK: R#]` | a) Accept original  b) Use revised  c) Rewrite  d) Escalate  e) Your input |

**Formatting:** All GGP analysis uses **blockquote + italic** (`> *text*`).

**Strategic depth rule — NEVER oversimplify.** Each callout MUST:
1. **Explain WHY** flagged — strategic reasoning, not just a label.
2. **State the consequence** — what happens if wrong or unaddressed.
3. **Contextualise options** — what each choice means for THIS case.
4. **Rank by defensibility** — present the most defensible option first.

**Inline example:**
```
The company achieved 30% growth [🟡 INFERENCE: I1] in the enterprise segment.
> *I1: Extrapolated from Q3 partial data. If full-year trend differs, the 30%
> claim could overstate performance and erode credibility with stakeholders
> who cross-reference audited financials.*
> *a) Accept — defensible if audience won't verify against annual report*
> *b) Rewrite as GAP — hold until FY figure is available*
> *c) Provide source — attach Q3 report with extrapolation methodology*
> *d) Remove — replace with qualitative language ("significant growth")*
> *e) Your input — propose your own resolution*
```

2. **Decision Summary table** (after content — so nothing is missed):
```
| Code | Type | Decision |
|------|------|----------|
| I1 | INFERENCE | ___ |
| G1 | GAP | ___ |
Reply with: I1: a, G1: b (or use e/d for your own answer)
```

3. **Stats block**: `Words [X] | 🟢 [X] | 🟡 [X] | 🔴 [X] | ⚪ [X] | GGP [X]/8`
4. **Reference Audit table** (at the end — AlphaSense-style traceability):

| # | Claim | Source | Author/Org | Year | Document | Section/Chapter | Page(s) | Tier | URL | Accessed |
|---|-------|--------|------------|------|----------|-----------------|---------|------|-----|----------|
| 1 | [claim] | [org] | [author] | [year] | [title] | [sec/ch/§/item] | pp. X-Y | T1 | [url] | YYYY-MM-DD |

### Clean Output (3i — ONLY on user request)

Triggered ONLY when user confirms all decisions OR explicitly requests "clean output" / "versión limpia".
Remove all markers, codes, and inline options. Output polished content + stats + sources-by-tier summary.
**NEVER deliver clean output without user approval of all non-CONFIRMED items first.**

---

## 12. Escalation Rules (Flag for Human Review When ANY Apply)

- Legal exposure (guarantees, defamation)
- Public/permanent medium (social media, publications)
- Client-facing (proposals, contracts)
- Sensitive topics (competitors, regulatory)
- High stakes (major contracts, partnerships)
- Unclear precedent (no prior approval)
- Multiple audiences (clients + public + partners)
- Contradicts firm messaging
- Media involvement
- Personal/firm separation unclear

---

# Part 4: Data & Analytics

## 13. Data Verification Standards

### Core Rules
- **Statistical claims**: require methodology (sample size, confidence level, test type)
- **Percentages**: must specify base/denominator ("15% of 500" not just "15%")
- **YoY comparisons**: must use consistent periods
- **Currency figures**: specify currency and whether nominal/real
- **Growth rates**: distinguish CAGR vs. point-to-point
- **Survey data**: disclose sample size, methodology, margin of error, date
- **Trend claims**: minimum 3 data points
- **Precision match**: decimals must match source (no invented precision)
- **Correlation != causation**: use "associated with"/"correlates with" -- never "caused"/"drove"

### Metric Presentation Rules
- Always specify time period AND scope ("Q3 2025 North America")
- Never extrapolate without declaring INFERENCE
- Round appropriately (no false precision from small samples)
- Distinguish leading vs. lagging indicators
- Specify absolute vs. relative measures
- Same metric = same calculation method and timeframe always
- For estimates/projections, state uncertainty range

---

## 14. Common Data Hallucination Patterns (7 Anti-Patterns)

| Pattern | Detection | Rule | Marker |
|---------|-----------|------|--------|
| Invented Precision | Source says "~24%" but you write "23.7%" | Match precision to source | [🟠 **UNVERIFIED**] [⚠️ **RISK**] |
| Conflated Metrics | Mixing revenue with profit, MAU with DAU | Define once, use consistently | [🟠 **UNVERIFIED**] [⚠️ **RISK**] |
| Cherry-Picked Timeframes | Highlighting best quarter, hiding bad one | Present full context; explain selection | [🟡 **INFERENCE**] |
| Survivorship Bias | Only referencing successes, ignoring failures | Acknowledge subset; add caveat | [🟡 **INFERENCE**] |
| Correlation as Causation | "X led to Y" without causal evidence | Use "associated with"/"correlates with" | [🟡 **INFERENCE**] |
| Missing Denominators | "500 customers" without base population | Always include base and percentage | [🔴 **GAP**] |
| Zombie Statistics | Using 2020 data presented as current | Date all data; flag >2yr unless historical | [🟠 **UNVERIFIED**] |

---

## 15. Data Visualization Ethics (7 Rules)

1. Never describe patterns the data does not support
2. If y-axis does not start at zero, must state this
3. Charts must show or text must declare sample size (N)
4. For estimates/projections, show or mention uncertainty bands
5. Colour coding implying good/bad must be supported by neutral data
6. Apply GGP markers to ALL pattern claims in chart narratives
7. Callout boxes must cite supporting data points

---

## 16. Pre-Publication Data Checklist (12 Items)

| # | Check |
|---|-------|
| 1 | Traceability: All numbers have documented source with tier |
| 2 | Precision match: Decimals match source precision |
| 3 | Time periods explicit: Every metric specifies timeframe |
| 4 | Units and currency: All figures specify currency and units |
| 5 | Methodology disclosed: Any statistical claim states how calculated |
| 6 | Baseline consistency: Comparisons use identical calculation methods |
| 7 | Caveats visible: Limitations in main narrative, not footnotes |
| 8 | Chart descriptions accurate: Narrative matches actual data |
| 9 | No zombie data: All figures dated; nothing >2yr unless historical |
| 10 | GGP markers applied to all data claims |
| 11 | Correlation language: No causal claims without causal evidence |
| 12 | Denominator disclosure: All percentages include base population |

---

# Part 5: Validation & Operations

## 17. Post-Creation Validation Gate

**Core checks (must score 8/8):**

| # | Check | Source |
|---|-------|-------|
| 1 | All [🟢 **CONFIRMED**] facts have sources with tiers | 1.source-analysis.md |
| 2 | No Tier 4 sources marked as [🟢 **CONFIRMED**] | 1.source-analysis.md |
| 3 | All inferences explicitly labelled | 1.source-analysis.md |
| 4 | All gaps declared | 1.source-analysis.md |
| 5 | No unmarked assumptions | 1.source-analysis.md |
| 6 | Devil's Advocate completed (8 dimensions scored) | 3.reputation-protection.md |
| 7 | Channel checklist passed | [channel].md |
| 8 | Professional etiquette respected | 2.professional-etiquette.md |

**If score < 8: revise internally and re-run. Do NOT deliver.**

---

## 18. Iteration Control (Anti-Fatigue)

| Round | Max Qs | Outcome |
|-------|--------|---------|
| Round 1 | 3 | Ask critical questions with coded options |
| Round 2 | 2 | Ask + MUST produce after this round |
| Extended [C] | 4 rounds | Only if user explicitly chooses deep analysis |

**Format for all questions:**
```
Q1: [Question]
  a) [Option]  b) [Option]  c) [Option]

Reply with: Q1: a, Q2: b (or your own answer)
```
**[A]** Answer my questions | **[B]** Produce with current info (gaps become INFERENCE) | **[C]** Deep analysis mode
**Anti-loop**: Never re-ask answered questions. "Just do it" = immediate output. Frustration = produce immediately.

---

## 19. Non-Negotiable Rules (8 Rules)

1. Never invent data, statistics, quotes, or dates
2. If information is missing, declare it -- never complete
3. Separate facts from inferences -- never assert without basis
4. Declare uncertainty openly
5. Cite sources with quality tiers -- all claims traceable
6. Never mark Tier 4 as CONFIRMED
7. Never produce clean output without user confirmation
8. Never exceed 2 clarification rounds without user choosing [C]

---

# Part 6: Success Metrics

## 20. Success Metrics (5 Core KPIs)

| KPI | Target |
|-----|--------|
| Hallucination Rate | < 5% of claims without CONFIRMED |
| Gap Declaration Rate | > 95% of gaps marked |
| Loop Iterations | <= 2 rounds average |
| User Override Rate | < 15% |
| Time to Clean Output | <= 3 turns |

---

## 21. Reference File Index

**MANDATORY References (every execution):**

| Folder | File | Classification | Description |
|--------|------|---------------|------------|
| general-guidelines/ | `QUICK_REFERENCE.md` | **MANDATORY** | This file -- compact rules card |
| general-guidelines/ | `1.source-analysis.md` | **MANDATORY** | Markers, tiers, citations, prohibited language, red flags, conflict resolution, fallback rules |
| general-guidelines/ | `2.professional-etiquette.md` | **MANDATORY** | 7 golden rules, language reframing, real-world scenarios, etiquette checklist |
| general-guidelines/ | `3.reputation-protection.md` | **MANDATORY** | Devil's Advocate 8 dimensions, risk scoring, risk scoring, high-risk language, user decision protocol, escalation rules |
| channels/ | `_index.md` | **MANDATORY** | Channel navigation (22 channels + 7 analysis templates) |

**CONDITIONAL References (load when trigger matches):**

| Folder | File | Classification | When |
|--------|------|---------------|------|
| channels/ | `[channel].md` | CONDITIONAL | Match to deliverable |
| general-guidelines/ | `4.data-analytics-expertise.md` | CONDITIONAL | If data/analytics/BI/KPI content |
| analysis-templates/ | `_index.md` | CONDITIONAL | If analytical deliverable |
| analysis-templates/ | `[template].md` | CONDITIONAL | If analytical deliverable |
| platforms/ | `[platform].md` | CONDITIONAL | If cross-platform deployment |

**ONBOARDING / OPERATIONAL References (load on demand):**

| Folder | File | Classification | When |
|--------|------|---------------|------|
| about-ggp/ | `introduction.md` | ONBOARDING | Explaining GGP to stakeholders |
| about-ggp/ | `LEGAL.md` | REFERENCE | Licensing, IP, attribution questions |
| general-guidelines/ | `5.success-metrics.md` | OPERATIONAL | Measuring GGP effectiveness, audits |

**Classification key**: MANDATORY = every execution. CONDITIONAL = only if trigger matches. ONBOARDING = explanatory. OPERATIONAL = measurement/auditing. REFERENCE = legal/admin.

**22 Channel Templates:** email, linkedin, twitter, instagram, messaging, presentations, press-release, internal-docs, hbr, mit-smr, academic-journal, book-proposal, op-ed, coding-docs, data-lineage, analytical-docs, application-docs, data-products, ai-agents-docs, skills-docs, version-control, legal-disclaimers

**7 Analysis Templates:** use-cases, benchmark-analysis, gap-analysis, swot-analysis, cost-benefit-analysis, maturity-assessment, stakeholder-analysis

**4 Platform Templates:** claude, chatgpt, google-gems, copilot

---

---

## Version History

| Version | Date | Key Changes |
|---------|------|-------------|
| 1.0 | January 2026 | Initial compact rules card consolidating all GGP core rules |
| 2.0 | February 2026 | Restructured into 6 parts (Source Analysis, Professional Etiquette, Reputation Protection, Data & Analytics, Validation & Operations, Success Metrics); added 21-section index; aligned numbering with individual reference files |
| 2.1 | February 2026 | Removed redundant sections duplicated by channels/_index.md; updated cross-references |
| 2.2 | February 2026 | Added Logical Risk category (4 patterns), Cognitive Bias Check (4 biases), expanded Hostile Reader (circularity + pre-addressed objections), expanded Credibility Risk (3 patterns); aligned with 3.reputation-protection.md v1.1 |
| 2.3 | February 2026 | Markers-first output: split 3h/3i (marked deliverable default, clean output only on request); Reference Audit table (AlphaSense-style traceability); same-issue same-code rule for inline markers |
| 2.4 | February 2026 | Risk scoring expanded to 8 dimensions (max 24); option (e)/(d) "Your input" on all inline decisions; defensibility ranking in strategic depth rule; epistemological criteria for source tiers |

---

*GGP Quick Reference v2.4 | Last Updated: 2026-02-24*
*Source: SKILL.md + 1.source-analysis.md + 2.professional-etiquette.md + 3.reputation-protection.md + 4.data-analytics-expertise.md + 5.success-metrics.md*
