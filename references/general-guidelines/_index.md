# General Guidelines — Reference Index

Core rules and domain expertise that power the Grounded Gate Protocol. These files define HOW the protocol verifies, protects, and communicates.

---

## Files

| File | Classification | Purpose | When to Load |
|------|---------------|---------|-------------|
| `QUICK_REFERENCE.md` | **MANDATORY** | Complete compact rules card — all core rules indexed in one file | **Every execution (Phase 1)**. Single-file entry point for all GGP rules. |
| `1.source-analysis.md` | **MANDATORY** | Source tier classification, citation format, quality indicators, red flags, prohibited language, fallback rules | **Every execution**. Core verification engine. |
| `3.reputation-protection.md` | **MANDATORY** | Devil's Advocate checks, three tests (Hostile Reader, Screenshot, CEO), risk scoring, escalation rules, user decision protocol | **Every execution**. Risk assessment engine. |
| `2.professional-etiquette.md` | **MANDATORY** | 7 Golden Rules, language reframing, professional scenarios, etiquette checklist | **Every execution**. Professional conduct rules. |
| `4.data-analytics-expertise.md` | **CONDITIONAL** | Data verification standards, hallucination patterns, visualisation ethics, metric presentation rules, analytics templates | Only when content involves data, analytics, BI, KPIs, dashboards, or statistical claims. |
| `5.success-metrics.md` | **OPERATIONAL** | 5 core KPIs, extended metrics, measurement protocol, maturity levels | For measuring GGP effectiveness, monthly audits, or reporting on protocol performance. Not part of content creation. |

---

## Classification Key

| Label | Meaning | Agent Behaviour |
|-------|---------|----------------|
| **MANDATORY** | Core to the protocol — rules apply in EVERY execution, no exceptions | In Fast mode: compact version loaded via `general-guidelines/QUICK_REFERENCE.md`. In Deep Audit: full file loaded individually. Agent MUST apply these rules regardless of mode. |
| **CONDITIONAL** | Loaded only when content meets a specific trigger condition | Agent evaluates the task and loads if trigger matches |
| **OPERATIONAL** | Management/measurement tool — not part of the content creation flow | Agent loads only for auditing or reporting tasks |

---

## Execution Behaviour

- **Fast Mode (Default)**: MANDATORY rules are applied via `general-guidelines/QUICK_REFERENCE.md` (compact version contains all three). CONDITIONAL files loaded if trigger matches.
- **Deep Audit Mode**: ALL three MANDATORY files loaded individually in full (Phase 1). CONDITIONAL files loaded if trigger matches (Phase 2).

---

## GGP Return to Main Flow

After loading the required files from this folder:

- **Deep Audit Mode (Phase 1)**: Return to SKILL.md Phase 2 (Channel + Conditionals).
- **On-demand reference**: Return to the task at hand.

**Load the files listed above as needed, then RETURN to SKILL.md.**

---

**Last Updated**: February 2026
**GGP Version**: 4.5
