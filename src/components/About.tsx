"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { aboutPage } from "@/lib/editorial";
import { useI18n, useT } from "@/lib/i18n";

export function About() {
  const { lang } = useI18n();
  const t = useT();
  const portraitAlt =
    lang === "fr"
      ? "Tannous Mekari, fondateur de TWM Advisory"
      : "Tannous Mekari, founder of TWM Advisory";

  return (
    <Reveal>
      <section
        id="a-propos"
        aria-labelledby="about-title"
        className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28"
      >
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto flex w-full max-w-sm justify-center lg:max-w-md">
            <div
              className="absolute inset-[-6%] bg-[radial-gradient(circle_at_50%_40%,rgba(184,115,51,.22)_0%,rgba(7,10,17,0)_70%)] blur-xl"
              aria-hidden
            />
            <div className="relative w-full">
              <div className="absolute -top-3 -left-3 size-16 border-t border-l border-accent sm:size-19" aria-hidden />
              <div className="absolute -right-3 -bottom-3 size-16 border-r border-b border-accent sm:size-19" aria-hidden />
              <div className="relative aspect-4/5 overflow-hidden border border-white/10">
                <Image
                  src="/uploads/WhatsApp Image 2026-07-29 at 15.14.56 (2).jpeg"
                  alt={portraitAlt}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover object-[50%_22%] saturate-[.88] contrast-[1.04]"
                />
              </div>
            </div>
          </div>

          <div>
            <SectionLabel index="01" label={t(aboutPage.eyebrow)} />
            <h2 id="about-title" className="mb-6 type-h2">
              {t(aboutPage.leadTitle)}
            </h2>
            <p className="mb-4 type-body text-pretty text-muted">
              {t(aboutPage.leadBody)}
            </p>
            <h3 className="mb-3 type-h3">{t(aboutPage.founder.title)}</h3>
            {aboutPage.founder.body.map((paragraph, i) => (
              <p key={i} className="mb-4 type-body text-pretty text-muted">
                {t(paragraph)}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-px border border-white/7 bg-white/7">
              {aboutPage.metrics.map((m) => (
                <div key={m.value} className="min-w-[120px] flex-1 bg-panel px-5 py-4.5">
                  <div className="type-stat text-accent">{m.value}</div>
                  <div className="type-caption mt-1.5 tracking-[0.12em] text-muted-3">
                    {t(m.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl sm:mt-20">
          <h3 className="mb-4 type-h3">{t(aboutPage.partner.title)}</h3>
          {aboutPage.partner.body.map((paragraph, i) => (
            <p key={i} className="mb-4 type-body text-pretty text-muted">
              {t(paragraph)}
            </p>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <p className="mb-8 type-lead text-fg">{t(aboutPage.valuesIntro)}</p>
          <div className="grid gap-px border border-white/7 bg-white/7 sm:grid-cols-3">
            {aboutPage.values.map((value) => (
              <div key={value.id} className="bg-panel px-6 py-7">
                <h3 className="mb-3 type-h3 text-accent-soft">{t(value.title)}</h3>
                <p className="type-body text-muted">{t(value.body)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl sm:mt-20">
          <h3 className="mb-4 type-h3">{t(aboutPage.audience.title)}</h3>
          {aboutPage.audience.body.map((paragraph, i) => (
            <p key={i} className="mb-4 type-body text-pretty text-muted">
              {t(paragraph)}
            </p>
          ))}
          <Link
            href={aboutPage.cta.primary.href}
            className="btn-primary mt-4 inline-flex rounded-full px-7 py-3.5"
          >
            {t(aboutPage.cta.primary.label)}
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
