"use client";

import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Lang } from "@/lib/content";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import type { ReactNode } from "react";

export function Providers({
  children,
  initialLang = "fr",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const showThemeSwitcher = process.env.NODE_ENV === "development";

  return (
    <ThemeProvider>
      <I18nProvider initialLang={initialLang}>
        <AnalyticsProvider />
        {children}
        <CookieConsent />
        {showThemeSwitcher ? <ThemeSwitcher /> : null}
      </I18nProvider>
    </ThemeProvider>
  );
}
