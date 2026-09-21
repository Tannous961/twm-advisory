"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { useI18n, useLocalePath, useT } from "@/lib/i18n";

export function Hero() {
  const { c } = useI18n();
  const t = useT();
  const localePath = useLocalePath();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[100dvh] w-full items-end overflow-hidden sm:items-center"
    >
      <Image
        src="/uploads/hero-paris-night.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center] sm:object-[72%_center]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(105deg, color-mix(in srgb, var(--bg) 72%, transparent) 0%, color-mix(in srgb, var(--bg) 28%, transparent) 48%, color-mix(in srgb, var(--bg) 12%, transparent) 100%), linear-gradient(180deg, color-mix(in srgb, var(--bg) 35%, transparent) 0%, transparent 40%, color-mix(in srgb, var(--bg) 55%, transparent) 100%)",
        }}
      />

      <div className="content-wrap relative w-full py-16 sm:py-20 lg:py-28">
        <div className="mandate-slab ml-0 max-w-md sm:max-w-lg lg:ml-[min(4vw,3rem)]">
          <p className="type-label mb-5 tracking-[0.2em] text-accent">
            TWM · {t(c.hero.eyebrow)}
          </p>
          <h1 id="hero-title" className="type-display mb-5 text-fg">
            {t(c.hero.titleBefore)}
            <br />
            <span className="text-accent">{t(c.hero.titleEm)}</span>
          </h1>
          <p className="type-lead mb-8 max-w-md text-pretty text-muted">
            {t(c.hero.lead)}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={localePath("/demarrer")}
              className="btn-slab inline-flex items-center justify-center px-8 py-4 text-center"
              onClick={() => track("cta_click", { location: "hero_slab" })}
            >
              {t(c.hero.ctaPrimary)}
            </Link>
            <Link
              href={`${localePath("/")}#parcours`}
              className="type-label tracking-[0.14em] text-muted-2 underline-offset-4 transition hover:text-accent hover:underline"
            >
              {t(c.hero.ctaSecondary)} →
            </Link>
          </div>
          <p className="type-label mt-6 tracking-[0.12em] text-muted-3">
            {t(c.hero.note)}
          </p>
        </div>
      </div>
    </section>
  );
}
