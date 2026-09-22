"use client";

type StepId = "intent" | "probes" | "map" | "signal" | "identity";

const STEPS: StepId[] = ["intent", "probes", "map", "signal", "identity"];

export function IntakeStepProgress({
  current,
  labels,
}: {
  current: StepId;
  labels: Record<StepId, string>;
}) {
  const currentIndex = STEPS.indexOf(current);

  return (
    <nav className="mb-0">
      <ol className="flex flex-wrap gap-2 sm:gap-3">
        {STEPS.map((stepId, index) => {
          const done = index < currentIndex;
          const active = index === currentIndex;
          return (
            <li key={stepId} className="flex items-center gap-2 sm:gap-3">
              {index > 0 ? (
                <span
                  aria-hidden
                  className={`hidden h-px w-4 sm:block sm:w-6 ${
                    done ? "bg-accent/50" : "bg-white/10"
                  }`}
                />
              ) : null}
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 type-caption transition ${
                  active
                    ? "border-accent/50 bg-accent/10 text-accent-soft"
                    : done
                      ? "border-accent/25 bg-accent/5 text-muted"
                      : "border-white/10 bg-panel/50 text-muted-3"
                }`}
                aria-current={active ? "step" : undefined}
              >
                <span
                  aria-hidden
                  className={`flex size-5 shrink-0 items-center justify-center rounded-full type-caption ${
                    active
                      ? "bg-accent text-ink"
                      : done
                        ? "bg-accent/25 text-accent-soft"
                        : "bg-white/8 text-muted-3"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="whitespace-nowrap">{labels[stepId]}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
