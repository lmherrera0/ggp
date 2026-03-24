"use client";

import { useState } from "react";
import { copilotTemplate } from "./platformTemplates";

const AGENT_NAME = "GGP — Grounded Gate Protocol";

const AGENT_DESC =
  "Anti-hallucination framework for professional communications. Tags every factual claim with verification markers, runs an 8-dimension reputation risk check, and delivers transparent marked drafts before any clean output. Nothing passes unverified.";

const STARTERS = [
  "Draft a client update email about [project / topic] — apply GGP and flag any unverified claims",
  "Fact-check this paragraph and label everything confirmed, inferred, or missing: [paste text]",
  "Write a LinkedIn post about [topic] with full source verification and reputation check",
  "Run a Deep Audit on this draft — I need it submission-ready: [paste document section]",
  "Review this report excerpt for reputation and legal risks using Devil's Advocate",
  "Write a leadership briefing on [topic] — nothing unverified passes, flag all gaps",
];

const MARKERS = [
  {
    emoji: "🟢",
    name: "CONFIRMED",
    color: "bg-sage/10 border-sage/30",
    textColor: "text-sage",
    def: "Fact verified with a Tier 1–3 source. Full citation included.",
  },
  {
    emoji: "🔴",
    name: "GAP",
    color: "bg-wine/5 border-wine/20",
    textColor: "text-wine",
    def: "Critical information is missing. Declared openly — never hidden.",
  },
  {
    emoji: "🟡",
    name: "INFERENCE",
    color: "bg-almond/20 border-almond/50",
    textColor: "text-mahogany",
    def: "An assumption the AI is making. You decide to accept or reject it.",
  },
  {
    emoji: "⚪",
    name: "UNVERIFIED",
    color: "bg-pearl/30 border-pearl/50",
    textColor: "text-mahogany",
    def: "Could not verify, or source quality is insufficient.",
  },
  {
    emoji: "⚠️",
    name: "RISK",
    color: "bg-terracotta/5 border-terracotta/20",
    textColor: "text-terracotta",
    def: "Reputational, legal, or credibility concern. Review before sending.",
  },
];

const TIERS = [
  {
    label: "Tier 1 — Gold",
    name: "Authoritative",
    examples:
      "SharePoint/OneDrive docs, SEC filings, government data, peer-reviewed journals, audited financials, court documents",
    accentColor: "#B8963E",
    bg: "bg-almond/20",
  },
  {
    label: "Tier 2 — Solid",
    name: "Reputable secondary",
    examples:
      "FT, WSJ, Reuters, BBC, Gartner, McKinsey, Forrester, official industry reports",
    accentColor: "#7F8B72",
    bg: "bg-sage/10",
  },
  {
    label: "Tier 3 — General",
    name: "Cross-reference",
    examples:
      "General news, expert blogs, company marketing sites, Wikipedia (context only)",
    accentColor: "#C98B6E",
    bg: "bg-clay/5",
  },
  {
    label: "Tier 4 — Caution",
    name: "Never CONFIRMED",
    examples:
      "Forums, social media, anonymous blogs, commercial bias, outdated content >2 years",
    accentColor: "#4C2632",
    bg: "bg-wine/5",
  },
];

const DA_DIMENSIONS = [
  { num: "01", name: "Misinterpretation", question: "Could this be distorted or weaponised out of context?" },
  { num: "02", name: "Credibility", question: "Are all claims sourced and defensible?" },
  { num: "03", name: "Legal", question: "Any liability exposure — guarantees, defamation?" },
  { num: "04", name: "Reputation", question: "Does this align with your professional brand values?" },
  { num: "05", name: "Data Accuracy", question: "Are all statistics verified with methodology?" },
  { num: "06", name: "Hostile Reader", question: "Any exploitable weaknesses or cherry-picking?" },
  { num: "07", name: "Screenshot test", question: "Comfortable if shared without context?" },
  { num: "08", name: "CEO check", question: "Would senior leadership approve without question?" },
];

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/ggp";

function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handle = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button
      onClick={handle}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-bvvg font-sans text-xs font-semibold transition-colors duration-200 ${
        copied
          ? "bg-sage text-ivory"
          : "bg-terracotta text-ivory hover:bg-clay"
      }`}
    >
      {copied ? (
        <>
          <span>✓</span> Copied
        </>
      ) : (
        <>
          <span className="font-mono">⎘</span> {label}
        </>
      )}
    </button>
  );
}

function FieldBlock({
  label,
  hint,
  value,
  mono = false,
  tall = false,
  collapsible = false,
}: {
  label: string;
  hint?: string;
  value: string;
  mono?: boolean;
  tall?: boolean;
  collapsible?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="font-sans text-xs font-semibold text-wine">{label}</span>
        <div className="flex items-center gap-3">
          {hint && <span className="font-sans text-xs text-wine/50">{hint}</span>}
          <CopyButton text={value} />
        </div>
      </div>
      <div className="relative">
        <div
          className={`bg-ivory border border-almond rounded-bvvg p-3 ${
            mono ? "font-mono text-xs" : "font-sans text-sm"
          } text-wine/80 leading-relaxed whitespace-pre-wrap overflow-hidden transition-all duration-300 ${
            tall && !expanded ? "max-h-48" : "max-h-none"
          }`}
        >
          {value}
        </div>
        {tall && !expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-ivory to-transparent rounded-b-bvvg pointer-events-none" />
        )}
      </div>
      {tall && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1.5 font-sans text-xs font-semibold text-terracotta hover:text-clay transition-colors"
        >
          {expanded ? "▲ Collapse" : "▼ Show full instructions"}
        </button>
      )}
    </div>
  );
}

export default function CopilotPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-almond shadow-sm">
        <div className="section-container flex items-center justify-between h-14">
          <a
            href={BASE_PATH}
            className="font-sans text-sm font-semibold text-wine/70 hover:text-terracotta transition-colors flex items-center gap-1.5"
          >
            ← GGP Home
          </a>
          <span className="font-serif font-bold text-base text-wine hidden sm:block">
            GGP for Copilot
          </span>
          <div className="flex items-center gap-4">
            <a href="#setup" className="font-sans text-xs font-semibold text-wine/60 hover:text-terracotta transition-colors hidden sm:block">
              Setup
            </a>
            <a href="#setup" className="btn-primary text-sm px-4 py-2">
              Get the fields ↓
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-gap bg-wine text-ivory pt-24">
        <div className="section-container text-center">
          <p className="text-almond font-sans font-semibold text-sm tracking-widest uppercase mb-6">
            Microsoft 365 Copilot — Agent Builder
          </p>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-ivory leading-tight mb-6">
            Anti-hallucination.<br />
            <span className="text-clay italic">Built into Copilot.</span>
          </h1>
          <p className="text-xl text-almond max-w-2xl mx-auto mb-4">
            Grounded Gate Protocol forces your Copilot agent to be transparent about what it knows,
            what it is assuming, and what it is missing.
          </p>
          <p className="text-clay font-serif font-semibold text-lg italic mb-10">
            &ldquo;Nothing passes unverified.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#setup" className="btn-primary">
              Get the setup fields
            </a>
            <a
              href={BASE_PATH}
              className="inline-flex items-center px-6 py-3 border-2 border-almond text-almond font-sans font-semibold rounded-bvvg transition-colors duration-200 hover:bg-almond/10 text-base"
            >
              ← Back to GGP home
            </a>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section id="how-it-works" className="section-gap">
        <div className="section-container">
          <div className="bg-almond/20 rounded-bvvg p-8 sm:p-12">
            <p className="font-sans text-xs font-bold tracking-widest uppercase text-terracotta mb-3">
              Get started
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-wine mb-4">
              Four steps to your GGP agent
            </h2>
            <p className="text-wine/70 max-w-xl mb-10">
              Open Copilot Agent Builder in M365, copy the fields and download the knowledge files,
              then save and publish. Your GGP agent is ready in under ten minutes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  n: "1",
                  title: "Open Agent Builder",
                  desc: "In Microsoft 365 Copilot, open Agent Builder and create a new agent. You will see fields for Name, Description, Instructions, and Knowledge.",
                },
                {
                  n: "2",
                  title: "Copy instructions",
                  desc: "Paste the Name, Description, and Instructions fields directly from this page into Agent Builder.",
                },
                {
                  n: "3",
                  title: "Upload knowledge files",
                  desc: "Download the GGP knowledge base ZIP and upload the PDF files to your Copilot agent's Knowledge section.",
                },
                {
                  n: "4",
                  title: "Add starters & publish",
                  desc: "Copy the conversation starters, save your agent, and publish it. GGP is now active on every content task.",
                },
              ].map((s) => (
                <div key={s.n} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-terracotta text-ivory font-sans font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-wine mb-1">{s.title}</p>
                    <p className="font-sans text-sm text-wine/60 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-gap bg-almond/10">
        <div className="section-container">
          <p className="font-sans text-xs font-bold tracking-widest uppercase text-terracotta mb-3">
            What GGP does
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-wine mb-4">
            Three phases. Zero unverified claims.
          </h2>
          <p className="text-wine/70 max-w-xl mb-10">
            Every time you ask GGP to draft, review, or analyse content, it runs the same three-phase protocol automatically.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                phase: "Phase 01",
                icon: "🧯",
                title: "Verify",
                desc: "Tags every factual claim with a colour-coded marker. CONFIRMED facts get a full source citation. Inferences, gaps, and unverified claims are labelled before they reach you.",
                bg: "bg-sage/10",
              },
              {
                phase: "Phase 02",
                icon: "🛡️",
                title: "Protect",
                desc: "Runs an 8-dimension Devil's Advocate check on every significant piece of content. Flags reputational, legal, and credibility risks before the draft leaves your hands.",
                bg: "bg-wine/5",
              },
              {
                phase: "Phase 03",
                icon: "✅",
                title: "Deliver",
                desc: "Delivers a marked draft first. You decide on each flagged item — accept, rewrite, or provide a source. Only then does GGP produce the clean, publication-ready version.",
                bg: "bg-terracotta/5",
              },
            ].map((c) => (
              <div key={c.phase} className="card">
                <p className="font-sans text-xs font-bold tracking-widest uppercase text-wine/40 mb-3">
                  {c.phase}
                </p>
                <div className={`w-11 h-11 rounded-bvvg ${c.bg} flex items-center justify-center text-xl mb-4`}>
                  {c.icon}
                </div>
                <h3 className="font-serif font-semibold text-xl text-wine mb-2">{c.title}</h3>
                <p className="font-sans text-sm text-wine/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {[
              "22 channel templates",
              "7 analysis types",
              "4-tier source verification",
              "Anti-fatigue control",
              "Fast + Deep Audit modes",
              "SharePoint/OneDrive as Tier 1",
            ].map((tag) => (
              <span
                key={tag}
                className="font-sans text-xs font-semibold text-wine/60 bg-almond/30 border border-almond rounded-bvvg px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Markers */}
      <section id="markers" className="section-gap bg-wine text-ivory">
        <div className="section-container">
          <p className="font-sans text-xs font-bold tracking-widest uppercase text-almond mb-3">
            The GGP markers
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ivory mb-4">
            Every claim gets a flag.
          </h2>
          <p className="text-almond/80 max-w-xl mb-10">
            Instead of a confident draft that hides uncertainty, you get a transparent output where you can see exactly
            what is verified, assumed, or missing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {MARKERS.map((m) => (
              <div
                key={m.name}
                className="bg-white/5 border border-white/10 rounded-bvvg p-4 text-center hover:bg-white/10 transition-colors"
              >
                <span className="text-2xl block mb-2">{m.emoji}</span>
                <p className="font-sans text-xs font-bold tracking-widest uppercase text-ivory/50 mb-2">
                  {m.name}
                </p>
                <p className="font-sans text-xs text-ivory/70 leading-snug">{m.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source Tiers */}
      <section className="section-gap">
        <div className="section-container">
          <p className="font-sans text-xs font-bold tracking-widest uppercase text-terracotta mb-3">
            Source quality
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-wine mb-4">
            Not all citations are equal.
          </h2>
          <p className="text-wine/70 max-w-xl mb-10">
            GGP classifies every source by quality tier.
            In Copilot, your SharePoint and OneDrive documents count as Tier 1 when officially approved.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIERS.map((t) => (
              <div
                key={t.label}
                className={`relative overflow-hidden ${t.bg} border border-almond rounded-bvvg p-5`}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-bvvg"
                  style={{ backgroundColor: t.accentColor }}
                />
                <p className="font-sans text-xs font-bold tracking-wider uppercase mb-1" style={{ color: t.accentColor }}>
                  {t.label}
                </p>
                <p className="font-sans font-semibold text-sm text-wine mb-2">{t.name}</p>
                <p className="font-sans text-xs text-wine/60 leading-relaxed">{t.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devil's Advocate */}
      <section className="section-gap bg-almond/20">
        <div className="section-container">
          <p className="font-sans text-xs font-bold tracking-widest uppercase text-terracotta mb-3">
            Reputation protection
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-wine mb-4">
            Devil&apos;s Advocate — 8 dimensions, every time.
          </h2>
          <p className="text-wine/70 max-w-xl mb-10">
            Before anything is delivered, GGP scores content across 8 risk dimensions.
            A score of 9 or higher triggers a recommendation for human review before sending.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {DA_DIMENSIONS.map((d) => (
              <div key={d.num} className="card">
                <p className="font-serif text-2xl text-terracotta font-semibold mb-1">{d.num}</p>
                <p className="font-sans font-semibold text-sm text-wine mb-1">{d.name}</p>
                <p className="font-sans text-xs text-wine/60 leading-snug">{d.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration — Copilot Agent Builder */}
      <section id="setup" className="section-gap">
        <div className="section-container">
          <div className="bg-almond/20 rounded-bvvg p-8 sm:p-12">
            <p className="font-sans text-xs font-bold tracking-widest uppercase text-terracotta mb-3">
              Copilot Agent Builder
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-wine mb-3">
              Copy and paste. That&apos;s it.
            </h2>
            <p className="text-wine/70 max-w-xl mb-10">
              All fields are ready for M365 Copilot Agent Builder.
              Use the copy buttons, then upload the knowledge files so your agent can access the full GGP ruleset.
            </p>

            {/* Copilot chrome */}
            <div className="bg-ivory border border-almond rounded-bvvg shadow-md overflow-hidden">
              {/* Titlebar */}
              <div
                className="flex items-center gap-3 px-5 py-3.5"
                style={{ background: "linear-gradient(135deg, #0078D4 0%, #106EBE 100%)" }}
              >
                <div
                  className="w-6 h-6 rounded flex items-center justify-center font-sans font-bold text-xs text-white"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  ∞
                </div>
                <span className="font-sans text-sm font-semibold text-white">
                  M365 Copilot — Agent Builder
                </span>
                <span className="ml-auto font-sans text-xs text-white/60">
                  New agent configuration
                </span>
              </div>

              {/* Fields */}
              <div className="p-6 sm:p-8">
                <FieldBlock
                  label="Agent name"
                  hint="Short, recognisable name for your agent"
                  value={AGENT_NAME}
                />

                <FieldBlock
                  label="Description"
                  hint="Shown in agent discovery"
                  value={AGENT_DESC}
                />

                <FieldBlock
                  label="Instructions"
                  hint="Full GGP system prompt"
                  value={copilotTemplate}
                  mono
                  tall
                  collapsible
                />

                {/* Knowledge files */}
                <div className="mb-6 p-4 bg-wine/5 border border-wine/15 rounded-bvvg">
                  <p className="font-sans text-xs font-semibold text-wine mb-1">
                    Knowledge files
                  </p>
                  <p className="font-sans text-xs text-wine/60 mb-4 leading-relaxed">
                    Download the GGP knowledge base and upload the PDF files to your agent&apos;s
                    Knowledge section in Copilot Agent Builder. These contain the full etiquette rules,
                    high-risk language patterns, channel templates, and data integrity standards.
                  </p>
                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = `${BASE_PATH}/ggp-knowledge-base.zip`;
                      link.download = "ggp-knowledge-base.zip";
                      link.click();
                    }}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    ↓ Download knowledge base ZIP
                  </button>
                  <p className="font-sans text-xs text-wine/40 mt-2">
                    Includes: GGP-Core-Rules, GGP-About, GGP-Channel-Templates, GGP-Analysis-Templates
                  </p>
                </div>

                {/* Conversation Starters */}
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-sans text-xs font-semibold text-wine">Conversation starters</span>
                    <span className="font-sans text-xs text-wine/50">Up to 6 prompts shown in the chat window</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {STARTERS.map((s, i) => (
                      <div key={i} className="flex items-start gap-2 bg-ivory border border-almond rounded-bvvg p-3">
                        <p className="flex-1 font-sans text-xs text-wine/70 leading-relaxed">{s}</p>
                        <CopyButton text={s} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Output */}
      <section id="sample" className="section-gap bg-almond/10">
        <div className="section-container">
          <p className="font-sans text-xs font-bold tracking-widest uppercase text-terracotta mb-3">
            Sample output
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-wine mb-4">
            What a marked draft looks like.
          </h2>
          <p className="text-wine/70 max-w-xl mb-10">
            Every non-confirmed item is visible with decision options, so you can resolve each one
            before the clean version is produced.
          </p>

          <div className="card max-w-3xl">
            <p className="font-sans text-xs font-bold tracking-widest uppercase text-wine/40 mb-4 pb-3 border-b border-almond">
              GGP Marked Draft — Client Update Email — Fast Mode
            </p>
            <div className="font-sans text-sm text-wine/80 leading-relaxed space-y-3">
              <p>Subject: Project update — delivery progress and next steps</p>
              <p>Hi [Client Name],</p>
              <p>
                I am writing to update you on progress since our last session. The data migration phase
                completed on schedule{" "}
                <span className="inline-flex items-center gap-1 font-semibold text-xs bg-sage/10 border border-sage/30 text-sage rounded px-2 py-0.5">
                  🟢 CONFIRMED
                </span>{" "}
                and all validation checks passed.
              </p>
              <p>
                Performance testing indicates a{" "}
                <strong>34% reduction in query response time</strong>{" "}
                <span className="inline-flex items-center gap-1 font-semibold text-xs bg-almond/30 border border-almond text-mahogany rounded px-2 py-0.5">
                  🟡 INFERENCE: I1
                </span>{" "}
                compared to the baseline environment.
              </p>
              <div className="bg-wine/5 border-l-2 border-almond ml-2 pl-4 py-3 rounded-r-bvvg">
                <p className="font-sans text-xs italic text-wine/60 leading-relaxed">
                  <strong className="not-italic text-wine/80">I1 — Why flagged:</strong>{" "}
                  The 34% figure is derived from internal test results that have not yet been validated against
                  production load conditions. If performance differs in production, this claim could undermine
                  client confidence and create expectation management issues at go-live.
                </p>
                <p className="font-sans text-xs text-wine/50 mt-2">
                  <strong className="text-terracotta">a)</strong> Accept &nbsp;
                  <strong className="text-terracotta">b)</strong> Rewrite as GAP &nbsp;
                  <strong className="text-terracotta">c)</strong> Provide source &nbsp;
                  <strong className="text-terracotta">d)</strong> Remove &nbsp;
                  <strong className="text-terracotta">e)</strong> Your input
                </p>
              </div>
              <p>
                User acceptance testing is scheduled for the week of{" "}
                <span className="inline-flex items-center gap-1 font-semibold text-xs bg-wine/5 border border-wine/20 text-wine rounded px-2 py-0.5">
                  🔴 GAP: G1
                </span>{" "}
                and the go-live date remains on track.
              </p>
              <div className="bg-wine/5 border-l-2 border-almond ml-2 pl-4 py-3 rounded-r-bvvg">
                <p className="font-sans text-xs italic text-wine/60 leading-relaxed">
                  <strong className="not-italic text-wine/80">G1 — Why flagged:</strong>{" "}
                  The UAT week has not been provided. Sending this email without the date creates a vague,
                  uncommitted impression and may prompt follow-up requests for clarification.
                </p>
                <p className="font-sans text-xs text-wine/50 mt-2">
                  <strong className="text-terracotta">a)</strong> Provide the confirmed UAT week &nbsp;
                  <strong className="text-terracotta">b)</strong> Mark as pending &nbsp;
                  <strong className="text-terracotta">c)</strong> Remove reference &nbsp;
                  <strong className="text-terracotta">d)</strong> Your input
                </p>
              </div>
            </div>

            <div className="mt-6 bg-almond/20 rounded-bvvg p-4">
              <p className="font-sans text-xs font-bold tracking-widest uppercase text-wine/40 mb-3">
                Decision summary
              </p>
              <table className="w-full font-sans text-xs text-wine/80">
                <thead>
                  <tr className="border-b border-almond">
                    <th className="text-left font-semibold py-1.5 pr-4">Code</th>
                    <th className="text-left font-semibold py-1.5 pr-4">Type</th>
                    <th className="text-left font-semibold py-1.5">Decision</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-almond/40">
                    <td className="py-1.5 pr-4 font-mono">I1</td>
                    <td className="py-1.5 pr-4">INFERENCE</td>
                    <td className="py-1.5 text-wine/30 italic">___</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 pr-4 font-mono">G1</td>
                    <td className="py-1.5 pr-4">GAP</td>
                    <td className="py-1.5 text-wine/30 italic">___</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-sans text-xs text-wine/40 italic mt-3">
                Reply with: I1: a, G1: a (or e / your own answer). Clean output follows once all decisions are confirmed.
              </p>
              <div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-almond font-sans text-xs text-wine/50">
                <span>🟢 1 confirmed</span>
                <span>🟡 1 inference</span>
                <span>🔴 1 gap</span>
                <span className="text-sage font-semibold">GGP 7/8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-almond py-10">
        <div className="section-container flex flex-col items-center gap-3 text-center">
          <p className="font-serif font-bold text-wine text-base">GGP — Grounded Gate Protocol</p>
          <p className="font-sans text-sm text-wine/50">
            v4.5 · Anti-hallucination framework for professional communications
          </p>
          <div className="flex gap-6 font-sans text-xs font-semibold text-wine/50">
            <a href={BASE_PATH} className="hover:text-terracotta transition-colors">← GGP Home</a>
            <a
              href="https://github.com/lmherrera0/ggp-skill"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
