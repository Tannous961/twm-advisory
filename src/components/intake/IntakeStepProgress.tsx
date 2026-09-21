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
    <nav aria-label="Progression" className="intake-spine">
      <ol className="flex flex-col gap-0">
        {STEPS.map((stepId, index) => {
          const done = index < currentIndex;
          const active = index === currentIndex;
          return (
            <li key={stepId} className="relative flex gap-4 pb-5 last:pb-0">
              {index < STEPS.length - 1 ? (
                <span
                  aria-hidden
                  className={`absolute top-6 left-[0.55rem] h-[calc(100%-0.75rem)] w-px ${
                    done ? "bg-accent/60" : "bg-[color:var(--line)]"
                  }`}
                />
              ) : null}
              <span
                aria-hidden
                className={`relative z-1 mt-0.5 flex size-[1.15rem] shrink-0 items-center justify-center rounded-[0.2rem] type-caption ${
                  active
                    ? "bg-accent text-ink"
                    : done
                      ? "border border-accent/50 bg-accent/15 text-accent-soft"
                      : "border border-[color:var(--line)] bg-panel text-muted-3"
                }`}
              >
                {index + 1}
              </span>
              <span
                className={`type-label tracking-[0.14em] ${
                  active
                    ? "text-accent"
                    : done
                      ? "text-muted"
                      : "text-muted-3"
                }`}
                aria-current={active ? "step" : undefined}
              >
                {labels[stepId]}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
