"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Markers() {
  const { t } = useTranslation();

  return (
    <section id="markers" className="section-gap">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          {t.markers.title}
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          {t.markers.subtitle}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.markers.items.map((m) => (
            <div key={m.label} className="card text-center">
              <div className="text-3xl mb-3">{m.emoji}</div>
              <span
                className={`inline-block font-mono font-semibold text-sm px-3 py-1 rounded-full ${m.color} text-ivory mb-3`}
              >
                {m.label}
              </span>
              <p className="text-sm text-wine/80 leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
