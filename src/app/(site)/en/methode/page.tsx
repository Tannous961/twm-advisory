import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { MethodePage } from "@/components/MethodePage";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("methode", "en");

export default function EnMethodePage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("methode", [], "en")} />
      <PageHero page="methode" />
      <MethodePage />
      <CtaBand />
    </>
  );
}
