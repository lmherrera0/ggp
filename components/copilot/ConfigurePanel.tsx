"use client";

import { useState } from "react";
import {
  copilotTemplate,
  copilotM365Template,
  chatgptTemplate,
  claudeTemplate,
  googleGemsTemplate,
} from "../platformTemplates";
import FieldRow from "./shared/FieldRow";
import StarterCard from "./shared/StarterCard";
import { AGENT_NAME, AGENT_DESC, STARTERS, PLATFORMS_META, type PlatformId } from "./data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/ggp";

const PLATFORM_TEMPLATES: Record<PlatformId, string> = {
  "copilot-studio": copilotTemplate,
  "copilot-m365":   copilotM365Template,
  chatgpt:          chatgptTemplate,
  claude:           claudeTemplate,
  gems:             googleGemsTemplate,
};

const SETUP_STEPS = [
  { n: "1", title: "Open your builder",    desc: "Open the agent / GPT / Gem / Project builder for your chosen platform." },
  { n: "2", title: "Copy each field",       desc: "Select a platform below, then paste the Instructions and Starters." },
  { n: "3", title: "Upload files & publish", desc: "Upload the 4 GGP knowledge PDFs and publish your agent." },
];

function CharBar({ count, limit }: { count: number; limit: number }) {
  if (limit > 100000) {
    return (
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="font-sans text-[10px] text-wine/40 font-semibold tracking-wider uppercase">Character budget</p>
          <p className="font-mono text-[11px] text-wine/50">
            <span className="text-sage font-bold">{count.toLocaleString()}</span>
            <span className="text-wine/25"> chars</span>
            <span className="ml-1.5 text-sage text-[10px]">· no limit</span>
          </p>
        </div>
        <div className="h-1.5 w-full bg-sage/25 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-sage" style={{ width: "35%" }} />
        </div>
        <p className="font-sans text-[10px] text-wine/35 mt-1.5">No instruction limit on this platform.</p>
      </div>
    );
  }

  const pct      = Math.min(100, (count / limit) * 100);
  const barColor = pct > 90 ? "bg-terracotta" : pct > 75 ? "bg-clay" : "bg-sage";
  const remaining = limit - count;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <p className="font-sans text-[10px] text-wine/40 font-semibold tracking-wider uppercase">Character budget</p>
        <p className="font-mono text-[11px] text-wine/50">
          <span className={pct > 90 ? "text-terracotta font-bold" : ""}>{count.toLocaleString()}</span>
          <span className="text-wine/25"> / {limit.toLocaleString()}</span>
        </p>
      </div>
      <div className="h-1.5 w-full bg-almond/60 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all ${barColor}`} style={{ width: `${pct}%` }} />
      </div>
      <p className="font-sans text-[10px] text-wine/35 mt-1.5 leading-snug">
        {remaining > 0
          ? `${remaining.toLocaleString()} characters remaining within the platform limit.`
          : "At character limit — review before pasting."}
      </p>
    </div>
  );
}

export default function ConfigurePanel() {
  const [activeId, setActiveId] = useState<PlatformId>("copilot-studio");

  const platform = PLATFORMS_META.find(p => p.id === activeId)!;
  const template = PLATFORM_TEMPLATES[activeId];
  const charCount = template.length;

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = `${BASE_PATH}/ggp-knowledge-base.zip`;
    a.download = "ggp-knowledge-base.zip";
    a.click();
  };

  return (
    <div className="max-w-3xl">

      {/* Setup steps */}
      <div className="relative mb-10">
        <div
          className="absolute top-4 left-4 h-[calc(100%-2rem)] w-px hidden sm:block"
          style={{ background: "linear-gradient(to bottom, rgba(167,82,65,0.3), transparent)" }}
        />
        <div className="space-y-6">
          {SETUP_STEPS.map(s => (
            <div key={s.n} className="relative flex gap-5 items-start sm:pl-2">
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

      {/* Platform selector */}
      <div className="mb-4">
        <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-wine/35 mb-2">Select platform</p>
        <div className="flex flex-wrap gap-1.5">
          {PLATFORMS_META.map(p => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`flex items-center gap-1.5 font-sans text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200 ${
                activeId === p.id
                  ? "bg-wine text-ivory shadow-sm"
                  : "bg-almond/30 text-wine/60 hover:bg-almond/60 hover:text-wine"
              }`}
            >
              <span className={`text-[11px] font-mono ${activeId === p.id ? "text-almond/70" : "text-wine/35"}`}>{p.icon}</span>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Platform chrome */}
      <div key={activeId} className="rounded-xl overflow-hidden shadow-lg border border-almond/70 tab-enter">

        {/* Titlebar */}
        <div className="flex items-center gap-3 px-5 py-3" style={platform.titleStyle as React.CSSProperties}>
          <div
            className="w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-xs text-white select-none"
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            {platform.icon}
          </div>
          <span className="font-sans text-sm font-semibold text-white tracking-tight">
            {platform.label}
          </span>
          <span className="ml-auto font-sans text-[11px] text-white/50">{platform.subtitle}</span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 bg-ivory space-y-3">

          {/* Identity — only for platforms where the builder has explicit name/desc fields */}
          {platform.showIdentity && (
            <details open className="group border border-almond rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/35 transition-colors list-none select-none">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] text-wine/35 font-bold">01</span>
                  <span className="font-sans text-sm font-semibold text-wine">Identity</span>
                </div>
                <span className="font-mono text-[10px] text-wine/25 group-open:rotate-180 transition-transform inline-block">▾</span>
              </summary>
              <div className="px-4 py-4 border-t border-almond space-y-1">
                <FieldRow label="Agent name"  value={AGENT_NAME} />
                <FieldRow label="Description" value={AGENT_DESC} />
              </div>
            </details>
          )}

          {/* Instructions */}
          <details open className="group border border-almond rounded-lg overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/35 transition-colors list-none select-none">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] text-wine/35 font-bold">
                  {platform.showIdentity ? "02" : "01"}
                </span>
                <span className="font-sans text-sm font-semibold text-wine">Instructions</span>
              </div>
              <span className="font-mono text-[10px] text-wine/25 group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="px-4 py-4 border-t border-almond">
              <CharBar count={charCount} limit={platform.charLimit} />

              {/* Platform tip */}
              <div className="mb-4 flex items-start gap-2 rounded-lg bg-almond/20 border border-almond px-3 py-2.5">
                <span className="text-terracotta text-xs mt-0.5 flex-shrink-0 font-bold">!</span>
                <p className="font-sans text-[11px] text-wine/60 leading-snug">{platform.tip}</p>
              </div>

              <FieldRow
                label={`Paste into the ${platform.subtitle} field`}
                value={template}
                mono
                expandable
                charLimit={platform.charLimit > 100000 ? undefined : platform.charLimit}
              />
            </div>
          </details>

          {/* Knowledge Files */}
          <details open className="group border border-almond rounded-lg overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/35 transition-colors list-none select-none">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] text-wine/35 font-bold">
                  {platform.showIdentity ? "03" : "02"}
                </span>
                <span className="font-sans text-sm font-semibold text-wine">Knowledge Files</span>
                <span className="font-sans text-[10px] text-wine/30 ml-1">
                  ({platform.knowledgeLabel})
                </span>
              </div>
              <span className="font-mono text-[10px] text-wine/25 group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="px-4 py-4 border-t border-almond">
              <p className="font-sans text-xs text-wine/55 mb-4 leading-relaxed max-w-lg">
                {platform.knowledgeNote}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {platform.knowledgeFiles.map(f => (
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

          {/* Starter prompts — only for platforms that support this concept */}
          {platform.showStarterPrompts && (
            <details open className="group border border-almond rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 bg-almond/20 cursor-pointer hover:bg-almond/35 transition-colors list-none select-none">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] text-wine/35 font-bold">
                  {platform.showIdentity ? "04" : "03"}
                </span>
                  <span className="font-sans text-sm font-semibold text-wine">Starter Prompts</span>
                  <span className="font-sans text-[10px] text-wine/30 ml-1">({STARTERS.length} prompts)</span>
                </div>
                <span className="font-mono text-[10px] text-wine/25 group-open:rotate-180 transition-transform inline-block">▾</span>
              </summary>
              <div className="px-4 py-4 border-t border-almond space-y-2">
                {STARTERS.map((s, i) => (
                  <StarterCard key={i} starter={s} index={i} />
                ))}
              </div>
            </details>
          )}

          {/* M365 Copilot vs Studio note */}
          {activeId === "copilot-m365" && (
            <div className="rounded-lg border border-almond bg-almond/10 px-4 py-3.5">
              <p className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/35 mb-1">M365 vs Copilot Studio</p>
              <p className="font-sans text-xs text-wine/60 leading-relaxed">
                This is the <strong className="text-wine">simple Agent Builder</strong> accessible directly inside Microsoft Teams or copilot.microsoft.com. It accepts markdown only — no XML, no pseudocode. If you have access to{" "}
                <strong className="text-wine">Copilot Studio</strong>, use the Studio template instead for richer logic and flow control.
              </p>
            </div>
          )}

          {/* ChatGPT note about web browsing */}
          {activeId === "chatgpt" && (
            <div className="rounded-lg border border-almond bg-almond/10 px-4 py-3.5">
              <p className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/35 mb-1">Web browsing</p>
              <p className="font-sans text-xs text-wine/60 leading-relaxed">
                Enable <strong className="text-wine">Web Browsing</strong> in GPT settings. GGP will use it to verify claims before marking them CONFIRMED — this significantly improves source quality for external-facing content.
              </p>
            </div>
          )}

          {/* Claude note about Projects vs Skills */}
          {activeId === "claude" && (
            <div className="rounded-lg border border-almond bg-almond/10 px-4 py-3.5">
              <p className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/35 mb-1">Claude Code users</p>
              <p className="font-sans text-xs text-wine/60 leading-relaxed">
                If you use <strong className="text-wine">Claude Code</strong> (CLI), install the GGP skill directly from the{" "}
                <a href="https://github.com/lmherrera0/lmherrera-plugin" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">
                  lmherrera-plugin repo
                </a>{" "}
                instead — it activates automatically for professional communications and bypasses this paste-in method entirely.
              </p>
            </div>
          )}

          {/* Google Gems note */}
          {activeId === "gems" && (
            <div className="rounded-lg border border-almond bg-almond/10 px-4 py-3.5">
              <p className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/35 mb-1">Condensed format</p>
              <p className="font-sans text-xs text-wine/60 leading-relaxed">
                The Gems template is maximally condensed by design. Google Gems have a shorter instruction limit and perform best with short, plain sentences. All 9 GGP steps are preserved — etiquette and prohibited-language rules are referenced via uploaded Drive files.
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
