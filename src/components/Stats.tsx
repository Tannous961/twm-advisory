"use client";

import { Reveal } from "./Reveal";
import { useI18n, useT } from "@/lib/i18n";

export function Stats() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="border-y border-white/7 bg-white/[0.014]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-3">
          {c.stats.map((stat, i) => (
            <div
              key={i}
              className={`px-5 py-10 sm:px-7 sm:py-12 ${
                i < c.stats.length - 1
                  ? "border-b border-white/6 sm:border-b-0 sm:border-r sm:border-white/6"
                  : ""
              }`}
            >
              <div className="type-stat text-accent">
                {stat.value}
                {stat.suffix.fr || stat.suffix.en ? (
                  <span className="type-stat-unit text-fg">
                    {" "}
                    {t(stat.suffix)}
                  </span>
                ) : null}
              </div>
              <p className="type-label mt-4 tracking-[0.1em] text-muted-2">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
