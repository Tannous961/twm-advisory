"use client";

import Link from "next/link";
import { useI18n, useT } from "@/lib/i18n";

const product = [
  { href: "/approche", key: "approach" as const },
  { href: "/offres", key: "offers" as const },
  { href: "/signal", key: "signal" as const },
  { href: "/architecture", key: "architecture" as const },
];

const company = [
  { href: "/a-propos", key: "about" as const },
  { href: "/faq", key: "faq" as const },
  { href: "/demarrer", key: "contact" as const },
];

export function Footer() {
  const { c } = useI18n();
  const t = useT();

  return (
    <footer className="relative mt-8 border-t border-[color:var(--line)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, var(--glow), transparent 70%)",
        }}
      />
      <div className="content-wrap relative grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
        <div>
          <Link href="/" className="flex items-center gap-2.5 whitespace-nowrap !text-fg">
            <span className="relative flex size-8 shrink-0 overflow-hidden rounded-xl border border-accent/50 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png?v=2"
                alt="TWM Advisory"
                width={32}
                height={32}
                className="size-full object-cover"
              />
            </span>
            <span className="font-display text-2xl text-fg">
              TWM <span className="text-accent">Advisory</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {t(c.meta.description)}
          </p>
          <p className="mt-6 font-mono text-[11px] tracking-[0.08em] text-muted-3">
            {t(c.footer.city)}
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-[11px] tracking-[0.16em] text-muted-3 uppercase">
            {t(c.nav.offers)}
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm text-muted-2">
            {product.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-fg">
                  {t(c.nav[item.key])}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-[11px] tracking-[0.16em] text-muted-3 uppercase">
            {t(c.nav.about)}
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm text-muted-2">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-fg">
                  {t(c.nav[item.key])}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="content-wrap flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--line)] py-6 font-mono text-[11px] tracking-[0.08em] text-muted-3">
        <span>© 2026 TWM Advisory</span>
        <span>{t(c.footer.legal)}</span>
      </div>
    </footer>
  );
}
