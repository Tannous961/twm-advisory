"use client";

import Image from "next/image";
import Link from "next/link";
import { homeEditorial, homeExperience } from "@/lib/editorial";
import { useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import {
  PerformanceGlyph,
  type PerformanceGlyphName,
} from "./PerformanceGlyph";

const leverGlyphs: Record<string, PerformanceGlyphName> = {
  partner: "partner",
  operating: "operating",
  commerce: "commerce",
  software: "software",
};

export function HomeEditorialSections() {
  const t = useT();
  const founder = homeExperience.founder;
  const journey = homeExperience.journey;
  const levers = homeExperience.levers;
  const commitments = homeExperience.commitments;
  const leverCards = homeEditorial.sections.find(
    (section) => section.id === "leviers",
  )?.cards;
  const faq = homeEditorial.faq;

  return (
    <>
      <Reveal>
        <section
          className="content-wrap section-pad"
          aria-labelledby="founder-title"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-[color:var(--line)]">
              <Image
                src="/uploads/WhatsApp Image 2026-07-29 at 15.14.56 (2).jpeg"
                alt={t({
                  fr: "Tannous Mekari, fondateur de TWM Advisory",
                  en: "Tannous Mekari, founder of TWM Advisory",
                })}
                fill
                sizes="(max-width: 768px) 90vw, 390px"
                className="object-cover object-[50%_22%] saturate-[.9]"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"
                aria-hidden
              />
              <p className="type-label absolute bottom-6 left-6 text-white/80">
                Tannous Mekari · TWM Advisory
              </p>
            </div>

            <div>
              <SectionLabel index="01" label={t(founder.eyebrow)} />
              <h2 id="founder-title" className="type-h2 max-w-2xl">
                {t(founder.title)}
              </h2>
              <p className="type-lead mt-6 max-w-2xl text-muted">
                {t(founder.body)}
              </p>
              <blockquote className="mt-8 border-l-2 border-accent pl-6 font-display text-2xl leading-snug text-fg sm:text-3xl">
                « {t(founder.quote)} »
              </blockquote>
              <p className="type-body mt-6 max-w-xl text-muted-2">
                {t(founder.support)}
              </p>
              <Link
                href="/a-propos"
                className="btn-secondary mt-8 inline-flex rounded-full px-7 py-3.5"
              >
                {t(founder.cta)} ↗
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          id="parcours"
          className="content-wrap section-pad border-t border-[color:var(--line)]"
          aria-labelledby="journey-title"
        >
          <SectionLabel index="02" label={t(journey.eyebrow)} />
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 id="journey-title" className="type-h2 max-w-3xl">
                {t(journey.title)}
              </h2>
              <p className="type-lead mt-4 text-muted">{t(journey.body)}</p>
            </div>
            <Link
              href="/methode"
              className="type-label text-accent hover:text-accent-soft"
            >
              {t(journey.cta)} →
            </Link>
          </div>

          <ol className="mt-12 grid overflow-hidden rounded-[2rem] border border-[color:var(--line)] md:grid-cols-5">
            {journey.steps.map((step, index) => (
              <li
                key={step.title.fr}
                className="relative bg-panel p-6 even:bg-panel-2 md:min-h-72 md:border-l md:border-[color:var(--line)] md:first:border-l-0"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="type-label text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < journey.steps.length - 1 ? (
                    <span className="hidden text-accent/50 md:block">→</span>
                  ) : null}
                </div>
                <h3 className="font-display text-2xl text-fg">{t(step.title)}</h3>
                <div className="mt-6">
                  <p className="type-caption text-muted-3">
                    {t(journey.actionLabel)}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {t(step.action)}
                  </p>
                </div>
                <div className="mt-5 border-t border-[color:var(--line)] pt-5">
                  <p className="type-caption text-accent">
                    {t(journey.outcomeLabel)}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-fg">
                    {t(step.outcome)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section
          id="leviers"
          className="content-wrap section-pad border-t border-[color:var(--line)]"
          aria-labelledby="levers-title"
        >
          <SectionLabel index="03" label={t(levers.eyebrow)} />
          <h2 id="levers-title" className="type-h2 max-w-3xl">
            {t(levers.title)}
          </h2>
          <p className="type-lead mt-4 text-muted">{t(levers.body)}</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {leverCards?.map((card) => (
              <Link
                key={card.id}
                href={card.href ?? "/performance"}
                className="group bg-panel p-6 transition-colors hover:bg-panel-2"
              >
                <PerformanceGlyph
                  name={leverGlyphs[card.id]}
                  className="mb-5 size-16"
                />
                <h3 className="font-display text-xl text-fg">
                  {t(card.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(card.body)}
                </p>
                <span className="mt-5 inline-block text-accent">→</span>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          className="content-wrap section-pad border-t border-[color:var(--line)]"
          aria-labelledby="commitments-title"
        >
          <SectionLabel index="04" label={t(commitments.eyebrow)} />
          <h2 id="commitments-title" className="type-h2">
            {t(commitments.title)}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {commitments.items.map((item, index) => (
              <div
                key={item.title.fr}
                className="border-t border-accent/40 pt-6"
              >
                <span className="type-label text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl text-fg">
                  {t(item.title)}
                </h3>
                <p className="type-body mt-3 text-muted">{t(item.body)}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="content-wrap section-pad" aria-labelledby="home-faq-title">
          <SectionLabel index="05" label={t(faq.label)} />
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="home-faq-title" className="type-h2">
              {t(faq.title)}
            </h2>
            {faq.allLink ? (
              <Link href={faq.allLink.href} className="type-label text-muted-2 hover:text-fg">
                {t(faq.allLink.label)} ↗
              </Link>
            ) : null}
          </div>
          <div className="mt-10 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
            {faq.items.map((item) => (
              <details key={item.q.fr} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-lg text-fg marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {t(item.q)}
                    <span className="text-accent transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="type-body mt-4 max-w-3xl text-muted">{t(item.a)}</p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
