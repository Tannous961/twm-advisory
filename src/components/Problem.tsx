"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

export function Problem() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28">
        <SectionLabel index="01" label={t(c.problem.section)} />
        <h2 className="mb-10 max-w-3xl font-display text-[clamp(1.75rem,6vw,2.875rem)] leading-[1.18] font-normal tracking-[-0.012em] sm:mb-14">
          {t(c.problem.title)}
          <br />
          <span className="text-muted-3">{t(c.problem.titleMuted)}</span>
        </h2>
        <div className="flex flex-col border-t border-white/8">
          {c.problem.items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-white/8 py-6 transition-[background,padding] duration-300 hover:bg-[rgba(184,115,51,.04)] hover:pl-3 sm:gap-7 sm:py-7"
            >
              <span className="min-w-10 font-display text-2xl text-[rgba(184,115,51,.55)] sm:min-w-13 sm:text-[30px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="max-w-3xl text-[clamp(1rem,3.5vw,1.3rem)] leading-snug text-[#dcd8d1]">
                {t(item)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
