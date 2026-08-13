import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { PageHero } from "@/components/PageHero";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.legal.title.fr,
  description: content.pages.legal.lead.fr,
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero page="legal" />
      <LegalDoc doc="legal" />
    </>
  );
}
