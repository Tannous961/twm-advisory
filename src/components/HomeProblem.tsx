"use client";

import Link from "next/link";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function HomeProblem() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="content-wrap section-pad">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
          <div>
            <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
              {t(c.problem.section)}
            </p>
            <h2 className="font-display text-[clamp(1.75rem,5vw,2.875rem)] leading-[1.15]">
              {t(c.problem.title)}{" "}
              <span className="text-muted-2">{t(c.problem.titleMuted)}</span>
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {c.problem.items.map((item, i) => (
              <li
                key={i}
                className="glass-card rounded-2xl p-5 text-[15px] leading-relaxed text-muted"
              >
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/approche"
          className="mt-8 inline-flex font-mono text-[11px] tracking-[0.14em] text-accent uppercase"
        >
          {t(c.nav.approach)} →
        </Link>
      </section>
    </Reveal>
  );
}
