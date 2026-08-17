"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function CtaBand() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section
        className="content-wrap section-pad pt-4"
        aria-labelledby="cta-band-title"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] px-6 py-16 text-center sm:px-10 sm:py-22">
          <Image
            src="/uploads/cta-boardroom-night.png"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-[70%_center]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "linear-gradient(90deg, rgba(7,10,17,0.88) 0%, rgba(7,10,17,0.72) 45%, rgba(7,10,17,0.55) 100%), radial-gradient(ellipse at 30% 0%, rgb(var(--accent-rgb) / 0.18), transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="type-label mb-6 text-accent">
              {t(c.nav.cta)}
            </p>
            <h2
              id="cta-band-title"
              className="type-h2 text-fg"
            >
              {t(c.home.ctaBandTitle)}
              <br />
              <em className="text-accent not-italic italic">
                {t(c.home.ctaBandTitleEm)}
              </em>
            </h2>
            <p className="type-lead mx-auto mt-6 max-w-xl text-pretty text-white/75">
              {t(c.home.ctaBandBody)}
            </p>
            <Link
              href="/demarrer"
              className="btn-primary mt-10 inline-block rounded-full px-8 py-4 sm:py-4.5"
              onClick={() => track("cta_click", { location: "cta_band" })}
            >
              {t(c.hero.ctaPrimary)}
            </Link>
            <p className="type-label mt-6 tracking-[0.1em] text-white/50">
              {t(c.home.ctaBandNote)}
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
