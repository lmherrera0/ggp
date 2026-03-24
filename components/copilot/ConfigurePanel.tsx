"use client";

import { copilotTemplate } from "../platformTemplates";
import FieldRow from "./shared/FieldRow";
import StarterCard from "./shared/StarterCard";
import { AGENT_NAME, AGENT_DESC, STARTERS } from "./data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/ggp";

const KNOWLEDGE_FILES = [
  { name: "GGP-Core-Rules.pdf",         desc: "Source tiers, markers, prohibited language, Devil's Advocate" },
  { name: "GGP-About.pdf",              desc: "Framework overview, principles, and mode selection" },
  { name: "GGP-Channel-Templates.pdf",  desc: "22 channel formats — email, LinkedIn, reports, and more" },
  { name: "GGP-Analysis-Templates.pdf", desc: "7 consulting deliverables — SWOT, gap analysis, benchmarks" },
];

const SETUP_STEPS = [
  { n: "1", title: "Open Agent Builder",    desc: "In M365 Copilot, open Agent Builder and create a new agent." },
  { n: "2", title: "Copy each field",       desc: "Paste the Name, Description, Instructions, and Starters from the sections below." },
  { n: "3", title: "Upload files & publish", desc: "Download the knowledge base ZIP, upload the PDFs, and publish your agent." },
];

export default function ConfigurePanel() {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = `${BASE_PATH}/ggp-knowledge-base.zip`;
    a.download = "ggp-knowledge-base.zip";
    a.click();
  };

  const charCount = copilotTemplate.length;
  const charLimit = 8000;
  const charPct   = Math.min(100, (charCount / charLimit) * 100);
  const barColor  = charPct > 90 ? "bg-terracotta" : charPct > 75 ? "bg-clay" : "bg-sage";

  return (
    <div className="max-w-3xl">

      {/* Setup steps with connector */}
      <div className="relative mb-10">
        {/* Connector line */}
        <div
          className="absolute top-4 left-4 h-[calc(100%-2rem)] w-px hidden sm:block"
          style={{ background: "linear-gradient(to bottom, rgba(167,82,65,0.3), transparent)" }}
        />
        <div className="space-y-6">
          {SETUP_STEPS.map((s, i) => (
            <div key={s.n} className="relative flex gap-5 items-start sm:pl-2">
              {/* Number bubble */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-terracotta text-ivory font-sans font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                {s.n}
              </div>
              <div className="pt-0.5">
                <p className="font-sans font-semibold text-sm text-wine mb-0.5">{s.title}</p>
                <p className="font-sans text-xs text-wine/55 leading-snug">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copilot Agent Builder chrome */}
      <div className="rounded-xl overflow-hidden shadow-lg border border-almond/70">

        {/* M365 Titlebar */}
        <div
          className="flex items-center gap-3 px-5 py-3"
          style={{ background: "linear-gradient(135deg,#0078D4 0%,#106EBE 100%)" }}
        >
          <div
            className="w-6 h-6 rounded flex items-center justify-center font-serif font-bold text-xs text-white select-none"
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            ∞
          </div>
          <span className="font-sans text-sm font-semibold text-white tracking-tight">
            M365 Copilot — Agent Builder
          </span>
          <span className="ml-auto font-sans text-[11px] text-white/50">New agent</span>
        </div>

        {/* Inner chrome tab row */}
        <div className="flex border-b border-almond bg-[#F3F6FB] px-4 gap-0.5">
          {["Details", "Instructions", "Starter Prompts"].map((t, i) => (
            <span
              key={t}
              className={`font-sans text-xs font-semibold px-4 py-2.5 border-b-2 transition-colors ${
                i === 0
                  ? "border-[#0078D4] text-[#0078D4]"
                  : "border-transparent text-wine/35 cursor-default"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Accordion sections */}
        <div className="p-6 sm:p-8 bg-ivory space-y-3">

          {/* 01 Identity */}
          <details open className="group border border-almond rounded-lg overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/35 transition-colors list-none select-none">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] text-wine/35 font-bold tabular-nums">01</span>
                <span className="font-sans text-sm font-semibold text-wine">Identity</span>
              </div>
              <span className="font-mono text-[10px] text-wine/25 group-open:rotate-180 transition-transform inline-block leading-none">▾</span>
            </summary>
            <div className="px-4 py-4 border-t border-almond space-y-1">
              <FieldRow label="Agent name"  value={AGENT_NAME} />
              <FieldRow label="Description" value={AGENT_DESC} />
            </div>
          </details>

          {/* 02 Instructions */}
          <details open className="group border border-almond rounded-lg overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/35 transition-colors list-none select-none">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] text-wine/35 font-bold tabular-nums">02</span>
                <span className="font-sans text-sm font-semibold text-wine">Instructions</span>
              </div>
              <span className="font-mono text-[10px] text-wine/25 group-open:rotate-180 transition-transform inline-block leading-none">▾</span>
            </summary>
            <div className="px-4 py-4 border-t border-almond">

              {/* Character budget bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="font-sans text-[10px] text-wine/40 font-semibold tracking-wider uppercase">Character budget</p>
                  <p className="font-mono text-[11px] text-wine/50">
                    <span className={charPct > 90 ? "text-terracotta font-bold" : ""}>{charCount.toLocaleString()}</span>
                    <span className="text-wine/25"> / {charLimit.toLocaleString()}</span>
                  </p>
                </div>
                <div className="h-1.5 w-full bg-almond/60 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${barColor}`}
                    style={{ width: `${charPct}%` }}
                  />
                </div>
                <p className="font-sans text-[10px] text-wine/35 mt-1.5 leading-snug">
                  {charLimit - charCount > 0
                    ? `${(charLimit - charCount).toLocaleString()} characters remaining within M365 Copilot Agent Builder's 8,000-character limit.`
                    : "At character limit — review before pasting."}
                </p>
              </div>

              <FieldRow
                label="Paste into the Instructions field"
                value={copilotTemplate}
                mono
                expandable
                charLimit={8000}
              />
            </div>
          </details>

          {/* 03 Knowledge files */}
          <details open className="group border border-almond rounded-lg overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/35 transition-colors list-none select-none">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] text-wine/35 font-bold tabular-nums">03</span>
                <span className="font-sans text-sm font-semibold text-wine">Knowledge Files</span>
                <span className="font-sans text-[10px] text-wine/30 ml-1">({KNOWLEDGE_FILES.length} PDFs)</span>
              </div>
              <span className="font-mono text-[10px] text-wine/25 group-open:rotate-180 transition-transform inline-block leading-none">▾</span>
            </summary>
            <div className="px-4 py-4 border-t border-almond">
              <p className="font-sans text-xs text-wine/55 mb-5 leading-relaxed max-w-lg">
                Download the GGP knowledge base and upload the PDF files to the{" "}
                <strong className="text-wine font-semibold">Knowledge</strong> section of your Copilot agent.
                These contain the full etiquette rules, high-risk language patterns, channel templates,
                and data integrity standards that GGP references during every task.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {KNOWLEDGE_FILES.map((f) => (
                  <div key={f.name} className="flex items-start gap-3 rounded-lg border border-almond px-3 py-2.5 bg-almond/10">
                    <span className="font-mono font-bold text-terracotta text-[9px] mt-0.5 flex-shrink-0 tracking-wider border border-terracotta/30 rounded px-1 py-0.5">
                      PDF
                    </span>
                    <div>
                      <p className="font-sans font-semibold text-wine text-xs">{f.name}</p>
                      <p className="font-sans text-[10px] text-wine/45 leading-snug mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={handleDownload} className="btn-primary text-sm px-5 py-2.5">
                ↓ Download knowledge base ZIP
              </button>
            </div>
          </details>

          {/* 04 Starter prompts */}
          <details open className="group border border-almond rounded-lg overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/35 transition-colors list-none select-none">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] text-wine/35 font-bold tabular-nums">04</span>
                <span className="font-sans text-sm font-semibold text-wine">Starter Prompts</span>
                <span className="font-sans text-[10px] text-wine/30 ml-1">({STARTERS.length} prompts)</span>
              </div>
              <span className="font-mono text-[10px] text-wine/25 group-open:rotate-180 transition-transform inline-block leading-none">▾</span>
            </summary>
            <div className="px-4 py-4 border-t border-almond space-y-2">
              {STARTERS.map((s, i) => (
                <StarterCard key={i} starter={s} index={i} />
              ))}
            </div>
          </details>

        </div>
      </div>

    </div>
  );
}
