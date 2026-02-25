"use client";

import { useState } from "react";
import {
  claudeTemplate,
  chatgptTemplate,
  copilotTemplate,
  googleGemsTemplate,
  skillTemplate,
} from "./platformTemplates";

const platforms = [
  {
    id: "knowledge-base",
    name: "Knowledge Base",
    icon: "KB",
    instruction: "",
    template: null as string | null,
    isDownload: true,
  },
  {
    id: "claude-projects",
    name: "Claude Projects",
    icon: "CP",
    instruction:
      "Copy the template below and paste it into your Claude Project instructions (Projects \u2192 Edit Project \u2192 Instructions).",
    template: claudeTemplate,
    isDownload: false,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "G",
    instruction:
      "Copy the template below and paste it into your GPT Instructions or ChatGPT Project instructions.",
    template: chatgptTemplate,
    isDownload: false,
  },
  {
    id: "copilot",
    name: "Copilot",
    icon: "Co",
    instruction:
      "Copy the template below and paste it into your Copilot Agent instructions.",
    template: copilotTemplate,
    isDownload: false,
  },
  {
    id: "google-gems",
    name: "Google Gems",
    icon: "Ge",
    instruction:
      "Copy the template below and paste it into your Gem instructions.",
    template: googleGemsTemplate,
    isDownload: false,
  },
  {
    id: "skill",
    name: "Skill",
    icon: "SK",
    instruction:
      "Install GGP as a native Claude Code or Cowork skill. See the guide below for setup instructions.",
    template: skillTemplate,
    isDownload: false,
  },
];

const kbFiles = [
  { name: "GGP-Core-Rules.pdf", desc: "SKILL.md + general guidelines (source tiers, etiquette, reputation, data integrity, metrics)" },
  { name: "GGP-Channel-Templates.pdf", desc: "All 22 channel templates (email, LinkedIn, HBR, presentations, and more)" },
  { name: "GGP-Analysis-Templates.pdf", desc: "7 analysis templates (SWOT, gap analysis, benchmarks, cost-benefit, and more)" },
  { name: "GGP-About.pdf", desc: "Introduction, executive summary, and legal information" },
];

export default function Platforms() {
  const [active, setActive] = useState("knowledge-base");
  const [copied, setCopied] = useState(false);
  const current = platforms.find((p) => p.id === active)!;

  const handleCopy = async () => {
    if (current.template) {
      await navigator.clipboard.writeText(current.template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.NEXT_PUBLIC_BASE_PATH || "/ggp"}/ggp-knowledge-base.zip`;
    link.download = "ggp-knowledge-base.zip";
    link.click();
  };

  return (
    <section id="platforms" className="section-gap bg-almond/20">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          Platforms
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          Download the knowledge base or copy a ready-made template for your
          platform.
        </p>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Platform selection"
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {platforms.map((p) => (
            <button
              key={p.id}
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={active === p.id}
              aria-controls={`panel-${p.id}`}
              onClick={() => {
                setActive(p.id);
                setCopied(false);
              }}
              className={`px-4 py-2 rounded-bvvg font-sans font-semibold text-sm transition-colors duration-200 ${
                active === p.id
                  ? "bg-terracotta text-ivory"
                  : "bg-ivory text-wine border border-almond hover:border-terracotta"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="card max-w-4xl mx-auto"
        >
          {/* Knowledge Base download tab */}
          {current.isDownload && (
            <>
              <h3 className="font-serif font-semibold text-xl text-wine mb-2 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-terracotta text-ivory font-mono font-semibold text-xs flex items-center justify-center">
                  KB
                </span>
                Knowledge Base
              </h3>
              <p className="text-wine/80 mb-6">
                Download 4 consolidated PDF files ready to upload as knowledge
                base documents in Claude Projects or any AI platform that
                supports file uploads.
              </p>

              <div className="space-y-3 mb-8">
                {kbFiles.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="text-terracotta mt-0.5 flex-shrink-0 font-mono font-semibold">
                      PDF
                    </span>
                    <div>
                      <p className="font-semibold text-wine">{f.name}</p>
                      <p className="text-wine/60">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleDownload}
                className="btn-primary w-full justify-center"
              >
                Download Knowledge Base (.zip)
              </button>
              <p className="text-xs text-wine/50 text-center mt-3">
                Free download. No registration required.
              </p>
            </>
          )}

          {/* Platform template tabs */}
          {!current.isDownload && (
            <>
              <h3 className="font-serif font-semibold text-xl text-wine mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-terracotta text-ivory font-mono font-semibold text-sm flex items-center justify-center">
                  {current.icon}
                </span>
                {current.name}
              </h3>
              <p className="text-wine/80 mb-6">{current.instruction}</p>

              {/* Code block with copy button */}
              {current.template && (
                <div className="relative">
                  <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 z-10 px-3 py-1.5 bg-terracotta text-ivory font-sans text-xs font-semibold rounded-bvvg hover:bg-clay transition-colors"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                  <pre className="bg-wine/5 border border-almond rounded-bvvg p-4 pt-12 font-mono text-xs text-wine/80 leading-relaxed overflow-auto max-h-96">
                    {current.template}
                  </pre>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
