"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="section-gap bg-wine text-ivory">
      <div className="section-container text-center">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ivory mb-4">
          {t.cta.title}
        </h2>
        <p className="text-almond max-w-2xl mx-auto mb-8">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#platforms" className="btn-primary">
            {t.cta.getStarted}
          </a>
          <a
            href="https://github.com/lmherrera0/ggp-skill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-almond text-almond font-sans font-semibold rounded-bvvg transition-colors duration-200 hover:bg-almond/10 text-base"
          >
            {t.cta.viewOnGithub}
          </a>
        </div>
      </div>
    </section>
  );
}
