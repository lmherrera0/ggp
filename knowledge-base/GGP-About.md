# GGP About — Consolidated Knowledge Base
## For Claude Projects / Knowledge Base Upload

> This document consolidates the introduction, executive summary, and legal information from GGP into a single reference.

---

## Document Contents

1. **About GGP Index**
2. **Introduction**
3. **Legal Disclaimer, Licence & Usage Terms**

---

# 1. About GGP Index
> Source: `references/about-ggp/_index.md`

# About GGP — Reference Index

Navigation guide for understanding the Grounded Gate Protocol framework.

---

## Files

| File | Classification | Purpose | When to Load |
|------|---------------|---------|-------------|
| `introduction.md` | ONBOARDING | Executive summary and plain-language guide explaining what GGP is and why it exists | When someone asks "What is GGP?", for stakeholder onboarding, or to explain the framework to non-technical audiences. |
| `LEGAL.md` | REFERENCE | License (CC BY-NC-SA 4.0), IP declaration, version history, permitted uses | When questions arise about licensing, attribution, intellectual property, or permitted use of the framework. |
---

## Classification Key

| Label | Meaning | Agent Behaviour |
|-------|---------|----------------|
| ONBOARDING | Explanatory material — not part of the execution flow | Agent loads only when user asks about the framework itself |
| REFERENCE | Administrative/legal documentation — loaded only on demand | Agent loads only for IP, licensing, or attribution questions |

---

**Last Updated**: February 2026
**GGP Version**: 4.5


---

# 2. Introduction
> Source: `references/about-ggp/introduction.md`

# GGP Introduction & Executive Summary
## For New Users, Stakeholders, and Knowledge Base Contexts

---

## Executive Summary

The Grounded Gate Protocol (GGP) is a practical framework designed to reduce AI hallucinations and improve the reliability of AI-generated professional communications.

**The Problem**: Large Language Models (LLMs) like ChatGPT, Claude, Gemini, and Copilot can produce confident-sounding content that is factually incorrect, fabricated, or misleading. In professional contexts — client communications, executive reports, regulatory submissions — this creates significant reputational and operational risk.

**The Solution**: GGP introduces a systematic approach based on one core principle:

> **"Nothing passes unverified"**

Every claim in an AI-generated output must be either verified with a source or explicitly declared as a gap or inference. No assumptions hide in the background.

### Key Features

| Feature | Benefit |
|---------|---------|
| **Visual Markers** ([🟢 **CONFIRMED**]/[🔴 **GAP**]/[🟡 **INFERENCE**]/[🟠 **UNVERIFIED**]/[⚠️ **RISK**]) | Instant identification of what is verified vs. assumed |
| **Source Quality Tiers** (1-4) | Know if a citation is authoritative or questionable |
| **Precise Citations** | Exact page, section, and URL — not just "source: website" |
| **Iteration Control** | Prevents endless clarification loops that exhaust users |
| **User Control Options** [A][B][C] | You decide the depth of analysis, not the AI |
| **Devil's Advocate** (8 dimensions scored 1-3) | Reputation, legal, and credibility risk screening before delivery |
| **Professional Etiquette** (7 golden rules) | Professional conduct guardrails for all communications |
| **Data & Analytics Expertise** | Anti-hallucination rules for statistics, metrics, and data claims |
| **Clean Output** | Final version stripped of markers, ready to use |
| **Multi-Platform** | Works across Claude, ChatGPT, Gemini, Copilot |
| **22 Channel Templates** | Tailored guidance for LinkedIn, HBR, email, presentations, and more |
| **7 Analysis Templates** | Structured consulting deliverables (SWOT, gap analysis, benchmarks, etc.) |
| **Style Learning** | Learns your writing style from examples to match your voice |

### Who It Is For

Consultants, analysts, executives, and professionals who use AI to draft communications but need confidence that the outputs are grounded in fact.

### Result

Transparent AI outputs where you know exactly what is verified, what is assumed, and what is missing — before you send that email or present to leadership.

---

## What GGP Can Do

### Content Creation with Verified Sources
Draft professional communications across **22 channels** — from emails and LinkedIn posts to HBR articles and academic journals — with every factual claim traced to a source and classified by confidence level.

### Consulting Analysis Deliverables
Produce **7 types of structured analysis** (SWOT, gap analysis, benchmarks, cost-benefit, maturity assessment, stakeholder analysis, use cases) with built-in anti-hallucination checks specific to each analysis type.

### Source Verification & Classification
Evaluate any source against a **4-tier hierarchy** (authoritative to unverified), detect red flags (no author, outdated, commercial bias, circular sourcing), and resolve conflicting sources systematically.

### Reputation & Legal Risk Screening
Run **Devil's Advocate analysis** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO) on all significant communications. Identify high-risk language and offer professional alternatives.

### Data & Analytics Quality
Apply specialised anti-hallucination rules for data content: precision matching, denominator disclosure, correlation vs. causation language, zombie statistics detection, and 12-point pre-publication data checklist.

### Cross-Platform Deployment
Deploy GGP on **Claude, ChatGPT, Google Gems, and Copilot** with platform-specific templates adapted to each platform's instruction format.

### Style Learning from Examples
Analyse past writing samples to extract tone, structure, vocabulary, and voice patterns. Apply learned style while maintaining GGP compliance.

### Performance Measurement
Track GGP effectiveness with **5 core KPIs** (hallucination rate, gap declaration rate, loop iterations, user override rate, time to clean output) and maturity scoring.

---

## How GGP Works: The 3-Phase Cycle

GGP operates in two modes — **Fast Mode** (default, compact) and **Deep Audit Mode** (full compliance review) — both following the same 3-phase cycle:

```
PHASE 1: LOAD RULES
│
├─ Fast Mode: Read QUICK_REFERENCE.md (compact rules card)
│   Contains: 8 non-negotiable rules, 5 markers, 4 source tiers,
│   citation format, prohibited language, red flags, Devil's Advocate,
│   validation gate, professional etiquette, data verification
│
├─ Deep Audit: Read ALL individual reference files in parallel
│   [1] 1.source-analysis.md (tiers, citations, red flags, fallbacks)
│   [2] 2.professional-etiquette.md (7 golden rules, language reframing)
│   [3] 3.reputation-protection.md (Devil's Advocate, 3 tests, escalation)

        ↓

PHASE 2: LOAD CHANNEL + CONDITIONALS
│
├─ Identify target channel → Load channel template
│   (template, structure, limits, tone, metrics, formatting)
│
├─ IF data/analytics content → Load 4.data-analytics-expertise.md
├─ IF analytical deliverable → Load analysis-templates/[template].md
├─ IF cross-platform → Load platforms/[platform].md
└─ IF examples exist → Learn style from examples/[channel]/

        ↓

PHASE 3: CREATE + VALIDATE + DELIVER
│
├─ 3a. Classify (channel, audience, risk level, complexity)
├─ 3b. Information Audit (tag ALL claims with GGP markers)
├─ 3c. Iteration Control (max 2 rounds, then [A][B][C] options)
├─ 3d. Reasoning Gate (what is CONFIRMED vs. INFERENCE vs. GAP?)
├─ 3e. Create Content (apply channel template + style)
├─ 3f. Devil's Advocate (MANDATORY — 8 dimensions scored 1-3, score risk)
├─ 3g. Validation Gate (8/8 required)
└─ 3h. Refinement + Clean Output (present gaps → user confirms → polish)
```

### Mode Selection

| Mode | When | What Changes |
|------|------|-------------|
| **Fast (Default)** | Any content task | Phase 1 reads compact QUICK_REFERENCE.md only. Checkpoints use shorthand. |
| **Deep Audit** | User says "deep audit", "full compliance", "final review", "submission-ready" | Phase 1 reads ALL individual reference files. Checkpoints use verbose tables. |

Both modes enforce the same rules. Deep Audit provides more context and detailed reporting for high-stakes deliverables.

---

## GGP Architecture

```
skills/ggp/
├── SKILL.md                          # Main orchestrator (entry point)
├── examples/
│   ├── _style-learning.md            # Style extraction framework
│   └── [channel]/                    # Past examples by channel (22 folders)
└── references/
    ├── general-guidelines/
    │   ├── QUICK_REFERENCE.md        # Compact rules card (Fast Mode)
    │   ├── 1.source-analysis.md      # MANDATORY — source tiers, citations
    │   ├── 2.professional-etiquette.md # MANDATORY — 7 golden rules
    │   ├── 3.reputation-protection.md# MANDATORY — Devil's Advocate, 3 tests
    │   ├── 4.data-analytics-expertise.md # CONDITIONAL — data verification
    │   ├── 5.success-metrics.md      # OPERATIONAL — KPIs, auditing
    │   └── _index.md                 # Folder navigation
    ├── channels/
    │   ├── _index.md                 # Channel navigation (22 channels)
    │   └── [channel].md              # Individual channel templates
    ├── analysis-templates/
    │   ├── _index.md                 # Template navigation (7 templates)
    │   └── [template].md             # Individual analysis templates
    ├── platforms/
    │   ├── _index.md                 # Platform navigation
    │   └── [platform].md             # Claude, ChatGPT, Copilot, Gems
    └── about-ggp/
        ├── introduction.md           # This file
        ├── LEGAL.md                  # Licence, IP, version history
        └── _index.md                 # Folder navigation
```

### File Classification

| Classification | Meaning | Files |
|---------------|---------|-------|
| **MANDATORY** | Loaded every execution | QUICK_REFERENCE.md, 1-3 (Deep Audit) |
| **CONDITIONAL** | Loaded when trigger matches | Channel templates, 4.data-analytics, analysis templates, platforms |
| **OPERATIONAL** | Management/measurement only | 5.success-metrics.md |
| **ONBOARDING** | Explanatory, not execution | introduction.md (this file) |
| **REFERENCE** | Legal/admin, on demand | LEGAL.md |

---

## In Simple Terms

### The Core Idea

AI sometimes makes things up. It sounds confident, uses proper grammar, and presents "facts" that turn out to be completely fabricated. That is called hallucination, and it is a real problem when drafting something important.

GGP is a set of instructions you give to AI that forces it to be honest about what it actually knows versus what it is guessing.

### How It Works

Imagine every statement the AI makes gets a coloured flag:

- [🟢 **CONFIRMED**] = "I checked this, here is the source"
- [🔴 **GAP**] = "I do not have this information"
- [🟡 **INFERENCE**] = "I am assuming this — you should verify"
- [🟠 **UNVERIFIED**] = "I tried to verify but could not confirm"
- [⚠️ **RISK**] = "This could get you in trouble"

Instead of getting a polished document that might contain hidden nonsense, you get a draft where every uncertainty is visible. You can then fill the gaps yourself or accept the assumptions before the AI produces the final clean version.

### Not All Sources Are Equal

Just because something is "cited" does not mean it is true. If someone says "the market is worth $50 billion" and cites a random blog, that is very different from citing an SEC filing or a McKinsey report.

GGP uses a tiering system:

- **Tier 1** (Gold standard): Official filings, government data, peer-reviewed research. If Apple's annual report says their revenue is X, that is as good as it gets.
- **Tier 2** (Solid): Major publications like the Financial Times, Reuters, or established analysts like Gartner. Trustworthy, but they are reporting on primary sources.
- **Tier 3** (Decent): Industry blogs, company marketing materials, Wikipedia. Useful for context, but cross-check anything important.
- **Tier 4** (Proceed with caution): Forums, social media, random websites. Never treat these as confirmed facts.

When the AI cites something, you will see the source name, the tier, the exact page or section, and a link so you can verify yourself.

### The Anti-Fatigue System

Ever had an AI ask you question after question until you gave up? GGP limits that. The AI gets a maximum of two rounds of questions, and after each round, you choose:

- **[A]** Answer and continue
- **[B]** "Just produce something with what you have"
- **[C]** "I want deep analysis, ask me more"

You are in control. Not the AI.

### Why Bother?

Because sending an email with a fabricated statistic to a client is embarrassing. Presenting made-up data to leadership is career-limiting. And including false information in a regulatory submission is potentially illegal.

GGP does not guarantee perfection — AI will still make mistakes. But it makes those mistakes visible so you can catch them before they matter.

---

## How to Use This Document

| If You Want To... | Review This Section |
|-------------------|---------------------|
| Understand the purpose quickly | Executive Summary (above) |
| Get a non-technical overview | In Simple Terms (above) |
| See what GGP can do | What GGP Can Do (above) |
| Understand the execution flow | How GGP Works: The 3-Phase Cycle (above) |
| See the file architecture | GGP Architecture (above) |
| Understand source quality evaluation | `references/general-guidelines/1.source-analysis.md` |
| Implement GGP on a specific platform | `references/platforms/[platform].md` |
| Use GGP for data/analytics content | `references/general-guidelines/4.data-analytics-expertise.md` |
| Create consulting analysis deliverables | `references/analysis-templates/_index.md` |
| Measure GGP effectiveness | `references/general-guidelines/5.success-metrics.md` |
| Know your rights and responsibilities | `references/about-ggp/LEGAL.md` |

---

## Version History

| Version | Date | Key Changes |
|---------|------|-------------|
| 1.0 | January 2026 | Initial introduction with executive summary and plain-language guide |
| 2.0 | February 2026 | Full rewrite: added "What GGP Can Do" (8 capabilities), "How GGP Works: The 3-Phase Cycle" (complete flow diagram with Fast/Deep modes), "GGP Architecture" (full file tree with classification table), updated navigation table |

GGP Introduction v2.0 | Last Updated: 2026-02-21



---

# 3. Legal Disclaimer, Licence & Usage Terms
> Source: `references/about-ggp/LEGAL.md`

# Grounded Gate Protocol (GGP) | Legal Disclaimer, Licence & Usage Terms

**Version 4.5** | February 2026 | Liz Magaly Herrera Jara
*"Nothing passes unverified."*

---

This document has NOT been reviewed by qualified legal counsel. It represents the Author's understanding of intellectual property protection, licensing, and liability limitation. For legal questions specific to your situation or jurisdiction, consult a licensed attorney. This is not legal advice.

---

## Quick Reference: How to Cite This Work

This section provides ready-to-use attribution notices in three formats. Copy the version that matches your medium.

**Licence verification:** [CC BY-NC-SA 4.0 — Full Legal Text](https://creativecommons.org/licenses/by-nc-sa/4.0/)
**Source repository:** [github.com/lmherrera0/ggp](https://github.com/lmherrera0/ggp)

### For Web & Digital Use (HTML)

Paste this HTML wherever you reference the framework online:

```html
<a href="https://github.com/lmherrera0/ggp">Grounded Gate Protocol (GGP)</a> © 2025 by <a href="https://www.linkedin.com/in/lmherrera0/">Liz Magaly Herrera Jara</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
<img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" style="max-width:1em;max-height:1em;margin-left:.2em;">
<img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" style="max-width:1em;max-height:1em;margin-left:.2em;">
<img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="NC" style="max-width:1em;max-height:1em;margin-left:.2em;">
<img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="SA" style="max-width:1em;max-height:1em;margin-left:.2em;">
```

### For Print, Presentations & Media

Copy this text to the title page, copyright page, or credits section:

```
Grounded Gate Protocol (GGP) © 2025 by Liz Magaly Herrera Jara is licensed under CC BY-NC-SA 4.0.
To view a copy of this licence, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
```

### For Plain Text & Markdown

Use this in README files, documentation, or any text-based reference:

```
This work uses the Grounded Gate Protocol (GGP) by Liz Magaly Herrera Jara (lmherrera0).
Source: https://github.com/lmherrera0/ggp
Licensed under CC BY-NC-SA 4.0 International.
© 2025–2026 Liz Magaly Herrera Jara. Used under licence.
```

---

## Scope

This notice applies to:

- The Grounded Gate Protocol (GGP) framework and all associated documentation
- All reference files, channel templates, analysis templates, and platform adaptations
- The GGP visual marker system ([CONFIRMED], [GAP], [INFERENCE], [UNVERIFIED], [RISK])
- The GGP iteration control mechanism and anti-fatigue system
- All versions from v1.0 (December 2025) onwards, including the current version and all future versions unless a subsequent version explicitly states otherwise

Excluded:

- Third-party tools, platforms, or AI models referenced within the framework
- Content produced BY users using the framework (users retain ownership of their outputs)
- The Brand Voice & Visual Gate (BVVG) system, which is governed by its own terms

---

## Authorship & Copyright

**Copyright & Ownership:**

© 2025–2026 Liz Magaly Herrera Jara. Licensed under CC BY-NC-SA 4.0 International.

- **Legal Name:** Liz Magaly Herrera Jara
- **Professional Name:** Liz Magaly Herrera
- **Digital Handle:** lmherrera0
- **Contact:** [linkedin.com/in/lmherrera0](https://www.linkedin.com/in/lmherrera0)

The Grounded Gate Protocol (GGP), including all associated documentation, methodologies, visual marker systems, iteration control mechanisms, and platform-specific adaptations, is the original intellectual work of Liz Magaly Herrera Jara ("the Author").

**Trademark Notice:** "Grounded Gate Protocol", "GGP", and the associated visual marker system are unregistered trademarks of Liz Magaly Herrera Jara. The Author reserves all rights to seek formal trademark registration. Unauthorised use of these names in a manner likely to cause confusion as to the origin or endorsement of any product or service is prohibited.

### Personal Intellectual Property Declaration

This framework is the Author's personal intellectual property. It was conceived, designed, and developed independently, outside the scope of any employment relationship, using the Author's own resources and on the Author's own time. No employer, client, or third party has ownership rights, claims, or licensing authority over this work unless explicitly granted in writing by the Author.

**Evidence of Independent Creation:**

The Author declares the following development circumstances as a matter of record:

All versions of this framework were created exclusively during the Author's personal time (holiday leave periods and weekends), outside of any working hours. Detailed records of the development timeline are maintained privately by the Author and are available for verification if required in any formal proceeding.

**Resources used:** All development was conducted entirely on the Author's personal computer, using the Author's personal software licences paid from the Author's personal funds. No employer-provided equipment, software, accounts, network access, or infrastructure was used at any stage of development.

**Declaration of independence:** This framework was created as part of the Author's personal learning, research, and professional development interests. It is wholly independent of any duties, responsibilities, or obligations arising from any current or prior employment relationship. The subject matter of this framework (AI anti-hallucination methodology) does not form part of the Author's employment duties and was not commissioned, requested, or directed by any employer.

The hosting, storage, or display of this framework on any platform (including employer-provided infrastructure, cloud services, or third-party repositories) does not transfer, assign, or imply any ownership rights to the platform operator, employer, or service provider.

### Transparency Statement: AI-Assisted Creation

In the spirit of the very principles this framework promotes, full transparency is provided regarding its creation:

This framework was conceived, directed, and authored by the Author. During the development process, the Author used Anthropic's Claude AI models as an assistive tool — in the same way a writer might use a word processor, a researcher might use a search engine, or a designer might use software. The AI assisted with research synthesis and compilation, document structuring and formatting, platform-specific adaptation drafting, and technical documentation generation. All intellectual decisions, creative direction, original concepts, architectural choices, and final approval remained exclusively with the Author throughout every version.

**The following remain entirely the Author's original contributions:**

**Tier A — Core Inventions (Highest IP Value)**

1. The "Grounded Gate Protocol" concept, naming, and acronym (GGP)
2. The five-marker confidence classification system: [CONFIRMED], [GAP], [INFERENCE], [UNVERIFIED], [RISK]
3. The four-tier source classification hierarchy (Tier 1–4) and source citation metadata format
4. The anti-fatigue iteration control mechanism with structured round limits
5. The Devil's Advocate risk assessment framework and its three tests (Hostile Reader Test, Screenshot Test, CEO Test)

**Tier B — Structural Architecture & Methodologies**

6. The 3-phase GGP execution cycle (Load Rules → Load Channel + Conditionals → Create + Validate + Deliver) with 9-step creation flow and zero-skip policy
7. The 22-channel communication system with dedicated templates (Email, LinkedIn, Twitter/X, Instagram, Presentations, Press Release, Academic Journal, Legal Disclaimers, and 14 others)
8. The 7-analysis template library (Use Cases, Benchmark, Gap Analysis, SWOT, Cost-Benefit, Maturity Assessment, Stakeholder Analysis)
9. The chain-of-thought reasoning gate and pre-creation compliance verification
10. The post-creation validation gate (8-point checklist with optional BVVG 3-point brand checkpoint)
11. The platform-specific implementation guides (Claude, ChatGPT, Google Gems, Copilot) with platform-adapted GGP core embedding
12. The professional etiquette framework ("The 7 Golden Rules") and prohibited language patterns database
13. The dual-mode architecture (Fast Mode with compact rules card vs. Deep Audit Mode with full reference loading)

**Tier C — Integration & Ecosystem Design**

14. The cross-compliance integration architecture between GGP and the Author's Brand Voice & Visual Gate (BVVG) system
15. The sequential skill pipeline design: Primary Research → Secondary Research → Content Creation → Editorial Publishing, with bi-directional feedback loops
16. The content atomisation framework (one research output producing 11+ derivative formats)
17. The inter-skill data handoff protocol and error recovery cascading failure protocol
18. The Hero's Journey academic narrative framework (5-act structure for research writing)
19. The 6-layer editorial review stack with severity classification and feedback loop triggers

**Tier D — Strategic Direction & Professional Application**

20. All practical application requirements derived from the Author's real-world professional experience in data governance, analytics, and AI-assisted communications
21. All strategic decisions regarding framework architecture, versioning, and evolution
22. The domain-specific verification rules for financial, statistical, and business intelligence content
23. Final review, validation, and approval of all content across all versions

The Author takes full responsibility for the intellectual direction, practical utility, and professional applicability of this framework and all associated systems.

---

## Nature of This Work

**What This Framework IS:**

- A compilation of tested approaches for reducing AI hallucinations in professional communications
- A methodology guide based on the Author's professional experience in data, analytics, compliance, and AI-assisted communications
- An evolving, iterative work-in-progress
- A contribution to the broader community of AI practitioners
- A starting point for organisations seeking to improve AI output quality

**What This Framework IS NOT:**

- A finished, commercially polished product
- Legal, financial, medical, or professional advice
- A guarantee of error-free AI outputs
- A substitute for human judgement, review, and validation
- A certified or formally accredited methodology

---

## Limitation of Liability

**NO WARRANTY PROVIDED.**

This framework is provided "AS IS" and "AS AVAILABLE" without warranty of any kind, express or implied. To the fullest extent permitted by applicable law (including the Unfair Contract Terms Act 1977 and the Consumer Rights Act 2015), the Author excludes all implied warranties, conditions, and representations, including but not limited to implied warranties of merchantability, satisfactory quality, fitness for a particular purpose, and non-infringement.

**Nothing in this disclaimer excludes or limits the Author's liability for:** (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be excluded or limited under applicable law. These statutory protections apply regardless of any other provision in this disclaimer.

### User Responsibility

By using this framework, you acknowledge and agree that:

1. **Output Validation:** It is solely YOUR responsibility to validate that any outputs generated using this framework meet your quality standards, accuracy requirements, and professional obligations. The framework is designed to assist you, not to replace your professional judgement.

2. **AI Limitations:** Artificial intelligence systems, regardless of the prompting methodology employed, may produce errors, inaccuracies, hallucinations, or unsuitable content. No framework, including GGP, can guarantee error-free AI outputs.

3. **Context-Specific Review:** You must review all AI-generated content within the context of your specific use case, industry requirements, regulatory obligations, and professional standards.

4. **No Guarantee of Results:** The Author makes no representations or warranties regarding the effectiveness of this framework in any particular application or context.

### Disclaimer of Liability

Subject to the statutory protections stated above, and to the fullest extent permitted by the laws of England and Wales:

- The Author shall not be held liable for any indirect, incidental, special, consequential, or exemplary damages arising from or relating to your use of this framework.
- The Author accepts no responsibility for any errors, omissions, or inaccuracies in AI-generated content produced whilst using this framework.
- The Author shall not be liable for any loss of profits, data, goodwill, or other intangible losses resulting from your use of or inability to use this framework.
- The Author is not responsible for decisions made based on AI outputs, regardless of whether this framework was employed.

Where applicable law (including but not limited to consumer protection legislation, the Unfair Contract Terms Act 1977, or GDPR) limits the exclusion or limitation of liability, the Author's liability shall be limited to the minimum extent permitted by such applicable law.

---

## Data Protection & Privacy

The GGP framework itself does not collect, store, process, or transmit any personal data. It is a methodology document, not a software application.

However:

- AI platforms used in conjunction with this framework (e.g., Claude, ChatGPT, Copilot, Gemini) may collect data per their own privacy policies.
- Users are responsible for reviewing the data practices of any AI platform they use with this framework.
- The Author has no access to, control over, or responsibility for data processed by third-party AI platforms.

This framework is hosted on GitHub (github.com/lmherrera0/ggp), which is operated by GitHub, Inc. (a Microsoft company). GitHub may collect visitor data (including IP addresses, browser information, and usage analytics) in accordance with its own privacy statement. The Author has no control over GitHub's data processing practices. For details, see [GitHub's Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

If you are in the EU or another jurisdiction with data protection regulations (GDPR, CCPA, UK GDPR), ensure your use of AI platforms and hosting services complies with local requirements. The framework itself imposes no additional data processing.

---

## Licence & Usage Rights

This work is licensed under **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)**.

> Grounded Gate Protocol (GGP) © 2025 by Liz Magaly Herrera Jara is licensed under CC BY-NC-SA 4.0. To view a copy of this licence, visit [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/)

### Permitted Uses

You are granted a non-exclusive, royalty-free licence to:

- Use this framework for personal and professional purposes
- Adapt the framework to your specific organisational needs
- Share the framework with colleagues, provided attribution is maintained
- Create derivative works, provided they are shared under the same licence terms

### Required Attribution

When using, sharing, or adapting this framework, you must:

1. Credit **Liz Magaly Herrera Jara** (or **lmherrera0**) as the original author
2. Include a reference to the **Grounded Gate Protocol (GGP)** by name
3. Retain this disclaimer or a summary thereof with any distributed copies
4. State any changes made to the original framework
5. Licence any derivative works under the same terms

### Attribution Template

```
This work uses the Grounded Gate Protocol (GGP) by Liz Magaly Herrera Jara (lmherrera0).
Original framework: https://github.com/lmherrera0/ggp
Licensed under CC-BY-NC-SA 4.0 International.
© 2025–2026 Liz Magaly Herrera Jara. Used under licence.
```

### Restrictions

You may NOT:

- Use this framework for any commercial purpose (as defined by the CC BY-NC-SA 4.0 licence)
- Claim original authorship of this framework or its core concepts
- Remove or obscure attribution to the Author
- Sublicense this framework under different terms without written authorisation
- Use this framework in any manner that violates applicable laws or regulations

**Commercial use is not permitted.** This work is licensed under CC BY-NC-SA 4.0, which prohibits commercial use. The Author does not offer separate commercial licences at this time.

---

## Feedback & Continuous Improvement

This framework is a living document. The Author values community learning and collective improvement.

If you have suggestions for improvement, inconsistency reports, platform-specific adaptations that worked well, case studies demonstrating effectiveness, or implementation questions:

- **Digital:** [linkedin.com/in/lmherrera0](https://www.linkedin.com/in/lmherrera0)

Significant contributions from the community may be acknowledged in future versions, with the contributor's permission.

---

## Severability

If any provision of this disclaimer is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, it shall be severed from this disclaimer. The invalidity of any provision shall not affect the validity or enforceability of the remaining provisions, which shall continue in full force and effect.

---

## Entire Agreement

This disclaimer, together with the CC BY-NC-SA 4.0 licence, constitutes the entire agreement between the Author and any user of the Grounded Gate Protocol with respect to the subject matter herein. It supersedes all prior or contemporaneous oral or written communications, proposals, and representations with respect to the framework or any other subject matter covered by this disclaimer.

---

## Governing Law & Jurisdiction

This disclaimer and any disputes arising from your use of the Grounded Gate Protocol shall be governed by and construed in accordance with the laws of **England and Wales**, without regard to conflict of law principles.

If you are in the EU or another jurisdiction with mandatory consumer protection or governing law provisions, local laws may apply regardless of this clause. Users are encouraged to seek local legal advice where applicable.

---

## Changes & Updates

**Last Updated:** February 2026
**Next Review:** May 2026 (quarterly review scheduled)

The Author reserves the right to modify this disclaimer. All changes are recorded in the Version History section below and in the repository's commit history at [github.com/lmherrera0/ggp](https://github.com/lmherrera0/ggp). Material changes (those affecting user rights, licence terms, or liability provisions) will be clearly identified in the Version History with the tag **[MATERIAL CHANGE]**.

Users are responsible for reviewing the Version History and commit log to stay informed of changes. The Author will make reasonable efforts to communicate material changes through professional channels. Continued use of the framework after a material change has been published to the repository constitutes acceptance of the revised terms. Users who do not agree with a material change should discontinue use and delete any copies of the framework.

---

## Plain Language Summary

To put it simply:

1. **I created this.** Liz Magaly Herrera Jara is the sole author. I used Anthropic's Claude models as an assistive tool (which I am transparent about), but all intellectual decisions, concepts, and direction are mine. This is my personal intellectual property — it belongs to me, not to any employer.

2. **It is not finished.** This is a work-in-progress based on my tested approaches, not a polished commercial product.

3. **You are responsible for checking AI outputs.** I want to help you get better results, but I cannot be responsible for what AI produces. Always validate.

4. **Let us learn together.** If you have feedback, please contact me. We all benefit from shared learning.

5. **Give credit where due.** If you use or share this, please mention my name and the framework name. Share adaptations under the same terms.

6. **Your data is yours.** This framework does not collect any personal data. Check the privacy policies of whatever AI platform you use alongside it.

---

## Acceptance

By accessing, downloading, forking, cloning, or otherwise using the Grounded Gate Protocol (GGP) framework or any of its associated documentation, you acknowledge that you have read, understood, and agree to be bound by the terms of this disclaimer and the CC BY-NC-SA 4.0 licence. If you do not agree to these terms, you must not use, copy, or distribute this framework.

This acceptance requirement applies to all forms of use, including partial adoption of the framework's methodology, integration of GGP markers or templates into other systems, and reference to GGP concepts in derivative works.

---

## Version History

| Version | Date | Key Changes |
|---------|------|-------------|
| 1.0 | December 2025 | Initial Zero-Trust framework concept |
| 2.0 | December 2025 | Introduced visual markers, platform-specific adapters |
| 3.0 | January 2026 | Added anti-loop fatigue system, [A][B][C] user control options, clean output step, consolidated documentation |
| 4.2 | January 2026 | Channel system expansion (22 channels + 7 analysis templates); platform adapters (Claude, ChatGPT, Gems, Copilot); BVVG integration; professional etiquette reference |
| 4.3 | February 2026 | Updated Author attribution to legal name; added CC-BY-NC-SA 4.0 licence; added personal IP declaration and employer separation clause; added data protection statement; added GDPR-compliant change notification; added GGP markers; aligned with BVVG brand compliance |
| 4.4 | February 2026 | **[MATERIAL CHANGE]** Legal risk remediation: rewrote AI transparency statement to protect authorship claim (CDPA 1988); resolved "All Rights Reserved" vs CC licence conflict; added evidence of independent creation (dates, equipment, resources); adapted liability limitation to UCTA 1977 and Consumer Rights Act 2015; strengthened acceptance mechanism; added severability and entire agreement clauses; added trademark reservation notice; made version coverage dynamic; removed commercial licensing option; added GitHub data processing notice |
| 4.5 | February 2026 | Architecture restructuring for publication: unified execution into 3-phase cycle (Load Rules → Load Channel → Create + Validate + Deliver) with 9-step creation flow; introduced dual-mode system (Fast Mode + Deep Audit Mode); rewrote all 4 platform templates (Claude, ChatGPT, Copilot, Google Gems) with full GGP core embedding including Devil's Advocate, professional etiquette, data integrity, and validation gate; integral audit resolving orphan paths, broken references, and token-wasting redundancies; standardised naming to "Grounded Gate Protocol"; updated IP declarations to match current architecture (23 items); added introduction v2.0 with capability report and architecture diagram |

---

Grounded Gate Protocol (GGP) v4.5
"Nothing passes unverified"

© 2025–2026 Liz Magaly Herrera Jara. Licensed under CC BY-NC-SA 4.0 International.

This document was last reviewed and updated in February 2026.


---
