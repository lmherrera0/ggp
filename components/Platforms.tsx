"use client";

import { useState } from "react";
import {
  claudeTemplate,
  chatgptTemplate,
  copilotTemplate,
  googleGemsTemplate,
} from "./platformTemplates";

const platforms = [
  {
    id: "claude-code",
    name: "Claude Code",
    icon: "C",
    instruction:
      "Place the ggp/ folder as skills/ggp/ in your project. Claude Code detects SKILL.md automatically and activates GGP on demand.",
    template: null as string | null,
    steps: [
      "Place the ggp/ folder as skills/ggp/ in your project",
      "Claude Code detects SKILL.md automatically",
      "Start any content task \u2014 GGP activates on demand",
    ],
  },
  {
    id: "claude-projects",
    name: "Claude Projects",
    icon: "CP",
    instruction:
      "Copy the template below and paste it into your Claude Project instructions (Projects \u2192 Edit Project \u2192 Instructions).",
    template: claudeTemplate,
    steps: null,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "G",
    instruction:
      "Copy the template below and paste it into your GPT Instructions or ChatGPT Project instructions.",
    template: chatgptTemplate,
    steps: null,
  },
  {
    id: "copilot",
    name: "Copilot",
    icon: "Co",
    instruction:
      "Copy the template below and paste it into your Copilot Agent instructions.",
    template: copilotTemplate,
    steps: null,
  },
  {
    id: "google-gems",
    name: "Google Gems",
    icon: "Ge",
    instruction:
      "Copy the template below and paste it into your Gem instructions.",
    template: googleGemsTemplate,
    steps: null,
  },
];

export default function Platforms() {
  const [active, setActive] = useState("claude-code");
  const [copied, setCopied] = useState(false);
  const current = platforms.find((p) => p.id === active)!;

  const handleCopy = async () => {
    if (current.template) {
      await navigator.clipboard.writeText(current.template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="platforms" className="section-gap bg-almond/20">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          Platforms
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          Choose your platform and copy the ready-made template.
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

          {/* Step-by-step for Claude Code */}
          {current.steps && (
            <ol className="space-y-4">
              {current.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-almond/60 text-wine font-mono font-semibold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-wine/80 leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
