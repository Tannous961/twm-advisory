"use client";

import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const showThemeSwitcher = process.env.NODE_ENV === "development";

  return (
    <ThemeProvider>
      <I18nProvider>
        <AnalyticsProvider />
        {children}
        <CookieConsent />
        {showThemeSwitcher ? <ThemeSwitcher /> : null}
      </I18nProvider>
    </ThemeProvider>
  );
}
