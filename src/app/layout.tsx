import type { CSSProperties, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { cookies, headers } from "next/headers";
import { Bricolage_Grotesque, JetBrains_Mono, Public_Sans } from "next/font/google";
import { GoogleTagManagerNoscript } from "@/components/analytics/GoogleTagManager";
import { Providers } from "@/components/Providers";
import { SplashIntro } from "@/components/SplashIntro";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  getTheme,
  themes,
  type ThemeId,
} from "@/lib/design-system";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const SPLASH_COOKIE = "twm-splash-seen";

/** Extreme Modern Slab — sharp display, not editorial serif defaults. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Body copy. */
const publicSans = Public_Sans({
  variable: "--font-public",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

/** Ops labels. */
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070A11" },
    { media: "(prefers-color-scheme: light)", color: "#070A11" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

function resolveThemeId(raw: string | undefined): ThemeId {
  if (raw && themes.some((t) => t.id === raw)) return raw as ThemeId;
  return DEFAULT_THEME;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jar = await cookies();
  const hdrs = await headers();
  const themeId = resolveThemeId(jar.get(THEME_STORAGE_KEY)?.value);
  const theme = getTheme(themeId);
  const forceSplash = hdrs.get("x-twm-force-splash") === "1";
  const splashDone = !forceSplash && jar.has(SPLASH_COOKIE);
  const locale = hdrs.get("x-twm-locale") === "en" ? "en" : "fr";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-theme={themeId}
      data-twm-splash={splashDone ? "done" : "pending"}
      className={`${bricolage.variable} ${publicSans.variable} ${jetbrains.variable} h-full antialiased`}
      style={theme.vars as CSSProperties}
    >
      <body className="min-h-dvh bg-bg font-sans text-fg">
        <GoogleTagManagerNoscript />
        <Providers initialLang={locale}>
          {/* Outside .page-shell so opacity:0 during pending doesn't hide the intro */}
          <SplashIntro />
          {children}
        </Providers>
      </body>
    </html>
  );
}
