import { Suspense } from "react";
import { IntakeGame } from "@/components/intake/IntakeGame";
import { JsonLd } from "@/components/JsonLd";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("demarrer", "en");

export default function EnDemarrerPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("demarrer", [], "en")} />
      <Suspense fallback={<div className="content-wrap section-pad" />}>
        <IntakeGame />
      </Suspense>
    </>
  );
}
