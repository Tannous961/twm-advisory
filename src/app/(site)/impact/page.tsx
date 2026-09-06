import { CtaBand } from "@/components/CtaBand";
import { ImpactIndex } from "@/components/ImpactPages";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("impact");

export default function Page() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("impact")} />
      <PageHero page="impact" />
      <ImpactIndex />
      <CtaBand />
    </>
  );
}
