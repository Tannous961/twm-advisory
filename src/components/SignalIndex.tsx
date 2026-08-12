"use client";

import Link from "next/link";
import { signalPosts } from "@/lib/signal";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SignalCover } from "./SignalCover";

export function SignalIndex() {
  const { c, lang } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section className="content-wrap section-pad">
        <ol className="grid gap-5 md:grid-cols-2">
          {signalPosts.map((post, i) => (
            <li
              key={post.slug}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <Link
                href={`/signal/${post.slug}`}
                className={`glass-card group grid h-full gap-6 rounded-3xl p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-5 ${
                  i === 0
                    ? "lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,.75fr)] lg:items-center"
                    : ""
                }`}
              >
                <SignalCover intent={post.intent} index={i} compact={i !== 0} />

                <div className="flex min-w-0 flex-col px-3 pb-3 sm:px-4 sm:pb-4">
                  <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-muted-3 uppercase">
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
                  <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
                    {post.insight[lang]}
                  </p>
                  <p className="mt-6 border-t border-white/8 pt-4 font-mono text-[11px] tracking-[0.1em] text-accent uppercase">
                    {t(c.signal.readCta)} →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </Reveal>
  );
}
