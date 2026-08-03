"use client";

import Image from "next/image";
import { useT, useI18n } from "@/lib/i18n";

export function Hero() {
  const { c } = useI18n();
  const t = useT();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-18 lg:pb-20"
    >
      <div className="pointer-events-none absolute -top-24 -right-16 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(184,115,51,.14)_0%,rgba(7,10,17,0)_68%)] sm:size-[560px] lg:size-[660px]" />

      <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <div
            className="animate-rise mb-5 flex items-start gap-3 sm:mb-6"
            style={{ animationDelay: "0s" }}
          >
            <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-accent" />
            <span className="font-mono text-[10px] leading-relaxed tracking-[0.14em] text-accent uppercase sm:text-[11px] sm:tracking-[0.18em]">
              {t(c.hero.eyebrow)}
            </span>
          </div>

          <h1
            id="hero-title"
            className="animate-rise mb-5 font-display text-[clamp(2.25rem,9vw,4.5rem)] leading-[1.05] font-normal tracking-[-0.02em] sm:mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            {t(c.hero.titleBefore)}
            <br />
            <em className="text-accent not-italic italic">{t(c.hero.titleEm)}</em>
          </h1>

          <p
            className="animate-rise mb-7 max-w-xl text-[15px] leading-relaxed text-muted text-pretty sm:mb-8 sm:text-[17px] sm:leading-[1.72]"
            style={{ animationDelay: "0.2s" }}
          >
            {t(c.hero.lead)}
          </p>

          <div
            className="animate-rise flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              className="btn-primary px-6 py-3.5 text-center text-[15px] sm:px-7 sm:py-4"
            >
              {t(c.hero.ctaPrimary)}
            </a>
            <a
              href="#cas-usage"
              className="btn-secondary px-6 py-3.5 text-center text-[15px] sm:px-7 sm:py-4"
            >
              {t(c.hero.ctaSecondary)}
            </a>
          </div>

          <p
            className="animate-rise mt-5 font-mono text-[11px] tracking-[0.1em] text-muted-3"
            style={{ animationDelay: "0.4s" }}
          >
            {t(c.hero.note)}
          </p>
        </div>

        <div
          className="animate-rise relative mx-auto flex min-h-[340px] w-full max-w-md items-center justify-center sm:min-h-[420px] lg:max-w-none lg:min-h-[490px]"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="animate-halo absolute aspect-square w-[92%] max-w-[470px] rounded-full bg-[radial-gradient(circle,rgba(184,115,51,.33)_0%,rgba(184,115,51,.07)_52%,rgba(7,10,17,0)_72%)] blur-xl" />
          <div className="animate-spin-rev-slow absolute aspect-square w-[90%] max-w-[440px] rounded-full border border-dashed border-[rgba(184,115,51,.18)]" />
          <div className="animate-spin-rev absolute aspect-square w-[84%] max-w-[408px] rounded-full border border-[rgba(184,115,51,.2)]">
            <span className="absolute top-[-3px] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-[rgba(184,115,51,.9)] shadow-[0_0_10px_rgba(184,115,51,.9)]" />
          </div>
          <div className="animate-spin-slow absolute aspect-square w-[78%] max-w-[376px] rounded-full border border-[rgba(184,115,51,.5)] shadow-[0_0_70px_rgba(184,115,51,.2),inset_0_0_70px_rgba(184,115,51,.08)]">
            <span className="absolute right-9 bottom-2 size-1.5 rounded-full bg-accent-soft shadow-[0_0_14px_rgba(227,172,108,.95)]" />
          </div>

          <div className="relative aspect-square w-[68%] max-w-[324px] overflow-hidden rounded-full border border-white/10">
            <Image
              src="/uploads/ChatGPT Image 29 juil. 2026, 15_30_23.png"
              alt="Portrait du fondateur de TWM Advisory"
              fill
              priority
              sizes="(max-width: 768px) 70vw, 324px"
              className="object-cover object-[64%_28%] saturate-[.9] contrast-[1.05]"
            />
          </div>

          <div className="animate-drift absolute top-2 right-0 hidden w-48 border border-white/10 bg-[rgba(12,16,26,.9)] p-4 backdrop-blur-md md:block lg:right-[-8px] lg:w-54">
            <div className="mb-3 font-mono text-[9px] tracking-[0.2em] text-muted-3 uppercase">
              Forward deployed
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#e8e4dd]">
              <span className="size-1.5 rotate-45 bg-accent" />
              {t(c.hero.floatTitle)}
            </div>
            <p className="mt-2 text-xs leading-snug text-muted-2">
              {t(c.hero.floatBody)}
            </p>
          </div>

          <div className="animate-drift-delay absolute bottom-2 left-0 hidden w-44 border border-white/10 bg-[rgba(12,16,26,.9)] p-4 backdrop-blur-md md:block lg:left-[-16px] lg:w-50">
            <div className="mb-2.5 font-mono text-[9px] tracking-[0.2em] text-muted-3 uppercase">
              {t(c.hero.terrain)}
            </div>
            <div className="font-display text-[32px] leading-none text-accent">
              17{" "}
              <span className="text-[17px] text-fg">{t(c.hero.years)}</span>
            </div>
            <p className="mt-2 text-xs text-muted-2">{t(c.hero.terrainSub)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
