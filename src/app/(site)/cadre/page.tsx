import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { CadreIndex } from "@/components/CadreIndex";
import { getPublishedCadrePosts } from "@/lib/cadre";
import { buildPageJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("cadre");

export default function CadrePage() {
  const posts = getPublishedCadrePosts();

  return (
    <>
      <JsonLd data={buildPageJsonLd("cadre")} />
      <PageHero page="cadre" />
      <CadreIndex posts={posts} />
    </>
  );
}
