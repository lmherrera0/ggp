"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#markers", label: "Markers" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#platforms", label: "Platforms" },
  { href: "#research", label: "Research" },
  { href: "#feedback", label: "Feedback" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          GGP
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
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden font-sans text-sm font-semibold ${
            scrolled ? "text-wine" : "text-ivory"
          }`}
          aria-label="Toggle navigation"
        >
          {open ? "\u2715" : "\u2630"}
        </button>
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
