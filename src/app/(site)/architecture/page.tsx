import { CtaBand } from "@/components/CtaBand";
import { Infrastructure } from "@/components/Infrastructure";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("architecture");

export default function ArchitecturePage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("architecture")} />
      <PageHero page="architecture" />
      <Infrastructure />
      <CtaBand />
    </>
  );
}
