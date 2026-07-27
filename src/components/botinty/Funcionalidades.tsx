import { funcionalidades } from "@/content/site";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading, TiltCard } from "./primitives";

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
