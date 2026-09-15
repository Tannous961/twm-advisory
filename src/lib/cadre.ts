import fs from "node:fs";
import path from "node:path";
import {
  parseCadrePost,
  type CadrePost,
  type CadreSource,
} from "@/lib/cadre-schema";

export type { CadrePost, CadreSource };

const PUBLISHED_DIR = path.join(process.cwd(), "content", "cadre");
const DRAFTS_DIR = path.join(process.cwd(), "content", "cadre-drafts");

function readPostsFromDir(dir: string): CadrePost[] {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".json"))
    .map((file) => {
      const raw = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
      const post = parseCadrePost(raw);
      const expectedSlug = file.replace(/\.json$/, "");
      if (post.slug !== expectedSlug) {
        throw new Error(
          `Cadre slug mismatch in ${file}: file=${expectedSlug} slug=${post.slug}`,
        );
      }
      return post;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublishedCadrePosts(): CadrePost[] {
  return readPostsFromDir(PUBLISHED_DIR).filter(
    (post) => post.status === "published",
  );
}

/** @deprecated Prefer getPublishedCadrePosts() */
export function getCadrePosts(): CadrePost[] {
  return getPublishedCadrePosts();
}

export function getCadrePost(slug: string): CadrePost | undefined {
  return getPublishedCadrePosts().find((post) => post.slug === slug);
}

export function getAllCadreSlugs(): string[] {
  return getPublishedCadrePosts().map((post) => post.slug);
}

export function getCadrePostIndex(slug: string): number {
  const index = getPublishedCadrePosts().findIndex((post) => post.slug === slug);
  return Math.max(0, index);
}

export function getCadreDraftPosts(): CadrePost[] {
  return readPostsFromDir(DRAFTS_DIR);
}
