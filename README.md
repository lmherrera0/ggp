# Grounded Gate Protocol (GGP)

**Anti-hallucination framework for AI-generated professional communications.**

Core principle: *"Nothing passes unverified."*

GGP forces AI to be transparent about what it knows, what it assumes, and what it cannot verify — before you send that email, publish that article, or present to leadership.

---

## What GGP Does

- **Visual markers** ([CONFIRMED] / [GAP] / [INFERENCE] / [UNVERIFIED] / [RISK]) on every claim
- **4-tier source classification** (authoritative to unverified) with full citations
- **Devil's Advocate** risk screening (8 dimensions scored 1-3) on all significant communications
- **22 channel templates** (email, LinkedIn, HBR, presentations, coding docs, and more)
- **7 analysis templates** (SWOT, gap analysis, benchmarks, cost-benefit, and more)
- **Professional etiquette** (7 golden rules + language reframing)
- **Data integrity** rules for statistics, metrics, and analytics content
- **Anti-fatigue** system — max 2 clarification rounds, then you decide
- **Multi-platform** — works on Claude, ChatGPT, Google Gems, and Copilot

---

## Quick Start

### Claude Code / Cowork

Place this folder as `skills/ggp/` in your project. Claude Code will detect `SKILL.md` automatically.

### Claude Projects

1. Open `references/platforms/claude.md`
2. Copy everything inside the code block
3. Paste into your Claude Project instructions (Projects > Edit Project > Instructions)

### ChatGPT / GPTs

1. Open `references/platforms/chatgpt.md`
2. Copy everything inside the code block
3. Paste into your GPT Instructions or ChatGPT Project instructions

### Microsoft Copilot

1. Open `references/platforms/copilot.md`
2. Copy everything inside the code block
3. Paste into your Copilot Agent instructions

### Google Gems

1. Open `references/platforms/google-gems.md`
2. Copy everything inside the code block
3. Paste into your Gem instructions

---

## File Structure

```
├── SKILL.md                          # Main orchestrator (entry point)
├── README.md                         # This file
├── examples/
│   ├── _style-learning.md            # Style extraction framework
│   └── [channel]/                    # Your past examples by channel (22 folders)
├── references/
│   ├── general-guidelines/
│   │   ├── QUICK_REFERENCE.md        # Compact rules card (Fast Mode)
│   │   ├── 1.source-analysis.md      # Source tiers, citations, red flags
│   │   ├── 2.professional-etiquette.md # 7 golden rules, language reframing
│   │   ├── 3.reputation-protection.md# Devil's Advocate, 3 tests, escalation
│   │   ├── 4.data-analytics-expertise.md # Data verification standards
│   │   └── 5.success-metrics.md      # KPIs and auditing
│   ├── channels/                     # 22 channel templates
│   ├── analysis-templates/           # 7 analysis templates
│   ├── platforms/                    # Claude, ChatGPT, Copilot, Gems
│   └── about-ggp/
│       ├── introduction.md           # Executive summary and plain-language guide
│       └── LEGAL.md                  # Licence, attribution, disclaimer
├── knowledge-base/                   # Consolidated reference files
└── app/                              # GGP website (Next.js)
```

---

## Customisation

GGP is designed to be adapted to your needs:

- **Add your examples**: Place past writing samples in `examples/[channel]/` and GGP will learn your voice and style
- **Adjust channel templates**: Modify templates in `references/channels/` to match your organisation's standards
- **Add analysis templates**: Create new templates in `references/analysis-templates/` for your specific deliverables
- **Tune risk thresholds**: Adjust Devil's Advocate scoring in `references/general-guidelines/3.reputation-protection.md`

---

## Two Modes

| Mode | When | What Happens |
|------|------|-------------|
| **Fast (Default)** | Any content task | Loads compact rules card. Checkpoints use shorthand. |
| **Deep Audit** | Say "deep audit", "full compliance", or "final review" | Loads all individual reference files. Checkpoints use verbose tables. |

Both modes enforce the same rules. Deep Audit provides more context for high-stakes deliverables.

---

## Licence

Licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

Originally created by Liz Magaly Herrera Jara.

When using or sharing this framework:
1. Credit the original creator
2. Reference the Grounded Gate Protocol (GGP) by name
3. Share adaptations under the same licence terms

See `references/about-ggp/LEGAL.md` for full terms.

---

GGP v4.5-public | "Nothing passes unverified."
