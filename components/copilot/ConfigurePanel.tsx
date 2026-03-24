"use client";

import { copilotTemplate } from "../platformTemplates";
import FieldRow from "./shared/FieldRow";
import StarterCard from "./shared/StarterCard";
import { AGENT_NAME, AGENT_DESC, STARTERS } from "./data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/ggp";

const KNOWLEDGE_FILES = [
  { name: "GGP-Core-Rules.pdf", desc: "Source tiers, markers, prohibited language, Devil's Advocate" },
  { name: "GGP-About.pdf", desc: "Framework overview, principles, and mode selection" },
  { name: "GGP-Channel-Templates.pdf", desc: "22 channel formats — email, LinkedIn, reports, and more" },
  { name: "GGP-Analysis-Templates.pdf", desc: "7 consulting deliverables — SWOT, gap analysis, benchmarks" },
];

const SETUP_STEPS = [
  { n: "1", title: "Open Agent Builder", desc: "In M365 Copilot, open Agent Builder and create a new agent." },
  { n: "2", title: "Copy each field", desc: "Paste the Name, Description, Instructions, and Starters from the sections below." },
  { n: "3", title: "Upload files & publish", desc: "Download the knowledge base ZIP, upload the PDFs, and publish your agent." },
];

export default function ConfigurePanel() {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = `${BASE_PATH}/ggp-knowledge-base.zip`;
    a.download = "ggp-knowledge-base.zip";
    a.click();
  };

  return (
    <div>
      {/* Setup steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {SETUP_STEPS.map((s) => (
          <div key={s.n} className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-terracotta text-ivory font-sans font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
              {s.n}
            </div>
            <div>
              <p className="font-sans font-semibold text-sm text-wine mb-0.5">{s.title}</p>
              <p className="font-sans text-xs text-wine/60 leading-snug">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Copilot chrome */}
      <div className="border border-almond rounded-bvvg shadow-md overflow-hidden">

        {/* Titlebar */}
        <div
          className="flex items-center gap-3 px-5 py-3"
          style={{ background: "linear-gradient(135deg,#0078D4 0%,#106EBE 100%)" }}
        >
          <div
            className="w-6 h-6 rounded flex items-center justify-center font-sans font-bold text-xs text-white"
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            ∞
          </div>
          <span className="font-sans text-sm font-semibold text-white">
            M365 Copilot — Agent Builder
          </span>
          <span className="ml-auto font-sans text-[11px] text-white/55">
            New agent configuration
          </span>
        </div>

        {/* Chrome inner tabs */}
        <div className="flex border-b border-almond bg-[#F3F6FB] px-4 gap-1">
          {["Details", "Instructions", "Starter Prompts"].map((t, i) => (
            <span
              key={t}
              className={`font-sans text-xs font-semibold px-3 py-2.5 border-b-2 ${
                i === 0
                  ? "border-[#0078D4] text-[#0078D4]"
                  : "border-transparent text-wine/40 cursor-default"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="p-6 sm:p-8 bg-ivory space-y-4">

          {/* 01 Identity */}
          <details open className="group border border-almond rounded-bvvg overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/30 transition-colors list-none">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-wine/40 font-semibold">01</span>
                <span className="font-sans text-sm font-semibold text-wine">Identity</span>
              </div>
              <span className="font-sans text-xs text-wine/30 group-open:rotate-180 transition-transform inline-block">▼</span>
            </summary>
            <div className="px-4 py-4 border-t border-almond">
              <FieldRow label="Agent name" value={AGENT_NAME} />
              <FieldRow label="Description" value={AGENT_DESC} />
            </div>
          </details>

          {/* 02 Instructions */}
          <details open className="group border border-almond rounded-bvvg overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/30 transition-colors list-none">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-wine/40 font-semibold">02</span>
                <span className="font-sans text-sm font-semibold text-wine">Instructions</span>
              </div>
              <span className="font-sans text-xs text-wine/30 group-open:rotate-180 transition-transform inline-block">▼</span>
            </summary>
            <div className="px-4 py-4 border-t border-almond">
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
          <details open className="group border border-almond rounded-bvvg overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/30 transition-colors list-none">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-wine/40 font-semibold">03</span>
                <span className="font-sans text-sm font-semibold text-wine">Knowledge Files</span>
              </div>
              <span className="font-sans text-xs text-wine/30 group-open:rotate-180 transition-transform inline-block">▼</span>
            </summary>
            <div className="px-4 py-4 border-t border-almond">
              <p className="font-sans text-xs text-wine/60 mb-4 leading-relaxed">
                Download the GGP knowledge base and upload the PDF files to the{" "}
                <strong className="text-wine">Knowledge</strong> section of your Copilot agent.
                These contain the full etiquette rules, high-risk language patterns, channel
                templates, and data integrity standards that GGP references during every task.
              </p>
              <div className="space-y-2 mb-5">
                {KNOWLEDGE_FILES.map((f) => (
                  <div key={f.name} className="flex items-start gap-3 text-xs">
                    <span className="font-mono font-semibold text-terracotta mt-0.5 flex-shrink-0 text-[10px]">
                      PDF
                    </span>
                    <div>
                      <p className="font-semibold text-wine">{f.name}</p>
                      <p className="text-wine/50">{f.desc}</p>
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
          <details open className="group border border-almond rounded-bvvg overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/30 transition-colors list-none">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-wine/40 font-semibold">04</span>
                <span className="font-sans text-sm font-semibold text-wine">Starter Prompts</span>
                <span className="font-sans text-[10px] text-wine/30">(6 prompts)</span>
              </div>
              <span className="font-sans text-xs text-wine/30 group-open:rotate-180 transition-transform inline-block">▼</span>
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
