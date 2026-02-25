"use client";

import { useState } from "react";
import { useTranslation } from "@/context/LanguageContext";
import {
  claudeTemplate,
  chatgptTemplate,
  copilotTemplate,
  googleGemsTemplate,
  skillTemplate,
} from "./platformTemplates";

type PlatformId = "knowledge-base" | "claude-projects" | "chatgpt" | "copilot" | "google-gems" | "skill";

interface PlatformDef {
  id: PlatformId;
  nameKey: keyof typeof nameMap;
  icon: string;
  template: string | null;
  isDownload: boolean;
}

const nameMap = {
  knowledgeBase: "knowledge-base",
  claudeProjects: "claude-projects",
  chatgpt: "chatgpt",
  copilot: "copilot",
  googleGems: "google-gems",
  skill: "skill",
} as const;

const platforms: PlatformDef[] = [
  { id: "knowledge-base", nameKey: "knowledgeBase", icon: "KB", template: null, isDownload: true },
  { id: "claude-projects", nameKey: "claudeProjects", icon: "CP", template: claudeTemplate, isDownload: false },
  { id: "chatgpt", nameKey: "chatgpt", icon: "G", template: chatgptTemplate, isDownload: false },
  { id: "copilot", nameKey: "copilot", icon: "Co", template: copilotTemplate, isDownload: false },
  { id: "google-gems", nameKey: "googleGems", icon: "Ge", template: googleGemsTemplate, isDownload: false },
  { id: "skill", nameKey: "skill", icon: "SK", template: skillTemplate, isDownload: false },
];

const instructionMap: Record<string, keyof Translations["platforms"]["instructions"]> = {
  "claude-projects": "claude",
  chatgpt: "chatgpt",
  copilot: "copilot",
  "google-gems": "googleGems",
  skill: "skill",
};

import type { Translations } from "@/translations/types";

export default function Platforms() {
  const { t } = useTranslation();
  const [active, setActive] = useState<PlatformId>("knowledge-base");
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

  const tabName = (p: PlatformDef) => t.platforms.tabs[p.nameKey];

  return (
    <section id="platforms" className="section-gap bg-almond/20">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          {t.platforms.title}
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          {t.platforms.subtitle}
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
              {tabName(p)}
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
                {t.platforms.kb.title}
              </h3>
              <p className="text-wine/80 mb-6">
                {t.platforms.kb.description}
              </p>

              <div className="space-y-3 mb-8">
                {t.platforms.kb.files.map((f) => (
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
                {t.platforms.kb.downloadBtn}
              </button>
              <p className="text-xs text-wine/60 text-center mt-3">
                {t.platforms.kb.downloadNote}
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
                {tabName(current)}
              </h3>
              <p className="text-wine/80 mb-6">
                {t.platforms.instructions[instructionMap[current.id]]}
              </p>

              {/* Code block with copy button */}
              {current.template && (
                <div className="relative">
                  <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 z-10 px-3 py-1.5 bg-terracotta text-ivory font-sans text-xs font-semibold rounded-bvvg hover:bg-clay transition-colors"
                  >
                    {copied ? t.platforms.copiedBtn : t.platforms.copyBtn}
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
