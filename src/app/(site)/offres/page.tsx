import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Offers } from "@/components/Offers";
import { PageHero } from "@/components/PageHero";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.offers.title.fr,
  description: content.pages.offers.lead.fr,
};

export default function OffresPage() {
  return (
    <>
      <PageHero page="offers" />
      <Offers />
      <CtaBand />
    </>
  );
}
