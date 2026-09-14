import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PerformancePage } from "@/components/PerformancePage";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("performance", "en");

export default function EnPerformancePage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("performance", [], "en")} />
      <PageHero page="performance" />
      <PerformancePage />
      <CtaBand />
    </>
  );
}
