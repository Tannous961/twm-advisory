"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { track } from "@/lib/analytics";
import { useI18n, useT } from "@/lib/i18n";
import { isProfessionalEmail } from "@/lib/security/professional-email";
import { Turnstile } from "./Turnstile";

const TYPE_KEYS = [
  "introducer",
  "tech",
  "domain",
  "codelivery",
  "other",
] as const;

type PartnerType = (typeof TYPE_KEYS)[number];

export function Partnerships() {
  const { c, lang } = useI18n();
  const t = useT();
  const p = c.partnerships;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [partnerType, setPartnerType] = useState<PartnerType | "">("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  async function submit() {
    if (!consent || !name.trim() || !company.trim() || !partnerType) return;
    if (!isProfessionalEmail(email.trim())) {
      setError(t(p.emailPersonalError));
      return;
    }
    if (message.trim().length < 20) return;

    setSubmitting(true);
    setError(null);
    const currentSubmissionId = submissionId ?? crypto.randomUUID();
    setSubmissionId(currentSubmissionId);

    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          partnerType,
          message: message.trim(),
          consent: true,
          turnstileToken,
          submissionId: currentSubmissionId,
        }),
      });
      if (!res.ok) throw new Error("fail");
      const result = (await res.json()) as { confirmationSent: boolean };
      setConfirmationSent(result.confirmationSent);
      track("partner_form_submitted", { lang });
      setDone(true);
    } catch {
      setError(t(p.error));
    } finally {
      setSubmitting(false);
      setTurnstileResetKey((value) => value + 1);
    }
  }

  return (
    <>
      <Reveal>
        <section className="content-wrap section-pad">
          <SectionLabel index="01" label={t(c.nav.partners)} />
          <h2 className="mb-4 max-w-3xl type-h2">
            {t(p.whyTitle)}
          </h2>
          <p className="max-w-2xl type-body text-muted">
            {t(p.whyBody)}
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="content-wrap section-pad pt-0">
          <SectionLabel index="02" label={t(p.typesTitle)} />
          <h2 className="mb-8 type-h2">
            {t(p.typesTitle)}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {p.types.map((item, i) => (
              <div key={i} className="glass-card rounded-3xl p-7">
                <span className="mb-3 block type-label text-muted-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="type-h3 mb-3">{t(item.title)}</h3>
                <p className="type-body-sm text-muted">
                  {t(item.body)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="content-wrap section-pad pt-0">
          <SectionLabel index="03" label={t(p.rulesTitle)} />
          <h2 className="mb-8 type-h2">
            {t(p.rulesTitle)}
          </h2>
          <ol className="flex flex-col gap-3">
            {p.rules.map((rule, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-white/8 bg-panel px-5 py-4"
              >
                <span className="type-label text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="type-body text-muted">
                  {t(rule)}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section id="proposer" className="content-wrap section-pad pt-0">
          <SectionLabel index="04" label={t(p.formTitle)} />
          <h2 className="mb-3 type-h2">
            {t(p.formTitle)}
          </h2>
          <p className="mb-8 max-w-2xl type-body text-muted">{t(p.formBody)}</p>

          {done ? (
            <div className="glass-card max-w-xl rounded-3xl p-8">
              <h3 className="type-h3 mb-3">{t(p.doneTitle)}</h3>
              <p className="text-muted">{t(p.doneBody)}</p>
              <p className="mt-3 text-muted">
                {confirmationSent
                  ? t(p.doneConfirmationSent)
                  : t(p.doneConfirmationPending)}
              </p>
            </div>
          ) : (
            <div className="glass-card max-w-xl rounded-3xl p-7 sm:p-8">
              <div className="mb-5 grid gap-4">
                <Field
                  label={t(p.fields.name)}
                  value={name}
                  onChange={setName}
                  autoComplete="given-name"
                  required
                />
                <Field
                  label={t(p.fields.email)}
                  value={email}
                  onChange={setEmail}
                  type="email"
                  autoComplete="email"
                  required
                  hint={t(p.emailHint)}
                  placeholder={t(p.emailPlaceholder)}
                  error={
                    email.trim() && !isProfessionalEmail(email.trim())
                      ? t(p.emailPersonalError)
                      : null
                  }
                />
                <Field
                  label={t(p.fields.company)}
                  value={company}
                  onChange={setCompany}
                  autoComplete="organization"
                  required
                />
                <label className="block" htmlFor="partner-type">
                  <span className="mb-2 block type-caption text-muted-3">
                    {t(p.fields.type)}
                  </span>
                  <select
                    id="partner-type"
                    value={partnerType}
                    onChange={(e) =>
                      setPartnerType(e.target.value as PartnerType | "")
                    }
                    required
                    className="w-full rounded-2xl border border-white/10 bg-panel px-4 py-3 type-body text-fg focus:border-accent/40"
                  >
                    <option value="">—</option>
                    {TYPE_KEYS.map((key) => (
                      <option key={key} value={key}>
                        {t(p.typeOptions[key])}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block" htmlFor="partner-message">
                  <span className="mb-2 block type-caption text-muted-3">
                    {t(p.fields.message)}
                  </span>
                  <textarea
                    id="partner-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                    minLength={20}
                    placeholder={t(p.messagePlaceholder)}
                    className="w-full resize-y rounded-2xl border border-white/10 bg-panel px-4 py-3 type-body text-fg focus:border-accent/40"
                  />
                </label>
              </div>
              <label className="mb-6 flex cursor-pointer items-start gap-3 type-body-sm text-muted">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 size-4 accent-[var(--accent)]"
                />
                <span>
                  {t(p.consent)}{" "}
                  <Link
                    href="/confidentialite"
                    className="text-accent underline-offset-2 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t(p.consentPrivacy)}
                  </Link>
                </span>
              </label>
              <Turnstile
                action="partner"
                onToken={setTurnstileToken}
                resetKey={turnstileResetKey}
              />
              {error ? (
                <p role="alert" className="mb-4 text-sm text-accent-soft">
                  {error}
                </p>
              ) : null}
              <button
                type="button"
                className="btn-primary rounded-full px-7 py-3.5 text-sm disabled:opacity-50"
                disabled={
                  submitting ||
                  !consent ||
                  !name.trim() ||
                  !company.trim() ||
                  !isProfessionalEmail(email.trim()) ||
                  !partnerType ||
                  message.trim().length < 20
                }
                onClick={() => void submit()}
              >
                {submitting ? t(p.submitting) : t(p.submit)}
              </button>
            </div>
          )}
        </section>
      </Reveal>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required = false,
  hint,
  error,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  hint?: string;
  error?: string | null;
  placeholder?: string;
}) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="block">
      <label
        htmlFor={id}
        className="mb-2 block type-caption text-muted-3"
      >
        {label}
        {required ? (
          <span className="text-accent" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={[hintId, errorId].filter(Boolean).join(" ") || undefined}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-panel px-4 py-3 type-body text-fg focus:border-accent/40"
      />
      {hint ? (
        <p id={hintId} className="mt-2 type-caption text-muted-3">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="mt-2 type-caption text-accent-soft">
          {error}
        </p>
      ) : null}
    </div>
  );
}
