"use client";

const PAPER_1 = {
  title: "Beyond Detection: A Hallucination Governance Architecture for AI-Verified Professional Communication",
  author: "Liz Magaly Herrera",
  date: "February 2026",
  doi: "https://doi.org/10.5281/zenodo.18751614",
  abstract:
    "As large language models become integrated into professional communication workflows, the reliability of AI-generated content emerges as a governance challenge rather than solely a technical one. This paper proposes a hallucination governance architecture — a structured approach to managing AI-generated content reliability through systematic verification processes, source classification, adversarial quality testing, and operational governance controls. Drawing on accountability theory, the epistemology of testimony, and information governance literature, the architecture addresses a documented gap: existing approaches to hallucination primarily target detection and mitigation at the model level, while organisational governance of AI-generated content in professional contexts remains largely unaddressed.",
  keywords: [
    "hallucination governance",
    "source verification",
    "AI accountability",
    "prompt engineering",
    "adversarial testing",
    "epistemology of testimony",
    "Tree of Thought",
    "design science research",
  ],
  components: [
    "Calibrated four-tier source classification system",
    "Visual confidence markers for inline claim labelling",
    "Adversarial quality review (Devil's Advocate protocol)",
    "Structured iteration control for LLM-human collaboration",
    "Operational governance controls for professional settings",
  ],
};


export default function ResearchPanel() {
  return (
    <div className="max-w-3xl space-y-10">

      {/* Paper 1 */}
      <div>
        <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-terracotta mb-2">
          Published · Zenodo · February 2026
        </p>

        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-wine leading-tight mb-1">
          {PAPER_1.title}
        </h2>
        <p className="font-sans text-sm text-wine/50 mb-6">{PAPER_1.author}</p>

        {/* Abstract */}
        <p className="font-sans text-sm text-wine/70 leading-relaxed mb-6 max-w-2xl">
          {PAPER_1.abstract}
        </p>

        {/* 5 Components */}
        <div className="mb-6">
          <p className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/35 mb-3">
            Architecture components
          </p>
          <div className="space-y-2">
            {PAPER_1.components.map((c, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="font-mono text-[10px] text-terracotta font-bold mt-0.5 flex-shrink-0 w-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-xs text-wine/65 leading-snug">{c}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {PAPER_1.keywords.map(k => (
            <span
              key={k}
              className="font-sans text-[10px] text-wine/50 border border-almond rounded-full px-2.5 py-1 bg-almond/20"
            >
              {k}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={PAPER_1.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-5 py-2.5 rounded-lg border border-almond text-wine/70 hover:border-terracotta hover:text-wine transition-colors"
        >
          <span className="font-mono text-[10px] font-bold text-terracotta border border-terracotta/40 rounded px-1.5 py-0.5">
            DOI
          </span>
          zenodo.18751614
        </a>
      </div>

    </div>
  );
}
