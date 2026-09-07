"use client";

import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";
import { useI18n, useT } from "@/lib/i18n";

type PageKey = keyof typeof content.pages;

const pageImages: Partial<
  Record<PageKey, { src: string; alt: { fr: string; en: string } }>
> = {
  performance: {
    src: "/uploads/page-operating-performance.webp",
    alt: {
      fr: "Salle de pilotage de la performance opérationnelle",
      en: "Operating performance control room",
    },
  },
  partnerPerformance: {
    src: "/uploads/page-partner-network.webp",
    alt: {
      fr: "Réseau de partenaires structuré comme système de croissance",
      en: "Partner network structured as a growth system",
    },
  },
  technology: {
    src: "/uploads/page-technology-builders.webp",
    alt: {
      fr: "Équipes product builders de leur propre métier",
      en: "Teams as product builders of their own craft",
    },
  },
  methode: {
    src: "/uploads/page-methode-path.webp",
    alt: {
      fr: "Parcours méthodologique du résultat aux moyens",
      en: "Method path from outcome to means",
    },
  },
};

export function PageHero({ page }: { page: PageKey }) {
  const { c, lang } = useI18n();
  const t = useT();
  const data = c.pages[page];
  const image = pageImages[page];

  if (image) {
    return (
      <section className="relative flex min-h-[min(72dvh,36rem)] w-full items-end overflow-hidden border-b border-[color:var(--line)]">
        <Image
          src={image.src}
          alt={image.alt[lang]}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(90deg, rgba(7,10,17,0.92) 0%, rgba(7,10,17,0.78) 42%, rgba(7,10,17,0.45) 70%, rgba(7,10,17,0.3) 100%), linear-gradient(180deg, rgba(7,10,17,0.4) 0%, transparent 35%, rgba(7,10,17,0.82) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 18% 60%, rgb(var(--accent-rgb) / 0.14), transparent 70%)",
          }}
        />
        <div className="content-wrap relative w-full py-14 sm:py-16 lg:py-20">
          <Link
            href="/"
            className="type-label mb-6 inline-flex items-center gap-2 tracking-[0.14em] text-white/55 transition-colors hover:text-accent"
          >
            ← TWM Advisory
          </Link>
          <p className="type-label mb-4 tracking-[0.18em] text-accent">
            TWM Advisory
          </p>
          <h1 className="type-h1 max-w-3xl text-fg">{t(data.title)}</h1>
          <p className="type-lead mt-6 max-w-2xl text-pretty text-white/80">
            {t(data.lead)}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
        }}
      />
      <div className="content-wrap relative py-16 sm:py-20 lg:py-24">
        <Link
          href="/"
          className="type-label mb-6 inline-flex items-center gap-2 tracking-[0.14em] text-muted-3 transition-colors hover:text-accent"
        >
          ← TWM Advisory
        </Link>
        <p className="type-label mb-4 tracking-[0.18em] text-accent">TWM Advisory</p>
        <h1 className="type-h1 max-w-3xl">{t(data.title)}</h1>
        <p className="type-lead mt-6 max-w-2xl text-muted">{t(data.lead)}</p>
      </div>
    </section>
  );
}
