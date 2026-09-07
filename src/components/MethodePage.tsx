"use client";

import {
  BulletList,
  EditorialBlock,
  EditorialCta,
} from "@/components/EditorialPrimitives";
import type { PerformanceGlyphName } from "@/components/PerformanceGlyph";
import { Reveal } from "@/components/Reveal";
import { methodePage as copy } from "@/lib/editorial";
import { useT } from "@/lib/i18n";

const stepGlyphs: PerformanceGlyphName[] = [
  "diagnostic",
  "value",
  "execute",
  "adoption",
  "measure",
];

export function MethodePage() {
  const t = useT();

  return (
    <>
      <Reveal>
        <section className="content-wrap section-pad">
          <h2 className="type-h2 max-w-3xl">{t(copy.leadTitle)}</h2>
          <p className="type-lead mt-6 max-w-2xl text-muted">{t(copy.leadBody)}</p>
        </section>
      </Reveal>

      {copy.steps.map((step, index) => (
        <EditorialBlock
          key={step.title.fr}
          title={{
            fr: `${String(index + 1).padStart(2, "0")} / ${step.title.fr}`,
            en: `${String(index + 1).padStart(2, "0")} / ${step.title.en}`,
          }}
          body={step.body}
          glyph={stepGlyphs[index]}
        >
          <BulletList items={[...step.bullets]} />
        </EditorialBlock>
      ))}

      <EditorialBlock title={copy.rolesTitle}>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {copy.roles.map((role) => (
            <div key={role.title.fr} className="border-t border-[color:var(--line)] pt-6">
              <h3 className="font-display text-xl text-fg">{t(role.title)}</h3>
              <p className="type-body mt-3 text-muted">{t(role.body)}</p>
            </div>
          ))}
        </div>
        <EditorialCta href="/demarrer" label={copy.ctaLabel} />
      </EditorialBlock>
    </>
  );
}
