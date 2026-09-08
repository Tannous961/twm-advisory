"use client";

import {
  PerformanceGlyph,
  type PerformanceGlyphName,
} from "@/components/PerformanceGlyph";
import type { L } from "@/lib/editorial";
import { useT } from "@/lib/i18n";

export type LeverCapability = {
  title: L;
  body: L;
};

export function LeverCapabilities({
  items,
  glyphs,
}: {
  items: readonly LeverCapability[];
  glyphs: readonly PerformanceGlyphName[];
}) {
  const t = useT();

  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.title.fr}
          className="group border-t border-[color:var(--line)] pt-6"
        >
          <PerformanceGlyph
            name={glyphs[index] ?? "value"}
            className="mb-6 size-20 sm:size-24"
          />
          <h3 className="font-display text-xl text-fg">{t(item.title)}</h3>
          <p className="type-body mt-3 text-muted">{t(item.body)}</p>
        </div>
      ))}
    </div>
  );
}
