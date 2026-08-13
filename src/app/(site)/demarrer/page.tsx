import { Suspense } from "react";
import { IntakeGame } from "@/components/intake/IntakeGame";
import { JsonLd } from "@/components/JsonLd";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("demarrer");

export default function DemarrerPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("demarrer")} />
      <Suspense fallback={<div className="content-wrap section-pad" />}>
        <IntakeGame />
      </Suspense>
    </>
  );
}
