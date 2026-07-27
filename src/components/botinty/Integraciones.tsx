import { integraciones } from "@/content/site";
import { Reveal, SectionHeading } from "./primitives";

export function Integraciones() {
  const visibles = integraciones.items.filter((i) => i.visible);

  return (
    <section id="integraciones" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Integraciones"
          title="Bot Inty se conecta con el ecosistema de tu empresa."
          highlight="el ecosistema de tu empresa."
          description={integraciones.nota}
        />

        <Reveal className="relative mt-14">
          <div className="glass rounded-3xl p-6 sm:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
              <div className="relative mx-auto aspect-square w-full max-w-xs">
                <div
                  aria-hidden="true"
                  className="animate-pulse-core absolute inset-[28%] rounded-full bg-[image:var(--gradient-brand)] blur-2xl"
                />
                <svg viewBox="0 0 200 200" aria-hidden="true" className="relative h-full w-full">
                  <defs>
                    <linearGradient id="int-line" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                  {visibles.map((_, i) => {
                    const a = (i / visibles.length) * Math.PI * 2 - Math.PI / 2;
                    return (
                      <g key={i}>
                        <line
                          x1="100"
                          y1="100"
                          x2={100 + Math.cos(a) * 78}
                          y2={100 + Math.sin(a) * 78}
                          stroke="url(#int-line)"
                          strokeWidth="0.8"
                          strokeDasharray="4 6"
                          style={{ animation: `dash-flow ${7 + (i % 5)}s linear infinite` }}
                        />
                        <circle
                          cx={100 + Math.cos(a) * 78}
                          cy={100 + Math.sin(a) * 78}
                          r="5"
                          fill="url(#int-line)"
                          opacity="0.9"
                        />
                      </g>
                    );
                  })}
                  <circle cx="100" cy="100" r="30" fill="url(#int-line)" opacity="0.25" />
                  <circle cx="100" cy="100" r="20" fill="url(#int-line)" />
                  <text x="100" y="105" textAnchor="middle" fontSize="12" fontWeight="700" fill="#070816">
                    BI
                  </text>
                </svg>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {visibles.map((item, i) => (
                  <Reveal as="li" key={item.nombre} delay={i * 45}>
                    <div className="glass hover:border-cyan/40 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 shrink-0 rounded-full bg-[image:var(--gradient-brand)]"
                      />
                      <span className="min-w-0 truncate">{item.nombre}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
