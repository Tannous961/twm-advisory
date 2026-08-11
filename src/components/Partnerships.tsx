"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n, useT } from "@/lib/i18n";

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

  async function submit() {
    if (!consent || !name.trim() || !email.trim() || !partnerType) return;
    if (message.trim().length < 20) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || null,
          partnerType,
          message: message.trim(),
          consent: true,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setDone(true);
    } catch {
      setError(t(p.error));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Reveal>
        <section className="content-wrap section-pad">
          <SectionLabel index="01" label={t(c.nav.partners)} />
          <h2 className="mb-4 max-w-3xl font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-[1.15]">
            {t(p.whyTitle)}
          </h2>
          <p className="max-w-2xl text-[15px] leading-[1.75] text-muted sm:text-base">
            {t(p.whyBody)}
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="content-wrap section-pad pt-0">
          <SectionLabel index="02" label={t(p.typesTitle)} />
          <h2 className="mb-8 font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-[1.15]">
            {t(p.typesTitle)}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {p.types.map((item, i) => (
              <div key={i} className="glass-card rounded-3xl p-7">
                <span className="mb-3 block font-mono text-[11px] text-muted-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 font-display text-xl">{t(item.title)}</h3>
                <p className="text-[14px] leading-relaxed text-muted">
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
          <h2 className="mb-8 font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-[1.15]">
            {t(p.rulesTitle)}
          </h2>
          <ol className="flex flex-col gap-3">
            {p.rules.map((rule, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-white/8 bg-panel px-5 py-4"
              >
                <span className="font-mono text-[12px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-muted">
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
          <h2 className="mb-3 font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-[1.15]">
            {t(p.formTitle)}
          </h2>
          <p className="mb-8 max-w-2xl text-[15px] text-muted">{t(p.formBody)}</p>

          {done ? (
            <div className="glass-card max-w-xl rounded-3xl p-8">
              <h3 className="mb-3 font-display text-2xl">{t(p.doneTitle)}</h3>
              <p className="text-muted">{t(p.doneBody)}</p>
            </div>
          ) : (
            <div className="glass-card max-w-xl rounded-3xl p-7 sm:p-8">
              <div className="mb-5 grid gap-4">
                <Field
                  label={t(p.fields.name)}
                  value={name}
                  onChange={setName}
                  autoComplete="given-name"
                />
                <Field
                  label={t(p.fields.email)}
                  value={email}
                  onChange={setEmail}
                  type="email"
                  autoComplete="email"
                />
                <Field
                  label={t(p.fields.company)}
                  value={company}
                  onChange={setCompany}
                  autoComplete="organization"
                />
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] tracking-[0.14em] text-muted-3 uppercase">
                    {t(p.fields.type)}
                  </span>
                  <select
                    value={partnerType}
                    onChange={(e) =>
                      setPartnerType(e.target.value as PartnerType | "")
                    }
                    className="w-full rounded-2xl border border-white/10 bg-panel px-4 py-3 text-[15px] text-fg outline-none focus:border-accent/40"
                  >
                    <option value="">—</option>
                    {TYPE_KEYS.map((key) => (
                      <option key={key} value={key}>
                        {t(p.typeOptions[key])}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] tracking-[0.14em] text-muted-3 uppercase">
                    {t(p.fields.message)}
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder={t(p.messagePlaceholder)}
                    className="w-full resize-y rounded-2xl border border-white/10 bg-panel px-4 py-3 text-[15px] text-fg outline-none focus:border-accent/40"
                  />
                </label>
              </div>
              <label className="mb-6 flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-muted">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 size-4 accent-[var(--accent)]"
                />
                <span>{t(p.consent)}</span>
              </label>
              {error ? (
                <p className="mb-4 text-sm text-accent-soft">{error}</p>
              ) : null}
              <button
                type="button"
                className="btn-primary rounded-full px-7 py-3.5 text-sm disabled:opacity-50"
                disabled={
                  submitting ||
                  !consent ||
                  !name.trim() ||
                  !email.trim() ||
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] tracking-[0.14em] text-muted-3 uppercase">
        {label}
      </span>
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-panel px-4 py-3 text-[15px] text-fg outline-none focus:border-accent/40"
      />
    </label>
  );
}
