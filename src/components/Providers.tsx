"use client";

import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const showThemeSwitcher = process.env.NODE_ENV === "development";

  return (
    <ThemeProvider>
      <I18nProvider>
        {children}
        {showThemeSwitcher ? <ThemeSwitcher /> : null}
      </I18nProvider>
    </ThemeProvider>
  );
}
