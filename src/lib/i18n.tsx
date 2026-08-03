"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Lang } from "./content";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  c: typeof content;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const fromUrl = new URLSearchParams(window.location.search).get("lang");
      if (fromUrl === "fr" || fromUrl === "en") {
        setLangState(fromUrl);
        localStorage.setItem("twm-lang", fromUrl);
        return;
      }
      const saved = localStorage.getItem("twm-lang");
      if (saved === "fr" || saved === "en") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem("twm-lang", next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, c: content }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  const { lang } = useI18n();
  return useCallback(
    (obj: Record<Lang, string>) => obj[lang],
    [lang],
  );
}
