import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SignalArticle } from "@/components/SignalArticle";
import { getAllSignalSlugs, getSignalPost } from "@/lib/signal";
import { siteConfig } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSignalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getSignalPost(slug);
  if (!post) return {};
  return {
    title: post.title.fr,
    description: post.insight.fr,
    openGraph: {
      title: post.title.fr,
      description: post.insight.fr,
      url: `${siteConfig.url}/signal/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function SignalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getSignalPost(slug);
  if (!post) notFound();
  return <SignalArticle post={post} />;
}
