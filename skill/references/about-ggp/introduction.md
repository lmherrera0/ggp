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

