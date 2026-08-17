"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/analytics";
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

      <div className="content-wrap relative w-full py-16 sm:py-20 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          <div
            className="animate-rise mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-4 py-2 backdrop-blur-md"
            style={{ animationDelay: "0s" }}
          >
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="type-label text-accent">
              {t(c.hero.eyebrow)}
            </span>
          </div>

          <h1
            id="hero-title"
            className="animate-rise type-display mb-7 text-fg"
            style={{ animationDelay: "0.1s" }}
          >
            {t(c.hero.titleBefore)}
            <br />
            <em className="text-accent not-italic italic">{t(c.hero.titleEm)}</em>
          </h1>

          <p
            className="animate-rise type-lead mb-10 max-w-xl text-pretty text-white/80"
            style={{ animationDelay: "0.2s" }}
          >
            {t(c.hero.lead)}
          </p>

          <div
            className="animate-rise flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/demarrer"
              className="btn-primary rounded-full px-8 py-4 text-center sm:py-4.5"
              onClick={() => track("cta_click", { location: "hero" })}
            >
              {t(c.hero.ctaPrimary)}
            </Link>
            <Link
              href="/offres"
              className="btn-secondary rounded-full border-white/20 bg-black/20 px-8 py-4 text-center text-fg backdrop-blur-md sm:py-4.5"
            >
              {t(c.hero.ctaSecondary)}
            </Link>
          </div>

          <p
            className="animate-rise type-label mt-6 tracking-[0.1em] text-white/50"
            style={{ animationDelay: "0.4s" }}
          >
            {t(c.hero.note)}
          </p>
        </div>
      </div>
    </section>
  );
}
