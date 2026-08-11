"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n, useT } from "@/lib/i18n";

const links = [
  { href: "/approche", key: "approach" as const },
  { href: "/offres", key: "offers" as const },
  { href: "/signal", key: "signal" as const },
  { href: "/architecture", key: "architecture" as const },
  { href: "/a-propos", key: "about" as const },
  { href: "/faq", key: "faq" as const },
];

export function Header() {
  const { lang, setLang, c } = useI18n();
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? "border-b backdrop-blur-2xl" : "border-b border-transparent"
      }`}
      style={{
        borderColor: scrolled || open ? "var(--line)" : "transparent",
        background:
          scrolled || open
            ? "color-mix(in srgb, var(--bg) 82%, transparent)"
            : "transparent",
      }}
    >
      <nav
        aria-label="Navigation principale"
        className="content-wrap flex items-center justify-between gap-3 py-3.5"
      >
        <Link href="/" className="flex items-center gap-2.5 whitespace-nowrap !text-fg">
          <span className="relative flex size-8 shrink-0 overflow-hidden rounded-xl border border-accent/50 bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png?v=2"
              alt="TWM Advisory"
              width={50}
              height={50}
              className="size-full object-cover"
            />
          </span>
          <span className="font-display text-lg text-fg sm:text-xl">
            TWM <span className="text-accent">Advisory</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 font-mono text-[11px] tracking-[0.12em] text-muted-2 uppercase lg:flex">
          {links.map((link) => {
            const on = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 transition-colors ${
                  on ? "bg-white/6 text-fg" : "text-muted-2 hover:text-fg"
                }`}
              >
                {t(c.nav[link.key])}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center overflow-hidden rounded-full border border-[color:var(--line)] font-mono text-[11px] tracking-[0.1em]">
            {(["fr", "en"] as const).map((code) => {
              const on = lang === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className="cursor-pointer px-2.5 py-1.5 uppercase transition-colors sm:px-3"
                  style={{
                    background: on ? "var(--accent)" : "transparent",
                    color: on ? "var(--ink)" : "var(--muted-2)",
                  }}
                >
                  {code}
                </button>
              );
            })}
          </div>

          <Link
            href="/demarrer"
            className="btn-primary hidden rounded-full px-5 py-2.5 text-[13px] sm:inline-block"
          >
            {t(c.nav.cta)}
          </Link>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-xl border border-white/15 text-fg lg:hidden"
            aria-label={open ? t(c.nav.close) : t(c.nav.menu)}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t(c.nav.close) : t(c.nav.menu)}</span>
            <span className="relative block size-4">
              <span
                className={`absolute inset-x-0 top-0.5 h-px bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 top-[7px] h-px bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute inset-x-0 top-[13px] h-px bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/8 bg-bg/95 px-4 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border-b border-white/6 py-3.5 font-mono text-[12px] tracking-[0.16em] text-muted-2 uppercase"
              >
                {t(c.nav[link.key])}
              </Link>
            ))}
            <Link
              href="/demarrer"
              className="btn-primary mt-4 rounded-full px-5 py-3.5 text-center text-[15px]"
            >
              {t(c.nav.cta)}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
