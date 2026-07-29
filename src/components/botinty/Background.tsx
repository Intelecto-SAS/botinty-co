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

  const curvaEntre = (a: { x: number; y: number }, b: { x: number; y: number }, i: number) => {
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const curva = i % 2 === 0 ? 1 : -1;
    const amplitud = 5 + (i % 3) * 2;
    const c1x = mx - dx * 0.25 + dy * 0.22 * curva;
    const c1y = my - dy * 0.25 - dx * 0.18 * curva;
    const c2x = mx + dx * 0.25 + dy * 0.14 * curva;
    const c2y = my + dy * 0.25 - dx * 0.12 * curva;
    const warpX = (dy > 0 ? 1 : -1) * amplitud * 0.22;
    const warpY = (dx > 0 ? -1 : 1) * amplitud * 0.22;

    return `M ${a.x} ${a.y} C ${c1x + warpX} ${c1y + warpY}, ${c2x - warpX} ${c2y - warpY}, ${b.x} ${b.y}`;
  };

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
            <path
              key={i}
              d={curvaEntre(n, next, i)}
              stroke="url(#bg-line)"
              strokeWidth="0.08"
              strokeDasharray="2 3"
              fill="none"
              strokeLinecap="round"
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
