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
              className={`px-5 py-10 sm:px-7 sm:py-12 ${
                i % 2 === 0 ? "border-r border-white/6" : ""
              } ${i < 2 ? "border-b border-white/6 lg:border-b-0" : ""} ${
                i < 3 ? "lg:border-r lg:border-white/6" : ""
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
