import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildPageJsonLd("contact")} />
      <PageHero page="contact" />
      <Contact />
    </>
  );
}
