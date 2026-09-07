import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { TechnologyPage } from "@/components/TechnologyPage";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("technology");

export default function Page() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("technology")} />
      <PageHero page="technology" />
      <TechnologyPage />
      <CtaBand />
    </>
  );
}
