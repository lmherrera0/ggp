import type { Starter } from "./shared/StarterCard";

export const AGENT_NAME = "GGP — Grounded Gate Protocol";

export const AGENT_DESC =
  "Anti-hallucination framework for professional communications. Tags every factual claim with verification markers, runs an 8-dimension reputation risk check, and delivers transparent marked drafts before any clean output. Nothing passes unverified.";

export const STARTERS: Starter[] = [
  {
    title: "Verify & Draft",
    message:
      "Draft a client update email about [project / topic] — apply GGP and flag any unverified claims before delivering.",
  },
  {
    title: "Fact-Check",
    message:
      "Fact-check this paragraph and label everything confirmed, inferred, or missing: [paste text here]",
  },
  {
    title: "LinkedIn Post",
    message:
      "Write a LinkedIn post about [topic] with full source verification and a reputation risk check.",
  },
  {
    title: "Deep Audit",
    message:
      "Run a Deep Audit on this draft — I need it submission-ready: [paste document section here]",
  },
  {
    title: "Devil's Advocate",
    message:
      "Review this report excerpt for reputation and legal risks using the full Devil's Advocate protocol.",
  },
  {
    title: "Leadership Briefing",
    message:
      "Write a leadership briefing on [topic] — nothing unverified passes, flag all gaps with decision options.",
  },
];

export const PHASES = [
  {
    num: "01",
    label: "Verify",
    icon: "🧯",
    desc: "Tags every factual claim before it reaches you.",
    bullets: [
      "🟢 CONFIRMED — verified with Tier 1–3 source + full citation",
      "🔴 GAP — missing information declared openly, never filled",
      "🟡 INFERENCE — assumption made explicit for your decision",
      "⚪ UNVERIFIED — could not verify or source quality too low",
      "⚠️ RISK — reputational, legal, or credibility concern flagged",
    ],
  },
  {
    num: "02",
    label: "Protect",
    icon: "🛡️",
    desc: "Runs an 8-dimension risk check on every draft.",
    bullets: [
      "Misinterpretation — could this be weaponised out of context?",
      "Credibility — are all claims sourced and defensible?",
      "Legal — any liability exposure?",
      "Reputation — does this align with your brand values?",
      "Data Accuracy — verified statistics with methodology?",
      "Hostile Reader — any exploitable weaknesses?",
      "Screenshot test — comfortable if shared without context?",
      "CEO check — would leadership approve without question?",
    ],
  },
  {
    num: "03",
    label: "Deliver",
    icon: "✅",
    desc: "Marked draft first. Clean output only after you decide.",
    bullets: [
      "Every flagged item shows a unique code (I1, G1, R1…)",
      "Inline decision options with strategic context for each",
      "Decision summary table — reply with your choices",
      "Full reference audit with tier, URL, date for every source",
      "Clean output produced only after your confirmation",
    ],
  },
];

export const MARKERS = [
  { emoji: "🟢", name: "CONFIRMED", def: "Fact verified with Tier 1–3 source. Full citation included." },
  { emoji: "🔴", name: "GAP", def: "Critical information is missing. Declared openly — never hidden." },
  { emoji: "🟡", name: "INFERENCE", def: "An assumption the AI is making. You decide to accept or reject it." },
  { emoji: "⚪", name: "UNVERIFIED", def: "Could not verify, or source quality is too low." },
  { emoji: "⚠️", name: "RISK", def: "Reputational, legal, or credibility concern. Review before sending." },
];

export const PLATFORMS_META = [
  {
    id: "copilot-studio",
    label: "Copilot Studio",
    subtitle: "Agent Builder",
    icon: "∞",
    charLimit: 8000,
    charLimitNote: "8,000-character instruction limit in Copilot Studio Agent Builder",
    titleStyle: { background: "linear-gradient(135deg,#0078D4 0%,#106EBE 100%)" },
    titleTextColor: "text-white",
    knowledgeLabel: "SharePoint / OneDrive",
    knowledgeNote:
      "Upload the 4 PDFs to the Knowledge section in Copilot Studio. SharePoint and OneDrive documents count as Tier 1 sources.",
    tip: "OBJECTIVE-first format. XML tags (<system-constraint>, <execution-logic>, <rule>) and Python pseudocode are fully supported. YAML max 3 levels deep.",
    showStarterPrompts: true,
    showIdentity: true,
    knowledgeFiles: [
      { name: "GGP-Core-Rules.pdf",         desc: "Source tiers, markers, prohibited language, Devil's Advocate" },
      { name: "GGP-About.pdf",              desc: "Framework overview, principles, and mode selection" },
      { name: "GGP-Channel-Templates.pdf",  desc: "22 channel formats — email, LinkedIn, reports, and more" },
      { name: "GGP-Analysis-Templates.pdf", desc: "7 consulting deliverables — SWOT, gap analysis, benchmarks" },
    ],
  },
  {
    id: "copilot-m365",
    label: "M365 Copilot",
    subtitle: "Agent Builder (Teams / Web)",
    icon: "∞",
    charLimit: 8000,
    charLimitNote: "8,000-character instruction limit in M365 Copilot Agent Builder",
    titleStyle: { background: "linear-gradient(135deg,#0078D4 0%,#106EBE 100%)" },
    titleTextColor: "text-white",
    knowledgeLabel: "SharePoint / OneDrive",
    knowledgeNote:
      "Upload the 4 PDFs to the Knowledge section. SharePoint and OneDrive documents count as Tier 1 sources.",
    tip: "Markdown-only format — no XML tags, no YAML, no pseudocode. Use ## headers and numbered steps. This is the simpler Agent Builder inside Teams or copilot.microsoft.com.",
    showStarterPrompts: true,
    showIdentity: true,
    knowledgeFiles: [
      { name: "GGP-Core-Rules.pdf",         desc: "Source tiers, markers, prohibited language, Devil's Advocate" },
      { name: "GGP-About.pdf",              desc: "Framework overview, principles, and mode selection" },
      { name: "GGP-Channel-Templates.pdf",  desc: "22 channel formats — email, LinkedIn, reports, and more" },
      { name: "GGP-Analysis-Templates.pdf", desc: "7 consulting deliverables — SWOT, gap analysis, benchmarks" },
    ],
  },
  {
    id: "chatgpt",
    label: "ChatGPT",
    subtitle: "GPT Builder",
    icon: "◯",
    charLimit: 8000,
    charLimitNote: "~8,000-character instruction limit in GPT Builder",
    titleStyle: { background: "#212121" },
    titleTextColor: "text-white",
    knowledgeLabel: "Knowledge Files",
    knowledgeNote:
      "Upload up to 20 files as GPT knowledge. Enables web browsing to verify claims before marking CONFIRMED.",
    tip: "Markdown format — no XML tags. Numbered steps preferred. ChatGPT can browse the web — include verify instruction.",
    showStarterPrompts: false,
    showIdentity: false,
    knowledgeFiles: [
      { name: "GGP-Core-Rules.pdf",         desc: "Full source tier rules and high-risk language patterns" },
      { name: "GGP-About.pdf",              desc: "Framework overview and etiquette guidelines" },
      { name: "GGP-Channel-Templates.pdf",  desc: "22 channel formats for professional communications" },
      { name: "GGP-Analysis-Templates.pdf", desc: "7 analysis templates — SWOT, gap, benchmarks" },
    ],
  },
  {
    id: "claude",
    label: "Claude",
    subtitle: "Project Instructions",
    icon: "◈",
    charLimit: 999999,
    charLimitNote: "No character limit — Claude Projects allow unlimited instructions",
    titleStyle: { background: "linear-gradient(135deg,#CC785C 0%,#B86B50 100%)" },
    titleTextColor: "text-white",
    knowledgeLabel: "Project Files",
    knowledgeNote:
      "Attach files directly to the Project. Claude supports XML tags natively — the template uses them for structured constraints.",
    tip: "XML tags natively supported. No character limit — full GGP with all sections. Add files to the project as authoritative references.",
    showStarterPrompts: false,
    showIdentity: false,
    knowledgeFiles: [
      { name: "GGP-Core-Rules.pdf",         desc: "Source tiers, markers, and verification protocol" },
      { name: "GGP-About.pdf",              desc: "Framework overview and mode selection" },
      { name: "GGP-Channel-Templates.pdf",  desc: "22 channel format templates" },
      { name: "GGP-Analysis-Templates.pdf", desc: "7 consulting analysis deliverables" },
    ],
  },
  {
    id: "gems",
    label: "Google Gems",
    subtitle: "Gem Instructions",
    icon: "◆",
    charLimit: 7000,
    charLimitNote: "Short instruction limit — condensed template required",
    titleStyle: { background: "linear-gradient(135deg,#1A73E8 0%,#1558B0 100%)" },
    titleTextColor: "text-white",
    knowledgeLabel: "Google Drive Files",
    knowledgeNote:
      "Attach files from Google Drive. Drive documents count as Tier 1 sources — reference them by name in the template.",
    tip: "Plain text only — no XML, YAML, or pseudocode. Short sentences. Condensed format is intentional.",
    showStarterPrompts: false,
    showIdentity: false,
    knowledgeFiles: [
      { name: "GGP-Core-Rules.pdf",         desc: "Source tiers and verification rules" },
      { name: "GGP-About.pdf",              desc: "Framework overview" },
      { name: "GGP-Channel-Templates.pdf",  desc: "Channel formats for professional comms" },
      { name: "GGP-Analysis-Templates.pdf", desc: "Analysis templates for consulting deliverables" },
    ],
  },
] as const;

export type PlatformId = (typeof PLATFORMS_META)[number]["id"];

export const TIERS = [
  {
    tier: "T1",
    label: "Gold — Authoritative",
    trust: "High",
    examples:
      "SharePoint/OneDrive docs, SEC filings, government data, peer-reviewed journals, audited financials",
    barClass: "bg-[#B8963E]",
    widthClass: "w-full",
  },
  {
    tier: "T2",
    label: "Solid — Reputable",
    trust: "Good",
    examples:
      "FT, WSJ, Reuters, BBC, Gartner, McKinsey, Forrester, official industry reports",
    barClass: "bg-sage",
    widthClass: "w-3/4",
  },
  {
    tier: "T3",
    label: "General — Cross-reference",
    trust: "Moderate",
    examples:
      "General news, expert blogs, company marketing, Wikipedia (context only)",
    barClass: "bg-clay",
    widthClass: "w-1/2",
  },
  {
    tier: "T4",
    label: "Caution — Never CONFIRMED",
    trust: "Low",
    examples:
      "Forums, social media, anonymous blogs, commercial bias, outdated >2yr",
    barClass: "bg-wine/40",
    widthClass: "w-1/4",
  },
];
