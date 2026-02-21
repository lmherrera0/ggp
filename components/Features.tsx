const features = [
  {
    title: "Source Verification",
    stat: "4-tier system",
    description:
      "Every citation classified by quality \u2014 from authoritative Tier\u00A01 (SEC filings, peer-reviewed research) to Tier\u00A04 (forums, social media). Red flags trigger automatic downgrades.",
  },
  {
    title: "Devil\u2019s Advocate",
    stat: "5 checks + 3 tests",
    description:
      "Mandatory risk screening on all significant communications. Hostile Reader, Screenshot, and CEO tests catch problems before they reach your audience.",
  },
  {
    title: "Channel Templates",
    stat: "22 templates",
    description:
      "Tailored guidance for email, LinkedIn, HBR, presentations, academic journals, press releases, coding docs, and more.",
  },
  {
    title: "Analysis Templates",
    stat: "7 templates",
    description:
      "Structured consulting deliverables: SWOT, gap analysis, benchmarks, cost-benefit, maturity assessment, stakeholder analysis, and use cases.",
  },
  {
    title: "Consulting Etiquette",
    stat: "7 golden rules",
    description:
      "Professional conduct guardrails including language reframing \u2014 converting dangerous phrases into professional alternatives.",
  },
  {
    title: "Data Integrity",
    stat: "12-point checklist",
    description:
      "Anti-hallucination rules for statistics, metrics, and analytics. Detects 7 data hallucination patterns including zombie statistics and invented precision.",
  },
  {
    title: "Anti-Fatigue System",
    stat: "Max 2 rounds",
    description:
      "Prevents endless clarification loops. After each round you choose: answer, produce now, or go deeper. You control the depth.",
  },
  {
    title: "Multi-Platform",
    stat: "5 platforms",
    description:
      "Works on Claude Code, Claude Projects, ChatGPT, Microsoft Copilot, and Google Gems with platform-specific templates.",
  },
];

export default function Features() {
  return (
    <section className="section-gap bg-almond/20">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          What GGP Does
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          A comprehensive framework that covers every stage of AI-assisted
          professional communication.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card">
              <p className="font-mono text-sm font-semibold text-terracotta mb-2">
                {f.stat}
              </p>
              <h3 className="font-serif font-semibold text-lg text-wine mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-wine/70 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
