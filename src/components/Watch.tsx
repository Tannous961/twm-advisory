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
            <SectionLabel index="08" label={t(c.watch.section)} />
            <h2 className="type-h2">
              {t(c.watch.title)}
            </h2>
          </div>
          <div className="lg:pt-14">
            <p className="type-body text-pretty text-muted">
              {t(c.watch.body)}
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
