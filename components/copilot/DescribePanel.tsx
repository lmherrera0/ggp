"use client";

import { PHASES, MARKERS, TIERS } from "./data";

/* Section wrapper with large decorative number */
function Section({ n, heading, children, dark = false }: {
  n: string;
  heading: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`relative rounded-xl px-8 py-10 sm:px-12 sm:py-14 ${dark ? "bg-wine text-ivory" : "bg-almond/15"}`}>
      <span
        className="absolute top-4 right-6 font-serif font-bold select-none pointer-events-none"
        style={{ fontSize: "clamp(4rem,10vw,7rem)", lineHeight: 1, color: dark ? "rgba(255,255,255,0.06)" : "rgba(76,38,50,0.07)" }}
      >
        {n}
      </span>
      <p className={`font-sans text-[10px] font-bold tracking-[0.18em] uppercase mb-3 ${dark ? "text-almond/50" : "text-terracotta"}`}>
        Section {n}
      </p>
      <h2 className={`font-serif font-bold text-2xl sm:text-3xl leading-tight mb-6 ${dark ? "text-ivory" : "text-wine"}`}>
        {heading}
      </h2>
      {children}
    </div>
  );
}

export default function DescribePanel({ onConfigure }: { onConfigure: () => void }) {
  return (
    <div className="space-y-5 max-w-4xl mx-auto">

      {/* 01 — THE PROBLEM */}
      <Section n="01" heading="AI sounds authoritative. It isn't always right." dark>
        <p className="font-sans text-almond/80 leading-relaxed mb-6 max-w-xl">
          Large language models produce fluent, confident text. They also fabricate statistics,
          misattribute quotes, and present assumptions as facts — with exactly the same tone as
          verified information. In professional settings, that is a liability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { channel: "Client email", risk: "Wrong delivery date cited as confirmed" },
            { channel: "Executive briefing", risk: "Market figure from an outdated blog post" },
            { channel: "Regulatory submission", risk: "Invented citation in a compliance section" },
          ].map(item => (
            <div key={item.channel} className="rounded-lg px-4 py-3.5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-almond/40 mb-1">{item.channel}</p>
              <p className="font-sans text-sm text-ivory/70 leading-snug">{item.risk}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 02 — THE SOLUTION */}
      <Section n="02" heading="GGP makes uncertainty visible before it ships.">
        <p className="font-sans text-wine/75 leading-relaxed mb-6 max-w-xl">
          Grounded Gate Protocol is a set of instructions that forces Copilot to be explicit about
          what it knows, what it is assuming, and what it cannot find. Every response comes back
          as a <em>marked draft</em> — not a finished document. You decide what passes.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Verified.", sub: "Every CONFIRMED claim cites source, tier, location, and date." },
            { label: "Labelled.", sub: "Inferences and gaps are flagged inline — never buried." },
            { label: "Decided by you.", sub: "Clean output is only produced after your approval." },
          ].map(v => (
            <div key={v.label} className="border-l-2 border-terracotta pl-4">
              <p className="font-serif font-bold text-wine text-lg">{v.label}</p>
              <p className="font-sans text-xs text-wine/55 leading-snug mt-1">{v.sub}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 03 — HOW IT WORKS */}
      <Section n="03" heading="Three phases. Every time.">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PHASES.map(p => (
            <div key={p.num} className="bg-ivory rounded-xl p-6 border border-almond">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl leading-none">{p.icon}</span>
                <div>
                  <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-wine/30">Phase {p.num}</p>
                  <p className="font-serif font-bold text-xl text-wine leading-tight">{p.label}</p>
                </div>
              </div>
              <p className="font-sans text-xs text-wine/55 mb-3 leading-snug italic">{p.desc}</p>
              <ul className="space-y-1.5">
                {p.bullets.map(b => (
                  <li key={b} className="flex gap-2 font-sans text-xs text-wine/70 leading-snug">
                    <span className="text-terracotta mt-0.5 flex-shrink-0 text-[9px] font-bold">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 04 — THE MARKERS */}
      <Section n="04" heading="Every claim gets a flag.">
        <p className="font-sans text-wine/65 leading-relaxed mb-6 max-w-xl">
          Instead of a polished output that hides uncertainty, GGP embeds visual markers inline.
          You see what is confirmed, what is assumed, and what is missing — right in the text.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {MARKERS.map(m => (
            <div key={m.name} className="bg-ivory rounded-xl p-4 text-center border border-almond hover:border-terracotta transition-colors group">
              <span className="text-3xl block mb-2.5 group-hover:scale-110 transition-transform duration-200">{m.emoji}</span>
              <p className="font-sans text-[9px] font-bold tracking-[0.15em] uppercase text-wine/35 mb-1.5">{m.name}</p>
              <p className="font-sans text-xs text-wine/60 leading-snug">{m.def}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 05 — SOURCE TIERS */}
      <Section n="05" heading="Not all citations are equal.">
        <p className="font-sans text-wine/65 leading-relaxed mb-6 max-w-xl">
          GGP classifies every source by quality tier. In Copilot, your SharePoint and OneDrive
          documents count as Tier 1 when officially approved. A blog post cited as fact is flagged differently from a government filing.
        </p>
        <div className="bg-ivory rounded-xl overflow-hidden border border-almond">
          <table className="w-full">
            <thead>
              <tr className="border-b border-almond bg-almond/30">
                <th className="text-left font-sans text-[10px] font-bold tracking-wider uppercase text-wine/40 px-5 py-3">Tier</th>
                <th className="text-left font-sans text-[10px] font-bold tracking-wider uppercase text-wine/40 px-5 py-3 hidden sm:table-cell">Trust</th>
                <th className="text-left font-sans text-[10px] font-bold tracking-wider uppercase text-wine/40 px-5 py-3">Sources</th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map((t, i) => (
                <tr key={t.tier} className={i < TIERS.length - 1 ? "border-b border-almond/50" : ""}>
                  <td className="px-5 py-3.5 align-middle">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-1 h-8 rounded-full flex-shrink-0 ${t.barClass}`} />
                      <div>
                        <p className="font-mono text-xs font-bold text-wine">{t.tier}</p>
                        <p className="font-sans text-[10px] text-wine/40 whitespace-nowrap">{t.label}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 align-middle hidden sm:table-cell">
                    <div className="flex flex-col gap-1 w-20">
                      <div className={`h-1 rounded-full ${t.barClass} ${t.widthClass}`} />
                      <span className="font-sans text-[10px] text-wine/40">{t.trust}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 align-middle font-sans text-xs text-wine/60 leading-relaxed">{t.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 06 — SAMPLE OUTPUT */}
      <Section n="06" heading="See it in action.">
        <p className="font-sans text-wine/65 leading-relaxed mb-6 max-w-xl">
          This is what a GGP-processed email looks like before you send it.
          Every non-confirmed item shows decision options inline — you choose, then GGP delivers the clean version.
        </p>
        <div className="bg-ivory rounded-xl border border-almond overflow-hidden max-w-2xl">
          <div className="px-4 py-2 bg-almond/30 border-b border-almond flex items-center gap-2">
            <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-wine/40">GGP Marked Draft</span>
            <span className="ml-auto font-mono text-[10px] text-wine/30">email · Fast Mode</span>
          </div>
          <div className="px-6 py-5 font-sans text-sm text-wine/80 leading-relaxed space-y-3">
            <p><em className="text-wine/50">Subject: Project update — delivery and next steps</em></p>
            <p>Hi [Client Name],</p>
            <p>
              The data migration phase completed on schedule{" "}
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-sage/10 border border-sage/30 text-sage rounded px-1.5 py-0.5">🟢 CONFIRMED</span>{" "}
              and all validation checks passed with no critical failures.
            </p>
            <p>
              Performance testing shows a <strong>34% reduction in response time</strong>{" "}
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-almond/40 border border-almond text-mahogany rounded px-1.5 py-0.5">🟡 INFERENCE: I1</span>{" "}
              compared to the baseline.
            </p>
            <div className="border-l-2 border-almond ml-2 pl-4 py-2 bg-almond/10 rounded-r-bvvg">
              <p className="text-xs italic text-wine/55">
                <strong className="not-italic text-wine/70">I1 —</strong> Derived from internal test results not validated against production load. If production differs, this claim may undermine confidence at go-live.
              </p>
              <p className="text-[11px] text-wine/40 mt-1.5 flex flex-wrap gap-x-3">
                <span><strong className="text-terracotta">a)</strong> Accept</span>
                <span><strong className="text-terracotta">b)</strong> Rewrite as GAP</span>
                <span><strong className="text-terracotta">c)</strong> Provide source</span>
                <span><strong className="text-terracotta">d)</strong> Remove</span>
              </p>
            </div>
          </div>
          <div className="px-6 pb-4 flex flex-wrap gap-4 font-sans text-xs text-wine/40 border-t border-almond/40 pt-3">
            <span>🟢 1</span><span>🟡 1</span>
            <span className="text-sage font-semibold ml-auto">GGP 7/8 · awaiting I1 decision</span>
          </div>
        </div>
      </Section>

      {/* 07 — CTA */}
      <div className="bg-mahogany rounded-xl px-8 py-10 sm:px-12 sm:py-12 text-center">
        <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-almond/40 mb-3">Ready?</p>
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ivory mb-3 leading-tight">
          Set up GGP for Copilot<br />in under 10 minutes.
        </h2>
        <p className="font-sans text-almond/60 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
          Copy three fields into Copilot Agent Builder. Upload four knowledge files. Publish.
        </p>
        <button
          onClick={onConfigure}
          className="inline-flex items-center gap-2 bg-terracotta text-ivory font-sans font-semibold text-sm rounded-bvvg px-7 py-3 hover:bg-clay transition-colors"
        >
          Get the configuration fields →
        </button>
      </div>

    </div>
  );
}
