"use client";

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[color:var(--line)] bg-panel/40 py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-[11px] tracking-[0.22em] text-muted-2 uppercase"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
