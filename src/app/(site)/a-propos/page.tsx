import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { Fit } from "@/components/Fit";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Partners } from "@/components/Partners";
import { Watch } from "@/components/Watch";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("a-propos");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("a-propos")} />
      <PageHero page="about" />
      <About />
      <Fit />
      <Partners />
      <Watch />
      <CtaBand />
    </>
  );
}
