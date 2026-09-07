import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { MethodePage } from "@/components/MethodePage";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("methode");

export default function Page() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("methode")} />
      <PageHero page="methode" />
      <MethodePage />
      <CtaBand />
    </>
  );
}
