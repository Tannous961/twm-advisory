import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Partnerships } from "@/components/Partnerships";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.partnerships.title.fr,
  description: content.pages.partnerships.lead.fr,
};

export default function PartenairesPage() {
  return (
    <>
      <PageHero page="partnerships" />
      <Partnerships />
    </>
  );
}
