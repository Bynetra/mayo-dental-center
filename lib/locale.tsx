"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/content/translations";
import { getDirection } from "@/lib/utils";

export type Locale = "en" | "ar";

interface LocaleContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  toggleLocale: () => void;
  t: typeof translations["en"];
  dir: "ltr" | "rtl";
  isRtl: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Check URL query param first
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const queryLang = urlParams.get("lang") as Locale | null;
      if (queryLang === "en" || queryLang === "ar") {
        setLocaleState(queryLang);
        return;
      }
    }

    // Check saved preference (lucida_locale or lucida-lang)
    const saved = (localStorage.getItem("lucida_locale") ||
      localStorage.getItem("lucida-lang")) as Locale | null;

    if (saved && (saved === "en" || saved === "ar")) {
      setLocaleState(saved);
    } else {
      // Check browser language
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "ar") {
        setLocaleState("ar");
      }
    }
  }, []);

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    localStorage.setItem("lucida_locale", loc);
    localStorage.setItem("lucida-lang", loc);
    document.documentElement.lang = loc;
    document.documentElement.dir = getDirection(loc);
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  const dir = getDirection(locale);
  const isRtl = locale === "ar";
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t,
        dir,
        isRtl,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
