"use client";

import {
  BulletList,
  EditorialBlock,
  EditorialCta,
} from "@/components/EditorialPrimitives";
import { Reveal } from "@/components/Reveal";
import { technologyPage as copy } from "@/lib/editorial";
import { useT } from "@/lib/i18n";

export function TechnologyPage() {
  const t = useT();

  return (
    <>
      <Reveal>
        <section className="content-wrap section-pad">
          <h2 className="type-h2 max-w-3xl">{t(copy.leadTitle)}</h2>
          <p className="type-lead mt-6 max-w-2xl text-muted">{t(copy.leadBody)}</p>
        </section>
      </Reveal>

      <EditorialBlock title={copy.architectureTitle} body={copy.architectureBody} />

      <EditorialBlock title={copy.dataTitle}>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {copy.pillars.map((pillar) => (
            <div key={pillar.title.fr} className="border-t border-[color:var(--line)] pt-6">
              <h3 className="font-display text-xl text-fg">{t(pillar.title)}</h3>
              <p className="type-body mt-3 text-muted">{t(pillar.body)}</p>
            </div>
          ))}
        </div>
      </EditorialBlock>

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
