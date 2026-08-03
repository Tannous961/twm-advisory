"use client";

import Link from "next/link";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function HomeArchitecture() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="content-wrap section-pad pt-0">
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-panel p-8 sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full blur-3xl"
            style={{ background: "var(--glow)" }}
          />
          <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
            {t(c.infrastructure.section)}
          </p>
          <h2 className="max-w-2xl font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-tight">
            {t(c.infrastructure.title)}{" "}
            <em className="text-accent italic">{t(c.infrastructure.titleEm)}</em>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
            {t(c.infrastructure.body)}
          </p>
          <Link
            href="/architecture"
            className="btn-primary mt-8 inline-block rounded-full px-6 py-3 text-sm"
          >
            {t(c.home.archTeaser)}
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
