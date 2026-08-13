import { Approach } from "@/components/Approach";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Problem } from "@/components/Problem";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("approche");

export default function ApprochePage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("approche")} />
      <PageHero page="approach" />
      <Problem />
      <Approach />
      <CtaBand />
    </>
  );
}
