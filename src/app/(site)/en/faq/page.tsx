import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("faq", "en");

export default function EnFaqPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("faq", [], "en")} />
      <PageHero page="faq" />
      <FAQ />
      <CtaBand />
    </>
  );
}
