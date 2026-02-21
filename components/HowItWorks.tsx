const phases = [
  {
    number: "1",
    title: "Load Rules",
    description:
      "GGP loads its core rules \u2014 either the compact QUICK_REFERENCE card (Fast Mode) or all individual reference files (Deep Audit). This includes markers, source tiers, citation format, prohibited language, and the 8 non-negotiable rules.",
    items: [
      "Fast Mode: compact rules card",
      "Deep Audit: full reference files",
      "8 non-negotiable rules loaded",
    ],
  },
  {
    number: "2",
    title: "Load Channel + Conditionals",
    description:
      "GGP identifies the target channel and loads the matching template. Conditional modules activate based on content type \u2014 data analytics, analysis deliverables, cross-platform deployment, or style learning from your examples.",
    items: [
      "Channel template selected",
      "Conditional modules activated",
      "Style learned from examples",
    ],
  },
  {
    number: "3",
    title: "Create + Validate + Deliver",
    description:
      "Content is classified, every claim audited with markers, and iteration controlled. The Reasoning Gate separates facts from inferences. Devil\u2019s Advocate runs 5 checks + 3 tests. The Validation Gate requires 8/8 before delivery.",
    items: [
      "Information audit with markers",
      "Devil\u2019s Advocate risk screening",
      "8/8 validation gate required",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="section-gap">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          How It Works
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          GGP operates in a 3-phase cycle \u2014 the same flow whether you use
          Fast Mode or Deep Audit.
        </p>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-almond -translate-x-1/2" />

          <div className="grid gap-8 lg:gap-12">
            {phases.map((phase, i) => (
              <div
                key={phase.number}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div
                  className={`${
                    i % 2 === 1 ? "lg:order-2 lg:text-left" : ""
                  }`}
                >
                  <div className="card">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex-shrink-0 w-12 h-12 rounded-full bg-terracotta text-ivory font-serif font-bold text-xl flex items-center justify-center">
                        {phase.number}
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-wine">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-wine/70 leading-relaxed mb-4">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-wine/80"
                        >
                          <span className="text-sage mt-0.5 flex-shrink-0">
                            &#10003;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div
                  className={`hidden lg:block ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mode comparison */}
        <div className="mt-12 card max-w-2xl mx-auto">
          <h3 className="font-serif font-semibold text-lg text-wine mb-4 text-center">
            Two Modes, Same Rules
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center p-4 bg-ivory rounded-bvvg">
              <p className="font-semibold text-terracotta mb-1">Fast Mode</p>
              <p className="text-wine/70">
                Default for any task. Compact rules card with shorthand
                checkpoints.
              </p>
            </div>
            <div className="text-center p-4 bg-ivory rounded-bvvg">
              <p className="font-semibold text-terracotta mb-1">Deep Audit</p>
              <p className="text-wine/70">
                For high-stakes deliverables. Full reference files with verbose
                tables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
