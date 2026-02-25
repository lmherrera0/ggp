"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Research() {
  const { t } = useTranslation();

  return (
    <section id="research" className="section-gap bg-almond/20">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          {t.research.title}
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          {t.research.subtitle}
        </p>

        {/* Paper card */}
        <div className="card max-w-4xl mx-auto mb-12">
          <p className="font-mono text-xs font-semibold text-terracotta mb-3 uppercase tracking-wider">
            {t.research.paper.published}
          </p>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-wine mb-2 leading-tight">
            {t.research.paper.paperTitle}
          </h3>
          <p className="text-sm text-wine/60 mb-4">
            {t.research.paper.authorInfo} &middot; Independent Researcher, London, UK
            &middot; ORCID: 0009-0008-1981-2953 &middot;{" "}
            <a
              href="https://www.linkedin.com/in/lmherrera0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-terracotta"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-wine/70 leading-relaxed mb-6">
            {t.research.paper.abstract}
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 mb-6">
            {t.research.paper.keywords.map((kw) => (
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
              href={t.research.paper.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              {t.research.paper.readPaper}
            </a>
            <a
              href={t.research.paper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              {t.research.paper.downloadPdf}
            </a>
          </div>
        </div>

        {/* Architecture components */}
        <h3 className="font-serif font-semibold text-xl text-wine text-center mb-8">
          {t.research.architectureTitle}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-12">
          {t.research.components.map((c, i) => (
            <div key={i} className="card text-center">
              <span className="inline-flex w-10 h-10 rounded-full bg-terracotta text-ivory font-serif font-bold text-lg items-center justify-center mb-3">
                {i + 1}
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

        {/* Paper features */}
        <div className="card max-w-4xl mx-auto mb-12">
          <h3 className="font-serif font-semibold text-lg text-wine mb-6 text-center">
            {t.research.paperFeaturesTitle}
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.research.paperFeatures.map((f, i) => (
              <div key={i} className="text-center p-4 bg-ivory rounded-bvvg">
                <p className="font-semibold text-terracotta text-sm mb-2">
                  {f.title}
                </p>
                <p className="text-xs text-wine/70 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Theoretical foundations */}
        <div className="card max-w-3xl mx-auto">
          <h3 className="font-serif font-semibold text-lg text-wine mb-4 text-center">
            {t.research.foundationsTitle}
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.research.foundations.map((f) => (
              <div
                key={f.label}
                className="text-center p-4 bg-ivory rounded-bvvg"
              >
                <p className="font-semibold text-terracotta text-sm mb-1">
                  {f.label}
                </p>
                <p className="text-xs text-wine/70">{f.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-wine/60 text-center mt-4 italic">
            {t.research.designPrinciple}
          </p>
          <p className="text-xs text-wine/60 text-center mt-3">
            {t.research.citationText}{" "}
            <a
              href={t.research.paper.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-terracotta"
            >
              {t.research.citationDoi}
            </a>{" "}
            &middot; CC BY 4.0
          </p>
        </div>
      </div>
    </section>
  );
}
