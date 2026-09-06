import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { HomeFaq } from "@/components/HomeFaq";
import { HomeMarquee } from "@/components/HomeMarquee";
import { JsonLd } from "@/components/JsonLd";
import { Stats } from "@/components/Stats";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("home");

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("home")} />
      <Hero />
      <HomeMarquee />
      <Stats />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
