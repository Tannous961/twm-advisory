"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

export function FAQ() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28"
      >
        <SectionLabel index="09" label="FAQ" />
        <h2
          id="faq-title"
          className="mb-9 font-display text-[clamp(1.75rem,6vw,2.875rem)] leading-[1.18] font-normal sm:mb-11"
        >
          {t(c.faq.title)}
        </h2>
        <div className="flex flex-col border-t border-white/9">
          {c.faq.items.map((item, i) => (
            <details key={i} className="group border-b border-white/9">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-[16px] text-fg sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="transition-colors group-open:text-accent-soft">
                  {t(item.q)}
                </span>
                <span className="relative size-3.5 shrink-0 text-accent transition-transform duration-250 group-open:rotate-45">
                  <span className="absolute top-1.5 left-0 h-[1.5px] w-3.5 bg-current" />
                  <span className="absolute top-0 left-1.5 h-3.5 w-[1.5px] bg-current" />
                </span>
              </summary>
              <p className="max-w-xl pb-7 text-[15px] leading-[1.72] text-muted sm:text-base">
                {t(item.a)}
              </p>
            </details>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
