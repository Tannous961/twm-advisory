import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Infrastructure } from "@/components/Infrastructure";
import { PageHero } from "@/components/PageHero";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.architecture.title.fr,
  description: content.pages.architecture.lead.fr,
};

export default function ArchitecturePage() {
  return (
    <>
      <PageHero page="architecture" />
      <Infrastructure />
      <CtaBand />
    </>
  );
}
