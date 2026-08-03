import type { Metadata } from "next";
import { Approach } from "@/components/Approach";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Problem } from "@/components/Problem";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.approach.title.fr,
  description: content.pages.approach.lead.fr,
};

export default function ApprochePage() {
  return (
    <>
      <PageHero page="approach" />
      <Problem />
      <Approach />
      <CtaBand />
    </>
  );
}
