"use client";

import Link from "next/link";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function HomeFaq() {
  const { c } = useI18n();
  const t = useT();
  const preview = c.faq.items.slice(0, 3);

  return (
    <Reveal>
      <section className="content-wrap section-pad">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-tight">
            {t(c.faq.title)}
          </h2>
          <Link
            href="/faq"
            className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase"
          >
            {t(c.home.faqTeaser)} →
          </Link>
        </div>
        <div className="grid gap-3">
          {preview.map((item, i) => (
            <details
              key={i}
              className="glass-card group rounded-2xl px-5 py-4 open:bg-panel-2"
            >
              <summary className="cursor-pointer list-none font-display text-lg marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {t(item.q)}
                  <span className="text-accent transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
                {t(item.a)}
              </p>
            </details>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
