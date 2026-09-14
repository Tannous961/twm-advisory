import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { HomeEditorialSections } from "@/components/HomeEditorial";
import { JsonLd } from "@/components/JsonLd";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("home", "en");

export default function EnHomePage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("home", [], "en")} />
      <Hero />
      <HomeEditorialSections />
      <CtaBand />
    </>
  );
}
