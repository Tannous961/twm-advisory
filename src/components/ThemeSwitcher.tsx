"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function ThemeSwitcher() {
  const { lang } = useI18n();
  const { themeId, themes, setTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="fixed right-3 bottom-3 z-[70] sm:right-5 sm:bottom-5">
      {open && (
        <div
          className="mb-3 w-[min(100vw-1.5rem,300px)] border border-[color:var(--line)] bg-[color:var(--panel)] p-4 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-xl"
          role="dialog"
          aria-label={lang === "fr" ? "Design system — couleurs" : "Design system — colors"}
        >
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <div>
              <div className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                Design system
              </div>
              <div className="mt-1 font-display text-lg text-fg">
                {lang === "fr" ? "Couleurs" : "Colors"}
              </div>
            </div>
            <span className="font-mono text-[10px] text-muted-3">{theme.label[lang]}</span>
          </div>

          <p className="mb-4 text-[12px] leading-snug text-muted-2">
            {theme.description[lang]}
          </p>

          <div className="grid grid-cols-3 gap-2">
            {themes.map((item) => {
              const active = item.id === themeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTheme(item.id)}
                  className={`flex flex-col items-start gap-2 border p-2.5 text-left transition ${
                    active
                      ? "border-accent bg-[rgb(var(--accent-rgb)/0.12)]"
                      : "border-[color:var(--line)] hover:border-accent/50"
                  }`}
                  aria-pressed={active}
                >
                  <span
                    className="block h-7 w-full"
                    style={{ background: item.swatch }}
                  />
                  <span className="font-mono text-[10px] tracking-[0.08em] text-fg uppercase">
                    {item.label[lang]}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-[0.04em] text-muted-3">
            {lang === "fr"
              ? "Choix sauvegardé localement — pour tester la meilleure direction visuelle."
              : "Choice saved locally — to test the best visual direction."}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2.5 border border-[color:var(--line)] bg-[color:var(--panel)] px-3.5 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,.35)] transition hover:border-accent/60"
        aria-expanded={open}
        aria-label={lang === "fr" ? "Changer les couleurs" : "Change colors"}
      >
        <span className="flex gap-1">
          {themes.slice(0, 4).map((item) => (
            <span
              key={item.id}
              className="size-2.5"
              style={{
                background: item.swatch,
                outline:
                  item.id === themeId ? "1px solid var(--fg)" : "none",
                outlineOffset: 1,
              }}
            />
          ))}
        </span>
        <span className="font-mono text-[11px] tracking-[0.12em] text-fg uppercase">
          {lang === "fr" ? "Couleurs" : "Colors"}
        </span>
      </button>
    </div>
  );
}
