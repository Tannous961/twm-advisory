"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { useI18n, useLocalePath, useT } from "@/lib/i18n";

const OPS_PLATES = [
  {
    key: "cost",
    label: { fr: "Coût", en: "Cost" },
    value: { fr: "Levier", en: "Leverage" },
    note: {
      fr: "Où l'argent part sans retour mesurable.",
      en: "Where spend leaves without measured return.",
    },
  },
  {
    key: "capacity",
    label: { fr: "Capacité", en: "Capacity" },
    value: { fr: "Terrain", en: "Field" },
    note: {
      fr: "Équipes embarquées jusqu'à l'exécution.",
      en: "Teams embedded through execution.",
    },
  },
  {
    key: "margin",
    label: { fr: "Marge", en: "Margin" },
    value: { fr: "Preuve", en: "Proof" },
    note: {
      fr: "Résultat validé avec votre finance.",
      en: "Outcome validated with your finance team.",
    },
  },
] as const;

export function Hero() {
  const { c } = useI18n();
  const t = useT();
  const localePath = useLocalePath();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100dvh-4rem)] w-full items-stretch overflow-hidden bg-bg"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 78% 42%, rgb(var(--accent-rgb) / 0.14), transparent 62%)",
        }}
      />

      <div className="content-wrap relative grid w-full gap-8 py-14 sm:py-18 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-center lg:gap-14 lg:py-24">
        <div className="mandate-blotter relative overflow-hidden rounded-[1.25rem] border border-[color:var(--line)] bg-[color:var(--paper)] px-6 py-8 text-[color:var(--paper-ink)] sm:px-9 sm:py-10">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color:var(--accent)] opacity-80"
            aria-hidden
          />
          <p className="type-label mb-5 tracking-[0.18em] text-[color:var(--accent)]">
            {t(c.hero.eyebrow)}
          </p>
          <h1
            id="hero-title"
            className="type-display mb-6 text-[color:var(--paper-ink)]"
          >
            {t(c.hero.titleBefore)}
            <br />
            <em className="not-italic text-[color:var(--accent)]">
              {t(c.hero.titleEm)}
            </em>
          </h1>
          <p className="type-lead mb-9 max-w-xl text-pretty text-[color:var(--paper-muted)]">
            {t(c.hero.lead)}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={localePath("/demarrer")}
              className="btn-primary rounded-full px-8 py-4 text-center sm:py-4.5"
              onClick={() => track("cta_click", { location: "hero" })}
            >
              {t(c.hero.ctaPrimary)}
            </Link>
            <Link
              href={`${localePath("/")}#parcours`}
              className="type-label tracking-[0.14em] text-[color:var(--paper-muted)] underline-offset-4 transition hover:text-[color:var(--accent)] hover:underline"
            >
              {t(c.hero.ctaSecondary)} →
            </Link>
          </div>
          <p className="type-label mt-7 tracking-[0.12em] text-[color:var(--paper-muted)]">
            {t(c.hero.note)}
          </p>
        </div>

        <aside
          className="ops-floor flex flex-col gap-3"
          aria-label={t({
            fr: "Lecture opérationnelle",
            en: "Operational readout",
          })}
        >
          {OPS_PLATES.map((plate, index) => (
            <article
              key={plate.key}
              className="ops-plate rounded-[1rem] border border-[color:var(--line)] bg-panel px-5 py-4 sm:px-6 sm:py-5"
              style={{ animationDelay: `${0.08 * index}s` }}
            >
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <span className="type-label tracking-[0.16em] text-accent">
                  {t(plate.label)}
                </span>
                <span className="font-mono text-xs tracking-[0.08em] text-muted-3">
                  0{index + 1}
                </span>
              </div>
              <p className="font-display text-2xl leading-none text-fg sm:text-3xl">
                {t(plate.value)}
              </p>
              <p className="mt-3 type-body-sm text-muted">{t(plate.note)}</p>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
