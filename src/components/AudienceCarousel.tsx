"use client";

import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function AudienceCarousel() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="section-pad">
        <div className="content-wrap">
          <h2 className="mb-8 type-h2">
            {t(c.audience.title)}
          </h2>
        </div>
        <div className="audience-rail flex gap-4 overflow-x-auto px-[var(--page-pad)] pb-4">
          {c.audience.items.map((item, i) => (
            <article
              key={i}
              className="glass-card min-w-[260px] flex-1 snap-start rounded-3xl p-6 sm:min-w-[300px]"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-2xl bg-accent/15 font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="type-h3 mb-2">{t(item.title)}</h3>
              <p className="text-sm leading-relaxed text-muted">{t(item.body)}</p>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
