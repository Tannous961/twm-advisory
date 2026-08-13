export const GTM_ID =
  process.env.NEXT_PUBLIC_GTM_ID?.trim() || "GTM-KQC5BDFC";

/** Optional: only if you also fire GA4 outside GTM (avoid double-counting). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

export const ANALYTICS_CONSENT_COOKIE = "twm-analytics-consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export type AnalyticsConsent = "granted" | "denied" | null;

export type AnalyticsEvent =
  | "page_view"
  | "cta_click"
  | "lang_switched"
  | "intake_started"
  | "intake_step_viewed"
  | "intake_signal_mode"
  | "intake_submitted"
  | "intake_error"
  | "partner_form_submitted"
  | "signal_article_view"
  | "consent_update";

export type AnalyticsParams = {
  page_path?: string;
  page_title?: string;
  location?: string;
  lang?: string;
  step?: string;
  intent?: string;
  score?: number;
  offer?: string;
  mode?: string;
  slug?: string;
  reason?: string;
  analytics_storage?: "granted" | "denied";
};

function ensureDataLayer() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
}

export function getGtmId() {
  return GTM_ID;
}

export function getMeasurementId() {
  return GA_MEASUREMENT_ID;
}

export function isAnalyticsConfigured() {
  return Boolean(GTM_ID);
}

export function getConsent(): AnalyticsConsent {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${ANALYTICS_CONSENT_COOKIE}=([^;]*)`),
  );
  if (!match) return null;
  if (match[1] === "1") return "granted";
  if (match[1] === "0") return "denied";
  return null;
}

function writeConsentCookie(granted: boolean) {
  if (typeof document === "undefined") return;
  const value = granted ? "1" : "0";
  document.cookie = `${ANALYTICS_CONSENT_COOKIE}=${value}; path=/; max-age=${CONSENT_MAX_AGE}; SameSite=Lax`;
}

/** Default Consent Mode v2 — must run before GTM loads. */
export function pushDefaultConsent() {
  if (typeof window === "undefined") return;
  ensureDataLayer();
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
  });
}

/** Re-apply stored consent after GTM boots (returning visitors). */
export function applyStoredConsent() {
  if (typeof window === "undefined" || !GTM_ID) return;
  ensureDataLayer();
  const existing = getConsent();
  if (existing === "granted") {
    window.gtag("consent", "update", { analytics_storage: "granted" });
  } else if (existing === "denied") {
    window.gtag("consent", "update", { analytics_storage: "denied" });
  }
}

export function setConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  writeConsentCookie(granted);
  ensureDataLayer();

  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });

  window.dataLayer.push({
    event: "consent_update",
    analytics_storage: granted ? "granted" : "denied",
  });

  if (granted) {
    pageview(window.location.pathname + window.location.search);
  }
}

function canSend(): boolean {
  return (
    typeof window !== "undefined" &&
    Boolean(GTM_ID) &&
    getConsent() === "granted"
  );
}

/**
 * Push a typed event to the dataLayer for GTM (and optional direct gtag).
 * Never send PII (email, name, company).
 */
export function track(event: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !GTM_ID) return;
  ensureDataLayer();

  if (!canSend() && event !== "consent_update") return;

  window.dataLayer.push({ event, ...params });

  // Direct GA4 only if measurement ID is set outside GTM (usually leave empty).
  if (GA_MEASUREMENT_ID && typeof window.gtag === "function") {
    if (event === "page_view") {
      window.gtag("event", "page_view", {
        page_path: params.page_path,
        page_title: params.page_title ?? document.title,
      });
    } else if (event !== "consent_update") {
      window.gtag("event", event, params);
    }
  }
}

export function pageview(path: string) {
  track("page_view", {
    page_path: path,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  });
}
