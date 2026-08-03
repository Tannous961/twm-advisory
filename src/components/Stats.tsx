"use client";

import { Reveal } from "./Reveal";
import { useI18n, useT } from "@/lib/i18n";

export function Stats() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="border-y border-white/7 bg-white/[0.014]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {c.stats.map((stat, i) => (
            <div
              key={i}
              className={`px-4 py-8 sm:px-6 sm:py-10 ${
                i % 2 === 0 ? "border-r border-white/6" : ""
              } ${i < 2 ? "border-b border-white/6 lg:border-b-0" : ""} ${
                i < 3 ? "lg:border-r lg:border-white/6" : ""
              }`}
            >
              <div className="font-display text-3xl leading-none text-accent sm:text-[46px]">
                {stat.value}
                {stat.suffix.fr || stat.suffix.en ? (
                  <span className="text-lg text-fg sm:text-[22px]">
                    {" "}
                    {t(stat.suffix)}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-[0.1em] text-muted-2 sm:mt-3.5 sm:text-[11px]">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
