import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { SignalArticle } from "@/components/SignalArticle";
import { getAllSignalSlugs, getSignalPost } from "@/lib/signal";
import { buildSignalJsonLd, buildSignalMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSignalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getSignalPost(slug);
  if (!post) return {};
  return buildSignalMetadata(post);
}

export default async function SignalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getSignalPost(slug);
  if (!post) notFound();
  return (
    <>
      <JsonLd data={buildSignalJsonLd(post)} />
      <SignalArticle post={post} />
    </>
  );
}
