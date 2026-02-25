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
