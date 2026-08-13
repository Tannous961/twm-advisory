import { JsonLd } from "@/components/JsonLd";
import { LegalDoc } from "@/components/LegalDoc";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("mentions-legales");

export default function MentionsLegalesPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("mentions-legales")} />
      <PageHero page="legal" />
      <LegalDoc doc="legal" />
    </>
  );
}
