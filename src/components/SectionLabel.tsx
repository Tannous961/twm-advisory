export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-3.5 md:mb-10">
      <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
        § {index}
      </span>
      <span className="font-mono text-[11px] tracking-[0.2em] text-muted-2 uppercase">
        {label}
      </span>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}
