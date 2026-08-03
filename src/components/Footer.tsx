"use client";

import { useI18n, useT } from "@/lib/i18n";

export function Footer() {
  const { c } = useI18n();
  const t = useT();

  return (
    <footer className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-10 font-mono text-[11px] tracking-[0.08em] text-[#4c5468] sm:px-6 sm:py-12 lg:px-10">
      <span className="font-display text-[17px] tracking-normal text-fg">
        TWM Advisory
      </span>
      <span>{t(c.footer.city)}</span>
      <span>{t(c.footer.legal)}</span>
    </footer>
  );
}
