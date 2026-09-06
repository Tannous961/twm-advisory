"use client";

import Link from "next/link";
import {
  BulletList,
  EditorialBlock,
  EditorialCta,
} from "@/components/EditorialPrimitives";
import { Reveal } from "@/components/Reveal";
import { performancePage as copy } from "@/lib/editorial";
import { useT } from "@/lib/i18n";

export function PerformancePage() {
  const t = useT();

  return (
    <>
      <Reveal>
        <section className="content-wrap section-pad">
          <h2 className="type-h2 max-w-3xl">{t(copy.leadTitle)}</h2>
          <p className="type-lead mt-6 max-w-2xl text-muted">{t(copy.leadBody)}</p>
        </section>
      </Reveal>

      <EditorialBlock title={copy.leversTitle}>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {copy.levers.map((lever) => (
            <div key={lever.title.fr} className="border-t border-[color:var(--line)] pt-6">
              <h3 className="font-display text-xl text-fg">{t(lever.title)}</h3>
              <p className="type-body mt-3 text-muted">{t(lever.body)}</p>
            </div>
          ))}
        </div>
        <EditorialCta href="/impact" label={copy.ctaImpact} />
      </EditorialBlock>

      <EditorialBlock title={copy.scanTitle} body={copy.scanBody}>
        <BulletList items={[...copy.scanBullets]} />
      </EditorialBlock>

      <EditorialBlock title={copy.deliveryTitle} body={copy.deliveryBody} />

      <EditorialBlock title={copy.feesTitle} body={copy.feesBody}>
        <BulletList items={[...copy.feesBullets]} />
        <div className="mt-8">
          <Link href="/faq" className="btn-secondary inline-flex rounded-full px-7 py-3.5">
            {t(copy.ctaFaq)}
          </Link>
        </div>
      </EditorialBlock>

      <EditorialBlock title={copy.fitTitle} body={copy.fitBody}>
        <EditorialCta href="/demarrer" label={copy.ctaContact} />
      </EditorialBlock>
    </>
  );
}
