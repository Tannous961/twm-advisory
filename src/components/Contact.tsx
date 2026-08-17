"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { track } from "@/lib/analytics";
import { useI18n, useT } from "@/lib/i18n";

export function Contact() {
  const { c } = useI18n();
  const t = useT();

  return (
    <Reveal>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="mx-auto mt-16 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:mt-28 lg:px-10"
      >
        <div
          className="relative overflow-hidden border-y px-4 py-16 text-center sm:px-8 sm:py-24 lg:min-h-[70dvh] lg:py-28"
          style={{ borderColor: "rgb(var(--accent-rgb) / 0.25)" }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 125%, rgb(var(--accent-rgb) / 0.22) 0%, transparent 66%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
            <div
              className="animate-sweep h-full w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--accent-soft), transparent)",
              }}
            />
          </div>
          <div className="relative">
            <h2
              id="contact-title"
              className="type-h2 mb-4 sm:mb-5"
            >
              {t(c.contact.title)}
              {c.contact.titleEm.fr || c.contact.titleEm.en ? (
                <>
                  {" "}
                  <em className="text-accent italic">{t(c.contact.titleEm)}</em>
                </>
              ) : null}
            </h2>
            <p className="type-lead mb-8 text-muted sm:mb-9">
              {t(c.contact.lead)}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/demarrer"
                className="btn-primary rounded-full px-8 py-4"
                onClick={() => track("cta_click", { location: "contact" })}
              >
                {t(c.contact.cta)}
              </Link>
              <a
                href="mailto:tannous@twm.expert"
                className="btn-secondary rounded-full px-8 py-4"
                onClick={() => track("cta_click", { location: "contact_email" })}
              >
                {t(c.contact.secondary)}
              </a>
            </div>
            <p className="type-label mt-5 tracking-[0.08em] text-[#4c5468]">
              {t(c.contact.note)}
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
