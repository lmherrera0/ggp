"use client";

import { useState, useEffect } from "react";
import DescribePanel from "./copilot/DescribePanel";
import ConfigurePanel from "./copilot/ConfigurePanel";
import FeedbackPanel from "./copilot/FeedbackPanel";
import ResearchPanel from "./copilot/ResearchPanel";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/ggp";

type Tab = "describe" | "configure" | "research" | "feedback";

const TABS: { id: Tab; label: string }[] = [
  { id: "describe",  label: "Describe"    },
  { id: "configure", label: "Configure"   },
  { id: "research",  label: "Research"    },
  { id: "feedback",  label: "Feedback"    },
];

/* ─── Hero animated demo ─────────────────────────────── */
// 0: plain text  (2400 ms)
// 1: reviewing…  (1400 ms)
// 2: marked+callout (4200 ms)
// 3: clean output   (2000 ms)
const STAGE_MS = [2400, 1400, 4200, 2000];

function HeroDemo() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setStage(s => (s + 1) % 4), STAGE_MS[stage]);
    return () => clearTimeout(t);
  }, [stage]);

  const plain = (
    <p className="font-mono text-sm leading-relaxed text-ivory/85">
      The migration completed successfully and the client confirmed all deliverables have been met.
    </p>
  );

  return (
    <div
      className="w-full max-w-lg mx-auto mt-10 rounded-xl overflow-hidden shadow-2xl"
      style={{ background: "rgba(30,12,12,0.55)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.12)" }}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "rgba(0,0,0,0.25)" }}>
        <span className="w-2.5 h-2.5 rounded-full bg-wine/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-almond/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-sage/40" />
        <span className="ml-3 font-mono text-[11px] text-ivory/40 flex-1">email-draft.txt</span>
        <span className="font-mono text-[10px] font-bold tracking-wider text-terracotta/80 border border-terracotta/30 rounded px-1.5 py-0.5">GGP</span>
      </div>

      {/* Content */}
      <div className="px-5 py-5 min-h-[130px] relative">
        {stage === 0 && (
          <div className="anim-fade">{plain}</div>
        )}

        {stage === 1 && (
          <div className="anim-fade">
            {plain}
            <div className="mt-3 flex items-center gap-1.5 font-mono text-xs text-almond/50">
              <span>GGP reviewing</span>
              <span className="dot-pulse">.</span>
              <span className="dot-pulse" style={{ animationDelay: "0.35s" }}>.</span>
              <span className="dot-pulse" style={{ animationDelay: "0.7s" }}>.</span>
            </div>
          </div>
        )}

        {stage === 2 && (
          <div className="anim-fade space-y-3">
            <p className="font-mono text-sm leading-relaxed text-ivory/85">
              The migration completed successfully{" "}
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-1.5 py-0.5 rounded" style={{ background: "rgba(127,139,114,0.25)", border: "1px solid rgba(127,139,114,0.5)", color: "#9BAF96" }}>
                🟢 CONFIRMED
              </span>{" "}
              and the client confirmed all deliverables have been met{" "}
              <span className="anim-pop inline-flex items-center gap-1 text-[11px] font-bold px-1.5 py-0.5 rounded" style={{ background: "rgba(201,139,110,0.25)", border: "1px solid rgba(201,139,110,0.5)", color: "#e8bc9a" }}>
                🟡 INFERENCE: I1
              </span>.
            </p>
            <div className="anim-pop-delay rounded-lg px-3 py-2.5 font-mono text-xs leading-relaxed" style={{ background: "rgba(255,255,255,0.05)", borderLeft: "2px solid rgba(201,139,110,0.6)", color: "rgba(243,236,227,0.6)" }}>
              <strong style={{ color: "rgba(201,139,110,0.9)" }}>I1</strong> — &ldquo;client confirmed&rdquo; not documented in context. If challenged, this claim has no backing.
              <div className="mt-1.5 flex gap-3" style={{ color: "rgba(201,139,110,0.7)" }}>
                <span>a) Accept</span>
                <span>b) Rewrite as GAP</span>
                <span>c) Provide source</span>
              </div>
            </div>
          </div>
        )}

        {stage === 3 && (
          <div className="anim-fade space-y-3">
            {plain}
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]" style={{ color: "rgba(243,236,227,0.4)" }}>
              <span style={{ color: "#9BAF96", fontWeight: 700 }}>✓ Clean output</span>
              <span>🟢 1</span>
              <span>🟡 1 resolved</span>
              <span className="ml-auto" style={{ color: "#9BAF96", fontWeight: 700 }}>GGP 8/8</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────── */
export default function CopilotPage() {
  const [tab, setTab] = useState<Tab>("describe");

  return (
    <>
      <style>{`
        .anim-fade        { animation: ggpFade .35s ease-out both; }
        .anim-pop         { animation: ggpPop .4s .15s ease-out both; opacity:0; }
        .anim-pop-delay   { animation: ggpPop .4s .55s ease-out both; opacity:0; }
        .tab-enter        { animation: ggpSlide .28s ease-out both; }
        .dot-pulse        { animation: ggpDot 1.1s ease-in-out infinite; opacity:.3; }

        .hero-word-1 { animation: ggpRise .6s .05s ease-out both; opacity:0; }
        .hero-word-2 { animation: ggpRise .6s .18s ease-out both; opacity:0; }
        .hero-word-3 { animation: ggpRise .6s .32s ease-out both; opacity:0; }

        @keyframes ggpFade  { from { opacity:0; } to { opacity:1; } }
        @keyframes ggpPop   { from { opacity:0; transform:translateY(5px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ggpSlide { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ggpDot   { 0%,100% { opacity:.2; } 50% { opacity:1; } }
        @keyframes ggpRise  { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      <div className="min-h-screen bg-ivory">

        {/* ── Nav ── */}
        <nav className="sticky top-0 z-50 bg-ivory/96 backdrop-blur border-b border-almond">
          <div className="section-container flex items-center justify-between h-14">
            <a href="https://lmherrera0.github.io" className="font-mono text-sm text-wine/40 hover:text-terracotta transition-colors">
              ← lmherrera0
            </a>
            <button onClick={() => setTab("configure")} className="btn-primary text-sm px-4 py-2 hidden sm:inline-flex">
              Get the fields
            </button>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="bg-wine text-ivory" style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
          <div className="section-container text-center">
            <p className="hero-word-1 font-sans text-xs font-bold tracking-[0.2em] uppercase text-almond/60 mb-7">
              Grounded Gate Protocol &nbsp;·&nbsp; v4.5 &nbsp;·&nbsp; M365 Copilot
            </p>
            <h1 className="font-serif font-bold leading-none tracking-tight text-ivory mb-6" style={{ fontSize: "clamp(2.6rem,7vw,5rem)" }}>
              <span className="hero-word-2 block italic text-clay">Nothing passes</span>
              <span className="hero-word-3 block">unverified.</span>
            </h1>
            <p className="hero-word-3 font-sans text-base text-almond/70 max-w-md mx-auto leading-relaxed">
              An anti-hallucination framework that tags every AI claim, runs reputation risk checks,
              and keeps you in control before anything reaches a client.
            </p>
            <HeroDemo />
            <p className="mt-4 font-mono text-[11px] text-almond/30 tracking-wider">
              LIVE DEMO · LOOPS AUTOMATICALLY
            </p>
          </div>
        </section>

        {/* ── Tab bar ── */}
        <div className="sticky top-14 z-40 bg-ivory/96 backdrop-blur border-b border-almond">
          <div className="section-container">
            <div className="flex gap-0.5 py-2">
              {TABS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`font-sans text-sm font-semibold px-5 py-2 rounded-bvvg transition-all duration-200 whitespace-nowrap ${
                    tab === t.id
                      ? "bg-wine text-ivory shadow-sm"
                      : "text-wine/50 hover:text-wine hover:bg-almond/30"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Panel ── */}
        <section className="section-gap">
          <div className="section-container">
            <div key={tab} className="tab-enter">
              {tab === "describe"  && <DescribePanel onConfigure={() => setTab("configure")} />}
              {tab === "configure" && <ConfigurePanel />}
              {tab === "research"  && <ResearchPanel />}
              {tab === "feedback"  && <FeedbackPanel />}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-almond py-10">
          <div className="section-container flex flex-col items-center gap-2">
            <p className="font-serif italic text-wine/30 text-sm">Clarity ∞ Decisions ∞ Impact</p>
            <a
              href="https://github.com/lmherrera0"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-wine/30 hover:text-terracotta transition-colors"
            >
              lmherrera0
            </a>
          </div>
        </footer>

      </div>
    </>
  );
}
