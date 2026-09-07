"use client";

import {
  BulletList,
  EditorialBlock,
  EditorialCta,
} from "@/components/EditorialPrimitives";
import {
  PerformanceGlyph,
  type PerformanceGlyphName,
} from "@/components/PerformanceGlyph";
import { Reveal } from "@/components/Reveal";
import { technologyPage as copy } from "@/lib/editorial";
import { useT } from "@/lib/i18n";

const pillarGlyphs: PerformanceGlyphName[] = ["observe", "execute", "steer"];

export function TechnologyPage() {
  const t = useT();

  return (
    <>
      <Reveal>
        <section className="content-wrap section-pad">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="type-h2 max-w-3xl">{t(copy.leadTitle)}</h2>
              <p className="type-lead mt-6 max-w-2xl text-muted">{t(copy.leadBody)}</p>
            </div>
            <PerformanceGlyph
              name="software"
              className="hidden size-40 lg:block xl:size-48"
            />
          </div>
        </section>
      </Reveal>

      <EditorialBlock title={copy.contextTitle} body={copy.contextBody} />

      <EditorialBlock title={copy.architectureTitle} body={copy.architectureBody} />

      <EditorialBlock title={copy.dataTitle}>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {copy.pillars.map((pillar, index) => (
            <div
              key={pillar.title.fr}
              className="group border-t border-[color:var(--line)] pt-6"
            >
              <PerformanceGlyph
                name={pillarGlyphs[index]}
                className="mb-6 size-20 sm:size-24"
              />
              <h3 className="font-display text-xl text-fg">{t(pillar.title)}</h3>
              <p className="type-body mt-3 text-muted">{t(pillar.body)}</p>
            </div>
          ))}
        </div>
      </EditorialBlock>

      <EditorialBlock title={copy.buildersTitle} body={copy.buildersBody} />

      <EditorialBlock title={copy.meansTitle} body={copy.meansBody} />

      <EditorialBlock title={copy.controlsTitle} body={copy.controlsBody}>
        <BulletList items={[...copy.controls]} />
      </EditorialBlock>

      <EditorialBlock title={copy.practiceTitle} body={copy.practiceBody}>
        <EditorialCta href="/methode" label={copy.ctaLabel} />
      </EditorialBlock>
    </>
  );
}
