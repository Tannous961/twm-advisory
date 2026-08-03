"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

export function Watch() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionLabel index="09" label={t(c.watch.section)} />
            <h2 className="font-display text-[clamp(1.75rem,6vw,2.875rem)] leading-[1.18] font-normal">
              {t(c.watch.title)}
            </h2>
          </div>
          <div className="lg:pt-14">
            <p className="text-[15px] leading-[1.78] text-muted text-pretty sm:text-base">
              {t(c.watch.body)}
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
