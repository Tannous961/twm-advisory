import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { CadreArticle } from "@/components/CadreArticle";
import {
  getAllCadreSlugs,
  getCadrePost,
  getCadrePostIndex,
} from "@/lib/cadre";
import { buildCadreJsonLd, buildCadreMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCadreSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getCadrePost(slug);
  if (!post) return {};
  return buildCadreMetadata(post);
}

export default async function CadrePostPage({ params }: Props) {
  const { slug } = await params;
  const post = getCadrePost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={buildCadreJsonLd(post)} />
      <CadreArticle post={post} index={getCadrePostIndex(slug)} />
    </>
  );
}
