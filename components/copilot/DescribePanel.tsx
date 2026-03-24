import { PHASES, MARKERS, TIERS } from "./data";

export default function DescribePanel() {
  return (
    <div className="space-y-10">

      {/* What this is */}
      <div className="card max-w-2xl">
        <p className="font-sans text-[11px] font-bold tracking-widest uppercase text-terracotta mb-3">
          What this is
        </p>
        <p className="font-sans text-wine/80 leading-relaxed mb-4">
          Grounded Gate Protocol (GGP) is an anti-hallucination framework you install as a
          Copilot agent. Every piece of content it produces — emails, reports, LinkedIn posts,
          leadership briefings — is tagged with visual markers showing exactly what is verified,
          what is assumed, and what is missing.
        </p>
        <p className="font-sans text-wine/80 leading-relaxed">
          You always see the marked draft first. Gaps and inferences are surfaced with decision
          options before any clean version is produced. Nothing reaches a client or stakeholder
          without passing through a structured risk and verification check.
        </p>
      </div>

      {/* Phases */}
      <div>
        <p className="font-sans text-[11px] font-bold tracking-widest uppercase text-wine/40 mb-4">
          How GGP works — 3 phases
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PHASES.map((p) => (
            <div key={p.num} className="card">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{p.icon}</span>
                <div>
                  <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-wine/30">
                    Phase {p.num}
                  </p>
                  <p className="font-serif font-semibold text-wine">{p.label}</p>
                </div>
              </div>
              <p className="font-sans text-xs text-wine/60 mb-3 leading-snug">{p.desc}</p>
              <ul className="space-y-1.5">
                {p.bullets.map((b) => (
                  <li key={b} className="font-sans text-xs text-wine/70 flex gap-1.5 leading-snug">
                    <span className="mt-0.5 text-[10px] text-terracotta flex-shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Markers */}
      <div>
        <p className="font-sans text-[11px] font-bold tracking-widest uppercase text-wine/40 mb-4">
          The GGP markers
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {MARKERS.map((m) => (
            <div key={m.name} className="card text-center py-4">
              <span className="text-2xl block mb-2">{m.emoji}</span>
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-wine/40 mb-1.5">
                {m.name}
              </p>
              <p className="font-sans text-xs text-wine/60 leading-snug">{m.def}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Source tiers */}
      <div>
        <p className="font-sans text-[11px] font-bold tracking-widest uppercase text-wine/40 mb-4">
          Source quality — 4 tiers
        </p>
        <div className="card overflow-hidden p-0">
          <table className="w-full font-sans text-sm">
            <thead>
              <tr className="border-b border-almond bg-almond/20">
                <th className="text-left text-[11px] font-bold tracking-wider uppercase text-wine/40 px-4 py-3">
                  Tier
                </th>
                <th className="text-left text-[11px] font-bold tracking-wider uppercase text-wine/40 px-4 py-3 hidden sm:table-cell">
                  Trust
                </th>
                <th className="text-left text-[11px] font-bold tracking-wider uppercase text-wine/40 px-4 py-3">
                  Examples
                </th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map((t, i) => (
                <tr
                  key={t.tier}
                  className={i < TIERS.length - 1 ? "border-b border-almond/50" : ""}
                >
                  <td className="px-4 py-3 align-top">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-10 rounded-full flex-shrink-0 ${t.barClass}`} />
                      <div>
                        <p className="font-semibold text-wine text-xs">{t.tier}</p>
                        <p className="text-[11px] text-wine/50 leading-snug">{t.label}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top hidden sm:table-cell">
                    <div className="flex flex-col gap-1">
                      <div className={`h-1.5 rounded-full ${t.barClass} ${t.widthClass}`} />
                      <span className="text-xs text-wine/50">{t.trust}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top text-xs text-wine/60 leading-relaxed max-w-xs">
                    {t.examples}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-sans text-xs text-wine/40 mt-2 italic">
          In Copilot, SharePoint and OneDrive documents count as Tier 1 when officially approved.
        </p>
      </div>

      {/* Sample output */}
      <div>
        <p className="font-sans text-[11px] font-bold tracking-widest uppercase text-wine/40 mb-4">
          Sample marked output — client update email
        </p>
        <div className="card max-w-3xl">
          <div className="font-sans text-sm text-wine/80 leading-relaxed space-y-3">
            <p>
              <em>Subject: Project update — delivery progress and next steps</em>
            </p>
            <p>Hi [Client Name],</p>
            <p>
              The data migration phase completed on schedule{" "}
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-sage/10 border border-sage/30 text-sage rounded px-1.5 py-0.5">
                🟢 CONFIRMED
              </span>{" "}
              and all validation checks passed with no critical failures.
            </p>
            <p>
              Performance testing shows a <strong>34% reduction in query response time</strong>{" "}
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-almond/30 border border-almond text-mahogany rounded px-1.5 py-0.5">
                🟡 INFERENCE: I1
              </span>{" "}
              compared to the baseline environment.
            </p>
            <div className="border-l-2 border-almond ml-4 pl-3 py-2 bg-almond/10 rounded-r-bvvg">
              <p className="text-xs italic text-wine/60">
                <strong className="not-italic">I1 —</strong> Derived from internal test results
                not yet validated against production load. If production differs, the 34% claim
                could undermine client confidence at go-live.
              </p>
              <p className="text-[11px] text-wine/40 mt-1.5">
                <strong className="text-terracotta">a)</strong> Accept &nbsp;
                <strong className="text-terracotta">b)</strong> Rewrite as GAP &nbsp;
                <strong className="text-terracotta">c)</strong> Provide source &nbsp;
                <strong className="text-terracotta">d)</strong> Remove &nbsp;
                <strong className="text-terracotta">e)</strong> Your input
              </p>
            </div>
            <p>
              UAT is scheduled for the week of{" "}
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-wine/5 border border-wine/20 text-wine rounded px-1.5 py-0.5">
                🔴 GAP: G1
              </span>{" "}
              and the go-live date remains on track.
            </p>
            <div className="border-l-2 border-almond ml-4 pl-3 py-2 bg-almond/10 rounded-r-bvvg">
              <p className="text-xs italic text-wine/60">
                <strong className="not-italic">G1 —</strong> UAT week not provided. Sending
                without a date creates a vague impression and may prompt follow-up requests.
              </p>
              <p className="text-[11px] text-wine/40 mt-1.5">
                <strong className="text-terracotta">a)</strong> Provide confirmed week &nbsp;
                <strong className="text-terracotta">b)</strong> Mark as pending &nbsp;
                <strong className="text-terracotta">c)</strong> Remove &nbsp;
                <strong className="text-terracotta">d)</strong> Your input
              </p>
            </div>
          </div>

          {/* Decision summary */}
          <div className="mt-5 border-t border-almond pt-4">
            <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-wine/30 mb-3">
              — Decision summary
            </p>
            <table className="w-full font-sans text-xs text-wine/70 mb-3">
              <thead>
                <tr className="border-b border-almond">
                  <th className="text-left font-semibold py-1 pr-6">Code</th>
                  <th className="text-left font-semibold py-1 pr-6">Type</th>
                  <th className="text-left font-semibold py-1">Decision</th>
                </tr>
              </thead>
              <tbody>
                {[["I1", "INFERENCE"], ["G1", "GAP"]].map(([code, type]) => (
                  <tr key={code} className="border-b border-almond/30">
                    <td className="py-1 pr-6 font-mono">{code}</td>
                    <td className="py-1 pr-6">{type}</td>
                    <td className="py-1 text-wine/20 italic">___</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="font-sans text-[11px] italic text-wine/30">
              Reply with: I1: a, G1: a — clean output follows once all decisions are confirmed.
            </p>
            <div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-almond/40 font-sans text-xs text-wine/40">
              <span>🟢 1</span>
              <span>🟡 1</span>
              <span>🔴 1</span>
              <span className="text-sage font-semibold ml-auto">GGP 7/8</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
