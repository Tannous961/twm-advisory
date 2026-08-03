"use client";

import Link from "next/link";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function HomeFeatures() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="content-wrap section-pad">
        <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
          {t(c.home.featuresEyebrow)}
        </p>
        <h2 className="mb-10 max-w-3xl font-display text-[clamp(1.75rem,5vw,2.875rem)] leading-[1.15]">
          {t(c.home.featuresTitle)}{" "}
          <em className="text-accent italic">{t(c.home.featuresTitleEm)}</em>
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {c.approach.steps.map((step, i) => (
            <article
              key={i}
              className="glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.16em] text-muted-3 uppercase">
                  {t(step.label)}
                </span>
                <span className="flex size-9 items-center justify-center rounded-full bg-accent/15 text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-3 font-display text-[22px] leading-snug">
                {t(step.title)}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">{t(step.body)}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/approche"
            className="btn-secondary rounded-full px-6 py-3 text-sm"
          >
            {t(c.nav.approach)}
          </Link>
          <Link href="/offres" className="btn-primary rounded-full px-6 py-3 text-sm">
            {t(c.nav.offers)}
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
