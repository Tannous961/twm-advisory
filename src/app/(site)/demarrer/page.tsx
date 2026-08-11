import type { Metadata } from "next";
import { Suspense } from "react";
import { IntakeGame } from "@/components/intake/IntakeGame";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.pages.intake.title.fr,
  description: content.pages.intake.lead.fr,
};

export default function DemarrerPage() {
  return (
    <Suspense fallback={<div className="content-wrap section-pad" />}>
      <IntakeGame />
    </Suspense>
  );
}
