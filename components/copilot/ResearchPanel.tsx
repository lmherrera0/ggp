"use client";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/ggp";

const PAPER_1 = {
  title: "Beyond Detection: A Hallucination Governance Architecture for AI-Verified Professional Communication",
  author: "Liz Magaly Herrera",
  date: "February 2026",
  doi: "https://doi.org/10.5281/zenodo.18751614",
  pdfUrl: `${BASE_PATH}/Paper`,
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

const PAPER_2 = {
  title: "LLM Psychology for Defensive Agent Design",
  subtitle: "Using cognitive patterns as guardrails against prompt injection and manipulation",
  status: "In progress",
  abstract:
    "Analyses four foundational papers on LLM psychological behaviour — anxiety-induced bias, motivational vigilance, cognitive theory integration, and adversarial vulnerability — to construct a defensive design framework. The core thesis: the same mechanisms that make LLMs vulnerable (emotional state sensitivity, conformity, approval-seeking) can become defences when redirected toward protecting the operator rather than complying with attackers.",
  foundationPapers: [
    { id: "2304.11111", title: "Inducing Anxiety in LLMs Can Induce Bias", venue: "Helmholtz Munich · 2023" },
    { id: "2510.19687", title: "Are LLMs Sensitive to the Motives Behind Communication?", venue: "Princeton / Anthropic · 2025" },
    { id: "2505.00003", title: "Incorporating Psychological Theories in LLMs — A Review", venue: "Columbia / Cambridge · 2025" },
    { id: "2602.20021", title: "Agents of Chaos", venue: "Northeastern / Harvard / MIT / CMU · 2026" },
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

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={PAPER_1.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Read paper →
          </a>
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

      {/* Divider */}
      <div className="border-t border-almond/60" />

      {/* Paper 2 — In Progress */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-wine/35">
            Working paper
          </p>
          <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-clay border border-clay/30 bg-clay/10 rounded-full px-2 py-0.5">
            In progress
          </span>
        </div>

        <h2 className="font-serif font-bold text-xl sm:text-2xl text-wine leading-tight mb-1">
          {PAPER_2.title}
        </h2>
        <p className="font-sans text-xs text-wine/45 mb-5 italic">{PAPER_2.subtitle}</p>

        <p className="font-sans text-sm text-wine/65 leading-relaxed mb-6 max-w-2xl">
          {PAPER_2.abstract}
        </p>

        {/* Foundation papers */}
        <div>
          <p className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/35 mb-3">
            Foundation papers
          </p>
          <div className="space-y-2">
            {PAPER_2.foundationPapers.map(p => (
              <a
                key={p.id}
                href={`https://arxiv.org/abs/${p.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-lg border border-almond px-4 py-3 bg-almond/10 hover:border-terracotta/40 hover:bg-almond/20 transition-colors group"
              >
                <span className="font-mono text-[9px] text-wine/30 font-bold mt-0.5 flex-shrink-0 group-hover:text-terracotta/60 transition-colors">
                  arXiv
                </span>
                <div>
                  <p className="font-sans text-xs font-semibold text-wine group-hover:text-terracotta transition-colors leading-snug">
                    {p.title}
                  </p>
                  <p className="font-sans text-[10px] text-wine/40 mt-0.5">{p.venue}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
