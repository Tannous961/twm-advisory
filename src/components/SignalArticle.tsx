"use client";

import Link from "next/link";
import { useEffect } from "react";
import { signalPosts, type SignalPost } from "@/lib/signal";
import { track } from "@/lib/analytics";
import { useI18n, useT } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SignalCover } from "./SignalCover";

export function SignalArticle({ post }: { post: SignalPost }) {
  const { c, lang } = useI18n();
  const t = useT();
  const postIndex = Math.max(
    0,
    signalPosts.findIndex((item) => item.slug === post.slug),
  );

  useEffect(() => {
    track("signal_article_view", { slug: post.slug, lang });
  }, [post.slug, lang]);

  return (
    <article className="content-wrap section-pad pt-10 sm:pt-14">
      <Reveal>
        <Link
          href="/signal"
          className="mb-8 inline-flex type-label tracking-[0.14em] text-muted-3 transition-colors hover:text-accent"
        >
          ← {t(c.signal.back)}
        </Link>

        <p className="mb-4 type-label tracking-[0.14em] text-muted-3">
          {post.date} · {post.readingMinutes} {t(c.signal.minutes)}
        </p>

        <div className="mb-8">
          <SignalCover intent={post.intent} index={postIndex} />
        </div>

        <h1 className="mb-8 max-w-3xl type-h1">
          {post.title[lang]}
        </h1>

        <div className="mb-10 grid gap-4 lg:grid-cols-2">
          <div className="glass-card rounded-3xl p-6 sm:p-7">
            <p className="mb-3 type-caption text-muted-3">
              {t(c.signal.insightLabel)}
            </p>
            <p className="type-h3 text-fg">
              {post.insight[lang]}
            </p>
          </div>
          <div className="glass-card rounded-3xl border-accent/25 p-6 sm:p-7">
            <p className="mb-3 type-caption text-accent">
              {t(c.signal.verdictLabel)}
            </p>
            <p className="type-h3 text-accent-soft">
              {post.verdict[lang]}
            </p>
          </div>
        </div>

        <div className="mx-auto mb-14 max-w-2xl space-y-5">
          {post.body[lang].map((paragraph, i) => (
            <p
              key={i}
              className="type-lead text-muted"
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
            <p className="mb-5 type-body text-muted">
              {t(c.signal.briefingNote)}
            </p>
            <Link
              href={`/demarrer?intent=${post.intent}`}
              className="btn-primary inline-flex rounded-full px-8 py-4"
              onClick={() =>
                track("cta_click", {
                  location: "signal_article",
                  intent: post.intent,
                })
              }
            >
              {t(c.signal.briefingCta)}
            </Link>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
