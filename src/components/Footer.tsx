"use client";

import Link from "next/link";
import { useI18n, useT } from "@/lib/i18n";

const product = [
  { href: "/approche", key: "approach" as const },
  { href: "/offres", key: "offers" as const },
  { href: "/signal", key: "signal" as const },
  { href: "/partenaires", key: "partners" as const },
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
        aria-hidden
      />
      <div className="content-wrap relative grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2.5 whitespace-nowrap !text-fg"
            aria-label={t(c.nav.homeAria)}
          >
            <span className="relative flex size-8 shrink-0 overflow-hidden rounded-xl border border-accent/50 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png?v=2"
                alt=""
                width={32}
                height={32}
                className="size-full object-cover"
                aria-hidden
              />
            </span>
            <span className="font-display text-2xl text-fg sm:text-3xl" aria-hidden>
              TWM <span className="text-accent">Advisory</span>
            </span>
          </Link>
          <p className="type-body mt-5 max-w-sm text-muted">
            {t(c.meta.description)}
          </p>
          <p className="type-label mt-6 tracking-[0.08em] text-muted-3">
            {t(c.footer.city)}
          </p>
        </div>

        <nav aria-label={t(c.nav.footerNav)}>
          <p className="type-label mb-4 tracking-[0.16em] text-muted-3">
            {t(c.nav.offers)}
          </p>
          <ul className="flex flex-col gap-3 type-body-sm text-muted-2">
            {product.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-fg">
                  {t(c.nav[item.key])}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t(c.nav.about)}>
          <p className="type-label mb-4 tracking-[0.16em] text-muted-3">
            {t(c.nav.about)}
          </p>
          <ul className="flex flex-col gap-3 type-body-sm text-muted-2">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-fg">
                  {t(c.nav[item.key])}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="content-wrap flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--line)] py-6 type-label tracking-[0.08em] text-muted-3">
        <span>© 2026 TWM Advisory</span>
        <nav className="flex flex-wrap gap-4" aria-label={t(c.footer.legal)}>
          <Link
            href="/mentions-legales"
            className="transition-colors hover:text-fg"
          >
            {t(c.footer.legal)}
          </Link>
          <Link
            href="/confidentialite"
            className="transition-colors hover:text-fg"
          >
            {t(c.footer.privacy)}
          </Link>
          <a
            href="/llms.txt"
            className="transition-colors hover:text-fg"
          >
            llms.txt
          </a>
        </nav>
      </div>
    </footer>
  );
}
