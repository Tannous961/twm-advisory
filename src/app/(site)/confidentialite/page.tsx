import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { PageHero } from "@/components/PageHero";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.privacy.title.fr,
  description: content.pages.privacy.lead.fr,
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero page="privacy" />
      <LegalDoc doc="privacy" />
    </>
  );
}
