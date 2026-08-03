"use client";

import { Reveal } from "./Reveal";
import { useI18n, useT } from "@/lib/i18n";

export function Fractional() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28">
        <div className="relative grid overflow-hidden border border-[rgba(184,115,51,.2)] bg-[linear-gradient(135deg,rgba(184,115,51,.10)_0%,rgba(255,255,255,.015)_58%)] p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div className="pointer-events-none absolute -top-20 -left-14 size-80 rounded-full bg-[radial-gradient(circle,rgba(184,115,51,.14)_0%,rgba(7,10,17,0)_70%)]" />
          <div className="relative">
            <div className="mb-5 flex items-start gap-2.5">
              <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-accent" />
              <span className="font-mono text-[10px] leading-relaxed tracking-[0.14em] text-accent uppercase sm:text-[11px]">
                {t(c.fractional.eyebrow)}
              </span>
            </div>
            <h2 className="mb-5 font-display text-[clamp(1.6rem,5vw,2.55rem)] leading-[1.18] font-normal">
              {t(c.fractional.title)}
            </h2>
            <p className="text-[15px] leading-[1.78] text-muted text-pretty sm:text-base">
              {t(c.fractional.body)}
            </p>
          </div>
          <div className="relative mt-8 flex flex-col lg:mt-0">
            {c.fractional.items.map((item, i) => (
              <div
                key={i}
                className={`flex gap-3.5 py-5 text-[15px] leading-relaxed text-[#dcd8d1] ${
                  i < c.fractional.items.length - 1
                    ? "border-b border-white/9"
                    : ""
                }`}
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t(item)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
