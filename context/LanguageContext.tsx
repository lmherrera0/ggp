"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Translations } from "@/translations/types";
import { en } from "@/translations/en";
import { es } from "@/translations/es";

type Lang = "en" | "es";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

const translations: Record<Lang, Translations> = { en, es };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("ggp-lang") as Lang | null;
    if (stored === "en" || stored === "es") {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("ggp-lang", newLang);
    document.documentElement.lang = newLang;
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
