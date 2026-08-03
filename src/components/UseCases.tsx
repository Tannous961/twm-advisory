"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

export function UseCases() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section
        id="cas-usage"
        aria-labelledby="usecases-title"
        className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28"
      >
        <SectionLabel index="03" label={t(c.useCases.section)} />
        <h2
          id="usecases-title"
          className="mb-4 max-w-3xl font-display text-[clamp(1.75rem,6vw,2.875rem)] leading-[1.18] font-normal"
        >
          {t(c.useCases.title)}
        </h2>
        <p className="mb-10 max-w-2xl text-[15px] leading-[1.75] text-muted sm:mb-12 sm:text-base">
          {t(c.useCases.lead)}
        </p>
        <div className="grid gap-px border border-white/7 bg-white/7 sm:grid-cols-2 lg:grid-cols-3">
          {c.useCases.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 bg-panel p-6 sm:p-7"
            >
              <span className="font-mono text-[11px] tracking-[0.16em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[20px] leading-snug font-normal sm:text-[22px]">
                {t(item.title)}
              </h3>
              <p className="text-[14px] leading-[1.68] text-muted sm:text-[15px]">
                {t(item.body)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
