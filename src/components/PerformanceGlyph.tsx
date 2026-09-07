"use client";

export type PerformanceGlyphName =
  | "diagnostic"
  | "value"
  | "levers"
  | "adoption"
  | "measure"
  | "alignment"
  | "partner"
  | "operating"
  | "commerce"
  | "software"
  | "observe"
  | "execute"
  | "steer"
  | "governance"
  | "workflow"
  | "activation"
  | "capacity";

function GlyphDrawing({ name }: { name: PerformanceGlyphName }) {
  switch (name) {
    case "diagnostic":
      return (
        <>
          <circle cx="52" cy="52" r="23" />
          <path d="m69 69 20 20M39 54l9-9 8 7 12-14" />
          <circle cx="39" cy="54" r="2.5" />
          <circle cx="48" cy="45" r="2.5" />
          <circle cx="56" cy="52" r="2.5" />
          <circle cx="68" cy="38" r="2.5" />
        </>
      );
    case "value":
      return (
        <>
          <path d="M25 78h70M30 72l15-19 14 8 27-33" />
          <path d="m72 28h14v14M33 78V63M51 78V58M69 78V49M87 78V28" />
        </>
      );
    case "levers":
      return (
        <>
          <circle cx="60" cy="60" r="8" />
          <circle cx="29" cy="31" r="7" />
          <circle cx="91" cy="31" r="7" />
          <circle cx="29" cy="89" r="7" />
          <circle cx="91" cy="89" r="7" />
          <path d="m35 36 19 18m12 0 19-18M35 84l19-18m12 0 19 18" />
        </>
      );
    case "adoption":
      return (
        <>
          <path d="M22 35c18 0 22 25 38 25h35M22 60h73M22 85c18 0 22-25 38-25" />
          <path d="m86 51 9 9-9 9" />
          <circle cx="22" cy="35" r="3" />
          <circle cx="22" cy="60" r="3" />
          <circle cx="22" cy="85" r="3" />
        </>
      );
    case "measure":
      return (
        <>
          <circle cx="60" cy="60" r="34" />
          <path d="M60 26v8M94 60h-8M60 94v-8M26 60h8M60 60l18-19" />
          <circle cx="60" cy="60" r="5" />
          <path d="M43 75h34" />
        </>
      );
    case "alignment":
      return (
        <>
          <path d="M24 60h26m20 0h26M41 43l17 17-17 17M79 43 62 60l17 17" />
          <circle cx="60" cy="60" r="8" />
        </>
      );
    case "partner":
      return (
        <>
          <circle cx="60" cy="30" r="9" />
          <circle cx="30" cy="81" r="9" />
          <circle cx="90" cy="81" r="9" />
          <path d="m55 38-20 35m30-35 20 35M39 81h42" />
          <circle cx="60" cy="60" r="4" />
        </>
      );
    case "operating":
      return (
        <>
          <circle cx="60" cy="60" r="16" />
          <circle cx="60" cy="60" r="5" />
          <path d="M60 22v13M60 85v13M22 60h13M85 60h13M33 33l9 9m36 36 9 9m0-54-9 9M42 78l-9 9" />
        </>
      );
    case "commerce":
      return (
        <>
          <path d="M22 30h14l9 43h40l10-29H40M51 52h35M55 62h27" />
          <circle cx="54" cy="88" r="5" />
          <circle cx="80" cy="88" r="5" />
          <path d="m73 25 9 9-9 9" />
        </>
      );
    case "software":
      return (
        <>
          <rect x="25" y="28" width="70" height="64" rx="4" />
          <path d="M25 43h70M37 35h1M46 35h1M55 35h1M47 58 36 68l11 10M73 58l11 10-11 10M65 54 55 82" />
        </>
      );
    case "observe":
      return (
        <>
          <path d="M18 60s16-25 42-25 42 25 42 25-16 25-42 25S18 60 18 60Z" />
          <circle cx="60" cy="60" r="12" />
          <circle cx="60" cy="60" r="4" />
        </>
      );
    case "execute":
      return (
        <>
          <path d="M31 27h45l14 14v52H31Z" />
          <path d="M76 27v14h14M43 62l10 10 23-25M43 84h34" />
        </>
      );
    case "steer":
      return (
        <>
          <circle cx="60" cy="60" r="34" />
          <circle cx="60" cy="60" r="8" />
          <path d="M60 26v26M30 72l23-8M90 72l-23-8M60 68v26" />
        </>
      );
    case "governance":
      return (
        <>
          <path d="M60 22 96 38 60 54 24 38 60 22ZM32 49v27M88 49v27M24 84h72M43 54v22M60 58v18M77 54v22" />
        </>
      );
    case "workflow":
      return (
        <>
          <rect x="22" y="27" width="24" height="18" rx="3" />
          <rect x="74" y="51" width="24" height="18" rx="3" />
          <rect x="22" y="75" width="24" height="18" rx="3" />
          <path d="M46 36h14a14 14 0 0 1 14 14v10M74 60H60a14 14 0 0 0-14 14v10" />
        </>
      );
    case "activation":
      return (
        <>
          <circle cx="60" cy="60" r="13" />
          <path d="M60 20v21M60 79v21M20 60h21M79 60h21M32 32l15 15m26 26 15 15m0-56L73 47M47 73 32 88" />
        </>
      );
    case "capacity":
      return (
        <>
          <rect x="24" y="28" width="72" height="64" rx="3" />
          <path d="M36 80V67h11v13M54 80V52h12v28M73 80V39h11v41M33 80h54" />
        </>
      );
  }
}

export function PerformanceGlyph({
  name,
  className = "",
}: {
  name: PerformanceGlyphName;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative grid aspect-square place-items-center text-accent ${className}`}
    >
      <span className="absolute inset-[6%] rounded-full border border-accent/10" />
      <span className="absolute inset-[16%] rounded-full border border-accent/5" />
      <svg
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative size-full drop-shadow-[0_0_18px_rgb(var(--accent-rgb)/0.22)] transition-transform duration-500 group-hover:scale-[1.04]"
      >
        <GlyphDrawing name={name} />
      </svg>
    </div>
  );
}
