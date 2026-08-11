"use client";

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
          <p className="max-w-3xl font-display text-[clamp(1.35rem,4vw,2rem)] leading-[1.35] text-balance">
            {t(c.offers.thread.body)}
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="content-wrap section-pad pt-0">
          <SectionLabel index="01" label={t(c.offers.section)} />
          <h2 className="mb-10 font-display text-[clamp(1.75rem,6vw,2.875rem)] leading-[1.18] font-normal sm:mb-14">
            {t(c.offers.title)}
          </h2>

          <ol className="flex flex-col gap-6 sm:gap-8">
            {c.offers.items.map((item, i) => {
              const formats =
                "formats" in item && item.formats ? item.formats : null;

              return (
                <li
                  key={i}
                  className="glass-card relative overflow-hidden rounded-3xl p-7 sm:p-9"
                >
                  <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
                    <span className="font-mono text-[13px] tracking-[0.14em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3 className="mb-3 font-display text-[clamp(1.35rem,3vw,1.85rem)] leading-snug font-normal">
                        {t(item.title)}
                      </h3>
                      <p className="mb-6 max-w-3xl text-[15px] leading-[1.72] text-muted sm:text-base">
                        {t(item.body)}
                      </p>

                      <dl className="grid gap-4 border-t border-white/8 pt-5 sm:grid-cols-2">
                        <div>
                          <dt className="mb-1.5 font-mono text-[10px] tracking-[0.14em] text-muted-3 uppercase">
                            {t(c.offers.labels.deliverable)}
                          </dt>
                          <dd className="text-[14px] leading-relaxed text-fg">
                            {t(item.deliverable)}
                          </dd>
                        </div>
                        <div>
                          <dt className="mb-1.5 font-mono text-[10px] tracking-[0.14em] text-muted-3 uppercase">
                            {t(c.offers.labels.audience)}
                          </dt>
                          <dd className="text-[14px] leading-relaxed text-fg">
                            {t(item.audience)}
                          </dd>
                        </div>
                      </dl>

                      {formats ? (
                        <div className="mt-7 border-t border-white/8 pt-6">
                          <p className="mb-4 font-mono text-[10px] tracking-[0.14em] text-muted-3 uppercase">
                            {t(c.offers.labels.formats)}
                          </p>
                          <ul className="grid gap-4 sm:grid-cols-3">
                            {formats.map((format, fi) => (
                              <li key={fi} className="min-w-0">
                                <p className="mb-1.5 font-display text-lg leading-snug">
                                  {t(format.title)}
                                </p>
                                <p className="text-[13px] leading-relaxed text-muted">
                                  {t(format.body)}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
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
            <h2 className="font-display text-[clamp(1.75rem,6vw,2.875rem)] leading-[1.18] font-normal">
              {t(c.offers.ecosystem.title)}
              <br />
              <em className="text-accent italic">
                {t(c.offers.ecosystem.titleEm)}
              </em>
            </h2>
            <p className="text-[15px] leading-[1.78] text-muted text-pretty sm:text-base">
              {t(c.offers.ecosystem.body)}
            </p>
          </div>
        </section>
      </Reveal>
    </>
  );
}
