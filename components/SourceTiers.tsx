"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function SourceTiers() {
  const { t } = useTranslation();

  return (
    <section id="source-tiers" className="section-gap bg-almond/20">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          {t.sourceTiers.title}
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          {t.sourceTiers.subtitle}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {t.sourceTiers.tiers.map((tier) => (
            <div key={tier.tier} className="card">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`w-8 h-8 rounded-full ${tier.color} text-ivory font-mono font-bold text-sm flex items-center justify-center`}
                >
                  {tier.tier}
                </span>
                <span className="font-serif font-semibold text-wine">
                  {tier.label}
                </span>
              </div>
              <p className="text-xs font-mono text-terracotta mb-2">
                {t.sourceTiers.trustLabel}: {tier.trust}
              </p>
              <p className="text-sm text-wine/70 leading-relaxed">
                {tier.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
