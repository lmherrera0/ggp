"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="section-gap bg-wine text-ivory pt-24">
      <div className="section-container text-center">
        <p className="text-almond font-sans font-semibold text-sm tracking-widest uppercase mb-6">
          {t.hero.tagline}
        </p>
        <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-ivory leading-tight mb-6">
          {t.hero.title}
        </h1>
        <p className="text-xl sm:text-2xl text-almond max-w-3xl mx-auto mb-3">
          {t.hero.subtitle}
        </p>
        <p className="text-lg text-clay/90 max-w-2xl mx-auto mb-4">
          {t.hero.hook}
        </p>
        <p className="text-clay font-serif font-semibold text-lg sm:text-xl italic mb-10">
          {t.hero.quote}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#platforms" className="btn-primary">
            {t.hero.getStarted}
          </a>
          <a
            href="https://github.com/lmherrera0/ggp-skill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-almond text-almond font-sans font-semibold rounded-bvvg transition-colors duration-200 hover:bg-almond/10 text-base"
          >
            {t.hero.viewOnGithub}
          </a>
        </div>
      </div>
    </section>
  );
}
