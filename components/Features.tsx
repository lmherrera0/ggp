"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="section-gap bg-almond/20">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          {t.features.title}
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          {t.features.subtitle}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((f) => (
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
