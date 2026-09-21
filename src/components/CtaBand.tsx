"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { useI18n, useLocalePath, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function CtaBand() {
  const { c } = useI18n();
  const t = useT();
  const localePath = useLocalePath();

  return (
    <Reveal>
      <section
        className="relative overflow-hidden"
        aria-labelledby="cta-band-title"
      >
        <div className="relative min-h-[28rem] w-full sm:min-h-[32rem]">
          <Image
            src="/uploads/cta-boardroom-night.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[70%_center]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "linear-gradient(90deg, color-mix(in srgb, var(--bg) 78%, transparent) 0%, color-mix(in srgb, var(--bg) 45%, transparent) 55%, color-mix(in srgb, var(--bg) 25%, transparent) 100%)",
            }}
          />
          <div className="content-wrap relative flex min-h-[28rem] items-center py-16 sm:min-h-[32rem] sm:py-20">
            <div className="mandate-slab w-full max-w-lg">
              <p className="type-label mb-5 tracking-[0.2em] text-accent">
                {t(c.nav.cta)}
              </p>
              <h2 id="cta-band-title" className="type-h2 text-fg">
                {t(c.home.ctaBandTitle)}
                <br />
                <span className="text-accent">{t(c.home.ctaBandTitleEm)}</span>
              </h2>
              <p className="type-lead mt-5 max-w-md text-pretty text-muted">
                {t(c.home.ctaBandBody)}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href={localePath("/demarrer")}
                  className="btn-slab inline-flex items-center justify-center px-8 py-4 text-center"
                  onClick={() => track("cta_click", { location: "cta_band_slab" })}
                >
                  {t(c.hero.ctaPrimary)}
                </Link>
                <Link
                  href={`${localePath("/")}#parcours`}
                  className="type-label tracking-[0.14em] text-muted-2 underline-offset-4 transition hover:text-accent hover:underline"
                  onClick={() =>
                    track("cta_click", { location: "cta_band_journey" })
                  }
                >
                  {t(c.hero.ctaSecondary)} →
                </Link>
              </div>
              <p className="type-label mt-6 tracking-[0.1em] text-muted-3">
                {t(c.home.ctaBandNote)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
