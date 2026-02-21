"use client";

import { useState } from "react";

const platforms = [
  {
    id: "claude-code",
    name: "Claude Code",
    icon: "C",
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
    steps: [
      "Open references/platforms/claude.md",
      "Copy everything inside the code block",
      "Paste into your Claude Project instructions (Projects \u2192 Edit Project \u2192 Instructions)",
    ],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "G",
    steps: [
      "Open references/platforms/chatgpt.md",
      "Copy everything inside the code block",
      "Paste into your GPT Instructions or ChatGPT Project instructions",
    ],
  },
  {
    id: "copilot",
    name: "Copilot",
    icon: "Co",
    steps: [
      "Open references/platforms/copilot.md",
      "Copy everything inside the code block",
      "Paste into your Copilot Agent instructions",
    ],
  },
  {
    id: "google-gems",
    name: "Google Gems",
    icon: "Ge",
    steps: [
      "Open references/platforms/google-gems.md",
      "Copy everything inside the code block",
      "Paste into your Gem instructions",
    ],
  },
];

export default function Platforms() {
  const [active, setActive] = useState("claude-code");
  const current = platforms.find((p) => p.id === active)!;

  return (
    <section id="quickstart" className="section-gap bg-almond/20">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          Quick Start
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          Choose your platform and follow the setup instructions.
        </p>

        {/* Platform tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
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

        {/* Instructions card */}
        <div className="card max-w-2xl mx-auto">
          <h3 className="font-serif font-semibold text-xl text-wine mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-terracotta text-ivory font-mono font-semibold text-sm flex items-center justify-center">
              {current.icon}
            </span>
            {current.name}
          </h3>
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
        </div>
      </div>
    </section>
  );
}
