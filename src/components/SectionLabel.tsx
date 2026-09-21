export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-3.5 md:mb-10">
      <span className="type-label tracking-[0.18em] text-accent">
        {index}
      </span>
      <span className="type-label tracking-[0.14em] text-muted-2">
        {label}
      </span>
      <span className="h-px flex-1 bg-[color:var(--line)]" />
    </div>
  );
}
