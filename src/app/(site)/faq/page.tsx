import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("faq");

export default function FaqPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("faq")} />
      <PageHero page="faq" />
      <FAQ />
      <CtaBand />
    </>
  );
}
