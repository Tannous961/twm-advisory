import { CtaBand } from "@/components/CtaBand";
import { CommercePerformancePage } from "@/components/CommercePerformancePage";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("commerce-performance");

export default function Page() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("commerce-performance")} />
      <PageHero page="commercePerformance" />
      <CommercePerformancePage />
      <CtaBand />
    </>
  );
}
