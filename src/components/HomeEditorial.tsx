"use client";

import Link from "next/link";
import { homeEditorial } from "@/lib/editorial";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function HomeEditorialSections() {
  const t = useT();
  const { lang } = useI18n();
  const sections = homeEditorial.sections;
  const faq = homeEditorial.faq;

  return (
    <>
      {sections.map((section) => (
        <Reveal key={section.id}>
          <section
            id={section.id}
            className="content-wrap section-pad"
            aria-labelledby={`${section.id}-title`}
          >
            <SectionLabel index={section.index} label={t(section.label)} />
            <h2 id={`${section.id}-title`} className="type-h2 max-w-3xl">
              {t(section.title)}
            </h2>
            <p className="type-lead mt-6 max-w-2xl text-muted">{t(section.body)}</p>

            {section.cards ? (
              <div
                className={`mt-12 grid gap-6 ${
                  section.cards.length > 3 ? "lg:grid-cols-2" : "lg:grid-cols-3"
                }`}
              >
                {section.cards.map((card) => {
                  const inner = (
                    <>
                      <h3 className="font-display text-xl text-fg">{t(card.title)}</h3>
                      <p className="type-body mt-3 text-muted">{t(card.body)}</p>
                      {card.href ? (
                        <span className="mt-4 inline-block type-label text-accent">
                          {t({ fr: "Explorer", en: "Explore" })} ↗
                        </span>
                      ) : null}
                    </>
                  );
                  return card.href ? (
                    <Link
                      key={card.id}
                      href={card.href}
                      className="border-t border-[color:var(--line)] pt-6 transition-colors hover:border-accent/40"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div
                      key={card.id}
                      className="border-t border-[color:var(--line)] pt-6"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            ) : null}

            {section.steps ? (
              <ol className="mt-12 flex flex-wrap gap-3">
                {section.steps.map((step, i) => (
                  <li
                    key={step.id}
                    className="rounded-full border border-accent/30 bg-accent/5 px-5 py-2.5 type-label text-accent"
                  >
                    {String(i + 1).padStart(2, "0")} · {t(step.label)}
                  </li>
                ))}
              </ol>
            ) : null}

            {section.items ? (
              <ul className="mt-10 grid gap-4 lg:grid-cols-3">
                {section.items.map((item) => (
                  <li
                    key={item.fr}
                    className="border border-[color:var(--line)] bg-panel/30 p-5 type-body text-muted"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            ) : null}

            {section.cta ? (
              <Link
                href={section.cta.href}
                className="btn-secondary mt-10 inline-flex rounded-full px-7 py-3.5"
              >
                {t(section.cta.label)} ↗
              </Link>
            ) : null}
          </section>
        </Reveal>
      ))}

      <Reveal>
        <section className="content-wrap section-pad" aria-labelledby="home-faq-title">
          <SectionLabel index="07" label={t(faq.label)} />
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
                    {item.q[lang]}
                    <span className="text-accent transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="type-body mt-4 max-w-3xl text-muted">{item.a[lang]}</p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
