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
import { hasEnPillar, stripLocalePath, withLocale } from "./locale";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  c: typeof content;
  localePath: (path: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  children,
  initialLang = "fr",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    setLangState(initialLang);
  }, [initialLang]);

  useEffect(() => {
    try {
      if (initialLang === "en") {
        localStorage.setItem("twm-lang", "en");
        return;
      }

      const path = stripLocalePath(window.location.pathname);
      if (hasEnPillar(path)) {
        localStorage.setItem("twm-lang", "fr");
        return;
      }

      const fromUrl = new URLSearchParams(window.location.search).get("lang");
      if (fromUrl === "fr" || fromUrl === "en") {
        setLangState(fromUrl);
        localStorage.setItem("twm-lang", fromUrl);
        return;
      }

      const saved = localStorage.getItem("twm-lang");
      if (saved === "en") setLangState("en");
    } catch {
      /* ignore */
    }
  }, [initialLang]);

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

  const localePath = useCallback(
    (path: string) => withLocale(path, lang),
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, c: content, localePath }),
    [lang, setLang, localePath],
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

export function useLocalePath() {
  const { localePath } = useI18n();
  return localePath;
}
