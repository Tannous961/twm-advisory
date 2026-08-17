"use client";

import Image from "next/image";
import { useI18n, useT } from "@/lib/i18n";

export function OperatorPortrait() {
  const { c, lang } = useI18n();
  const t = useT();

  return (
    <div className="relative mx-auto flex min-h-[360px] w-full max-w-md items-center justify-center sm:min-h-[440px] lg:max-w-none lg:min-h-[480px]">
      <div
        className="animate-halo absolute aspect-square w-[92%] max-w-[470px] rounded-full blur-xl"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle, rgb(var(--accent-rgb) / 0.33) 0%, rgb(var(--accent-rgb) / 0.07) 52%, transparent 72%)",
        }}
      />
      <div
        className="animate-spin-rev-slow absolute aspect-square w-[90%] max-w-[440px] rounded-full border border-dashed"
        aria-hidden
        style={{ borderColor: "rgb(var(--accent-rgb) / 0.18)" }}
      />
      <div
        className="animate-spin-slow absolute aspect-square w-[78%] max-w-[376px] rounded-full border"
        aria-hidden
        style={{
          borderColor: "rgb(var(--accent-rgb) / 0.5)",
          boxShadow:
            "0 0 70px rgb(var(--accent-rgb) / 0.2), inset 0 0 70px rgb(var(--accent-rgb) / 0.08)",
        }}
      />

      <div className="relative aspect-square w-[68%] max-w-[324px] overflow-hidden rounded-full border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
        <Image
          src="/uploads/ChatGPT Image 29 juil. 2026, 15_30_23.png"
          alt={
            lang === "fr"
              ? "Fondateur de TWM Advisory"
              : "Founder of TWM Advisory"
          }
          fill
          priority
          sizes="(max-width: 768px) 70vw, 324px"
          className="object-cover object-[64%_28%] saturate-[.9] contrast-[1.05]"
        />
      </div>

      <div className="animate-drift glass-card absolute top-2 right-0 hidden w-52 rounded-2xl p-4 md:block lg:right-[-8px]">
        <div className="mb-3 type-caption tracking-[0.2em] text-muted-3">
          {t(c.home.featuresEyebrow)}
        </div>
        <div className="flex items-center gap-2 type-body-sm text-fg">
          <span className="size-1.5 rounded-full bg-accent" />
          {t(c.hero.floatTitle)}
        </div>
        <p className="mt-2 text-xs leading-snug text-muted-2">
          {t(c.hero.floatBody)}
        </p>
      </div>

      <div className="animate-drift-delay glass-card absolute bottom-2 left-0 hidden w-48 rounded-2xl p-4 md:block lg:left-[-16px]">
        <div className="mb-2.5 type-caption tracking-[0.2em] text-muted-3">
          {t(c.hero.terrain)}
        </div>
        <div className="type-stat text-accent">
          17 <span className="type-stat-unit text-fg">{t(c.hero.years)}</span>
        </div>
        <p className="mt-2 text-xs text-muted-2">{t(c.hero.terrainSub)}</p>
      </div>
    </div>
  );
}
