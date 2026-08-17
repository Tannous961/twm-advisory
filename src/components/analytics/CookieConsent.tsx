"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getConsent,
  isAnalyticsConfigured,
  setConsent,
} from "@/lib/analytics";
import { useI18n, useT } from "@/lib/i18n";

export function CookieConsent() {
  const { c } = useI18n();
  const t = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isAnalyticsConfigured()) return;
    if (getConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const cookie = c.cookieConsent;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-[color:var(--line)] bg-bg/95 p-4 shadow-[0_-12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-5"
    >
      <div className="content-wrap flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p
            id="cookie-consent-title"
            className="mb-1.5 type-label tracking-[0.14em] text-muted-3"
          >
            {t(cookie.title)}
          </p>
          <p id="cookie-consent-desc" className="text-sm leading-relaxed text-muted-2">
            {t(cookie.body)}{" "}
            <Link
              href="/confidentialite"
              className="text-fg underline decoration-[color:var(--line)] underline-offset-4 transition-colors hover:text-accent"
            >
              {t(cookie.privacy)}
            </Link>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:shrink-0">
          <button
            type="button"
            className="rounded-full border border-[color:var(--line)] px-5 py-2.5 text-sm text-muted-2 transition-colors hover:border-fg/40 hover:text-fg"
            onClick={() => {
              setConsent(false);
              setVisible(false);
            }}
          >
            {t(cookie.decline)}
          </button>
          <button
            type="button"
            className="btn-primary rounded-full px-5 py-2.5 text-sm"
            onClick={() => {
              setConsent(true);
              setVisible(false);
            }}
          >
            {t(cookie.accept)}
          </button>
        </div>
      </div>
    </div>
  );
}
