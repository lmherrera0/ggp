# Platforms — Reference Index

Implementation guides for deploying GGP on different AI platforms. Each file contains a platform-specific template adapted to the platform's capabilities.

---

## Files

| File | Classification | Platform | When to Load |
|------|---------------|----------|-------------|
| `claude.md` | **CONDITIONAL** | Claude Projects / Claude.ai | When deploying GGP to Claude Projects. Uses native XML tags. |
| `chatgpt.md` | **CONDITIONAL** | ChatGPT / Custom GPTs | When deploying GGP to ChatGPT. Adapted to OpenAI's instruction format. |
| `copilot.md` | **CONDITIONAL** | Microsoft Copilot | When deploying GGP to Copilot. Adapted to Microsoft's format. |
| `google-gems.md` | **CONDITIONAL** | Google Gems | When deploying GGP to Google Gems. Adapted to Google's format. |

---

## Classification Key

| Label | Meaning | Agent Behaviour |
|-------|---------|----------------|
| **CONDITIONAL** | Loaded only when the user requests cross-platform deployment to the specific platform | Agent loads the matching platform file only |

---

## Usage Note

These files are NOT needed for normal GGP execution within Claude Code or Cowork. They are templates for users who want to replicate GGP behaviour on other AI platforms.

---

**Last Updated**: 2026-02-20
**GGP Version**: 4.5
