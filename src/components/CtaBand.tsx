"use client";

import Link from "next/link";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function CtaBand() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="content-wrap section-pad pt-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-panel px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at 30% 0%, var(--glow), transparent 55%), radial-gradient(ellipse at 80% 100%, rgb(var(--accent-rgb) / 0.12), transparent 50%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-[clamp(1.75rem,5vw,3rem)] leading-tight">
              {t(c.home.ctaBandTitle)}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
              {t(c.home.ctaBandBody)}
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-8 inline-block rounded-full px-7 py-3.5 text-[15px]"
            >
              {t(c.hero.ctaPrimary)}
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
