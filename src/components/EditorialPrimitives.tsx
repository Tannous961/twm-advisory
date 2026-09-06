"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import type { L } from "@/lib/editorial";

export function EditorialBlock({
  title,
  body,
  children,
}: {
  title: L;
  body?: L;
  children?: React.ReactNode;
}) {
  const t = useT();
  return (
    <Reveal>
      <section className="content-wrap section-pad border-t border-[color:var(--line)]">
        <h2 className="type-h2 max-w-3xl">{t(title)}</h2>
        {body ? <p className="type-lead mt-6 max-w-2xl text-muted">{t(body)}</p> : null}
        {children}
      </section>
    </Reveal>
  );
}

export function EditorialCta({
  href,
  label,
}: {
  href: string;
  label: L;
}) {
  const t = useT();
  return (
    <Link href={href} className="btn-primary mt-10 inline-flex rounded-full px-7 py-3.5">
      {t(label)}
    </Link>
  );
}

export function BulletList({ items }: { items: L[] }) {
  const t = useT();
  return (
    <ul className="mt-8 space-y-3">
      {items.map((item) => (
        <li key={item.fr} className="flex gap-3 type-body text-muted">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{t(item)}</span>
        </li>
      ))}
    </ul>
  );
}
