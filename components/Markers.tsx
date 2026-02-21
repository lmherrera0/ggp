const markers = [
  {
    label: "CONFIRMED",
    emoji: "\uD83D\uDFE2",
    color: "bg-sage",
    textColor: "text-sage",
    description: "Fact verified with a cited source. Tier 1\u20133, full citation, no red flags.",
  },
  {
    label: "GAP",
    emoji: "\uD83D\uDD34",
    color: "bg-red-600",
    textColor: "text-red-600",
    description: "Missing critical information that must be filled before delivery.",
  },
  {
    label: "INFERENCE",
    emoji: "\uD83D\uDFE1",
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
    description: "Assumption declared \u2014 reasoned from confirmed facts but not directly sourced.",
  },
  {
    label: "UNVERIFIED",
    emoji: "\uD83D\uDFE0",
    color: "bg-orange-500",
    textColor: "text-orange-600",
    description: "Could not verify or only low-quality source found. Needs corroboration.",
  },
  {
    label: "RISK",
    emoji: "\u26A0\uFE0F",
    color: "bg-terracotta",
    textColor: "text-terracotta",
    description: "Reputational, legal, or credibility concern flagged for review.",
  },
];

export default function Markers() {
  return (
    <section id="markers" className="section-gap">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          Visual Markers
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          Every claim gets a coloured flag so you see exactly what is verified,
          what is assumed, and what is missing.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {markers.map((m) => (
            <div key={m.label} className="card text-center">
              <div className="text-3xl mb-3">{m.emoji}</div>
              <span
                className={`inline-block font-mono font-semibold text-sm px-3 py-1 rounded-full ${m.color} text-ivory mb-3`}
              >
                {m.label}
              </span>
              <p className="text-sm text-wine/80 leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
