import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { ImpactCaseView } from "@/components/ImpactPages";
import { JsonLd } from "@/components/JsonLd";
import { getAllImpactSlugs, getImpactCase } from "@/lib/editorial";
import { buildImpactJsonLd, buildImpactMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllImpactSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getImpactCase(slug);
  if (!item) return {};
  return buildImpactMetadata(item);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = getImpactCase(slug);
  if (!item) notFound();

  return (
    <>
      <JsonLd data={buildImpactJsonLd(item)} />
      <ImpactCaseView item={item} />
      <CtaBand />
    </>
  );
}
