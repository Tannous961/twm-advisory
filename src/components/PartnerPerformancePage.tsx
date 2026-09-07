"use client";

import Link from "next/link";
import { EditorialBlock } from "@/components/EditorialPrimitives";
import {
  PerformanceGlyph,
  type PerformanceGlyphName,
} from "@/components/PerformanceGlyph";
import { Reveal } from "@/components/Reveal";
import { partnerPerformancePage as copy } from "@/lib/editorial";
import { useT } from "@/lib/i18n";

const capabilityGlyphs: PerformanceGlyphName[] = [
  "partner",
  "governance",
  "commerce",
  "workflow",
  "measure",
  "levers",
  "activation",
];

export function PartnerPerformancePage() {
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
              name="partner"
              className="hidden size-40 lg:block xl:size-48"
            />
          </div>
        </section>
      </Reveal>

      <EditorialBlock title={copy.capabilitiesTitle}>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {copy.capabilities.map((item, index) => (
            <div
              key={item.title.fr}
              className="group border-t border-[color:var(--line)] pt-6"
            >
              <PerformanceGlyph
                name={capabilityGlyphs[index]}
                className="mb-6 size-20 sm:size-24"
              />
              <h3 className="font-display text-xl text-fg">{t(item.title)}</h3>
              <p className="type-body mt-3 text-muted">{t(item.body)}</p>
            </div>
          ))}
        </div>
      </EditorialBlock>

      <EditorialBlock title={copy.noteTitle} body={copy.noteBody}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/demarrer" className="btn-primary inline-flex rounded-full px-7 py-3.5">
            {t(copy.ctaLabel)}
          </Link>
          <Link href="/partenaires" className="btn-secondary inline-flex rounded-full px-7 py-3.5">
            {t(copy.secondaryCtaLabel)}
          </Link>
        </div>
      </EditorialBlock>
    </>
  );
}
