"use client";

import { useI18n, useT } from "@/lib/i18n";

export function SkipLink() {
  const { c } = useI18n();
  const t = useT();

  return (
    <a href="#main-content" className="skip-link">
      {t(c.nav.skipToContent)}
    </a>
  );
}
