"use client";

import Link from "next/link";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function HomeOffers() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="content-wrap section-pad pt-0">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-tight">
            {t(c.offers.title)}
          </h2>
          <Link
            href="/offres"
            className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase"
          >
            {t(c.nav.offers)} →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {c.offers.items.map((item, i) => (
            <Link
              key={i}
              href="/offres"
              className="glass-card group flex flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-7"
            >
              <span className="mb-3 font-mono text-[11px] text-muted-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-display text-xl leading-snug group-hover:text-accent sm:text-2xl">
                {t(item.title)}
              </h3>
              <p className="mt-auto border-t border-white/8 pt-4 font-mono text-[11px] tracking-[0.06em] text-muted-3">
                {t(item.deliverable)}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
