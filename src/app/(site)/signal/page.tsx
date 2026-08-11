import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SignalIndex } from "@/components/SignalIndex";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.signal.title.fr,
  description: content.pages.signal.lead.fr,
};

export default function SignalPage() {
  return (
    <>
      <PageHero page="signal" />
      <SignalIndex />
    </>
  );
}
