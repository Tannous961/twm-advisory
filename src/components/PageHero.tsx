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
      <div className="content-wrap relative py-16 sm:py-20 lg:py-24">
        <Link
          href="/"
          className="type-label mb-6 inline-flex items-center gap-2 tracking-[0.14em] text-muted-3 transition-colors hover:text-accent"
        >
          ← TWM Advisory
        </Link>
        <p className="type-label mb-4 tracking-[0.18em] text-accent">
          TWM Advisory
        </p>
        <h1 className="type-h1 max-w-3xl">
          {t(data.title)}
        </h1>
        <p className="type-lead mt-6 max-w-2xl text-muted">
          {t(data.lead)}
        </p>
      </div>
    </section>
  );
}
