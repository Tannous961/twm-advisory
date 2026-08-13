import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SignalIndex } from "@/components/SignalIndex";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("signal");

export default function SignalPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("signal")} />
      <PageHero page="signal" />
      <SignalIndex />
    </>
  );
}
