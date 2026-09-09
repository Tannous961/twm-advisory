"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  homeExperience,
  methodePage as copy,
} from "@/lib/editorial";
import { useT } from "@/lib/i18n";

export function MethodePage() {
  const t = useT();
  const journey = homeExperience.journey;

  return (
    <>
      <Reveal>
        <section className="content-wrap section-pad">
          <h2 className="type-h2 max-w-3xl">{t(copy.leadTitle)}</h2>
          <p className="type-lead mt-6 max-w-2xl text-muted">{t(copy.leadBody)}</p>

          <ol className="mt-12 overflow-hidden rounded-[2rem] border border-[color:var(--line)]">
            {journey.steps.map((step, index) => (
              <li
                key={step.title.fr}
                className="grid gap-6 border-t border-[color:var(--line)] bg-panel p-6 first:border-t-0 sm:p-8 md:grid-cols-[4rem_0.8fr_1fr_1fr] md:items-center"
              >
                <span className="type-label text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-fg">
                  {t(step.title)}
                </h3>
                <div>
                  <p className="type-caption text-muted-3">
                    {t(journey.actionLabel)}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {t(step.action)}
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-5">
                  <p className="type-caption text-accent">
                    {t(journey.outcomeLabel)}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-fg">
                    {t(step.outcome)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section className="content-wrap section-pad border-t border-[color:var(--line)]">
          <h2 className="type-h2 max-w-3xl">{t(copy.rolesTitle)}</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--line)] lg:grid-cols-3">
            {copy.roles.map((role) => (
              <div key={role.title.fr} className="bg-panel p-7">
                <h3 className="font-display text-xl text-fg">{t(role.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(role.body)}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/demarrer"
            className="btn-primary mt-10 inline-flex rounded-full px-7 py-3.5"
          >
            {t(copy.ctaLabel)}
          </Link>
        </section>
      </Reveal>
    </>
  );
}
