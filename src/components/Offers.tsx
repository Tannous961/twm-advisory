"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

export function Offers() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section
        id="offres"
        className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28"
      >
        <SectionLabel index="03" label={t(c.offers.section)} />
        <h2 className="mb-10 font-display text-[clamp(1.75rem,6vw,2.875rem)] leading-[1.18] font-normal sm:mb-12">
          {t(c.offers.title)}
        </h2>
        <div className="grid gap-px border border-white/7 bg-white/7 sm:grid-cols-2 lg:grid-cols-3">
          {c.offers.items.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-3.5 overflow-hidden bg-panel p-7 transition duration-300 hover:-translate-y-1 hover:bg-panel-2 sm:p-8"
            >
              <span className="absolute top-[-14px] right-2 font-display text-[82px] leading-none text-white/[0.035]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="size-1.5 rotate-45 bg-accent" />
              <h3 className="font-display text-[22px] leading-snug font-normal sm:text-2xl">
                {t(item.title)}
              </h3>
              <p className="text-[15px] leading-[1.68] text-muted">{t(item.body)}</p>
              <p className="mt-auto border-t border-white/7 pt-4 font-mono text-[11px] tracking-[0.06em] text-muted-3">
                {t(item.meta)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
