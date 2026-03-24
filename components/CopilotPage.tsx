"use client";

import { useState } from "react";
import DescribePanel from "./copilot/DescribePanel";
import ConfigurePanel from "./copilot/ConfigurePanel";
import FeedbackPanel from "./copilot/FeedbackPanel";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/ggp";

type Tab = "describe" | "configure" | "feedback";

const TABS: { id: Tab; label: string }[] = [
  { id: "describe", label: "Describe" },
  { id: "configure", label: "M365 Copilot" },
  { id: "feedback", label: "Feedback" },
];

const HERO_TAG: Record<Tab, string> = {
  describe: "Grounded Gate Protocol · v4.5",
  configure: "M365 Copilot · Agent Builder",
  feedback: "GGP · Feedback",
};

const HERO_SUB: Record<Tab, string> = {
  describe:
    "An anti-hallucination agent that tags every claim, runs reputation risk checks, and delivers marked drafts before any clean output.",
  configure:
    "Copy each field below directly into your M365 Copilot Agent Builder.",
  feedback: "Share your experience with the GGP Copilot agent.",
};

export default function CopilotPage() {
  const [tab, setTab] = useState<Tab>("describe");

  return (
    <div className="min-h-screen">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-almond shadow-sm">
        <div className="section-container flex items-center justify-between h-14">
          <a
            href={BASE_PATH}
            className="font-mono text-sm text-wine/50 hover:text-terracotta transition-colors"
          >
            ← lmherrera0
          </a>
          <button
            onClick={() => setTab("configure")}
            className="btn-primary text-sm px-4 py-2 hidden sm:inline-flex"
          >
            Get the fields
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-gap bg-wine text-ivory pt-20">
        <div className="section-container text-center">
          <p className="text-almond font-sans font-semibold text-sm tracking-widest uppercase mb-5">
            {HERO_TAG[tab]}
          </p>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-ivory leading-tight mb-5">
            Grounded Gate Protocol
          </h1>
          <p className="text-lg text-almond/80 max-w-xl mx-auto mb-3">
            {HERO_SUB[tab]}
          </p>
          <p className="text-clay font-serif font-semibold text-lg italic mb-10">
            &ldquo;Nothing passes unverified.&rdquo;
          </p>
        </div>
      </section>

      {/* Tab bar */}
      <div className="sticky top-14 z-40 bg-ivory/95 backdrop-blur border-b border-almond">
        <div className="section-container">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`font-sans text-sm font-semibold px-5 py-2 rounded-bvvg transition-colors whitespace-nowrap ${
                  tab === t.id
                    ? "bg-wine text-ivory"
                    : "text-wine/60 hover:text-wine hover:bg-almond/30"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active panel */}
      <section className="section-gap">
        <div className="section-container">
          {tab === "describe"   && <DescribePanel />}
          {tab === "configure"  && <ConfigurePanel />}
          {tab === "feedback"   && <FeedbackPanel />}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-almond py-10">
        <div className="section-container flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-wine/30 text-sm">Clarity ∞ Decisions ∞ Impact</p>
          <a
            href="https://github.com/lmherrera0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-wine/40 hover:text-terracotta transition-colors"
          >
            lmherrera0
          </a>
        </div>
      </footer>

    </div>
  );
}
