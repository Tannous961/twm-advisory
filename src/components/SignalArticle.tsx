"use client";

import Link from "next/link";
import type { SignalPost } from "@/lib/signal";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function SignalArticle({ post }: { post: SignalPost }) {
  const { c, lang } = useI18n();
  const t = useT();

  return (
    <article className="content-wrap section-pad pt-10 sm:pt-14">
      <Reveal>
        <Link
          href="/signal"
          className="mb-8 inline-flex font-mono text-[11px] tracking-[0.14em] text-muted-3 uppercase transition-colors hover:text-accent"
        >
          ← {t(c.signal.back)}
        </Link>

        <p className="mb-4 font-mono text-[11px] tracking-[0.14em] text-muted-3 uppercase">
          {post.date} · {post.readingMinutes} {t(c.signal.minutes)}
        </p>

        <h1 className="mb-8 max-w-3xl font-display text-[clamp(2rem,6vw,3.4rem)] leading-[1.08]">
          {post.title[lang]}
        </h1>

        <div className="mb-10 grid gap-4 lg:grid-cols-2">
          <div className="glass-card rounded-3xl p-6 sm:p-7">
            <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-muted-3 uppercase">
              {t(c.signal.insightLabel)}
            </p>
            <p className="font-display text-xl leading-snug text-fg sm:text-2xl">
              {post.insight[lang]}
            </p>
          </div>
          <div className="glass-card rounded-3xl border-accent/25 p-6 sm:p-7">
            <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
              {t(c.signal.verdictLabel)}
            </p>
            <p className="font-display text-xl leading-snug text-accent-soft sm:text-2xl">
              {post.verdict[lang]}
            </p>
          </div>
        </div>

        <div className="mx-auto mb-14 max-w-2xl space-y-5">
          {post.body[lang].map((paragraph, i) => (
            <p
              key={i}
              className="text-[16px] leading-[1.75] text-muted sm:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-panel px-6 py-10 text-center sm:px-10 sm:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at 30% 0%, var(--glow), transparent 55%)",
            }}
          />
          <div className="relative">
            <p className="mb-5 text-[15px] text-muted">
              {t(c.signal.briefingNote)}
            </p>
            <Link
              href={`/demarrer?intent=${post.intent}`}
              className="btn-primary inline-flex rounded-full px-7 py-3.5 text-[15px]"
            >
              {t(c.signal.briefingCta)}
            </Link>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
