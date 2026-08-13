"use client";

import { useI18n, useT } from "@/lib/i18n";

type DocKey = "legal" | "privacy";

export function LegalDoc({ doc }: { doc: DocKey }) {
  const { c } = useI18n();
  const t = useT();
  const data = c[doc];

  return (
    <article className="content-wrap section-pad pt-10 sm:pt-14">
      <p className="mb-10 font-mono text-[11px] tracking-[0.12em] text-muted-3 uppercase">
        {t(data.updated)}
      </p>
      <div className="mx-auto max-w-2xl space-y-10">
        {data.sections.map((section, i) => (
          <section key={i}>
            <h2 className="mb-3 font-display text-2xl text-fg sm:text-[1.75rem]">
              {t(section.title)}
            </h2>
            <p className="text-[15px] leading-[1.75] text-muted sm:text-base">
              {t(section.body)}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
