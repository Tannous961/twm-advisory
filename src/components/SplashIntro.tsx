"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LogoMark } from "./LogoMark";

const SPLASH_KEY = "twm-splash-seen";
const EXIT_AT_MS = 2400;
const DONE_AT_MS = 3100;

function isSplashPending() {
  return (
    typeof document !== "undefined" &&
    document.documentElement.dataset.twmSplash === "pending"
  );
}

export function SplashIntro() {
  const [active, setActive] = useState(isSplashPending);
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
    if (!isSplashPending()) return;

    setActive(true);
    timers.current.push(window.setTimeout(beginExit, EXIT_AT_MS));
    timers.current.push(window.setTimeout(finish, DONE_AT_MS));

    return clearTimers;
  }, [beginExit, clearTimers, finish]);

  useEffect(() => {
    if (!exiting || finished.current) return;
    const id = window.setTimeout(finish, 650);
    return () => window.clearTimeout(id);
  }, [exiting, finish]);

  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        beginExit();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, beginExit]);

  if (!active) return null;

  return (
    <div
      className={`splash-root ${exiting ? "is-exiting" : ""}`}
      role="presentation"
      onClick={beginExit}
    >
      <div className="splash-glow" aria-hidden />
      <div className="splash-stage">
        <div className="splash-mark text-accent">
          <LogoMark animate className="splash-svg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png?v=2"
            alt=""
            width={160}
            height={160}
            className="splash-solid"
            draggable={false}
          />
        </div>
        <p className="splash-wordmark">
          TWM <span>Advisory</span>
        </p>
      </div>
      <p className="splash-skip">Skip</p>
    </div>
  );
}
