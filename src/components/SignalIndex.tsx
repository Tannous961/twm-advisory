"use client";

import Link from "next/link";
import { signalPosts } from "@/lib/signal";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function SignalIndex() {
  const { c, lang } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="content-wrap section-pad">
        <ol className="flex flex-col gap-4">
          {signalPosts.map((post, i) => (
            <li key={post.slug}>
              <Link
                href={`/signal/${post.slug}`}
                className="glass-card group flex flex-col gap-4 rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-muted-3 uppercase">
                  <span className="text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{post.date}</span>
                  <span>
                    {post.readingMinutes} {t(c.signal.minutes)}
                  </span>
                </div>
                <h2 className="font-display text-[clamp(1.35rem,3vw,1.85rem)] leading-snug group-hover:text-accent">
                  {post.title[lang]}
                </h2>
                <p className="max-w-3xl text-[15px] leading-relaxed text-muted">
                  {post.insight[lang]}
                </p>
                <p className="mt-auto border-t border-white/8 pt-4 font-mono text-[11px] tracking-[0.1em] text-accent uppercase">
                  {t(c.signal.readCta)} →
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </Reveal>
  );
}
