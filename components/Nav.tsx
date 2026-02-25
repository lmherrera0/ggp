"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/context/LanguageContext";

export default function Nav() {
  const { t, lang, setLang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#problem", label: t.nav.problem },
    { href: "#markers", label: t.nav.markers },
    { href: "#features", label: t.nav.features },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#platforms", label: t.nav.platforms },
    { href: "#research", label: t.nav.research },
    { href: "#feedback", label: t.nav.feedback },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "es" : "en");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ivory/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-14">
        <a
          href="#"
          className={`font-serif font-bold text-lg transition-colors ${
            scrolled ? "text-wine" : "text-ivory"
          }`}
        >
          {t.nav.brand}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-sans text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-wine/70 hover:text-terracotta"
                  : "text-ivory/80 hover:text-ivory"
              }`}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className={`font-sans text-xs font-bold px-2.5 py-1 rounded-bvvg border transition-colors ${
              scrolled
                ? "border-terracotta text-terracotta hover:bg-terracotta hover:text-ivory"
                : "border-ivory/60 text-ivory/80 hover:bg-ivory/10 hover:text-ivory"
            }`}
            aria-label={lang === "en" ? "Cambiar a espa\u00F1ol" : "Switch to English"}
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className={`font-sans text-xs font-bold px-2 py-1 rounded-bvvg border transition-colors ${
              scrolled
                ? "border-terracotta text-terracotta"
                : "border-ivory/60 text-ivory/80"
            }`}
            aria-label={lang === "en" ? "Cambiar a espa\u00F1ol" : "Switch to English"}
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className={`font-sans text-sm font-semibold ${
              scrolled ? "text-wine" : "text-ivory"
            }`}
            aria-label="Toggle navigation"
          >
            {open ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ivory/95 backdrop-blur border-t border-almond">
          <div className="section-container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm font-semibold text-wine/70 hover:text-terracotta"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
