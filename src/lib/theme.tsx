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
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  getTheme,
  themes,
  type ThemeId,
  type ThemeTokens,
} from "./design-system";

type ThemeContextValue = {
  themeId: ThemeId;
  theme: ThemeTokens;
  themes: ThemeTokens[];
  setTheme: (id: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeVars(id: ThemeId) {
  const theme = getTheme(id);
  const root = document.documentElement;
  root.dataset.theme = id;
  for (const [key, value] of Object.entries(theme.vars)) {
    root.style.setProperty(key, value);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    let initial: ThemeId = DEFAULT_THEME;
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
      if (saved && themes.some((t) => t.id === saved)) initial = saved;
    } catch {
      /* ignore */
    }
    setThemeId(initial);
    applyThemeVars(initial);
    try {
      document.cookie = `${THEME_STORAGE_KEY}=${initial}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      /* ignore */
    }
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeId(id);
    applyThemeVars(id);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
      document.cookie = `${THEME_STORAGE_KEY}=${id}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      themeId,
      theme: getTheme(themeId),
      themes,
      setTheme,
    }),
    [themeId, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
