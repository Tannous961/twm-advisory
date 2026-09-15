#!/usr/bin/env npx tsx
import fs from "node:fs";
import { validateCadreDraft } from "./validate";

const file = process.argv[2];
if (!file) {
  console.error("Usage: npm run cadre:validate -- <draft.json>");
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(file, "utf8"));
const result = validateCadreDraft(raw);
if (!result.ok) {
  console.error(result.errors.join("\n"));
  process.exit(1);
}
for (const warning of result.warnings) console.warn(warning);
console.log(`OK ${result.post?.slug}`);
