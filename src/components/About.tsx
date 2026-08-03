"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

export function About() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section
        id="a-propos"
        className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto flex w-full max-w-sm justify-center lg:max-w-md">
            <div className="absolute inset-[-6%] bg-[radial-gradient(circle_at_50%_40%,rgba(184,115,51,.22)_0%,rgba(7,10,17,0)_70%)] blur-xl" />
            <div className="relative w-full">
              <div className="absolute -top-3 -left-3 size-16 border-t border-l border-accent sm:size-19" />
              <div className="absolute -right-3 -bottom-3 size-16 border-r border-b border-accent sm:size-19" />
              <div className="relative aspect-4/5 overflow-hidden border border-white/10">
                <Image
                  src="/uploads/WhatsApp Image 2026-07-29 at 15.14.56 (2).jpeg"
                  alt="Fondateur de TWM Advisory — 17 ans d'expérience e-commerce et direction d'organisation"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover object-[50%_22%] saturate-[.88] contrast-[1.04]"
                />
              </div>
            </div>
          </div>

          <div>
            <SectionLabel index="06" label={t(c.about.section)} />
            <h2 className="mb-6 font-display text-[clamp(1.75rem,6vw,2.875rem)] leading-[1.18] font-normal">
              {t(c.about.title)}
            </h2>
            <p className="mb-4 text-[15px] leading-[1.78] text-muted text-pretty sm:text-base">
              {t(c.about.p1)}
            </p>
            <p className="mb-4 text-[15px] leading-[1.78] text-muted text-pretty sm:text-base">
              {t(c.about.p2)}
            </p>
            <p className="mb-7 text-[15px] leading-[1.78] text-muted text-pretty sm:text-base">
              {t(c.about.p3)}
            </p>
            <div className="flex flex-wrap gap-px border border-white/7 bg-white/7">
              {c.about.metrics.map((m, i) => (
                <div
                  key={i}
                  className="min-w-[120px] flex-1 bg-panel px-5 py-4.5"
                >
                  <div className="font-display text-2xl text-accent">{m.value}</div>
                  <div className="mt-1.5 font-mono text-[10px] tracking-[0.12em] text-muted-3">
                    {t(m.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
