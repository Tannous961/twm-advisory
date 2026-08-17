"use client";

import Link from "next/link";
import { useI18n, useT } from "@/lib/i18n";
import { AgentAvatar } from "./AgentAvatar";
import { Reveal } from "./Reveal";

export function HomeArchitecture() {
  const { c } = useI18n();
  const t = useT();

  const roster: { name: string; role: { fr: string; en: string } }[] = [
    c.infrastructure.ceo,
    c.infrastructure.ceoAssistant,
    ...c.infrastructure.departments.flatMap((d) => [...d.agents]),
  ];

  return (
    <Reveal>
      <section className="content-wrap section-pad pt-0">
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-panel p-8 sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full blur-3xl"
            aria-hidden
            style={{ background: "var(--glow)" }}
          />
          <p className="mb-3 type-label tracking-[0.18em] text-accent">
            {t(c.infrastructure.section)}
          </p>
          <h2 className="max-w-2xl type-h2">
            {t(c.infrastructure.title)}{" "}
            <em className="text-accent italic">{t(c.infrastructure.titleEm)}</em>
          </h2>
          <p className="mt-4 max-w-2xl type-body text-muted sm:text-base">
            {t(c.infrastructure.body)}
          </p>

          <div
            className="mt-8 flex flex-wrap items-center"
            aria-label={t(c.infrastructure.section)}
          >
            {roster.map((agent, i) => (
              <span
                key={agent.name}
                className="-ml-2 first:ml-0"
                title={`${agent.name} · ${t(agent.role)}`}
              >
                <AgentAvatar
                  name={agent.name}
                  size="md"
                  tone={(i % 5) as 0 | 1 | 2 | 3 | 4}
                  featured={i === 0}
                />
              </span>
            ))}
          </div>

          <Link
            href="/architecture"
            className="btn-primary mt-8 inline-block rounded-full px-6 py-3 text-sm"
          >
            {t(c.home.archTeaser)}
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
