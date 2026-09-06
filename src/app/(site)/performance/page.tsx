import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PerformancePage } from "@/components/PerformancePage";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("performance");

export default function Page() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("performance")} />
      <PageHero page="performance" />
      <PerformancePage />
      <CtaBand />
    </>
  );
}
