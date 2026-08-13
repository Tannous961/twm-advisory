import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Partnerships } from "@/components/Partnerships";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("partenaires");

export default function PartenairesPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("partenaires")} />
      <PageHero page="partnerships" />
      <Partnerships />
    </>
  );
}
