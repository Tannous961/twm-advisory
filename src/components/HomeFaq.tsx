"use client";

import Link from "next/link";
import { faqItems } from "@/lib/editorial";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function HomeFaq() {
  const { c } = useI18n();
  const t = useT();
  const preview = faqItems.slice(0, 3);

  return (
    <Reveal>
      <section className="content-wrap section-pad">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="type-h2">{t(c.faq.title)}</h2>
          <Link
            href="/faq"
            className="type-label tracking-[0.14em] text-accent"
          >
            {t(c.home.faqTeaser)} →
          </Link>
        </div>
        <div className="grid gap-4">
          {preview.map((item) => (
            <details
              key={item.q.fr}
              className="glass-card group rounded-2xl px-6 py-5 open:bg-panel-2"
            >
              <summary className="type-h3 cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {t(item.q)}
                  <span className="text-accent transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="type-body mt-4 max-w-3xl text-muted">
                {t(item.a)}
              </p>
            </details>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
