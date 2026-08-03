import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.faq.title.fr,
  description: content.pages.faq.lead.fr,
};

export default function FaqPage() {
  return (
    <>
      <PageHero page="faq" />
      <FAQ />
      <CtaBand />
    </>
  );
}
