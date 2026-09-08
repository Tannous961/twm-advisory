"use client";

import Link from "next/link";
import {
  BulletList,
  EditorialBlock,
} from "@/components/EditorialPrimitives";
import { LeverCapabilities } from "@/components/LeverCapabilities";
import {
  PerformanceGlyph,
  type PerformanceGlyphName,
} from "@/components/PerformanceGlyph";
import { Reveal } from "@/components/Reveal";
import { commercePerformancePage as copy } from "@/lib/editorial";
import { useT } from "@/lib/i18n";

const capabilityGlyphs: PerformanceGlyphName[] = [
  "diagnostic",
  "commerce",
  "value",
  "alignment",
  "workflow",
  "measure",
];

export function CommercePerformancePage() {
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
              name="commerce"
              className="hidden size-40 lg:block xl:size-48"
            />
          </div>
        </section>
      </Reveal>

      <EditorialBlock title={copy.capabilitiesTitle} body={copy.capabilitiesBody}>
        <LeverCapabilities items={copy.capabilities} glyphs={capabilityGlyphs} />
      </EditorialBlock>

      <EditorialBlock title={copy.outcomesTitle}>
        <BulletList items={[...copy.outcomes]} />
      </EditorialBlock>

      <EditorialBlock title={copy.noteTitle} body={copy.noteBody}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/demarrer" className="btn-primary inline-flex rounded-full px-7 py-3.5">
            {t(copy.ctaLabel)}
          </Link>
          <Link href="/performance" className="btn-secondary inline-flex rounded-full px-7 py-3.5">
            {t(copy.secondaryCtaLabel)}
          </Link>
        </div>
      </EditorialBlock>
    </>
  );
}
