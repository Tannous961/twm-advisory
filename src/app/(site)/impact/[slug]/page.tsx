import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { ImpactCaseView } from "@/components/ImpactPages";
import { getAllImpactSlugs, getImpactCase } from "@/lib/editorial";
import { siteConfig } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllImpactSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getImpactCase(slug);
  if (!item) return {};
  const title = item.title.fr;
  const description = item.situation.fr;
  return {
    title,
    description,
    alternates: {
      canonical: `/impact/${slug}`,
      languages: {
        "fr-FR": `/impact/${slug}`,
        "en-US": `/impact/${slug}?lang=en`,
        "x-default": `/impact/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/impact/${slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = getImpactCase(slug);
  if (!item) notFound();

  return (
    <>
      <ImpactCaseView item={item} />
      <CtaBand />
    </>
  );
}
