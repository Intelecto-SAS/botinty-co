/** Fondo global: mesh gradient, retícula sutil y nodos conectados. */
export function Background() {
  const nodos = [
    { x: 8, y: 18 },
    { x: 26, y: 42 },
    { x: 48, y: 14 },
    { x: 63, y: 55 },
    { x: 82, y: 26 },
    { x: 92, y: 68 },
    { x: 18, y: 74 },
    { x: 40, y: 88 },
    { x: 70, y: 84 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="mesh-bg animate-drift absolute inset-0 opacity-80" />
      <div className="grid-lines absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]" />
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bg-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.63 0.23 304)" />
            <stop offset="100%" stopColor="oklch(0.79 0.14 205)" />
          </linearGradient>
        </defs>
        {nodos.map((n, i) => {
          const next = nodos[(i + 1) % nodos.length];
          return (
            <line
              key={i}
              x1={n.x}
              y1={n.y}
              x2={next.x}
              y2={next.y}
              stroke="url(#bg-line)"
              strokeWidth="0.08"
              strokeDasharray="2 3"
              style={{ animation: `dash-flow ${16 + i * 2}s linear infinite` }}
            />
          );
        })}
        {nodos.map((n, i) => (
          <circle
            key={`c-${i}`}
            cx={n.x}
            cy={n.y}
            r="0.35"
            fill="oklch(0.79 0.14 205)"
            style={{ animation: `pulse-core ${5 + i}s ease-in-out infinite` }}
          />
        ))}
      </svg>
      <div className="bg-background/60 absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t to-transparent" />
    </div>
  );
}
