const architectureComponents = [
  {
    number: "1",
    title: "Calibrated Source Hierarchy",
    description:
      "Four-tier source classification with explicit verification markers enabling independent human validation.",
  },
  {
    number: "2",
    title: "Adversarial Quality Gate",
    description:
      "Quantified risk scoring across five professional risk categories, three behavioural tests, cognitive bias detection, and logical fallacy screening.",
  },
  {
    number: "3",
    title: "Dual-Mode Execution",
    description:
      "Fast Mode for everyday governance and Deep Audit for high-stakes deliverables \u2014 same verification standard, adaptive depth.",
  },
  {
    number: "4",
    title: "Channel-Agnostic Governance",
    description:
      "Universal verification rules separated from domain-specific templates across 22 professional communication channels.",
  },
  {
    number: "5",
    title: "Cross-Platform Deployment",
    description:
      "Platform adapters for Claude, ChatGPT, Google Gems, and Microsoft Copilot ensuring consistent governance across systems.",
  },
];

const theoreticalFoundations = [
  {
    label: "Accountability Theory",
    detail: "Defensible processes for consequential outputs",
  },
  {
    label: "Epistemology of Testimony",
    detail: "Calibrated trust based on source reliability",
  },
  {
    label: "Information Governance",
    detail: "Systematic quality management for AI-generated content",
  },
];

export default function Research() {
  return (
    <section id="research" className="section-gap bg-almond/20">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          The Research
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          GGP is grounded in peer-reviewed research. The architecture was
          developed through Design Science Research methodology and published
          on Zenodo.
        </p>

        {/* Paper card */}
        <div className="card max-w-4xl mx-auto mb-12">
          <p className="font-mono text-xs font-semibold text-terracotta mb-3 uppercase tracking-wider">
            Published February 2026
          </p>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-wine mb-2 leading-tight">
            Beyond Detection: A Hallucination Governance Architecture for
            AI-Verified Professional Communication
          </h3>
          <p className="text-sm text-wine/60 mb-4">
            Herrera, L.M. (2026) &middot; Independent Researcher, London, UK
            &middot; ORCID: 0009-0008-1981-2953
          </p>
          <p className="text-wine/70 leading-relaxed mb-6">
            This paper proposes a hallucination governance architecture
            characterised by five interconnected components that provide the
            integrated verification governance the current landscape lacks.
            Grounded in accountability theory, the epistemology of testimony,
            and information governance literature, it argues that the field
            should shift from hallucination detection to hallucination
            governance. GGP is presented as a design science instantiation of
            this architecture.
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "hallucination governance",
              "prompt engineering",
              "source verification",
              "AI accountability",
              "design science research",
              "adversarial testing",
              "epistemology of testimony",
            ].map((kw) => (
              <span
                key={kw}
                className="text-xs font-mono px-2.5 py-1 rounded-full bg-ivory border border-almond text-wine/60"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://doi.org/10.5281/zenodo.18751614"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Read the Paper
            </a>
            <a
              href="https://zenodo.org/records/18751614/files/LMHerrera-GGP-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Architecture components */}
        <h3 className="font-serif font-semibold text-xl text-wine text-center mb-8">
          Five-Component Architecture
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-12">
          {architectureComponents.map((c) => (
            <div key={c.number} className="card text-center">
              <span className="inline-flex w-10 h-10 rounded-full bg-terracotta text-ivory font-serif font-bold text-lg items-center justify-center mb-3">
                {c.number}
              </span>
              <h4 className="font-serif font-semibold text-sm text-wine mb-2">
                {c.title}
              </h4>
              <p className="text-xs text-wine/70 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>

        {/* Theoretical foundations */}
        <div className="card max-w-3xl mx-auto">
          <h3 className="font-serif font-semibold text-lg text-wine mb-4 text-center">
            Theoretical Foundations
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {theoreticalFoundations.map((t) => (
              <div
                key={t.label}
                className="text-center p-4 bg-ivory rounded-bvvg"
              >
                <p className="font-semibold text-terracotta text-sm mb-1">
                  {t.label}
                </p>
                <p className="text-xs text-wine/70">{t.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-wine/50 text-center mt-4">
            Herrera, L.M. (2026). DOI:{" "}
            <a
              href="https://doi.org/10.5281/zenodo.18751614"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-terracotta"
            >
              10.5281/zenodo.18751614
            </a>{" "}
            &middot; CC BY 4.0
          </p>
        </div>
      </div>
    </section>
  );
}
