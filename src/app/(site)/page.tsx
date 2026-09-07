import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { HomeEditorialSections } from "@/components/HomeEditorial";
import { JsonLd } from "@/components/JsonLd";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("home");

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("home")} />
      <Hero />
      <HomeEditorialSections />
      <CtaBand />
    </>
  );
}
