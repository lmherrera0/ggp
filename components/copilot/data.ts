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
