import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PartnerPerformancePage } from "@/components/PartnerPerformancePage";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("partner-performance");

export default function Page() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("partner-performance")} />
      <PageHero page="partnerPerformance" />
      <PartnerPerformancePage />
      <CtaBand />
    </>
  );
}
