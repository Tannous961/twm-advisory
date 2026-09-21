"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { useI18n, useLocalePath, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function CtaBand() {
  const { c } = useI18n();
  const t = useT();
  const localePath = useLocalePath();

  return (
    <Reveal>
      <section
        className="content-wrap section-pad pt-4"
        aria-labelledby="cta-band-title"
      >
        <div className="mandate-blotter relative overflow-hidden rounded-[1.25rem] border border-[color:var(--line)] bg-[color:var(--paper)] px-6 py-14 text-center text-[color:var(--paper-ink)] sm:px-10 sm:py-20">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color:var(--accent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="type-label mb-6 tracking-[0.16em] text-[color:var(--accent)]">
              {t(c.nav.cta)}
            </p>
            <h2
              id="cta-band-title"
              className="type-h2 text-[color:var(--paper-ink)]"
            >
              {t(c.home.ctaBandTitle)}
              <br />
              <em className="not-italic text-[color:var(--accent)]">
                {t(c.home.ctaBandTitleEm)}
              </em>
            </h2>
            <p className="type-lead mx-auto mt-6 max-w-xl text-pretty text-[color:var(--paper-muted)]">
              {t(c.home.ctaBandBody)}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={localePath("/demarrer")}
                className="btn-primary inline-block rounded-full px-8 py-4 sm:py-4.5"
                onClick={() => track("cta_click", { location: "cta_band" })}
              >
                {t(c.hero.ctaPrimary)}
              </Link>
              <Link
                href={`${localePath("/")}#parcours`}
                className="type-label tracking-[0.14em] text-[color:var(--paper-muted)] underline-offset-4 transition hover:text-[color:var(--accent)] hover:underline"
                onClick={() =>
                  track("cta_click", { location: "cta_band_journey" })
                }
              >
                {t(c.hero.ctaSecondary)} →
              </Link>
            </div>
            <p className="type-label mt-6 tracking-[0.1em] text-[color:var(--paper-muted)]">
              {t(c.home.ctaBandNote)}
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
