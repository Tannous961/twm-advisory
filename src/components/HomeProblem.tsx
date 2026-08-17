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
            <p className="mb-3 type-label tracking-[0.18em] text-accent">
              {t(c.problem.section)}
            </p>
            <h2 className="type-h2">
              {t(c.problem.title)}{" "}
              <span className="text-muted-2">{t(c.problem.titleMuted)}</span>
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {c.problem.items.map((item, i) => (
              <li
                key={i}
                className="glass-card rounded-2xl p-5 type-body text-muted"
              >
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/approche"
          className="mt-8 inline-flex type-label tracking-[0.14em] text-accent"
        >
          {t(c.nav.approach)} →
        </Link>
      </section>
    </Reveal>
  );
}
