"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Problem() {
  const { t } = useTranslation();

  return (
    <section id="problem" className="section-gap">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          {t.problem.title}
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          {t.problem.subtitle}
        </p>

        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto mb-12">
          {t.problem.stakes.map((s) => (
            <div key={s.level} className="card text-center">
              <p className={`font-serif font-bold text-lg mb-2 ${s.color}`}>
                {s.level}
              </p>
              <p className="text-sm text-wine/70">{s.example}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-wine/80 max-w-2xl mx-auto font-serif text-lg">
          {t.problem.conclusion}
        </p>
      </div>
    </section>
  );
}
