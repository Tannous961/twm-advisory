"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

export function Approach() {
  const { c } = useI18n();
  const t = useT();
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    const check = () => {
      if (line.getBoundingClientRect().top < window.innerHeight * 0.85) {
        line.style.width = "100%";
        window.removeEventListener("scroll", check);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    const fallback = window.setTimeout(() => {
      line.style.width = "100%";
    }, 3000);
    return () => {
      window.removeEventListener("scroll", check);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Reveal>
      <section
        id="approche"
        className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28"
      >
        <SectionLabel index="02" label="Forward deployed" />
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <h2 className="font-display text-[clamp(1.75rem,6vw,2.875rem)] leading-[1.18] font-normal tracking-[-0.012em]">
            {t(c.approach.title)}
            <br />
            <em className="text-accent italic">{t(c.approach.titleEm)}</em>
          </h2>
          <div>
            <p className="mb-5 text-[15px] leading-[1.78] text-muted text-pretty sm:text-base">
              {t(c.approach.body)}
            </p>
            <p className="border-l-2 border-accent bg-[rgba(184,115,51,.06)] px-5 py-4 text-[15px] leading-[1.7] text-[#c3c8d2]">
              {t(c.approach.quote)}
            </p>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-18">
          <div className="absolute top-[5px] right-0 left-0 hidden h-px bg-white/8 md:block" />
          <div
            ref={lineRef}
            className="absolute top-[5px] left-0 hidden h-px w-0 bg-linear-to-r from-accent to-accent-soft shadow-[0_0_10px_rgba(184,115,51,.6)] transition-[width] duration-[1400ms] ease-[cubic-bezier(.22,.61,.36,1)] md:block"
          />
          <div className="grid gap-8 md:grid-cols-3 md:gap-0">
            {c.approach.steps.map((step, i) => (
              <div
                key={i}
                className={`relative border-l border-white/6 pl-6 md:border-l md:pl-8 ${
                  i === 0 ? "md:border-l-0 md:pl-0 md:pr-8" : ""
                } ${i === 2 ? "md:pl-8" : "md:pr-8"}`}
              >
                <span
                  className={`absolute top-0 left-0 size-[11px] rotate-45 bg-accent shadow-[0_0_14px_rgba(184,115,51,.8)] md:left-0 ${
                    i === 0 ? "md:left-0" : "md:-left-[5px]"
                  }`}
                />
                <div className="mb-3.5 font-mono text-[10px] tracking-[0.2em] text-muted-3 uppercase">
                  {t(step.label)}
                </div>
                <h3 className="mb-3 font-display text-[22px] font-normal sm:text-[26px]">
                  {t(step.title)}
                </h3>
                <p className="text-[15px] leading-[1.7] text-muted">{t(step.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
