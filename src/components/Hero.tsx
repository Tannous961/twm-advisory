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
      className="relative flex min-h-[100dvh] w-full items-center"
    >
      <div className="content-wrap relative w-full py-10 sm:py-14 lg:py-16">
      <div
        className="pointer-events-none absolute -top-24 -right-16 size-[420px] rounded-full sm:size-[560px] lg:size-[660px]"
        style={{
          background:
            "radial-gradient(circle, var(--glow) 0%, transparent 68%)",
        }}
      />

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
              href="#offres"
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
          <div
            className="animate-halo absolute aspect-square w-[92%] max-w-[470px] rounded-full blur-xl"
            style={{
              background:
                "radial-gradient(circle, rgb(var(--accent-rgb) / 0.33) 0%, rgb(var(--accent-rgb) / 0.07) 52%, transparent 72%)",
            }}
          />
          <div
            className="animate-spin-rev-slow absolute aspect-square w-[90%] max-w-[440px] rounded-full border border-dashed"
            style={{ borderColor: "rgb(var(--accent-rgb) / 0.18)" }}
          />
          <div
            className="animate-spin-rev absolute aspect-square w-[84%] max-w-[408px] rounded-full border"
            style={{ borderColor: "rgb(var(--accent-rgb) / 0.2)" }}
          >
            <span
              className="absolute top-[-3px] left-1/2 size-1.5 -translate-x-1/2 rounded-full"
              style={{
                background: "rgb(var(--accent-rgb) / 0.9)",
                boxShadow: "0 0 10px rgb(var(--accent-rgb) / 0.9)",
              }}
            />
          </div>
          <div
            className="animate-spin-slow absolute aspect-square w-[78%] max-w-[376px] rounded-full border"
            style={{
              borderColor: "rgb(var(--accent-rgb) / 0.5)",
              boxShadow:
                "0 0 70px rgb(var(--accent-rgb) / 0.2), inset 0 0 70px rgb(var(--accent-rgb) / 0.08)",
            }}
          >
            <span className="absolute right-9 bottom-2 size-1.5 rounded-full bg-accent-soft" />
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
      </div>
    </section>
  );
}
