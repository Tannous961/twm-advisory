"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { useI18n, useT } from "@/lib/i18n";

type PageKey = keyof typeof content.pages;

export function PageHero({ page }: { page: PageKey }) {
  const { c } = useI18n();
  const t = useT();
  const data = c.pages[page];

  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
        }}
      />
      <div className="content-wrap relative py-14 sm:py-18 lg:py-22">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-muted-3 uppercase transition-colors hover:text-accent"
        >
          ← TWM Advisory
        </Link>
        <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
          {t(data.title)}
        </p>
        <h1 className="max-w-3xl font-display text-[clamp(2rem,6vw,3.75rem)] leading-[1.08] tracking-[-0.02em]">
          {t(data.title)}
        </h1>
        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
          {t(data.lead)}
        </p>
      </div>
    </section>
  );
}
