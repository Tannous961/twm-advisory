"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

export function Offers() {
  const { c } = useI18n();
  const t = useT();

  return (
    <>
      <Reveal>
        <section className="content-wrap section-pad pb-8 sm:pb-10">
          <SectionLabel index="00" label={t(c.offers.thread.section)} />
          <p className="max-w-3xl type-h3 leading-[1.35] text-balance">
            {t(c.offers.thread.body)}
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="content-wrap section-pad pt-0">
          <SectionLabel index="01" label={t(c.offers.section)} />
          <h2 className="mb-10 type-h2 sm:mb-14">
            {t(c.offers.title)}
          </h2>

          <ol className="relative flex flex-col gap-6 before:absolute before:top-8 before:bottom-8 before:left-[1.45rem] before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-accent/20 before:to-transparent sm:gap-8 sm:before:left-[2rem]">
            {c.offers.items.map((item, i) => {
              const formats =
                "formats" in item && item.formats ? item.formats : null;

              return (
                <li
                  key={i}
                  className="glass-card group relative overflow-hidden rounded-3xl p-7 pl-16 transition duration-300 hover:border-accent/25 sm:p-9 sm:pl-24"
                >
                  <span className="type-caption absolute top-7 left-[1.45rem] z-2 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-accent/40 bg-panel text-accent shadow-[0_0_0_6px_var(--bg)] transition group-hover:border-accent group-hover:bg-accent group-hover:text-ink sm:top-9 sm:left-[2rem] sm:size-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-10 -right-3 font-display text-[9rem] leading-none text-white/[0.025] transition group-hover:text-accent/[0.045] sm:text-[12rem]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative min-w-0">
                    <p className="mb-3 type-caption text-muted-3">
                      {t(c.offers.thread.section)} ·{" "}
                      {String(i + 1).padStart(2, "0")}
                    </p>
                      <h3 className="mb-3 type-h3 leading-snug">
                        {t(item.title)}
                      </h3>
                      <p className="mb-6 max-w-3xl type-body text-muted">
                        {t(item.body)}
                      </p>

                      <dl className="grid gap-4 border-t border-white/8 pt-5 sm:grid-cols-2">
                        <div>
                          <dt className="mb-1.5 type-caption text-muted-3">
                            {t(c.offers.labels.deliverable)}
                          </dt>
                          <dd className="type-body-sm text-fg">
                            {t(item.deliverable)}
                          </dd>
                        </div>
                        <div>
                          <dt className="mb-1.5 type-caption text-muted-3">
                            {t(c.offers.labels.audience)}
                          </dt>
                          <dd className="type-body-sm text-fg">
                            {t(item.audience)}
                          </dd>
                        </div>
                      </dl>

                      {formats ? (
                        <div className="mt-7 border-t border-white/8 pt-6">
                          <p className="mb-4 type-caption text-muted-3">
                            {t(c.offers.labels.formats)}
                          </p>
                          <ul className="grid gap-4 sm:grid-cols-3">
                            {formats.map((format, fi) => (
                              <li key={fi} className="min-w-0">
                                <p className="mb-1.5 font-display text-lg leading-snug">
                                  {t(format.title)}
                                </p>
                                <p className="type-body-sm text-muted">
                                  {t(format.body)}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section
          id="ecosysteme"
          className="content-wrap section-pad pt-0"
        >
          <SectionLabel index="02" label={t(c.offers.ecosystem.section)} />
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <h2 className="type-h2">
              {t(c.offers.ecosystem.title)}
              <br />
              <em className="text-accent italic">
                {t(c.offers.ecosystem.titleEm)}
              </em>
            </h2>
            <div>
              <p className="type-body text-pretty text-muted">
                {t(c.offers.ecosystem.body)}
              </p>
              <Link
                href="/partenaires"
                className="mt-6 inline-flex type-label tracking-[0.14em] text-accent"
              >
                {t(c.offers.ecosystem.cta)} →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
