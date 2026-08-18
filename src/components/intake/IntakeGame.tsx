"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";
import { track } from "@/lib/analytics";
import {
  computeMaturity,
  type DataConstraint,
  type IntentId,
  type OrgSize,
  type Urgency,
} from "@/lib/intake";
import { useI18n, useT } from "@/lib/i18n";
import { isProfessionalEmail } from "@/lib/security/professional-email";
import { OperatorPortrait } from "../OperatorPortrait";
import { Turnstile } from "../Turnstile";
import { IntakeContextPanel } from "./IntakeContextPanel";
import { IntakeStepProgress } from "./IntakeStepProgress";
import { VideoSignal } from "./VideoSignal";

type Step =
  | "boot"
  | "intent"
  | "probes"
  | "map"
  | "signal"
  | "identity"
  | "done";

const INTENTS: IntentId[] = [
  "discover",
  "use_case",
  "has_agents",
  "strategy",
  "training",
];

function isIntentId(value: string | null): value is IntentId {
  return !!value && (INTENTS as string[]).includes(value);
}

export function IntakeGame() {
  const { c, lang } = useI18n();
  const t = useT();
  const i = c.intake;
  const searchParams = useSearchParams();
  const requestedIntent = searchParams.get("intent");
  const initialIntent = isIntentId(requestedIntent) ? requestedIntent : null;

  const [step, setStep] = useState<Step>(initialIntent ? "probes" : "boot");
  const [intent, setIntent] = useState<IntentId | null>(initialIntent);
  const [orgSize, setOrgSize] = useState<OrgSize | null>(null);
  const [urgency, setUrgency] = useState<Urgency | null>(null);
  const [dataConstraint, setDataConstraint] = useState<DataConstraint | null>(
    null,
  );
  const [probeIndex, setProbeIndex] = useState(0);
  const [signalMode, setSignalMode] = useState<"video" | "text">("video");
  const [signalText, setSignalText] = useState("");
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [consent, setConsent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [doneOffer, setDoneOffer] = useState<string>("audit");
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  useEffect(() => {
    if (!initialIntent) return;
    track("intake_started", { lang, intent: initialIntent });
  }, [initialIntent, lang]);

  useEffect(() => {
    if (step === "boot") return;
    track("intake_step_viewed", {
      step,
      lang,
      ...(intent ? { intent } : {}),
    });
  }, [step, lang, intent]);

  const maturity = useMemo(() => {
    if (!intent) {
      return {
        score: 0,
        entryOffer: null as null | ReturnType<typeof computeMaturity>["entryOffer"],
        litPath: [] as ReturnType<typeof computeMaturity>["litPath"],
        feedbackKeys: [] as string[],
      };
    }
    return computeMaturity(intent, {
      ...(orgSize ? { orgSize } : {}),
      ...(urgency ? { urgency } : {}),
      ...(dataConstraint ? { dataConstraint } : {}),
    });
  }, [intent, orgSize, urgency, dataConstraint]);

  const offerLabels = {
    audit: t(i.offers.audit),
    deploy: t(i.offers.deploy),
    certify: t(i.offers.certify),
    advisory: t(i.offers.advisory),
    training: t(i.offers.training),
  };

  const stepLabels = {
    intent: t(i.stepNames.intent),
    probes: t(i.stepNames.probes),
    map: t(i.stepNames.map),
    signal: t(i.stepNames.signal),
    identity: t(i.stepNames.identity),
  };

  const probeLabels = {
    orgSize: orgSize ? t(i.probes.orgSize.options[orgSize]) : null,
    urgency: urgency ? t(i.probes.urgency.options[urgency]) : null,
    dataConstraint: dataConstraint
      ? t(i.probes.dataConstraint.options[dataConstraint])
      : null,
  };

  const feedbackItems = maturity.feedbackKeys
    .map((key) =>
      key in i.feedback
        ? t(i.feedback[key as keyof typeof i.feedback])
        : null,
    )
    .filter((item): item is string => !!item);

  const offerDescription =
    maturity.entryOffer && maturity.entryOffer in i.offerDescriptions
      ? t(i.offerDescriptions[maturity.entryOffer])
      : null;

  const contextPanelProps = {
    intent,
    intentLabel: intent ? t(i.intents[intent].title) : null,
    orgSize,
    orgSizeLabel: probeLabels.orgSize,
    urgency,
    urgencyLabel: probeLabels.urgency,
    dataConstraint,
    dataConstraintLabel: probeLabels.dataConstraint,
    score: maturity.score,
    scoreLabel: t(i.scoreLabel),
    entryOffer: maturity.entryOffer,
    offerLabels,
    offerDescription,
    feedbackItems,
    feedbackLabel: t(i.feedbackLabel),
    contextTitle: t(i.contextTitle),
    situationLabel: t(i.situationLabel),
    contextAnswersLabel: t(i.contextAnswersLabel),
    entryLabel: t(i.entryLabel),
    pathLabel: t(i.pathLabel),
    pathEntryHint: t(i.pathEntryHint),
    orientationPending: t(i.orientationPending),
    contextPending: t(i.contextPending),
  };

  const activeStep: "intent" | "probes" | "map" | "signal" | "identity" | null =
    step === "intent" ||
    step === "probes" ||
    step === "map" ||
    step === "signal" ||
    step === "identity"
      ? step
      : null;

  async function submit() {
    if (!intent || !orgSize || !urgency || !dataConstraint || !maturity.entryOffer)
      return;
    if (!consent || !name.trim() || !company.trim()) return;
    if (!isProfessionalEmail(email.trim())) {
      setError(t(i.emailPersonalError));
      return;
    }
    if (!signalText.trim() && !videoBlob) {
      setError(t(i.error));
      track("intake_error", { reason: "missing_signal", lang });
      return;
    }

    setSubmitting(true);
    setError(null);

    const entryOffer = maturity.entryOffer;

    try {
      const sessionRes = await fetch("/api/intake/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ turnstileToken }),
      });
      if (!sessionRes.ok) throw new Error("session failed");
      const session = (await sessionRes.json()) as { token: string };
      let videoPath: string | null = null;

      if (videoBlob) {
        const form = new FormData();
        form.append(
          "file",
          videoBlob,
          `signal.${videoBlob.type.includes("mp4") ? "mp4" : "webm"}`,
        );
        const uploadRes = await fetch("/api/intake/upload", {
          method: "POST",
          headers: { Authorization: `Bearer ${session.token}` },
          body: form,
        });
        if (!uploadRes.ok) throw new Error("upload failed");
        const uploadJson = (await uploadRes.json()) as { path: string };
        videoPath = uploadJson.path;
      }

      const res = await fetch("/api/intake", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang,
          intent,
          answers: { orgSize, urgency, dataConstraint },
          score: maturity.score,
          entryOffer,
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          signalText: signalText.trim() || null,
          videoPath,
          consent: true,
        }),
      });

      if (!res.ok) throw new Error("submit failed");
      const json = (await res.json()) as {
        entryOffer: string;
        confirmationSent: boolean;
      };
      setDoneOffer(json.entryOffer);
      setConfirmationSent(json.confirmationSent);
      track("intake_submitted", {
        lang,
        intent,
        score: maturity.score,
        offer: json.entryOffer,
        mode: signalMode,
      });
      setStep("done");
    } catch {
      setError(t(i.error));
      track("intake_error", { reason: "submit_failed", lang });
    } finally {
      setSubmitting(false);
      setTurnstileResetKey((value) => value + 1);
    }
  }

  return (
    <section
      className="intake-game content-wrap section-pad"
      aria-label={t(i.brand)}
    >
      <div className="mb-8">
        <p className="mb-4 type-label tracking-[0.16em] text-accent">
          {t(i.brand)}
        </p>
        {activeStep ? (
          <IntakeStepProgress current={activeStep} labels={stepLabels} />
        ) : null}
      </div>

      {step === "boot" ? (
        <div className="animate-intake-in grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="intake-panel min-w-0">
            <h1 className="mb-4 type-h1">
              {t(i.mission)}
            </h1>
            <p className="mb-8 max-w-2xl type-lead text-muted">
              {t(i.missionBody)}
            </p>
            <button
              type="button"
              className="btn-primary rounded-full px-8 py-4 text-base"
              onClick={() => {
                track("intake_started", { lang });
                setStep("intent");
              }}
            >
              {t(i.start)}
            </button>
          </div>
          <OperatorPortrait />
        </div>
      ) : (
      <>
        {activeStep ? (
          <div className="mb-6 lg:hidden">
            <IntakeContextPanel {...contextPanelProps} compact />
          </div>
        ) : null}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:items-start">
        <div className="min-w-0">
          {step === "intent" ? (
            <div className="animate-intake-in">
              <h2 className="mb-2 type-h2">
                {t(i.intentTitle)}
              </h2>
              <p className="mb-8 text-muted">{t(i.intentBody)}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {INTENTS.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setIntent(id);
                      setStep("probes");
                      setProbeIndex(0);
                    }}
                    className={`glass-card cursor-pointer rounded-3xl p-6 text-left transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 ${
                      intent === id ? "border-accent/40" : ""
                    }`}
                  >
                    <h3 className="type-h3 mb-2">
                      {t(i.intents[id].title)}
                    </h3>
                    <p className="type-body-sm text-muted">
                      {t(i.intents[id].body)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {step === "probes" && intent ? (
            <div className="animate-intake-in">
              <div className="mb-6 rounded-2xl border border-accent/20 bg-accent/5 px-5 py-4">
                <p className="type-caption text-muted-3">{t(i.situationLabel)}</p>
                <p className="type-body-sm font-medium text-fg">
                  {t(i.intents[intent].title)}
                </p>
              </div>
              <h2 className="mb-2 type-h2">
                {t(i.probesTitle)}
              </h2>
              <p className="mb-2 text-muted">{t(i.probesBody)}</p>
              <p className="mb-8 type-label text-accent">
                {t(i.probeProgress)} {probeIndex + 1} {t(i.probeProgressOf)} 3
              </p>

              {probeIndex === 0 ? (
                <ProbeCards
                  title={t(i.probes.orgSize.title)}
                  options={Object.entries(i.probes.orgSize.options).map(
                    ([key, label]) => ({
                      key,
                      label: t(label),
                    }),
                  )}
                  selected={orgSize}
                  onSelect={(key) => {
                    setOrgSize(key as OrgSize);
                    setProbeIndex(1);
                  }}
                />
              ) : null}

              {probeIndex === 1 ? (
                <ProbeCards
                  title={t(i.probes.urgency.title)}
                  options={Object.entries(i.probes.urgency.options).map(
                    ([key, label]) => ({
                      key,
                      label: t(label),
                    }),
                  )}
                  selected={urgency}
                  onSelect={(key) => {
                    setUrgency(key as Urgency);
                    setProbeIndex(2);
                  }}
                />
              ) : null}

              {probeIndex === 2 ? (
                <ProbeCards
                  title={t(i.probes.dataConstraint.title)}
                  options={Object.entries(i.probes.dataConstraint.options).map(
                    ([key, label]) => ({
                      key,
                      label: t(label),
                    }),
                  )}
                  selected={dataConstraint}
                  onSelect={(key) => {
                    setDataConstraint(key as DataConstraint);
                    setStep("map");
                  }}
                />
              ) : null}

              <button
                type="button"
                className="mt-8 cursor-pointer type-label tracking-[0.12em] text-muted-3"
                onClick={() => {
                  if (probeIndex === 0) setStep("intent");
                  else setProbeIndex((n) => n - 1);
                }}
              >
                ← {t(i.back)}
              </button>
            </div>
          ) : null}

          {step === "map" && intent ? (
            <div className="animate-intake-in">
              <h2 className="mb-2 type-h2">
                {t(i.mapTitle)}
              </h2>
              <p className="mb-4 text-muted">{t(i.mapBody)}</p>
              <p className="mb-8 type-body-sm text-muted-3">{t(i.mapLogic)}</p>
              {maturity.entryOffer ? (
                <div className="glass-card mb-8 rounded-3xl p-6 sm:p-8 lg:hidden">
                  <p className="mb-2 type-caption text-muted-3">
                    {t(i.entryLabel)}
                  </p>
                  <p className="type-h2 text-fg">
                    {offerLabels[maturity.entryOffer]}
                  </p>
                  {offerDescription ? (
                    <p className="mt-3 type-body-sm text-muted">
                      {offerDescription}
                    </p>
                  ) : null}
                </div>
              ) : null}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="btn-primary rounded-full px-7 py-3.5 text-sm"
                  onClick={() => setStep("signal")}
                >
                  {t(i.next)}
                </button>
                <button
                  type="button"
                  className="btn-secondary rounded-full px-7 py-3.5 text-sm"
                  onClick={() => setStep("probes")}
                >
                  {t(i.back)}
                </button>
              </div>
            </div>
          ) : null}

          {step === "signal" ? (
            <div className="animate-intake-in">
              <h2 className="mb-2 type-h2">
                {t(i.signalTitle)}
              </h2>
              <p className="mb-6 text-muted">{t(i.signalBody)}</p>

              <div
                className="mb-4 flex flex-wrap gap-2"
                role="group"
                aria-label={t(i.signalTitle)}
              >
                <button
                  type="button"
                  aria-pressed={signalMode === "video"}
                  className={`type-label cursor-pointer rounded-full px-4 py-2.5 tracking-[0.12em] ${
                    signalMode === "video"
                      ? "bg-accent text-ink"
                      : "border border-white/15 text-muted"
                  }`}
                  onClick={() => {
                    setSignalMode("video");
                    track("intake_signal_mode", { mode: "video", lang });
                  }}
                >
                  {t(i.useVideo)}
                </button>
                <button
                  type="button"
                  aria-pressed={signalMode === "text"}
                  className={`type-label cursor-pointer rounded-full px-4 py-2.5 tracking-[0.12em] ${
                    signalMode === "text"
                      ? "bg-accent text-ink"
                      : "border border-white/15 text-muted"
                  }`}
                  onClick={() => {
                    setSignalMode("text");
                    track("intake_signal_mode", { mode: "text", lang });
                  }}
                >
                  {t(i.skipVideo)}
                </button>
              </div>

              {signalMode === "video" ? (
                <VideoSignal
                  onBlob={setVideoBlob}
                  labels={{
                    record: t(i.record),
                    stop: t(i.stop),
                    retake: t(i.retake),
                    camDenied: t(i.camDenied),
                  }}
                />
              ) : (
                <label className="block">
                  <span className="sr-only">{t(i.signalTitle)}</span>
                  <textarea
                    value={signalText}
                    onChange={(e) => setSignalText(e.target.value)}
                    placeholder={t(i.signalPlaceholder)}
                    rows={6}
                    className="w-full resize-y rounded-3xl border border-white/10 bg-panel px-5 py-4 type-body text-fg focus:border-accent/40"
                  />
                </label>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="btn-primary rounded-full px-7 py-3.5 text-sm"
                  disabled={
                    signalMode === "video" ? !videoBlob : !signalText.trim()
                  }
                  onClick={() => setStep("identity")}
                >
                  {t(i.next)}
                </button>
                <button
                  type="button"
                  className="btn-secondary rounded-full px-7 py-3.5 text-sm"
                  onClick={() => setStep("map")}
                >
                  {t(i.back)}
                </button>
              </div>
            </div>
          ) : null}

          {step === "identity" ? (
            <div className="animate-intake-in">
              <h2 className="mb-2 type-h2">
                {t(i.identityTitle)}
              </h2>
              <p className="mb-8 text-muted">{t(i.identityBody)}</p>
              <div className="mb-6 grid gap-4">
                <Field
                  label={t(i.fields.name)}
                  value={name}
                  onChange={setName}
                  autoComplete="given-name"
                  required
                />
                <Field
                  label={t(i.fields.email)}
                  value={email}
                  onChange={setEmail}
                  type="email"
                  autoComplete="email"
                  required
                  hint={t(i.emailHint)}
                  error={
                    email.trim() && !isProfessionalEmail(email.trim())
                      ? t(i.emailPersonalError)
                      : null
                  }
                />
                <Field
                  label={t(i.fields.company)}
                  value={company}
                  onChange={setCompany}
                  autoComplete="organization"
                  required
                />
              </div>
              <label className="mb-8 flex cursor-pointer items-start gap-3 type-body-sm text-muted">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 size-4 accent-[var(--accent)]"
                />
                <span>
                  {t(i.consent)}{" "}
                  <Link
                    href="/confidentialite"
                    className="text-accent underline-offset-2 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t(i.consentPrivacy)}
                  </Link>
                </span>
              </label>
              <Turnstile
                action="intake"
                onToken={setTurnstileToken}
                resetKey={turnstileResetKey}
              />
              {error ? (
                <p role="alert" className="mb-4 text-sm text-accent-soft">
                  {error}
                </p>
              ) : null}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="btn-primary rounded-full px-7 py-3.5 text-sm disabled:opacity-50"
                  disabled={
                    submitting ||
                    !consent ||
                    !name.trim() ||
                    !company.trim() ||
                    !isProfessionalEmail(email.trim())
                  }
                  onClick={() => void submit()}
                >
                  {submitting ? t(i.submitting) : t(i.submit)}
                </button>
                <button
                  type="button"
                  className="btn-secondary rounded-full px-7 py-3.5 text-sm"
                  onClick={() => setStep("signal")}
                  disabled={submitting}
                >
                  {t(i.back)}
                </button>
              </div>
            </div>
          ) : null}

          {step === "done" ? (
            <div className="animate-intake-in">
              <h2 className="mb-3 type-h1">
                {t(i.doneTitle)}
              </h2>
              <p className="mb-8 max-w-xl type-lead text-muted">
                {t(i.doneBody)}
              </p>
              <p className="mb-6 max-w-xl type-body text-muted">
                {confirmationSent
                  ? t(i.doneConfirmationSent)
                  : t(i.doneConfirmationPending)}
              </p>
              <div className="glass-card mb-8 max-w-md rounded-3xl p-6">
                <p className="type-label tracking-[0.1em] text-accent">
                  {t(i.entryLabel)} ·{" "}
                  {offerLabels[doneOffer as keyof typeof offerLabels] ??
                    doneOffer}
                </p>
              </div>
              <Link
                href="/"
                className="btn-primary inline-flex rounded-full px-7 py-3.5 text-sm"
              >
                {t(i.doneHome)}
              </Link>
            </div>
          ) : null}
        </div>

        <aside className="hidden lg:block">
          {activeStep ? <IntakeContextPanel {...contextPanelProps} /> : null}
        </aside>
      </div>
      </>
      )}
    </section>
  );
}

function ProbeCards({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: { key: string; label: string }[];
  selected: string | null;
  onSelect: (key: string) => void;
}) {
  const headingId = useId();

  return (
    <div>
      <h3 id={headingId} className="type-h3 mb-4">
        {title}
      </h3>
      <div
        className="grid gap-3 sm:grid-cols-2"
        role="radiogroup"
        aria-labelledby={headingId}
      >
        {options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            role="radio"
            aria-checked={selected === opt.key}
            onClick={() => onSelect(opt.key)}
            className={`type-body cursor-pointer rounded-2xl border px-5 py-4 text-left transition hover:border-accent/40 ${
              selected === opt.key
                ? "border-accent/50 bg-accent/10 text-fg"
                : "border-white/10 bg-panel text-muted"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  hint?: string;
  error?: string | null;
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
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required={required}
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
