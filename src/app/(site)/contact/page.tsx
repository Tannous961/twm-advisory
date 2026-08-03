import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.contact.title.fr,
  description: content.pages.contact.lead.fr,
};

export default function ContactPage() {
  return (
    <>
      <PageHero page="contact" />
      <Contact />
    </>
  );
}
