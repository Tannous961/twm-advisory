import type { Lang } from "./content";

export type Locale = Lang;

/** Marketing pillars with real crawlable `/en/...` SSR pages. */
export const EN_PILLAR_PATHS = [
  "/",
  "/a-propos",
  "/faq",
  "/performance",
  "/methode",
  "/demarrer",
] as const;

const enPillarSet = new Set<string>(EN_PILLAR_PATHS);

export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.length > 1 && withSlash.endsWith("/")
    ? withSlash.slice(0, -1)
    : withSlash;
}

export function hasEnPillar(path: string): boolean {
  return enPillarSet.has(normalizePath(path));
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

/** Strip `/en` prefix → FR path. */
export function stripLocalePath(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    return normalizePath(rest || "/");
  }
  return normalizePath(pathname);
}

/** Prefix FR path with `/en` when an EN pillar exists. */
export function withLocale(path: string, locale: Locale): string {
  const base = normalizePath(path);
  if (locale !== "en") return base;
  if (!hasEnPillar(base)) return base;
  return base === "/" ? "/en" : `/en${base}`;
}

/** Path to navigate to when switching language from the current pathname. */
export function switchLocalePath(pathname: string, next: Locale): string | null {
  const base = stripLocalePath(pathname);
  if (next === "en") {
    if (!hasEnPillar(base)) return null;
    return withLocale(base, "en");
  }
  if (getLocaleFromPathname(pathname) === "en") return base;
  return null;
}
