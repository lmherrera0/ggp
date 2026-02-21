const tiers = [
  {
    tier: "1",
    label: "Gold Standard",
    trust: "High",
    examples:
      "SEC filings, government data, peer-reviewed research, audited financials",
    color: "bg-sage",
  },
  {
    tier: "2",
    label: "Solid",
    trust: "Good",
    examples: "Financial Times, Reuters, Gartner, McKinsey, Forrester",
    color: "bg-terracotta",
  },
  {
    tier: "3",
    label: "Decent",
    trust: "Moderate",
    examples: "Industry blogs, company marketing sites, Wikipedia",
    color: "bg-yellow-500",
  },
  {
    tier: "4",
    label: "Proceed with Caution",
    trust: "Low",
    examples: "Forums, social media, anonymous blogs, content farms",
    color: "bg-red-600",
  },
];

export default function SourceTiers() {
  return (
    <section id="source-tiers" className="section-gap bg-almond/20">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          Not All Sources Are Equal
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          Just because something is cited does not mean it is true. GGP
          classifies every source by quality tier.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div key={t.tier} className="card">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`w-8 h-8 rounded-full ${t.color} text-ivory font-mono font-bold text-sm flex items-center justify-center`}
                >
                  {t.tier}
                </span>
                <span className="font-serif font-semibold text-wine">
                  {t.label}
                </span>
              </div>
              <p className="text-xs font-mono text-terracotta mb-2">
                Trust: {t.trust}
              </p>
              <p className="text-sm text-wine/70 leading-relaxed">
                {t.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
