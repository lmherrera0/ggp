# 1. SKILL.md
> Source: `SKILL.md`

---
name: ggp
description: "Anti-hallucination protocol for professional communications. Use when writing emails, LinkedIn posts, reports, press releases, presentations, or any content requiring factual accuracy. Verifies sources with 4-tier system, labels inferences, runs Devil's Advocate analysis. Triggers on: email, LinkedIn, Twitter/X, Instagram, press release, report, presentation, article, memo, data report, analytics brief, correo, comunicado, reporte, presentacion, documento, articulo, publicacion."
---

# Grounded Gate Protocol (GGP) v4.5

Anti-hallucination system for professional communications with source verification, reputation protection, professional etiquette, and data/analytics expertise.

**Core principle: "Nothing passes unverified."**

---

## Execution Rules

1. **Parallel reads**: Batch ALL file reads into parallel calls. Never read files sequentially when they can be read simultaneously.
2. **Anti-fatigue**: Max 3 questions Round 1, max 2 Round 2. "Just do it" or frustration = produce immediately.
3. **Checkpoint shorthand**: Use compact format `GGP [X]/8` -- no verbose tables unless user requests detail or Deep Audit is active.
4. **Language**: Respond in user's language. Internal references in English.
5. **Minimal mode**: For SIMPLE tasks (single fact-check, short email), skip reasoning gate and go straight to create + validate.

---

## Mode Selection

| Mode | Trigger | Phase 1 Reads | Checkpoints |
|------|---------|---------------|-------------|
| **Fast (Default)** | Any content task | QUICK_REFERENCE.md only | Compact (`GGP [X]/8`) |
| **Deep Audit** | User says "deep audit", "full compliance", "final review", "submission-ready", or "full review" | ALL individual reference files | Verbose tables |

Both modes follow the same 3-phase cycle. The only difference is the depth of Phase 1 reads and the detail of checkpoint reporting.

---

## Phase 1: Load Rules

### Fast Mode (Default)

```
Read references/general-guidelines/QUICK_REFERENCE.md
  -> Contains ALL core rules: 8 non-negotiable rules, 5 GGP markers,
     4 source tiers, citation format, prohibited language, red flags,
     Devil's Advocate (8 dimensions scored 1-3), 8-point validation gate,
     professional etiquette (7 golden rules), data verification standards
```

### Deep Audit Mode

```
Read ALL in parallel:
[1] Read references/general-guidelines/1.source-analysis.md
[2] Read references/general-guidelines/2.professional-etiquette.md
[3] Read references/general-guidelines/3.reputation-protection.md
```

---

## Phase 2: Load Channel + Conditionals

```
Identify target channel from user request.
IF Deep Audit: Read references/channels/_index.md (channel navigation)
Read references/channels/[channel].md
  -> Extract: template, structure, limits, tone, metrics, formatting

IF data/analytics/BI/KPIs content:
  Read references/general-guidelines/4.data-analytics-expertise.md

IF analytical deliverable:
  Read references/analysis-templates/_index.md
  Read references/analysis-templates/[matching-template].md

IF cross-platform deployment:
  Read references/platforms/[platform].md

IF examples/[matched-channel]/ has files:
  Read examples/_style-learning.md -> follow extraction framework
  Read ONLY examples matching the target channel (e.g. examples/linkedin/ for LinkedIn tasks)
  Extract: tone, structure, length, vocabulary, opening patterns, CTA style
  Apply learned patterns to new content. Match the author's voice, not generic defaults.
  -> RETURN to Phase 3 after learning. Do NOT stay in examples.
```

Available channels: linkedin, twitter, instagram, email, messaging, press-release, internal-docs, hbr, mit-smr, academic-journal, book-proposal, op-ed, presentations, coding-docs, data-lineage, analytical-docs, application-docs, data-products, ai-agents-docs, skills-docs, version-control, legal-disclaimers

---

## Phase 3: Create + Validate + Deliver

**3a. Classify:**
```
CHANNEL: [matched]  AUDIENCE: [who]  RISK: [Low/Med/High/Critical]
COMPLEXITY: [SIMPLE -> skip to Create | MODERATE | COMPLEX]
```

**3b. Information Audit** (MODERATE/COMPLEX only):
Tag ALL factual content with GGP markers. Identify CONFIRMED facts (with sources), GAPS, and INFERENCES (with risk-if-wrong).
Every CONFIRMED claim must include **APA-style citation** with full traceability for human audit:
```
[🟢 CONFIRMED] Claim text.
    Source: Author, A. B. (Year). Title. Publisher/Journal. p. XX. https://url
    Tier: X | Accessed: YYYY-MM-DD
```

**3c. Iteration Control:**
```
Round: [1/2] | Questions: [X/3] | Gaps: [Y]

Q1: [Question]
  a) [Option A]  b) [Option B]  c) [Option C]

Q2: [Question]
  a) [Option A]  b) [Option B]  c) [Option C]

Reply with: Q1: a, Q2: b (or your own answer)
```

**3d. Reasoning Gate** (MODERATE/COMPLEX only):
1. What do I know for certain? (CONFIRMED with Tier 1-2)
2. What has weaker sourcing? (Tier 3 or UNVERIFIED)
3. What must I infer? (INFERENCE items with risk-if-wrong)
4. What risks should I flag?

**Tree of Thought (ToT):** For each INFERENCE or GAP, explore 2-3 alternative resolution paths in parallel. Evaluate each path's consequence against the professional context — audience sensitivity, channel risk level, regulatory exposure. Rank by defensibility (most defensible first). This ensures the Reasoning Gate considers multiple angles before committing to a single framing.

**3e. Create Content:**
Apply channel template. Include GGP markers inline. Follow channel limits.

**3f. Devil's Advocate** (MANDATORY -- NEVER SKIP):
Run all 8 dimensions (Misinterpretation, Credibility, Legal, Reputation, Data Accuracy, Hostile Reader, Screenshot, CEO). Score each Low=1, Med=2, High=3; max 24. If total >=9: escalate to human review. Full tables: QUICK_REFERENCE.md Sections 9-12.

**3g. Validation Gate** (must score 8/8):
8 checks: sources verified, no Tier 4 as CONFIRMED, inferences labelled, gaps declared, no unmarked assumptions, Devil's Advocate done, channel checklist passed, professional etiquette respected. Full table: QUICK_REFERENCE.md Section 17.
**If score < 8: revise internally and re-run. Do NOT deliver.**

In **Deep Audit Mode**: output 3f and 3g as verbose tables (not compact shorthand).

**3h. Marked Deliverable** (DEFAULT OUTPUT -- NEVER SKIP):
Deliver the FULL content with ALL GGP markers embedded inline. Each non-CONFIRMED item gets a unique code AND its decision options appear immediately after it in the body, so the user can decide as they read.

**Coding rules:**
- `[🟡 INFERENCE: I1]`, `[🔴 GAP: G1]`, `[⚪ UNVERIFIED: U1]`
- If the SAME issue appears in multiple places, reuse the SAME code.
- `[⚠️ RISK: R1]` codes from Devil's Advocate appear inline where relevant.

**Inline options by marker type (base options — ALWAYS contextualise):**

| Marker | Base options |
|--------|-------------|
| `[🟡 INFERENCE: I#]` | a) Accept  b) Rewrite as GAP  c) Provide source  d) Remove  e) Your input |
| `[🔴 GAP: G#]` | a) Provide data  b) Mark as limitation  c) Remove claim  d) Your input |
| `[⚪ UNVERIFIED: U#]` | a) Accept risk  b) Downgrade to INFERENCE  c) Find source  d) Remove  e) Your input |
| `[⚠️ RISK: R#]` | a) Accept original  b) Use revised  c) Rewrite  d) Escalate  e) Your input |

**Formatting rule:** All GGP analysis uses **blockquote + italic** (`> *text*`) to visually separate it from the deliverable content.

**Strategic depth rule:** NEVER oversimplify the callout. Each flagged item MUST:
1. **Explain WHY** it was flagged — the strategic reasoning, not just a label.
2. **State the consequence** — what happens if it's wrong or left unaddressed.
3. **Contextualise each option** — explain what each choice means for this specific case, not generic labels.
4. **Rank by defensibility** — present the most defensible option first.

**Example of inline flow:**
```
The company achieved 30% market growth [🟡 INFERENCE: I1] in the enterprise segment.
> *I1: This growth figure is extrapolated from Q3 partial data. If the full-year
> trend differs, the 30% claim could overstate performance and erode credibility
> with stakeholders who cross-reference audited financials.*
> *a) Accept — defensible if audience won't verify against annual report*
> *b) Rewrite as GAP — hold publication until FY figure is available*
> *c) Provide source — attach Q3 report with extrapolation methodology*
> *d) Remove — replace with qualitative language ("significant growth")*
> *e) Your input — propose your own resolution*

According to internal reports, the platform handles 10M daily transactions [🟢 CONFIRMED].

However, competitor adoption remains [🔴 GAP: G1] in this market.
> *G1: No competitor adoption data available. Without this, the market comparison
> reads as one-sided and a hostile reader could argue cherry-picking.*
> *a) Provide data — supply competitor benchmark to strengthen positioning*
> *b) Mark as limitation — add explicit caveat ("competitor data not publicly available")*
> *c) Remove claim — drop the comparison entirely to avoid credibility risk*
> *d) Your input — propose your own resolution*
```

**After the marked content, append:**
```
--- DECISION SUMMARY ---
| Code | Type | Decision |
|------|------|----------|
| I1 | INFERENCE | ___ |
| G1 | GAP | ___ |
| U1 | UNVERIFIED | ___ |
| R1 | RISK | ___ |

Reply with: I1: a, G1: b, U1: d, R1: b (or use e/d for your own answer)

---
Stats: Words [X] | 🟢 [X] | 🟡 [X] | 🔴 [X] | ⚪ [X]
GGP [X]/8

--- REFERENCE AUDIT ---
| # | Claim | Source | Author/Org | Year | Document | Section/Chapter | Page(s) | Tier | URL | Accessed |
|---|-------|--------|------------|------|----------|-----------------|---------|------|-----|----------|
| 1 | [claim] | [org] | [author] | [year] | [title] | [sec/ch/§/item] | pp. X-Y | T1 | [url] | YYYY-MM-DD |
```

**NEVER deliver clean output without user approval of all non-CONFIRMED items first.**

**3i. Clean Output** (ONLY when user confirms all decisions OR explicitly requests "clean output" / "versión limpia"):
Remove all GGP markers, codes, and inline options. Output polished content ready for use.

```
[CLEAN CONTENT]

---
Stats: Words [X] | 🟢 [X] | 🟡 [X] | 🔴 [X]
Sources by Tier: T1 [X] | T2 [X] | T3 [X] | T4 [X]
GGP [X]/8
```

---

## Reference Files

| Folder | File | Classification | When to Read |
|--------|------|---------------|-------------|
| general-guidelines/ | `QUICK_REFERENCE.md` | **MANDATORY** | **ALWAYS (Phase 1 Fast)** — compact rules card |
| general-guidelines/ | `1.source-analysis.md` | **MANDATORY** | **Phase 1 Deep** — source tiers, citations, red flags, fallbacks |
| general-guidelines/ | `2.professional-etiquette.md` | **MANDATORY** | **Phase 1 Deep** — 7 golden rules, language reframing |
| general-guidelines/ | `3.reputation-protection.md` | **MANDATORY** | **Phase 1 Deep** — Devil's Advocate, 3 tests, risk scoring, escalation |
| general-guidelines/ | `4.data-analytics-expertise.md` | CONDITIONAL | If data/analytics/BI/KPI content |
| general-guidelines/ | `5.success-metrics.md` | OPERATIONAL | For measuring GGP effectiveness or audits |
| about-ggp/ | `introduction.md` | ONBOARDING | When explaining GGP to stakeholders |
| about-ggp/ | `LEGAL.md` | REFERENCE | For licensing, IP, or attribution questions |
| channels/ | `_index.md` | CONDITIONAL | **Deep Audit Phase 2** — channel navigation |
| channels/ | `[channel].md` | CONDITIONAL | Phase 2 — matching channel template |
| analysis-templates/ | `_index.md` | CONDITIONAL | If analytical deliverable |
| analysis-templates/ | `[template].md` | CONDITIONAL | If analytical deliverable |
| platforms/ | `[platform].md` | CONDITIONAL | If cross-platform deployment |

**Classification key**: MANDATORY = every execution. CONDITIONAL = only if trigger matches. ONBOARDING = explanatory. OPERATIONAL = measurement/auditing. REFERENCE = legal/admin.

## Examples Folder

Place past examples in `examples/[channel]/` so Claude can learn your style and tone. See `examples/_style-learning.md` for the full directory structure and extraction framework.

---

## Version History

| Version | Date | Key Changes |
|---------|------|-------------|
| 1.0 | December 2025 | Initial Zero-Trust framework concept with basic markers |
| 2.0 | December 2025 | Introduced visual markers system, platform-specific adapters |
| 3.0 | January 2026 | Added anti-loop fatigue system, [A][B][C] user control, clean output step |
| 4.0 | January 2026 | Channel system expansion (22 channels + 7 analysis templates) |
| 4.2 | January 2026 | Platform adapters (Claude, ChatGPT, Gems, Copilot); professional etiquette; data analytics expertise |
| 4.5 | February 2026 | Architecture restructuring: unified 3-phase execution cycle; dual-mode system (Fast + Deep Audit); 9-step creation flow; integral audit (orphan paths, broken references, redundancies); full GGP core embedded in all 4 platform templates; standardised naming to "Grounded Gate Protocol" |
| 4.5-public | February 2026 | Public/open-source release: removed all personal branding and cross-skill dependencies; standalone framework for independent adoption |

---

# 2. QUICK_REFERENCE.md
> Source: `references/general-guidelines/QUICK_REFERENCE.md`

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

---

# 3. Source Analysis
> Source: `references/general-guidelines/1.source-analysis.md`

# GGP Verification Framework
## Deep Knowledge Reference for Source Credibility and Claim Validation

---

## Table of Contents

1. [Source Tier Classification](#source-tier-classification)
2. [Source Citation Format](#source-citation-format)
3. [Source Quality Indicators](#source-quality-indicators)
4. [Source Red Flags](#source-red-flags)
5. [Handling Conflicting Sources](#handling-conflicting-sources)
6. [Marker Integration Rules](#marker-integration-rules)
7. [Prohibited Language Patterns](#prohibited-language-patterns)
8. [Fallback Rules](#fallback-rules)

---

## Source Tier Classification

Establish source credibility using a four-tier hierarchy. This determines confidence levels and required validation rigor.

| Tier | Category | Examples | Trust Level | Validation |
|------|----------|----------|------------|-----------|
| **1** | Primary/Authoritative | SEC filings (10-K, 10-Q), government databases, peer-reviewed journals, regulatory bodies, official entity press releases, court documents, audited financial statements | High confidence | Use as primary evidence; cite directly |
| **2** | Reputable Secondary | Financial Times, Wall Street Journal, Reuters, BBC, established analysts (Gartner, McKinsey, Forrester), recognised trade publications, official industry reports | Good confidence | Verify if critical to conclusion; cross-reference for major claims |
| **3** | General Secondary | General news outlets, industry blogs from known experts, company marketing websites, Wikipedia (context only), established academic institutions | Moderate confidence | Cross-reference recommended; disclose secondary nature |
| **4** | Unverified/Low Quality | Forums, social media, anonymous blogs, content farms, sites with clear commercial bias, outdated content (>2 years for fast-moving sectors), unattributed claims | Low confidence | NEVER mark as CONFIRMED; requires corroboration from Tier 1-2 |

### Epistemological Criteria

Source tiers are determined by three epistemological criteria:

| Criterion | Definition |
|-----------|-----------|
| **(a) Institutional backing** | Published or endorsed by a recognised institution (government, university, professional body, established publisher) |
| **(b) Peer corroboration** | Claims independently verified or corroborated by multiple credible sources |
| **(c) Methodological transparency** | Methods, data sources, and limitations are explicitly disclosed and reproducible |

**Tier-to-criteria mapping:**

| Tier | (a) Institutional backing | (b) Peer corroboration | (c) Methodological transparency |
|------|:------------------------:|:---------------------:|:-------------------------------:|
| **1** | Yes | Yes | Yes |
| **2** | Yes | Partial | Partial |
| **3** | At most 1 criterion met | — | — |
| **4** | None | None | None |

---

## Source Citation Format

Every CONFIRMED claim must include complete metadata. Use this template:

```
[🟢 CONFIRMED: Source Name | Tier X | Location | Date | URL]
```

### Citation Components (All Required)

- **Source Name**: Exact publication/organisation name
- **Tier**: Classification (1, 2, 3, or 4)
- **Location**: Specific section, page number, or paragraph reference
- **Date**: Publication date (YYYY-MM-DD format)
- **URL**: Direct link to source (include archive URL if source may be deleted)

### Inline Example

```
[🟢 CONFIRMED: U.S. Securities and Exchange Commission | Tier 1 | Apple Inc. Form 10-K, Item 1A Risk Factors | 2024-11-08 | https://www.sec.gov/Archives/edgar/...]
```

### APA Reference Example (for human audit traceability)

Every CONFIRMED claim must also produce a full APA-style entry in the Reference Audit section at the end of the deliverable. This enables human reviewers to verify sources independently.

```
U.S. Securities and Exchange Commission. (2024). Apple Inc. Form 10-K Annual Report.
    SEC EDGAR, Item 1A Risk Factors, pp. 12–15.
    https://www.sec.gov/Archives/edgar/...
    Tier: 1 | Accessed: 2024-11-08
```

**APA format rules:**
- Author/Organisation. (Year). *Title*. Publisher/Journal, Volume(Issue), pp. XX–XX. URL
- Include page/section numbers for precise traceability
- Include access date for online sources
- Append GGP Tier classification after the standard APA entry

---

## Source Quality Indicators

Evaluate each source using structured assessment:

```
📚 SOURCE EVALUATION
Source: [Full publication name]
├─ Tier: [1, 2, 3, or 4]
├─ Publication Date: YYYY-MM-DD
├─ Author: [Named individual, organisation, or "Anonymous"]
├─ Location: [Section, heading, paragraph number]
├─ URL: [Direct link]
├─ Quality Signals: [Peer review status, editorial board, fact-checking, corrections policy]
└─ Recommendation: [Action — use as primary, corroborate, downgrade, reject]
```

### Key Quality Signals

- **Author attribution**: Named experts boost credibility
- **Editorial standards**: Fact-checking, corrections policy, editorial board
- **Peer review**: Present in academic sources
- **Currency**: Recent publication more credible for fast-moving topics
- **Primary vs. secondary**: Direct observation/data better than hearsay
- **Independence**: Sources without financial conflict superior

---

## Source Red Flags

Certain patterns require immediate action. Apply the rule shown for each flag.

| Red Flag | Trigger | Required Action |
|----------|---------|-----------------|
| No author attribution | Author field blank or "Staff" | Downgrade minimum one tier; seek attributed version |
| Publication date >2 years | Older than current date for fast-moving sector | Flag as potentially outdated; seek recent corroboration |
| Commercial interest evident | Obvious bias toward product/service | Disclose bias explicitly; seek independent corroboration |
| Circular sourcing detected | Source B cites Source A which cites Source B | Trace to original primary source; use primary only |
| Unfamiliar domain | Website or publisher unknown | Downgrade to Tier 4; verify against known sources |
| Contradicts Tier 1 source | Claims conflict with primary authority | Flag contradiction; defer to Tier 1 as ground truth |
| Vague attribution pattern | "Studies show", "experts say", "research indicates" | Reject the claim; mark as UNVERIFIED; seek specific source |
| Statistics without methodology | Numbers presented without sample size/method | Flag limitations; request methodology documentation |

---

## Handling Conflicting Sources

When sources contradict, follow this resolution hierarchy:

1. **Tier Resolution**: Higher tier source wins (Tier 1 > Tier 2 > Tier 3 > Tier 4)
2. **Recency Tie-Breaker**: When tiers equal, more recent source preferred
3. **Primary vs. Secondary**: Direct evidence beats interpretation
4. **Explicit Conflict Flag**: If Tier 1 sources differ, present both; note uncertainty
5. **Root Cause Investigation**: Determine why sources differ (methodology, time period, scope)

### Template for Conflict Presentation

```
[RISK] SOURCE CONFLICT
Claim: [Statement in question]

Position A: [Source 1, Tier X, Date]
- Finding: [Specific claim]
- Strength: [Why credible]

Position B: [Source 2, Tier X, Date]
- Finding: [Specific claim]
- Strength: [Why credible]

Resolution: [Which prevails and why, or note genuine uncertainty]
```

---

## Marker Integration Rules

Connect source tiers to confidence markers. This table governs which markers can be used with which sources:

| Marker | Allowed Sources | Required | Example |
|--------|-----------------|----------|---------|
| [🟢 **CONFIRMED**] | Tier 1-3 with full citation; no red flags present | Complete metadata citation | SEC filing stating revenue figure |
| [🟠 **UNVERIFIED**] | Tier 4 sources OR Tier 1-3 with red flags present | Explain why unverified | Claim attributed to "experts" without specific source |
| [🟡 **INFERENCE**] | Zero direct source; reasoned from confirmed facts | Show logical chain | "If X confirmed and Y confirmed, then Z is likely" |
| [🔴 **GAP**] | No source found or insufficient information | Mark as missing | "No available data on this specific metric" |
| [⚠️ **RISK**] | Reputational, legal, or credibility concern | Describe risk | "This claim could create liability if challenged" |

**Critical Rule**: Tier 4 sources CANNOT produce [🟢 **CONFIRMED**] markers under any circumstances. Mark as [🟠 **UNVERIFIED**] instead.

---

## Prohibited Language Patterns

Certain words and phrases must trigger INFERENCE or UNVERIFIED labeling. Use this table to identify and replace them:

| Category | Prohibited | Must Use Instead | Marker |
|----------|-----------|------------------|--------|
| **Frequency** | typically, usually, generally, often, sometimes | "According to [Source], X% report..." or cite specific data | UNVERIFIED |
| **Suggestion** | implies, suggests, indicates, hints | "Research shows", "stated directly as" | INFERENCE or UNVERIFIED |
| **Vague Attribution** | experts say, studies show, it is known, people believe | Cite specific expert/study/source | UNVERIFIED |
| **Approximation** | approximately, around, about, roughly | For precise data: cite exact figure or note estimate with margin | Note as estimate |
| **False Certainty** | clearly, obviously, certainly, definitely, undoubtedly | "Available evidence suggests", "Based on [Source]..." | INFERENCE |
| **Probability** | likely, unlikely, probably, seems, appears, may | Use explicit probability or cite source | INFERENCE |
| **Obligation** | must be, should be, would be, needs to be | "Required by [Rule]" or "Best practice per [Source]" | RULE or CONFIRMED |

### Example Correction

**FAIL Bad**: "Studies typically show that companies generally benefit from digitalization."
**[GOOD]**: "[🟢 **CONFIRMED**: McKinsey & Company, 'Digital Acceleration in Enterprises,' 2023] reports that 73% of surveyed companies cite improved operational efficiency."

---

## Fallback Rules

Apply these rules when standard verification is insufficient or ambiguous:

| Situation | Required Action |
|-----------|-----------------|
| Source is paywalled or inaccessible | Cite the source fully; note access limitation; seek alternative corroboration |
| Conflicting Tier 1 sources with equal authority | Present both views; explicitly note the disagreement; avoid false consensus |
| Information is current/breaking (< 7 days old) | Flag as preliminary; indicate likely updates; plan to revisit |
| Quantitative data lacks full context | Always cite sample size, methodology, time period, and limitations |
| Claim spans multiple jurisdictions with different rules | Specify which jurisdiction(s) apply; note variations |
| Source has issued corrections or retracted claims | Use corrected version; cite the correction; note original error only if relevant |

---

## Version
GGP Verification Framework v1.0 | Last Updated: 2026-02-06

---

## GGP Return to Main Flow

After reading this file, RETURN to your current execution phase:

- **Fast Mode**: This content is summarised in QUICK_REFERENCE.md. Return to SKILL.md Phase 2 (Channel + Conditionals).
- **Deep Audit Mode (Phase 1)**: Return to SKILL.md Phase 2 after finishing all Phase 1 reads.
- **On-demand reference**: Return to the task at hand.

**NEVER stay in this file. Continue with your assigned phase in SKILL.md.**

---

# 4. Professional Etiquette
> Source: `references/general-guidelines/2.professional-etiquette.md`

# GGP Professional Etiquette
## The Unwritten Cultural Rules of Professional Services

---

## Core Principle

**Your personal reputation IS your firm's reputation.**

Every interaction, every communication, every decision reflects not just on you but on the entire consulting organisation you represent. Professional services is built on trust. Breach it once publicly, and recovery takes years.

---

## The 7 Golden Rules

### 1. Never Speak Ill

**Rule**: Do not criticize competitors, vendors, or other professionals publicly or in contexts where it could be repeated.

**Why**: Competitive criticism damages your credibility more than the target's. It signals insecurity and unprofessionalism.

| Don't | Do |
|-------|-----|
| "Competitor X is weak at data strategy" | "Our strength is in data-driven decision frameworks" |
| "That firm's analysis was flawed" | "We bring a different methodology to this challenge" |
| "Their consultant didn't understand the business" | "We focus on deep stakeholder engagement" |
| "They're just selling snake oil" | "We believe in sustainable, measurable outcomes" |

---

### 2. Never Complain

**Rule**: Reframe problems, obstacles, and setbacks as opportunities or learning moments.

**Why**: Consulting is about solutions. Complaining signals you lack agency. Clients hire solvers, not people who blame circumstances.

| Don't | Do |
|-------|-----|
| "The client won't engage with the process" | "This is an opportunity to strengthen our change management approach" |
| "The data quality is terrible" | "We're identifying data governance improvements upfront" |
| "They keep rejecting our recommendations" | "We're refining our recommendations to address underlying concerns" |
| "The timeline is impossible" | "This timeline challenges us to prioritise high-impact work first" |

---

### 3. Never Compromise Clients

**Rule**: Client confidentiality is sacred. It survives the end of the engagement.

**Why**: Your only leverage in a competitive industry is the trust clients place in you. One breach destroys your reputation permanently.

| Don't | Do |
|-------|-----|
| Share client examples without explicit written permission | When referencing work, use anonymized or fully disclosed examples |
| Discuss client struggles in casual conversation | "I've seen this challenge across industries I work in..." |
| Use client names in case studies without signed agreements | Require formal case study rights; compensate if using their story |
| Mention client information on social media | Keep social posts about work generic and professional |
| Discuss client politics with other clients | Maintain strict information barriers between clients |

---

### 4. Protect the Brand

**Rule**: You represent your firm 24/7, including personal social media and outside commitments.

**Why**: Digital footprint is permanent. Clients research principals before engaging. One controversial post can disqualify a contract.

| Don't | Do |
|-------|-----|
| Post political rants on personal social media | Share thoughtful industry perspectives and expertise |
| Criticize the firm's decisions publicly | Raise concerns internally; support publicly |
| Engage in flame wars online | Disengage from heated discussions gracefully |
| Dress casually in public forums where clients might see | Maintain professional appearance in any client-facing context |
| Make controversial statements while identified as firm member | Use personal social media cautiously; separate professional identity |

---

### 5. Client is Always Right (Publicly)

**Rule**: Keep disagreements private. Public communications must always reflect alignment with the client.

**Why**: Your credibility depends on presenting a united front. Client questions about your commitment will be answered by whether you publicly challenge them.

| Don't | Do |
|-------|-----|
| "The client rejected our recommendation" (public) | In private debrief: discuss why client chose alternative path |
| Post about client changes you disagree with | If asked publicly: "We're supporting their strategic direction" |
| Express doubt about client viability | Internally: assess and flag risks; externally: committed partner |
| Correct client in public forums | Private conversation: "Here's an alternative perspective for you to consider" |

---

### 6. Never Burn Bridges

**Rule**: Every person you work with today could become a client, partner, or advocate tomorrow.

**Why**: Professional circles are smaller than you think. Your behaviour toward "unimportant" people becomes reputation data.

| Don't | Do |
|-------|-----|
| Act dismissive toward junior staff at other firms | Treat everyone as a potential future peer or leader |
| Refuse to help a competitor in need | Build reciprocal professional relationships |
| Publicly criticize a vendor you fired | "We made a different choice for our current needs" |
| Burn out a junior colleague and avoid them later | Invest in people; stay in touch with former teammates |

---

### 7. Compete with Class

**Rule**: Win on merit, knowledge, and delivery quality. Never resort to undermining others.

**Why**: The consulting industry is built on repeat business and referrals. Players who win through integrity outlast those who win through manipulation.

| Don't | Do |
|-------|-----|
| Undercut competitor pricing to win a deal | Emphasize unique value; let price reflect quality |
| Spread rumors about competing proposals | Let your work speak; focus on your strengths |
| Poach client relationships aggressively | Build relationships professionally; let clients come to you |
| Exploit a competitor's client issue | Offer genuine help; if they hire you later, that's earned trust |

---

## Language Reframing

Convert dangerous internal thoughts into professional communication. These phrases prevent misinterpretation and preserve relationships.

| Dangerous Phrase | Professional Alternative |
|------------------|--------------------------|
| "The process is broken" | "There are optimisation opportunities in this workflow" |
| "This is chaos" | "There's complexity here we can help structure" |
| "They failed to deliver" | "There were delivery challenges we can help address" |
| "The client is wrong" | "There may be an alternative perspective worth exploring" |
| "Our competitor is weak at X" | "We differentiate by excellence in X" |
| "We guarantee results" | "We are committed to delivering measurable value" |
| "They don't understand their business" | "This is an opportunity to build deeper operational understanding" |
| "That idea won't work" | "Here are factors to consider before implementation" |
| "They're being unreasonable" | "Let's understand what's driving this perspective" |
| "Management is incompetent" | "There are capability gaps we can help fill" |

---

## Real-World Scenarios

### Scenario 1: Asked to Criticize a Competitor

**Situation**: A prospect asks, "Why should we choose you over Firm X? They're struggling with X, right?"

**Response Template**:
- **Acknowledge**: "I respect Firm X; they do solid work in [area]."
- **Redirect**: "What we focus on is [your differentiator]. Here's how we'd approach your situation..."
- **Close professionally**: "I'm confident our approach is the right fit for you. Let's focus on what matters most to your business."

**Why it works**: You refuse the trap, acknowledge the competitor respectfully, and own the conversation.

---

### Scenario 2: Client Project Went Wrong

**Situation**: A key deliverable missed deadline or quality standards fell short.

**Response Template**:
- **Own immediately**: "We didn't hit our commitment. Here's what happened and why."
- **Remediate**: "Here's how we're fixing it and preventing recurrence."
- **Rebuild trust**: "You can hold us accountable to [specific new standard/timeline/check-in]."
- **Never blame the client**: Internal analysis can show where client behaviour contributed; client conversation must own your role.

**Why it works**: Ownership rebuilds trust faster than deflection. Clients expect perfection; they respect accountability.

---

### Scenario 3: Vendor Underperformed

**Situation**: A subcontractor or partner failed to meet expectations, affecting delivery.

**Response Template**:
- **Take responsibility**: "We selected this vendor and are responsible for their performance."
- **Take action**: "We're immediately [replacing/restructuring/adding oversight]."
- **Discreet vendor management**: Vendor conversation happens privately; client hears only your solution.
- **Never trash the vendor publicly**: Future projects may require this vendor; other firms may know them.

**Why it works**: Client sees your quality control and accountability. Vendor remains viable for future use.

---

### Scenario 4: Internal Conflict Goes Public

**Situation**: A team member or partner disagrees with your approach publicly or in front of a client.

**Response Template**:
- **In the moment**: Don't escalate. "That's a fair point. Let's discuss offline and come back with aligned recommendation."
- **After meeting**: Private conversation: understand perspective, align on messaging, determine how to move forward.
- **Moving forward**: Present unified approach; any internal disagreement stays internal.
- **Never undermine publicly**: You may have been wrong. Acknowledge privately; move forward professionally.

**Why it works**: Unified teams win contracts. Visible conflict loses them.

---

## Etiquette Checklist

Before any external communication or action, verify:

- [ ] **Confidentiality Check**: Does this expose any client information? (Even anonymized, are there identifying details?)
- [ ] **Tone Check**: Could this be misinterpreted as criticism, complaint, or self-interest?
- [ ] **Attribution Check**: Can I name my sources and link to evidence, or am I relying on hearsay?
- [ ] **Competitor Check**: Am I comparing ourselves on merit, or am I criticizing competitors?
- [ ] **Client Check**: Does this reflect alignment with my clients, or visible disagreement?
- [ ] **Screenshot Test**: If this were captured and shared widely without context, would I still be comfortable with it? (If no, revise it.)

---

## Version
GGP Professional Etiquette v1.0 | Last Updated: 2026-02-06

---

## GGP Return to Main Flow

After reading this file, RETURN to your current execution phase:

- **Fast Mode**: This content is summarised in QUICK_REFERENCE.md. Return to SKILL.md Phase 2 (Channel + Conditionals).
- **Deep Audit Mode (Phase 1)**: Return to SKILL.md Phase 2 after finishing all Phase 1 reads.
- **On-demand reference**: Return to the task at hand.

**NEVER stay in this file. Continue with your assigned phase in SKILL.md.**

---

# 5. Reputation Protection
> Source: `references/general-guidelines/3.reputation-protection.md`

# GGP Reputation Protection
## Devil's Advocate Risk Assessment and User Decision Protocol

---

## Quick Check Matrix

Evaluate any significant statement or action across all eight dimensions (scored 1-3, max 24). Rate each as Low (1), Medium (2), or High (3). Maximum score: 24.

| Dimension | Low (1) | Medium (2) | High (3) |
|-----------|---------|-----------|---------|
| **Misinterpretation Risk** | Clear, hard to misread | Could be read multiple ways | Easily distorted or weaponized |
| **Credibility Risk** | Strong sourcing; defensible | Some sourcing gaps; arguable | Unsourced or contradicted claims |
| **Legal Risk** | No legal exposure | Gray area; consult guidelines | Clear legal liability or exposure |
| **Reputation Risk** | Aligns with brand values | Neutral or slightly off-brand | Contradicts brand; damages credibility |
| **Data Accuracy Risk** | All data sourced and verified | Some figures unverified or estimated | Key statistics unsourced or challengeable |
| **Hostile Reader Test** | No exploitable weaknesses | Some points vulnerable to challenge | Easily weaponized or distorted out of context |
| **Screenshot Test** | Comfortable if shared without context | Would need minor explanation | Would cause reputational damage if shared |
| **CEO Test** | CEO would approve without question | Would need brief justification | CEO would reject or demand changes |

**Action Rule** (max 24):
- Score ≤8: Generally safe to proceed
- Score ≥9: Flag for escalation; recommend human review before proceeding

---

## The Three Tests

Apply these three filters to any significant communication, recommendation, or public statement.

### Test 1: Hostile Reader Test

Read your statement as if you were an adversary looking for weaknesses. Use this checklist:

- [ ] **Could this be read as attacking someone?** Who might feel criticized?
- [ ] **Are there unstated assumptions?** What if someone disagrees with them?
- [ ] **Is my evidence airtight?** Could someone credibly challenge my sources?
- [ ] **Am I using vague language that invites interpretation?** What's the worst reasonable reading?
- [ ] **Does this create legal exposure?** Could this be seen as defamatory, misleading, or negligent?
- [ ] **Is this proportionate?** Does the strength of my claim match the strength of my evidence?
- [ ] **Could this be quoted out of context?** Would the shortened version still be true and fair?
- [ ] **Is any claim circular?** Does the evidence depend on accepting the conclusion it's supposed to prove?
- [ ] **Are foreseeable objections pre-addressed?** Would a knowledgeable critic find their obvious challenge already answered, or left open?

**Scoring**: Low (1) = no exploitable weaknesses; Medium (2) = some points vulnerable to challenge; High (3) = easily weaponized or distorted out of context. Record score in Quick Check Matrix.

#### Cognitive Bias Check

If any of the above checks raise concerns, also scan for these common biases that damage credibility when spotted by informed readers:

- [ ] **Confirmation Bias**: Does the text only cite evidence that supports the conclusion, while ignoring or downplaying counter-evidence? `[COGNITIVE_BIAS: Confirmation]`
- [ ] **Survivorship Bias**: Are only successes or positive cases presented? Are failures, dropouts, or negative outcomes systematically absent? `[COGNITIVE_BIAS: Survivorship]`
- [ ] **Status Quo Bias**: Is maintaining the current state framed as the safe option, when inaction may carry equal or greater risk? `[COGNITIVE_BIAS: StatusQuo]`
- [ ] **Recency Bias**: Are recent events or trends being extrapolated as permanent or definitive, without historical context? `[COGNITIVE_BIAS: Recency]`

**If detected**: Name the bias in your risk flag. A named bias is actionable; a vague "evidence might be incomplete" is not.

---

### Test 2: Screenshot Test

Imagine this statement or decision was captured in a screenshot and shared without context on social media, in a legal proceeding, or to your firm's leadership.

**Questions**:
1. Would I still be comfortable with it?
2. Could it be misused to damage my reputation or my firm's?
3. If shared with the CEO, would this require explanation or justification?
4. If a journalist quoted this out of context, would it still be defensible?

**Scoring**: Low (1) = comfortable if shared without context; Medium (2) = would need minor explanation; High (3) = would cause reputational damage if shared. Record score in Quick Check Matrix.

---

### Test 3: CEO Test

Frame the question directly: "Would the CEO of my firm approve this with the firm's name and reputation on it?"

**This test catches**:
- Overstatements that damage brand credibility
- Risky claims that expose the firm to liability
- Tone or framing that contradicts firm values
- Aggressive positioning that burns bridges

**Scoring**: Low (1) = CEO would approve without question; Medium (2) = would need brief justification; High (3) = CEO would reject or demand changes. Record score in Quick Check Matrix.

---

## High-Risk Language Patterns

Identify problematic language before it becomes a liability. Replace dangerous phrases using this table.

### Legal Risk Category

| Pattern | Risk | Before | After |
|---------|------|--------|-------|
| "We guarantee..." | Creates contractual liability | "We guarantee a 20% ROI" | "We are aiming to deliver a 20% improvement" |
| "All X do..." | Invites counterexamples | "All enterprises struggle with data integration" | "Many enterprises we work with face data integration challenges" |
| "[Competitor] fails at..." | Defamation exposure | "Competitor X fails to scale" | "We differentiate through our scalability approach" |
| "We will never..." | Creates broken promise if circumstances change | "We will never share your data" | "We protect client data per [standard] and our contracts" |
| "This is the only way..." | False exclusivity | "The only way to transform is through our methodology" | "Our methodology has proven effective for transformation" |

### Credibility Risk Category

| Pattern | Risk | Before | After |
|---------|------|--------|-------|
| "Studies show..." | Unverified claim | "Studies show digital transformation increases revenue" | "According to [specific source], X% report revenue improvements" |
| "Everyone knows..." | False consensus | "Everyone knows legacy systems block innovation" | "Many organisations we work with find legacy systems constraining" |
| "Obviously..." | False certainty | "It's obvious that outsourcing reduces costs" | "Cost reduction is a common benefit of strategic outsourcing" |
| "No one disputes..." | Ignores legitimate disagreement | "No one disputes AI's impact on jobs" | "There's significant debate about AI's workforce impact" |
| "[Anonymous] told me..." | Hearsay | "A CIO told me this approach doesn't work" | "In our experience, this approach requires..." |
| "As an expert in X..." | Authority claimed without verifiable credentials in the specific domain | "As an AI expert, I believe regulation is premature" | "Based on our work in [specific area], we observe that regulatory timing depends on [factors]" |
| "Data proves X" | Unqualified absolute claim; invites challenge | "Data proves digital transformation increases revenue" | "Available data suggests a positive correlation between digital transformation and revenue growth" |
| Qualifier-Creep | Starts narrow, ends universal; attentive readers notice the inflation | "In some cases, AI can improve efficiency... Therefore, AI will transform the industry" | Maintain consistent scope: "In some cases, AI can improve efficiency... These results suggest potential for broader application, pending further evidence" |

### Reputation Risk Category

| Pattern | Risk | Before | After |
|---------|------|--------|-------|
| "Unlike our competitors..." | Attacks others; looks weak | "Unlike our competitors, we actually care about client outcomes" | "Our differentiator is our commitment to measurable outcomes" |
| "We fixed what [firm] broke..." | Implies competitor incompetence | "We fixed what the previous consultant broke" | "We're building on lessons learned and moving forward to..." |
| "Clients tell us we're..." | Self-praise through proxy | "Clients tell us we're the best in the industry" | "We've received recognition for our work in [area]" |
| "Only we can..." | Narrow, brittle claim | "Only we understand this industry" | "We bring deep expertise in this industry" |
| "Better than..." | Comparative weakness | "We're better than internal teams" | "We bring specialized capabilities your internal team lacks" |

### Logical Risk Category

| Pattern | Risk | Before | After |
|---------|------|--------|-------|
| **False Dilemma** | Eliminates valid options; readers who see alternatives lose trust | "We either adopt AI now or fall behind permanently" | "Adopting AI early positions us competitively, though timing depends on readiness" |
| **Hasty Generalisation** | Universal claim from limited evidence; experts will challenge immediately | "Three clients reported issues, so the platform is unreliable" | "Some clients have reported issues, which warrants further investigation" |
| **False Causality** | Confuses correlation with causation; undermines analytical credibility | "We implemented the new process and revenue grew 15%" | "Revenue grew 15% during the period following implementation; further analysis is needed to isolate contributing factors" |
| **Non Sequitur** | Conclusion doesn't follow from evidence; signals weak reasoning | "Our team is highly experienced, so delivery risk is minimal" | "Our team's experience in [specific domain] helps mitigate [specific risk], though other factors also apply" |

**Auto-rewrite rule:** Each detected logical risk pattern MUST trigger a rewrite recommendation using the "After" column as a template. Present the original (higher risk) alongside the rewritten version (lower risk) and let the user choose.

---

## User Decision Protocol

The core innovation: Claude presents, user decides. When reputation risk is detected, follow this exact flow:

### Step 1: Flag the Risk

Identify the issue and severity. Use this format:

```
[RISK] REPUTATION RISK DETECTED

Issue: [Specific problem]
Severity: [Low/Medium/High]
Dimension: [Misinterpretation/Credibility/Legal/Reputation]
Reason: [Why this is risky]
```

### Step 2: Present Alternatives

Offer the original version alongside revised option(s):

```
OPTION A (Original - Higher Risk)
[Your original text]

OPTION B (Revised - Lower Risk)
[Professionally reframed version]

(Additional options if appropriate)
```

### Step 3: Explain the Trade-off

Be explicit about what changes:

```
Trade-off Analysis:
- Option A: [More direct/stronger language, but X risk]
- Option B: [Still conveys intent, but protects reputation by Y]
```

### Step 4: Ask for Direction

Give user agency. Use coded options for fast response:

```
R1: [Risk description]
  a) Accept original (higher risk) — [why user might choose this]
  b) Use revised version (lower risk) — [what changes]
  c) Rewrite approach entirely — [alternative framing]
  d) Escalate to human review

Reply with: R1: b (or your own answer)
```

When multiple risks are flagged, number them sequentially (R1, R2, R3...) so the user can respond in a single line:
```
Reply with: R1: b, R2: a, R3: c
```

**Wait for explicit user response.** Do not assume; present the choice.

---

## Example: User Decision Protocol in Action

**Situation**: User drafts a statement about a competitor.

**Detection**:
```
[RISK] REPUTATION RISK DETECTED

Issue: Statement compares to competitor; implies weakness
Severity: High
Dimension: Reputation/Credibility
Reason: Attacking competitors signals insecurity and damages your credibility more than theirs
```

**Presentation**:
```
OPTION A (Original)
"Unlike our competitors, we actually invest in client success rather than just selling deals."

OPTION B (Revised)
"Our model emphasizes long-term client outcomes. We measure success by your business results."

Trade-off:
- Option A: More pointed; directly contrasts with competitors
- Option B: Still positions you positively; avoids comparative attack
```

**Decision Request**:
```
R1: Competitor comparison — implies weakness
  a) Accept original — sharper competitive positioning
  b) Use revised — removes competitor reference; keeps value proposition clear
  c) Rewrite — "Here's what makes our engagement model different..." [new angle]
  d) Escalate to human review

Reply with: R1: b (or your own answer)
```

---

## Escalation Rules

Flag for human expert review (legal, PR, or leadership) when ANY of these conditions exist:

- [ ] **Legal exposure**: Language that could be interpreted as guarantees, warranties, or defamation
- [ ] **Public/permanent**: Posting to social media, publishing in articles, or making recorded statements
- [ ] **Client-facing**: Formal proposals, contracts, or communications that create legal obligations
- [ ] **Sensitive topics**: Statements about competitors, regulatory issues, or controversial subjects
- [ ] **High stakes**: Communication affecting major contracts, partnerships, or firm reputation
- [ ] **Unclear precedent**: No prior approval for this type of statement in your firm
- [ ] **Multiple audiences**: Message will be seen by clients, partners, employees, and public
- [ ] **Contradicts firm messaging**: Conflicts with established brand position or prior communications
- [ ] **Media involvement**: Any communication that could reach journalists or industry influencers
- [ ] **Personal/firm separation unclear**: Your personal views and firm positions are blurred

**Escalation Template**:
```
FLAGGED FOR EXPERT REVIEW

Type: [Legal/PR/Leadership]
Reason: [Which escalation rule applies]
Draft: [Full text]
Concern: [Specific risk]
Timeline: [When decision needed]
```

---

## Version
GGP Reputation Protection v1.2 | Last Updated: 2026-02-24

---

## GGP Return to Main Flow

After reading this file, RETURN to your current execution phase:

- **Fast Mode**: This content is summarised in QUICK_REFERENCE.md. Return to SKILL.md Phase 2 (Channel + Conditionals).
- **Deep Audit Mode (Phase 1)**: Return to SKILL.md Phase 2 after finishing all Phase 1 reads.
- **On-demand reference**: Return to the task at hand.

**NEVER stay in this file. Continue with your assigned phase in SKILL.md.**

---

# 6. Data Analytics Expertise
> Source: `references/general-guidelines/4.data-analytics-expertise.md`

# Data & Analytics Expertise Reference
## GGP Domain-Specific Knowledge Layer

---

## Table of Contents

1. [Data Verification Standards](#data-verification-standards)
2. [Metric Presentation Rules](#metric-presentation-rules)
3. [Data Source Hierarchy](#data-source-hierarchy)
4. [Dashboard & Report Narratives](#dashboard--report-narratives)
5. [Common Data Hallucination Patterns](#common-data-hallucination-patterns)
6. [Data Visualization Ethics](#data-visualization-ethics)
7. [Analytics Communication Templates](#analytics-communication-templates)
8. [Pre-Publication Data Checklist](#pre-publication-data-checklist)

---

## Data Verification Standards

Rules for verifying data claims in professional communications:

- **Statistical claims** require methodology disclosure (sample size, confidence level, test type)
- **Percentages** must specify base/denominator ("15% of 500 respondents" not just "15%")
- **Year-over-year comparisons** must use consistent periods (same months/quarters)
- **Currency figures** must specify currency and whether nominal/real values
- **Market size claims** must specify methodology (TAM/SAM/SOM breakdown)
- **Growth rates** must distinguish CAGR (compound annual) vs. point-to-point
- **Survey data** must disclose sample size, methodology, margin of error, and date
- **Benchmarks** require source identification and comparable scope
- **Trend claims** need minimum 3 data points spanning sufficient timeframe

---

## Metric Presentation Rules

How to present KPIs and metrics without hallucinating:

- **Always specify time period and scope**: "Q3 2025 North America" not "Q3 growth"
- **Never extrapolate without declaring INFERENCE**: "If trend continues..." is an inference
- **Round appropriately**: Don't present false precision ("12.347%" from 100-sample survey)
- **Distinguish leading vs. lagging indicators**: Revenue (lagging) vs. pipeline velocity (leading)
- **Specify whether absolute or relative measures**: "Increased 5 units" vs. "Increased 5%"
- **Define all acronyms on first use** in the same section
- **Consistency rule**: Same metric always uses same calculation method and timeframe
- **Confidence intervals**: For estimates and projections, state uncertainty range

---

## Data Source Hierarchy

Adapting GGP source tiers specifically for data/analytics:

### Tier 1 — Data Gold Standard [🟢 **CONFIRMED**]
- Audited financial statements (GAAP/IFRS certified)
- Official government statistics (ONS, BLS, Eurostat, ABS)
- Regulated filings (SEC 10-K, FCA disclosures, company annual reports)
- Internal verified databases with audit trails
- Peer-reviewed academic research with replication

### Tier 2 — Reliable Data [🟢 **CONFIRMED**]
- Major analyst firms (Gartner Magic Quadrant, IDC research, Forrester)
- Financial data terminals (Bloomberg, Reuters, FactSet)
- Industry body published statistics (e.g., SIFMA, ICMA)
- University research centres with methodology transparency
- Government surveys with published sampling methodology

### Tier 3 — Useful Context [🟡 **INFERENCE**]
- Company press releases with unaudited figures (verify against filings)
- Industry surveys (always check sample size and methodology)
- Market research previews and abstracts (note: full data often paywalled)
- Wikipedia for definitions and historical context only
- Conference presentations with disclosed data sources

### Tier 4 — Proceed with Caution [🟠 **UNVERIFIED**]
- Social media metrics and viral claims
- Unverified benchmarks ("typical ROI")
- "Industry average" without cited source
- Blog-cited statistics (trace to original source)
- Conference slide claims without methodological backing
- Sponsored content and white papers (bias risk)

---

## Dashboard & Report Narratives

GGP rules specifically for writing narratives around data:

- **Traceability rule**: Every number must have a documented source with tier rating
- **Trend language**: "Revenue increased 12% YoY" only if you have prior-year comparable
- **Avoid weak language**: Don't say "shows a clear trend" without statistical significance testing
- **Comparison language**: Use neutral terms ("higher than," "lower than") not evaluative ("better," "worse")
- **Anomaly declarations**: Call out outliers when they distort the narrative; explain if they're data errors or genuine signals
- **Causation claims**: Require causal evidence; use "associated with" or "correlates with" instead
- **Context always**: Standalone numbers have no meaning; include benchmarks, targets, or prior periods
- **Caveats must be visible**: Don't hide limitations in footnotes; surface them in main narrative

---

## Common Data Hallucination Patterns

Specific anti-hallucination rules for data contexts:

### Pattern: Invented Precision
- **Detection**: Source says "approximately 24%" but you write "23.7%"
- **Rule**: Match precision to source precision
- **Mark as**: [🟠 **UNVERIFIED**] [⚠️ **RISK**] — Flag and revise to source value

### Pattern: Conflated Metrics
- **Detection**: Mixing revenue with profit, Monthly Active Users (MAU) with Daily Active Users (DAU)
- **Rule**: Define metric once, use consistently, note when switching metrics
- **Mark as**: [🟠 **UNVERIFIED**] [⚠️ **RISK**] — Rewrite with clarity on which metric each claim uses

### Pattern: Cherry-Picked Timeframes
- **Detection**: Highlighting H1 performance without showing H2, selecting most favorable quarter
- **Rule**: Present full-year or multi-year context; explain if focusing on specific period
- **Mark as**: [🟡 **INFERENCE**] — Declare the selection and provide context

### Pattern: Survivorship Bias
- **Detection**: Only referencing successful companies' practices, ignoring failures
- **Rule**: Acknowledge the subset; note "among companies that survived" if applicable
- **Mark as**: [🟡 **INFERENCE**] — Add caveat about sample composition

### Pattern: Correlation as Causation
- **Detection**: "X led to Y" without experimental or causal evidence
- **Rule**: Use "associated with," "correlates with," or "preceded"; avoid "caused," "drove," "led to"
- **Mark as**: [🟡 **INFERENCE**] — Rephrase with appropriate causal language

### Pattern: Missing Denominators
- **Detection**: "500 customers" without context ("out of 50,000" vs. "out of 600")
- **Rule**: Always include base population and percentage
- **Mark as**: [🔴 **GAP**] — Cannot assess significance without denominator; mark for research

### Pattern: Zombie Statistics
- **Detection**: Using 2015 data in 2025 report presented as current
- **Rule**: Date all data; flag anything older than 2 years unless explicitly historical
- **Mark as**: [🟠 **UNVERIFIED**] — Update or explicitly label as historical data

---

## Data Visualization Ethics

Rules for when content references or describes charts/graphs:

- **Never describe patterns the data doesn't support**: If chart shows flat line, don't say "strong growth"
- **Axis manipulation disclosure**: If y-axis doesn't start at zero, must state this
- **Sample size visibility**: Charts must show or text must declare the N
- **Confidence intervals**: For estimates and projections, show or mention uncertainty bands
- **Colour coding**: If using colour to imply good/bad (green/red), ensure neutral data supports it
- **GGP markers in chart narratives**: Apply [🟢 **CONFIRMED**]/[🟡 **INFERENCE**]/[🟠 **UNVERIFIED**] to all pattern claims just as in text
- **Annotation integrity**: Callout boxes must cite supporting data points

---

## Analytics Communication Templates

### Executive Data Brief Template

```
HEADLINE: [Key finding in one sentence]

METRIC: [Primary KPI] = [Value] [🟢 CONFIRMED]/[🟡 INFERENCE]/[🟠 UNVERIFIED]
PERIOD: [Exact timeframe: "Q3 2025" or "July 1 – September 30, 2025"]
TREND: [Direction + magnitude, e.g., "Up 12% YoY"] [🟢 CONFIRMED]/[🟡 INFERENCE]
CONTEXT: [Benchmark or comparison: vs. target, prior period, market]
IMPLICATION: [What this means for decisions]
SOURCE: [Data source | Tier | Refresh date]
```

### KPI Summary Table Template

```
| KPI | Value | Period | vs Target | vs Prior Yr | Source | GGP Status |
|-----|-------|--------|-----------|------------|--------|------------|
| Revenue | $2.5M | Q3 2025 | +8% | +12% | Accounting system | [🟢 **CONFIRMED**] |
| Customer Churn | 3.2% | Aug–Sept 2025 | +0.5pp | -0.1pp | CRM export | [🟡 **INFERENCE**] |
| Market Share | ~15% | H1 2025 | -2pp | N/A | Analyst report | [🟡 **INFERENCE**] |
```

---

## Pre-Publication Data Checklist

Final validation specifically for data-heavy content:

- [ ] **Traceability**: All numbers have a documented source with tier rating
- [ ] **Precision match**: Decimal places match source precision (no invented decimals)
- [ ] **Time periods explicit**: Every metric specifies its timeframe ("Q3 2025", "12-month average")
- [ ] **Units and currency**: All figures specify currency (USD, EUR), units (%, absolute, per capita)
- [ ] **Methodology disclosed**: Any percentage, average, or statistical claim states how it was calculated
- [ ] **Baseline consistency**: Comparisons (YoY, vs. target) use identical calculation methods
- [ ] **Caveats visible**: Limitations, sample sizes, and assumptions stated in main narrative
- [ ] **Chart descriptions accurate**: Narrative matches actual data in visualizations
- [ ] **No zombie data**: All figures dated; nothing older than 2 years unless explicitly historical
- [ ] **GGP markers applied**: [🟢 **CONFIRMED**]/[🟡 **INFERENCE**]/[🟠 **UNVERIFIED**] assigned to all data claims based on source tier and confidence
- [ ] **Correlation language**: No causal claims without causal evidence
- [ ] **Denominator disclosure**: All percentages and rates include base population

---

**Version**: 1.0
**Last Updated**: February 2026
**Domain**: Data Governance & Analytics
**Framework**: Grounded Gate Protocol (GGP)

---

## GGP Return to Main Flow

After reading this file, RETURN to your current execution phase:

- **Fast Mode**: This content is summarised in QUICK_REFERENCE.md. Return to SKILL.md Phase 3 (Create + Validate + Deliver).
- **Deep Audit Mode (Phase 2)**: Return to SKILL.md Phase 3 after finishing all Phase 2 reads.
- **On-demand reference**: Return to the task at hand.

**NEVER stay in this file. Continue with your assigned phase in SKILL.md.**

---

# 7. Success Metrics
> Source: `references/general-guidelines/5.success-metrics.md`

# GGP Success Metrics
## Measuring Grounded Gate Protocol Effectiveness

---

## Purpose

Transform GGP from "a process" into "a measurable system." These KPIs enable tracking, benchmarking, and evidence-based improvement of AI output quality.

---

## Core KPIs

| # | Metric | Target | How to Measure | Frequency |
|---|--------|--------|----------------|-----------|
| 1 | **Hallucination Rate** | < 5% of claims without CONFIRMED | Audit 20 random outputs; count claims lacking Tier 1-3 sources | Monthly |
| 2 | **Gap Declaration Rate** | > 95% of gaps marked | Post-hoc review: compare final output to available data; identify unmarked gaps | Monthly |
| 3 | **Loop Iterations** | ≤ 2 rounds average | Count conversation turns from request to first draft with markers | Per output |
| 4 | **User Override Rate** | < 15% | Track how often user requests changes to clean output after GGP process completes | Monthly |
| 5 | **Time to Clean Output** | ≤ 3 turns | Count turns from initial request to clean output delivery (Phase 3h) | Per output |

---

## Extended Metrics (For Evidence Portfolio and Enterprise Adoption)

| # | Metric | Target | Purpose |
|---|--------|--------|---------|
| 6 | **Source Tier Distribution** | > 60% Tier 1-2 sources per output | Measures quality of evidence base |
| 7 | **Devil's Advocate Catch Rate** | > 0 risks flagged per 5 outputs | Validates reputation protection is active |
| 8 | **Inference Acceptance Rate** | Track percentage of inferences accepted vs. rejected by user | Calibrates AI confidence accuracy |
| 9 | **Channel Compliance Rate** | 100% channel checklist pass on first validation | Measures skill reference loading discipline |
| 10 | **Cross-Platform Consistency** | Same claim receives same marker across Claude, ChatGPT, Copilot | Validates platform template parity |

---

## Measurement Protocol

### Monthly Audit Process

1. **Sample**: Select 20 GGP-processed outputs from the past month
2. **Review**: For each output, check:
   - Are all factual claims tagged with CONFIRMED + source?
   - Are all assumptions tagged with INFERENCE?
   - Are all missing data points tagged with GAP?
   - Was Devil's Advocate run (check for RISK flags or explicit "no risks found")?
   - Did the output reach clean version in ≤ 3 turns?
3. **Score**: Calculate each KPI
4. **Report**: Document results and trends

### Scoring Template

```
GGP MONTHLY SCORECARD

Period: [Month Year]
Outputs Audited: [N]

| KPI | Target | Actual | Status |
|-----|--------|--------|--------|
| Hallucination Rate | < 5% | [X]% | PASS/FAIL |
| Gap Declaration Rate | > 95% | [X]% | PASS/FAIL |
| Loop Iterations (avg) | ≤ 2 | [X] | PASS/FAIL |
| User Override Rate | < 15% | [X]% | PASS/FAIL |
| Time to Clean Output (avg) | ≤ 3 turns | [X] | PASS/FAIL |

Overall Score: [X]/5 targets met
Trend vs. Prior Month: [Improving/Stable/Declining]

Notes: [Observations, patterns, improvement actions]
```

---

## Maturity Levels

Use these to assess GGP adoption maturity within a team or organisation:

| Level | Name | Criteria |
|-------|------|----------|
| 1 | **Awareness** | Team knows GGP exists; no formal adoption |
| 2 | **Adoption** | GGP markers used in some outputs; no measurement |
| 3 | **Compliance** | All professional outputs use GGP; monthly audits started |
| 4 | **Optimisation** | KPIs tracked monthly; targets met consistently; platform templates deployed |
| 5 | **Excellence** | Cross-platform consistency verified; community contributions; framework evolution |

---

## Version
GGP Success Metrics v1.0 | Last Updated: 2026-02-20

---

## GGP Return to Main Flow

This file is OPERATIONAL — not part of the content creation flow. After reading:

- **If auditing GGP performance**: Use the scorecard template above and return to the task at hand.
- **If referenced during content creation**: Return to SKILL.md Phase 3 (Create + Validate + Deliver).

**NEVER stay in this file. Return to the task at hand.**
