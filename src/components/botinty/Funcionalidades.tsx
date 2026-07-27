import { funcionalidades } from "@/content/site";
import { Reveal, SectionHeading, TiltCard } from "./primitives";
import { cn } from "@/lib/utils";

export function Funcionalidades() {
  return (
    <section id="funcionalidades" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Funcionalidades"
          title="Un solo asistente. Cientos de posibilidades."
          highlight="Cientos de posibilidades."
          description="Capacidades que se activan por etapas según los procesos y las fuentes que autorice tu organización."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Núcleo central */}
          <Reveal className="glow-ring relative overflow-hidden rounded-3xl p-6 sm:col-span-2 lg:row-span-2">
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[image:var(--gradient-soft)]" />
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <span className="text-cyan text-xs font-semibold tracking-[0.16em] uppercase">
                  Núcleo
                </span>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Bot Inty <span className="text-gradient">AI</span>
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  Un motor conversacional que interpreta el lenguaje natural, entiende el contexto
                  del colaborador y orquesta las acciones sobre las fuentes autorizadas de tu
                  empresa.
                </p>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-[18rem]" aria-hidden="true">
                <div className="animate-pulse-core absolute inset-[22%] rounded-full bg-[image:var(--gradient-brand)] blur-xl" />
                <svg viewBox="0 0 200 200" className="relative h-full w-full">
                  <defs>
                    <linearGradient id="fn-line" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                  {Array.from({ length: 8 }).map((_, i) => {
                    const a = (i / 8) * Math.PI * 2;
                    return (
                      <g key={i}>
                        <line
                          x1="100"
                          y1="100"
                          x2={100 + Math.cos(a) * 80}
                          y2={100 + Math.sin(a) * 80}
                          stroke="url(#fn-line)"
                          strokeWidth="0.9"
                          strokeDasharray="4 6"
                          style={{ animation: `dash-flow ${6 + i}s linear infinite` }}
                        />
                        <circle
                          cx={100 + Math.cos(a) * 80}
                          cy={100 + Math.sin(a) * 80}
                          r="4"
                          fill="url(#fn-line)"
                        />
                      </g>
                    );
                  })}
                  <circle cx="100" cy="100" r="26" fill="url(#fn-line)" opacity="0.3" />
                  <circle cx="100" cy="100" r="16" fill="url(#fn-line)" />
                </svg>
              </div>
            </div>
          </Reveal>

          {funcionalidades.map((f, i) => (
            <Reveal key={f.titulo} delay={i * 60} className={cn(f.destacada && "sm:col-span-1")}>
              <TiltCard className="glass hover:border-cyan/30 group h-full rounded-3xl p-6 transition-colors">
                <div className="flex h-full flex-col gap-3">
                  <span
                    className="text-cyan font-display text-xs font-bold tracking-[0.2em]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold">{f.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.texto}</p>
                  <span
                    aria-hidden="true"
                    className="mt-auto block h-px w-full bg-[image:var(--gradient-brand)] opacity-30 transition-opacity group-hover:opacity-90"
                  />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
