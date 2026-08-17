"use client";

import { useI18n, useT } from "@/lib/i18n";

type DocKey = "legal" | "privacy";

export function LegalDoc({ doc }: { doc: DocKey }) {
  const { c } = useI18n();
  const t = useT();
  const data = c[doc];

  return (
    <article className="content-wrap section-pad pt-10 sm:pt-14">
      <p className="mb-10 type-label tracking-[0.12em] text-muted-3">
        {t(data.updated)}
      </p>
      <div className="mx-auto max-w-2xl space-y-10">
        {data.sections.map((section, i) => (
          <section key={i}>
            <h2 className="type-h3 mb-3 text-fg sm:text-[1.75rem]">
              {t(section.title)}
            </h2>
            <p className="type-body text-muted">
              {t(section.body)}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
