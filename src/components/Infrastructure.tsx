"use client";

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
            className="font-display text-[clamp(1.75rem,6vw,2.875rem)] leading-[1.18] font-normal"
          >
            {t(c.infrastructure.title)}
            <br />
            <em className="text-accent italic">{t(c.infrastructure.titleEm)}</em>
          </h2>
          <p className="text-[15px] leading-[1.78] text-muted text-pretty sm:text-base">
            {t(c.infrastructure.body)}
          </p>
        </div>

        {/* Org chart */}
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:mt-12 sm:gap-4">
          {/* Human */}
          <div
            className="mx-auto w-full max-w-md border px-5 py-4 text-center sm:px-6 sm:py-5"
            style={{
              borderColor: "rgb(var(--accent-rgb) / 0.4)",
              background:
                "linear-gradient(150deg, rgb(var(--accent-rgb) / 0.14) 0%, var(--panel) 70%)",
            }}
          >
            <div className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
              {t(c.infrastructure.humanLabel)}
            </div>
            <div className="mt-1.5 font-display text-xl text-fg sm:text-2xl">
              TWM · Direction
            </div>
            <p className="mt-1.5 text-[13px] text-muted sm:text-sm">
              {t(c.infrastructure.humanRole)}
            </p>
          </div>

          <div className="mx-auto hidden h-6 w-px bg-white/15 sm:block" aria-hidden />

          {/* CEO agent */}
          <div className="mx-auto w-full max-w-md border border-white/12 bg-panel px-5 py-4 text-center sm:px-6">
            <div className="font-mono text-[10px] tracking-[0.16em] text-muted-3 uppercase">
              01
            </div>
            <div className="mt-1 font-display text-lg text-fg sm:text-xl">
              {t(c.infrastructure.ceo.role)}
            </div>
            <p className="mt-1.5 text-[13px] leading-snug text-muted">
              {t(c.infrastructure.ceo.mission)}
            </p>
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
                  <span className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                    {t(dept.name)}
                  </span>
                </div>
                <ul className="flex flex-1 flex-col">
                  {dept.agents.map((agent, ai) => (
                    <li
                      key={ai}
                      className="border-t border-white/6 px-4 py-3.5 first:border-t-0"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-[14px] font-medium text-[#e8e4dd] sm:text-[15px]">
                          {t(agent.role)}
                        </span>
                      </div>
                      <p className="mt-1 text-[12px] leading-snug text-muted-2 sm:text-[13px]">
                        {t(agent.mission)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="surface-accent mt-6 px-5 py-4 text-[15px] leading-[1.7] text-muted">
          {t(c.infrastructure.closing)}
        </p>
      </section>
    </Reveal>
  );
}
