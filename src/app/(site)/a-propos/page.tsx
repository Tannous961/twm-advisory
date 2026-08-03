import type { Metadata } from "next";
import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { Fit } from "@/components/Fit";
import { PageHero } from "@/components/PageHero";
import { Partners } from "@/components/Partners";
import { Watch } from "@/components/Watch";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.about.title.fr,
  description: content.pages.about.lead.fr,
};

export default function AboutPage() {
  return (
    <>
      <PageHero page="about" />
      <About />
      <Fit />
      <Partners />
      <Watch />
      <CtaBand />
    </>
  );
}
