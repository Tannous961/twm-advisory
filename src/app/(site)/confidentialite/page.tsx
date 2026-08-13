import { JsonLd } from "@/components/JsonLd";
import { LegalDoc } from "@/components/LegalDoc";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("confidentialite");

export default function ConfidentialitePage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("confidentialite")} />
      <PageHero page="privacy" />
      <LegalDoc doc="privacy" />
    </>
  );
}
