"use client";

import { useEffect, useState } from "react";
import { useI18n, useT } from "@/lib/i18n";

const links = [
  { href: "#approche", key: "approach" as const },
  { href: "#offres", key: "offers" as const },
  { href: "#fit", key: "who" as const },
  { href: "#a-propos", key: "about" as const },
];

export function Header() {
  const { lang, setLang, c } = useI18n();
  const t = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-2xl"
      style={{
        borderColor: "var(--line)",
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
      }}
    >
      <nav
        aria-label="Navigation principale"
        className="content-wrap flex items-center justify-between gap-3 py-3.5"
      >
        <a href="#top" className="flex items-center gap-2.5 whitespace-nowrap !text-fg">
          <span className="flex size-[26px] items-center justify-center border border-accent font-mono text-[11px] !text-accent">
            T
          </span>
          <span className="font-display text-lg text-fg sm:text-xl">
            TWM <span className="text-accent">Advisory</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 font-mono text-[11px] tracking-[0.14em] text-muted-2 uppercase lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-2 transition-colors hover:text-fg"
            >
              {t(c.nav[link.key])}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center border border-[color:var(--line)] font-mono text-[11px] tracking-[0.1em]">
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

          <a
            href="#contact"
            className="btn-primary hidden px-4 py-2.5 text-[13px] sm:inline-block"
          >
            {t(c.nav.cta)}
          </a>

          <button
            type="button"
            className="flex size-10 items-center justify-center border border-white/15 text-fg lg:hidden"
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
        <div className="border-t border-white/8 bg-bg px-4 py-6 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/6 py-3.5 font-mono text-[12px] tracking-[0.16em] text-muted-2 uppercase"
              >
                {t(c.nav[link.key])}
              </a>
            ))}
            <a
              href="#infrastructure"
              onClick={() => setOpen(false)}
              className="border-b border-white/6 py-3.5 font-mono text-[12px] tracking-[0.16em] text-muted-2 uppercase"
            >
              {t(c.infrastructure.section)}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 px-5 py-3.5 text-center text-[15px]"
            >
              {t(c.nav.cta)}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
