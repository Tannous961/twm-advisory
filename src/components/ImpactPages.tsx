"use client";

import Link from "next/link";
import { impactCases, type ImpactCase } from "@/lib/editorial";
import { useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function ImpactIndex() {
  const t = useT();

  return (
    <Reveal>
      <section className="content-wrap section-pad">
        <p className="type-lead max-w-2xl text-muted">
          {t({
            fr: "Six situations où une amélioration opérationnelle peut produire une valeur économique. Les cas présentés sont illustratifs et ne constituent pas des résultats clients.",
            en: "Six situations where an operational improvement can create economic value. Cases are illustrative and are not client results.",
          })}
        </p>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {impactCases.map((item) => (
            <article
              key={item.slug}
              className="flex flex-col border-t border-[color:var(--line)] pt-6"
            >
              <p className="type-label text-accent">
                {t(item.category)} — {t({ fr: "Cas illustratif", en: "Illustrative case" })}
              </p>
              <h2 className="mt-3 font-display text-2xl text-fg">{t(item.title)}</h2>
              <p className="type-body mt-4 flex-1 text-muted">{t(item.situation)}</p>
              <Link
                href={`/impact/${item.slug}`}
                className="mt-6 type-label text-fg transition-colors hover:text-accent"
              >
                {t({ fr: "Examiner ce levier", en: "Examine this lever" })} ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export function ImpactCaseView({ item }: { item: ImpactCase }) {
  const t = useT();
  const blocks = [
    { label: { fr: "Situation", en: "Situation" }, body: item.situation },
    { label: { fr: "Intervention", en: "Intervention" }, body: item.intervention },
    { label: { fr: "Mesure", en: "Measurement" }, body: item.measure },
    { label: { fr: "Preuves à établir", en: "Evidence to establish" }, body: item.proofs },
    { label: { fr: "Point d'attention", en: "Watch-out" }, body: item.attention },
  ] as const;

  return (
    <Reveal>
      <article className="content-wrap section-pad">
        <p className="type-label text-accent">
          {t(item.category)} — {t({ fr: "Cas illustratif", en: "Illustrative case" })}
        </p>
        <h1 className="type-h1 mt-4 max-w-3xl">{t(item.title)}</h1>
        <div className="mt-12 space-y-10">
          {blocks.map((block) => (
            <section key={block.label.fr}>
              <h2 className="font-display text-xl text-fg">{t(block.label)}</h2>
              <p className="type-body mt-3 max-w-3xl text-muted">{t(block.body)}</p>
            </section>
          ))}
        </div>
        <Link
          href={item.cta?.href ?? "/demarrer"}
          className="btn-primary mt-12 inline-flex rounded-full px-7 py-3.5"
        >
          {item.cta
            ? t(item.cta.label)
            : t({
                fr: "Ce levier existe-t-il chez vous ?",
                en: "Does this lever exist in your organization?",
              })}{" "}
          →
        </Link>
        <div className="mt-8">
          <Link href="/impact" className="type-label text-muted-2 hover:text-fg">
            ← {t({ fr: "Tous les leviers", en: "All levers" })}
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
