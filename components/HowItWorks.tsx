"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="section-gap">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          {t.howItWorks.title}
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          {t.howItWorks.subtitle}
        </p>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-almond -translate-x-1/2" />

          <div className="grid gap-8 lg:gap-12">
            {t.howItWorks.phases.map((phase, i) => (
              <div
                key={i}
                className="lg:grid lg:grid-cols-2 lg:gap-12 items-center"
              >
                <div
                  className={`${
                    i % 2 === 1 ? "lg:order-2 lg:text-left" : ""
                  }`}
                >
                  <div className="card">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex-shrink-0 w-12 h-12 rounded-full bg-terracotta text-ivory font-serif font-bold text-xl flex items-center justify-center">
                        {i + 1}
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-wine">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-wine/70 leading-relaxed mb-4">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-wine/80"
                        >
                          <span className="text-sage mt-0.5 flex-shrink-0">
                            &#10003;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div
                  className={`hidden lg:block ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mode comparison */}
        <div className="mt-12 card max-w-2xl mx-auto">
          <h3 className="font-serif font-semibold text-lg text-wine mb-4 text-center">
            {t.howItWorks.modeTitle}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center p-4 bg-ivory rounded-bvvg">
              <p className="font-semibold text-mahogany mb-1">
                {t.howItWorks.fastMode.title}
              </p>
              <p className="text-wine/70">
                {t.howItWorks.fastMode.description}
              </p>
            </div>
            <div className="text-center p-4 bg-ivory rounded-bvvg">
              <p className="font-semibold text-mahogany mb-1">
                {t.howItWorks.deepAudit.title}
              </p>
              <p className="text-wine/70">
                {t.howItWorks.deepAudit.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
