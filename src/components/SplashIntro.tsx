"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useI18n, useT } from "@/lib/i18n";

const SPLASH_KEY = "twm-splash-seen";
const FORCE_KEY = "twm-splash-force";
const EXIT_AT_MS = 4200;
const DONE_AT_MS = 5000;

export function SplashIntro() {
  const { c } = useI18n();
  const t = useT();
  const titleId = useId();
  const skipRef = useRef<HTMLButtonElement>(null);

  // false on SSR + first client paint — avoids hydration mismatch.
  // CSS covers the page while data-twm-splash="pending".
  const [active, setActive] = useState(false);
  const [exiting, setExiting] = useState(false);
  const finished = useRef(false);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    clearTimers();
    try {
      sessionStorage.setItem(SPLASH_KEY, "1");
      sessionStorage.removeItem(FORCE_KEY);
      document.cookie = `${SPLASH_KEY}=1; path=/; SameSite=Lax`;
    } catch {
      /* ignore */
    }
    document.documentElement.dataset.twmSplash = "done";
    setActive(false);
    setExiting(false);
  }, [clearTimers]);

  const beginExit = useCallback(() => {
    if (finished.current) return;
    setExiting(true);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let force = false;

    try {
      if (params.has("splash")) {
        sessionStorage.setItem(FORCE_KEY, "1");
        sessionStorage.removeItem(SPLASH_KEY);
        document.cookie = `${SPLASH_KEY}=; path=/; Max-Age=0; SameSite=Lax`;
        document.documentElement.dataset.twmSplash = "pending";
        const url = new URL(window.location.href);
        url.searchParams.delete("splash");
        window.history.replaceState({}, "", url.pathname + url.search + url.hash);
      }
      force = sessionStorage.getItem(FORCE_KEY) === "1";
    } catch {
      force = params.has("splash");
    }

    const pending =
      force || document.documentElement.dataset.twmSplash === "pending";

    if (!pending) return;

    setActive(true);
    timers.current.push(window.setTimeout(beginExit, EXIT_AT_MS));
    timers.current.push(window.setTimeout(finish, DONE_AT_MS));

    return clearTimers;
  }, [beginExit, clearTimers, finish]);

  useEffect(() => {
    if (!exiting || finished.current) return;
    const id = window.setTimeout(finish, 700);
    return () => window.clearTimeout(id);
  }, [exiting, finish]);

  useEffect(() => {
    if (!active) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    skipRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        beginExit();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, beginExit]);

  if (!active) return null;

  return (
    <div
      className={`splash-root ${exiting ? "is-exiting" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={`${titleId}-desc`}
      onClick={beginExit}
    >
      <div className="splash-glow" aria-hidden />

      <div className="splash-stage" onClick={(e) => e.stopPropagation()}>
        <div className="splash-mark" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png?v=4"
            alt=""
            width={220}
            height={220}
            className="splash-logo"
            draggable={false}
          />
        </div>

        <p id={titleId} className="splash-wordmark">
          <span className="splash-twm">TWM</span>{" "}
          <span className="splash-adv">Advisory</span>
        </p>
        <p id={`${titleId}-desc`} className="splash-line">
          {t(c.splash.line)}
        </p>
        <p className="splash-pillars">{t(c.splash.pillars)}</p>
      </div>

      <button
        ref={skipRef}
        type="button"
        className="splash-skip"
        onClick={(e) => {
          e.stopPropagation();
          beginExit();
        }}
      >
        {t(c.splash.skip)}
      </button>
    </div>
  );
}
