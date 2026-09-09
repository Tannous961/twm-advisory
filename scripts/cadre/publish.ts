#!/usr/bin/env npx tsx
/**
 * Promote a reviewed Cadre draft into published content.
 *
 * Usage:
 *   npx tsx scripts/cadre/publish.ts content/cadre-drafts/2026-09-09-my-slug.json
 */
import fs from "node:fs";
import path from "node:path";
import { parseCadrePost } from "../../src/lib/cadre-schema";
import { validateCadreDraft } from "./validate";

function main() {
  const input = process.argv[2];
  if (!input) {
    throw new Error(
      "Usage: npx tsx scripts/cadre/publish.ts content/cadre-drafts/<file>.json",
    );
  }

  const abs = path.resolve(input);
  const raw = JSON.parse(fs.readFileSync(abs, "utf8"));
  const validated = validateCadreDraft(
    { ...raw, status: "published", updatedAt: new Date().toISOString().slice(0, 10) },
    { allowExistingSlug: false },
  );
  if (!validated.ok || !validated.post) {
    throw new Error(`Cannot publish:\n- ${validated.errors.join("\n- ")}`);
  }

  const post = parseCadrePost({
    ...validated.post,
    status: "published",
    updatedAt: new Date().toISOString().slice(0, 10),
  });

  const outDir = path.join(process.cwd(), "content", "cadre");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${post.slug}.json`);
  if (fs.existsSync(outPath)) {
    throw new Error(`Published file already exists: ${outPath}`);
  }

  fs.writeFileSync(outPath, `${JSON.stringify(post, null, 2)}\n`);
  console.log(`[cadre] published: ${outPath}`);
  console.log(
    "[cadre] next: commit the file, open a PR, and deploy via Vercel",
  );
}

main();
