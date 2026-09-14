import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { Fit } from "@/components/Fit";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("a-propos", "en");

export default function EnAboutPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("a-propos", [], "en")} />
      <PageHero page="about" />
      <About />
      <Fit />
      <CtaBand />
    </>
  );
}
