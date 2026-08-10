type LogoMarkProps = {
  className?: string;
  /** When true, arcs use splash stroke-draw classes */
  animate?: boolean;
};

/** Geometric mark — 3 dual arcs at 120° (Y orientation). */
export function LogoMark({ className = "", animate = false }: LogoMarkProps) {
  const arms = [0, 120, 240];

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
      fill="none"
    >
      {arms.map((rot, i) => (
        <g
          key={rot}
          transform={`rotate(${rot} 50 50)`}
          stroke="currentColor"
          strokeLinecap="butt"
          strokeLinejoin="round"
        >
          <path
            className={animate ? "splash-arc" : undefined}
            pathLength={1}
            strokeWidth={8.2}
            d="M 24 54 A 34 34 0 0 1 76 54"
            style={animate ? { animationDelay: `${i * 0.14}s` } : undefined}
          />
          <path
            className={animate ? "splash-arc splash-arc-inner" : undefined}
            pathLength={1}
            strokeWidth={8.2}
            d="M 34 52 A 22 22 0 0 1 66 52"
            style={
              animate ? { animationDelay: `${0.2 + i * 0.14}s` } : undefined
            }
          />
        </g>
      ))}
    </svg>
  );
}
