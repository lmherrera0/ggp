"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-wine text-almond py-12">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-serif font-semibold text-ivory text-lg mb-1">
              {t.footer.brand}
            </p>
            <p className="text-sm text-pearl">
              {t.footer.createdBy}
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-pearl mb-2">
              {t.footer.licensedUnder}{" "}
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-clay hover:text-ivory transition-colors underline"
              >
                {t.footer.licenseLabel}
              </a>
            </p>
            <a
              href="https://github.com/lmherrera0/ggp-skill"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-clay hover:text-ivory transition-colors"
            >
              {t.footer.github}
            </a>
            <span className="text-pearl/50 mx-1">&middot;</span>
            <a
              href="https://www.linkedin.com/in/lmherrera0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-clay hover:text-ivory transition-colors"
            >
              {t.footer.linkedin}
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-mahogany/40 flex items-center justify-between">
          <p className="text-xs text-pearl/70">
            {t.footer.version} &middot; {t.footer.quote}
          </p>
          <a
            href="#hero"
            className="text-sm text-clay hover:text-ivory transition-colors"
          >
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
