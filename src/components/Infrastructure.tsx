"use client";

import { AgentAvatar } from "./AgentAvatar";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

export function Infrastructure() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section
        id="infrastructure"
        aria-labelledby="infra-title"
        className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-28"
      >
        <SectionLabel index="05" label={t(c.infrastructure.section)} />
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-14">
          <h2
            id="infra-title"
            className="type-h2"
          >
            {t(c.infrastructure.title)}
            <br />
            <em className="text-accent italic">{t(c.infrastructure.titleEm)}</em>
          </h2>
          <p className="type-body text-pretty text-muted">
            {t(c.infrastructure.body)}
          </p>
        </div>

        {/* Org chart */}
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:mt-12 sm:gap-4">
          {/* Human */}
          <div
            className="mx-auto flex w-full max-w-md items-center gap-4 border px-5 py-4 sm:px-6 sm:py-5"
            style={{
              borderColor: "rgb(var(--accent-rgb) / 0.4)",
              background:
                "linear-gradient(150deg, rgb(var(--accent-rgb) / 0.14) 0%, var(--panel) 70%)",
            }}
          >
            <span
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-accent/20 type-caption text-accent sm:size-14"
              aria-hidden
            >
              TWM
            </span>
            <div className="min-w-0 text-left">
              <div className="type-caption tracking-[0.18em] text-accent">
                {t(c.infrastructure.humanLabel)}
              </div>
              <div className="mt-1 font-display text-xl text-fg sm:text-2xl">
                TWM · Direction
              </div>
              <p className="mt-1 type-body-sm text-muted">
                {t(c.infrastructure.humanRole)}
              </p>
            </div>
          </div>

          <div className="mx-auto hidden h-6 w-px bg-white/15 sm:block" aria-hidden />

          {/* Executive layer: CEO + assistant */}
          <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="flex items-center gap-4 border border-white/12 bg-panel px-5 py-4 sm:px-6">
              <AgentAvatar
                name={c.infrastructure.ceo.name}
                size="lg"
                tone={0}
                featured
              />
              <div className="min-w-0 text-left">
                <div className="type-caption text-muted-3">
                  01 · {t(c.infrastructure.ceo.role)}
                </div>
                <div className="mt-1 type-h3 text-fg">
                  {c.infrastructure.ceo.name}
                </div>
                <p className="type-body-sm mt-1 leading-snug text-muted">
                  {t(c.infrastructure.ceo.mission)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border border-accent/25 bg-panel px-5 py-4 sm:px-6">
              <AgentAvatar
                name={c.infrastructure.ceoAssistant.name}
                size="lg"
                tone={1}
                featured
              />
              <div className="min-w-0 text-left">
                <div className="type-caption text-accent">
                  02 · {t(c.infrastructure.ceoAssistant.role)}
                </div>
                <div className="mt-1 type-h3 text-fg">
                  {c.infrastructure.ceoAssistant.name}
                </div>
                <p className="type-body-sm mt-1 leading-snug text-muted">
                  {t(c.infrastructure.ceoAssistant.mission)}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto hidden h-6 w-px bg-white/15 sm:block" aria-hidden />

          {/* Departments */}
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {c.infrastructure.departments.map((dept, di) => (
              <div
                key={di}
                className="flex flex-col border border-white/8 bg-panel"
              >
                <div className="border-b border-white/8 px-4 py-3">
                  <span className="type-caption text-accent">
                    {t(dept.name)}
                  </span>
                </div>
                <ul className="flex flex-1 flex-col">
                  {dept.agents.map((agent, ai) => {
                    const tone = (((di * 3 + ai) % 5) as 0 | 1 | 2 | 3 | 4);
                    return (
                      <li
                        key={agent.name}
                        className="border-t border-white/6 px-4 py-3.5 first:border-t-0"
                      >
                        <div className="flex items-start gap-3">
                          <AgentAvatar name={agent.name} size="sm" tone={tone} />
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                              <span className="type-body text-fg">
                                {agent.name}
                              </span>
                              <span className="type-caption text-muted-3">
                                {t(agent.role)}
                              </span>
                            </div>
                            <p className="type-caption mt-1 leading-snug text-muted-2 sm:type-body-sm">
                              {t(agent.mission)}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="surface-accent mt-6 px-5 py-4 type-body text-muted">
          {t(c.infrastructure.closing)}
        </p>
      </section>
    </Reveal>
  );
}
