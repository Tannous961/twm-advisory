import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Offers } from "@/components/Offers";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("offres");

export default function OffresPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("offres")} />
      <PageHero page="offers" />
      <Offers />
      <CtaBand />
    </>
  );
}
