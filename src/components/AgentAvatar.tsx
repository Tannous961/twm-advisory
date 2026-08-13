type Tone = 0 | 1 | 2 | 3 | 4;

export function AgentAvatar({
  name,
  size = "md",
  tone = 0,
  featured = false,
}: {
  name: string;
  size?: "sm" | "md" | "lg";
  tone?: Tone;
  featured?: boolean;
}) {
  const initial = name.trim().charAt(0).toUpperCase();
  const sizeClass =
    size === "lg"
      ? "size-12 text-lg sm:size-14 sm:text-xl"
      : size === "sm"
        ? "size-8 text-xs"
        : "size-10 text-sm";

  const tones = [
    "rgb(var(--accent-rgb) / 0.22)",
    "rgb(var(--accent-rgb) / 0.14)",
    "rgba(232, 228, 221, 0.08)",
    "rgba(232, 228, 221, 0.12)",
    "rgb(var(--accent-rgb) / 0.18)",
  ] as const;

  return (
    <span
      className={`agent-avatar inline-flex shrink-0 items-center justify-center rounded-full border font-display leading-none ${sizeClass} ${
        featured
          ? "border-accent/50 text-accent"
          : "border-white/12 text-[#e8e4dd]"
      }`}
      style={{ background: tones[tone % tones.length] }}
      aria-hidden
    >
      {initial}
    </span>
  );
}
