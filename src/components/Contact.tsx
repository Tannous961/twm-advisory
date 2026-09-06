"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { track } from "@/lib/analytics";
import { buildCalendlyUrl } from "@/lib/calendly";
import { contactPage } from "@/lib/editorial";
import { useI18n, useT } from "@/lib/i18n";

export function Contact() {
  const { c } = useI18n();
  const t = useT();
  const bookingUrl = buildCalendlyUrl({ source: "contact" });
  const email = contactPage.email;
  const mailto = `mailto:${email}`;

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
          <div className="relative mx-auto max-w-3xl">
            <h2 id="contact-title" className="type-h2 mb-4 sm:mb-5">
              {t(contactPage.leadTitle)}
            </h2>
            <p className="type-lead mb-6 text-muted sm:mb-7">
              {t(contactPage.leadBody)}
            </p>
            <p className="type-body mb-3 text-muted-2">
              {t(contactPage.formTitle)}
            </p>
            <p className="type-body mb-4 text-muted-2">
              {t(contactPage.fieldsNote)}
            </p>
            <p className="type-body mb-4 text-muted-2">
              {t(contactPage.formBody)}
            </p>
            <p className="type-body mb-8 text-muted-2 sm:mb-9">
              {t(contactPage.note)}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/demarrer"
                className="btn-primary rounded-full px-8 py-4"
                onClick={() => track("cta_click", { location: "contact" })}
              >
                {t(c.contact.cta)}
              </Link>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary rounded-full px-8 py-4"
                onClick={() =>
                  track("booking_click", { location: "contact" })
                }
              >
                {t(c.contact.book)}
              </a>
            </div>
            <p className="type-label mt-5 tracking-[0.08em] text-[#4c5468]">
              <a
                href={mailto}
                className="underline-offset-4 hover:underline"
                onClick={() =>
                  track("cta_click", { location: "contact_email" })
                }
              >
                {email}
              </a>
              {" · "}
              {t(c.contact.note)}
            </p>
            <p className="type-caption mt-4 text-muted-3">
              {t(contactPage.noAutoSend)}
            </p>
            <div className="mx-auto mt-12 max-w-2xl border-t border-white/9 pt-10 text-left">
              <h3 className="mb-3 type-h3">{t(contactPage.followUpTitle)}</h3>
              <p className="type-body text-muted">
                {t(contactPage.followUpBody)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
