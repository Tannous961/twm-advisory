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
      className="relative flex min-h-[calc(100dvh-4rem)] w-full items-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 20%, var(--glow), transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgb(var(--accent-rgb) / 0.08), transparent 50%)",
        }}
      />

      <div className="content-wrap relative w-full py-12 sm:py-16 lg:py-20">
        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div
              className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/4 px-3.5 py-1.5"
              style={{ animationDelay: "0s" }}
            >
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[10px] tracking-[0.14em] text-accent uppercase sm:text-[11px]">
                {t(c.hero.eyebrow)}
              </span>
            </div>

            <h1
              id="hero-title"
              className="animate-rise mb-6 font-display text-[clamp(2.4rem,8vw,4.75rem)] leading-[1.02] font-normal tracking-[-0.03em]"
              style={{ animationDelay: "0.1s" }}
            >
              {t(c.hero.titleBefore)}
              <br />
              <em className="text-accent not-italic italic">{t(c.hero.titleEm)}</em>
            </h1>

            <p
              className="animate-rise mb-8 max-w-xl text-[15px] leading-relaxed text-muted text-pretty sm:text-[17px] sm:leading-[1.72]"
              style={{ animationDelay: "0.2s" }}
            >
              {t(c.hero.lead)}
            </p>

            <div
              className="animate-rise flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/contact"
                className="btn-primary rounded-full px-7 py-3.5 text-center text-[15px] sm:py-4"
              >
                {t(c.hero.ctaPrimary)}
              </Link>
              <Link
                href="/offres"
                className="btn-secondary rounded-full px-7 py-3.5 text-center text-[15px] sm:py-4"
              >
                {t(c.hero.ctaSecondary)}
              </Link>
            </div>

            <p
              className="animate-rise mt-5 font-mono text-[11px] tracking-[0.1em] text-muted-3"
              style={{ animationDelay: "0.4s" }}
            >
              {t(c.hero.note)}
            </p>
          </div>

          <div
            className="animate-rise relative mx-auto flex min-h-[360px] w-full max-w-md items-center justify-center sm:min-h-[440px] lg:max-w-none lg:min-h-[520px]"
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
              className="animate-spin-slow absolute aspect-square w-[78%] max-w-[376px] rounded-full border"
              style={{
                borderColor: "rgb(var(--accent-rgb) / 0.5)",
                boxShadow:
                  "0 0 70px rgb(var(--accent-rgb) / 0.2), inset 0 0 70px rgb(var(--accent-rgb) / 0.08)",
              }}
            />

            <div className="relative aspect-square w-[68%] max-w-[324px] overflow-hidden rounded-full border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
              <Image
                src="/uploads/ChatGPT Image 29 juil. 2026, 15_30_23.png"
                alt="Portrait du fondateur de TWM Advisory"
                fill
                priority
                sizes="(max-width: 768px) 70vw, 324px"
                className="object-cover object-[64%_28%] saturate-[.9] contrast-[1.05]"
              />
            </div>

            <div className="animate-drift glass-card absolute top-2 right-0 hidden w-52 rounded-2xl p-4 md:block lg:right-[-8px]">
              <div className="mb-3 font-mono text-[9px] tracking-[0.2em] text-muted-3 uppercase">
                Forward deployed
              </div>
              <div className="flex items-center gap-2 text-[13px] text-fg">
                <span className="size-1.5 rounded-full bg-accent" />
                {t(c.hero.floatTitle)}
              </div>
              <p className="mt-2 text-xs leading-snug text-muted-2">
                {t(c.hero.floatBody)}
              </p>
            </div>

            <div className="animate-drift-delay glass-card absolute bottom-2 left-0 hidden w-48 rounded-2xl p-4 md:block lg:left-[-16px]">
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
