"use client";

import Image from "next/image";
import Link from "next/link";
import { useT, useI18n } from "@/lib/i18n";

export function Hero() {
  const { c } = useI18n();
  const t = useT();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100dvh-4rem)] w-full items-end overflow-hidden sm:items-center"
    >
      <Image
        src="/uploads/hero-paris-night.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] sm:object-[68%_center]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(7,10,17,0.92) 0%, rgba(7,10,17,0.78) 38%, rgba(7,10,17,0.35) 62%, rgba(7,10,17,0.18) 100%), linear-gradient(180deg, rgba(7,10,17,0.35) 0%, transparent 28%, rgba(7,10,17,0.55) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 18% 55%, rgb(var(--accent-rgb) / 0.12), transparent 70%)",
        }}
      />

      <div className="content-wrap relative w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl">
          <div
            className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3.5 py-1.5 backdrop-blur-md"
            style={{ animationDelay: "0s" }}
          >
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.14em] text-accent uppercase sm:text-[11px]">
              {t(c.hero.eyebrow)}
            </span>
          </div>

          <h1
            id="hero-title"
            className="animate-rise mb-6 font-display text-[clamp(2.4rem,8vw,4.75rem)] leading-[1.02] font-normal tracking-[-0.03em] text-fg"
            style={{ animationDelay: "0.1s" }}
          >
            {t(c.hero.titleBefore)}
            <br />
            <em className="text-accent not-italic italic">{t(c.hero.titleEm)}</em>
          </h1>

          <p
            className="animate-rise mb-8 max-w-xl text-[15px] leading-relaxed text-white/75 text-pretty sm:text-[17px] sm:leading-[1.72]"
            style={{ animationDelay: "0.2s" }}
          >
            {t(c.hero.lead)}
          </p>

          <div
            className="animate-rise flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/demarrer"
              className="btn-primary rounded-full px-7 py-3.5 text-center text-[15px] sm:py-4"
            >
              {t(c.hero.ctaPrimary)}
            </Link>
            <Link
              href="/offres"
              className="btn-secondary rounded-full border-white/20 bg-black/20 px-7 py-3.5 text-center text-[15px] text-fg backdrop-blur-md sm:py-4"
            >
              {t(c.hero.ctaSecondary)}
            </Link>
          </div>

          <p
            className="animate-rise mt-5 font-mono text-[11px] tracking-[0.1em] text-white/45"
            style={{ animationDelay: "0.4s" }}
          >
            {t(c.hero.note)}
          </p>
        </div>
      </div>
    </section>
  );
}
