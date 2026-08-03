"use client";

import { useEffect, useState } from "react";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sync = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60]"
      aria-hidden
    >
      <div className="h-px w-full" style={{ background: "var(--line)" }} />
      <div
        className="relative h-[3px] w-full overflow-visible"
        style={{ background: "rgb(var(--accent-rgb) / 0.08)" }}
      >
        <div
          className="relative h-full origin-left transition-[width] duration-150 ease-out"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(90deg, rgb(var(--accent-rgb) / 0.55), var(--accent-soft))",
            boxShadow: "0 0 16px rgb(var(--accent-rgb) / 0.55)",
          }}
        >
          <span
            className="absolute top-1/2 right-0 size-2 -translate-y-1/2 translate-x-1/2 rotate-45 bg-accent-soft"
            style={{ opacity: progress > 1 ? 1 : 0 }}
          />
        </div>
      </div>
    </div>
  );
}
