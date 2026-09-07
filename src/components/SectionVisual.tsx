"use client";

import Image from "next/image";

/** Full-bleed or split editorial photograph — no card chrome. */
export function SectionVisual({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={priority}
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, transparent 55%, rgba(7,10,17,0.45) 100%), radial-gradient(ellipse 70% 60% at 80% 20%, rgb(var(--accent-rgb) / 0.12), transparent 65%)",
        }}
      />
    </figure>
  );
}
