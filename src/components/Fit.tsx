"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

export function Fit() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section
        id="fit"
        aria-labelledby="fit-title"
        className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28"
      >
        <SectionLabel index="04" label={t(c.fit.section)} />
        <h2
          id="fit-title"
          className="mb-10 type-h2 sm:mb-12"
        >
          {t(c.fit.title)}
        </h2>
        <div className="grid gap-px border border-white/7 bg-white/7 lg:grid-cols-2">
          <div className="bg-panel p-6 sm:p-9">
            <div className="mb-6 flex items-center gap-2.5">
              <span className="size-1.5 rotate-45 bg-accent" />
              <span className="type-label tracking-[0.16em] text-accent">
                {t(c.fit.yesTitle)}
              </span>
            </div>
            <ul className="flex flex-col">
              {c.fit.yes.map((item, i) => (
                <li
                  key={i}
                  className="type-body border-t border-[color:var(--line)] py-4 text-fg"
                >
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-panel-2 p-6 sm:p-9">
            <div className="mb-6 flex items-center gap-2.5">
              <span className="size-1.5 rotate-45 bg-muted-3" />
              <span className="type-label tracking-[0.16em] text-muted-2">
                {t(c.fit.noTitle)}
              </span>
            </div>
            <ul className="flex flex-col">
              {c.fit.no.map((item, i) => (
                <li
                  key={i}
                  className="type-body border-t border-[color:var(--line)] py-4 text-muted"
                >
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
