import { beneficios, cifras } from "@/content/site";
import { Counter, Reveal, SectionHeading, TiltCard } from "./primitives";

export function Beneficios() {
  return (
    <section id="resultados" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Beneficios"
          title="Más capacidad para tus equipos. Una mejor experiencia para tus empleados."
          highlight="Una mejor experiencia para tus empleados."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cifras.map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <TiltCard className="glow-ring h-full rounded-3xl bg-[image:var(--gradient-soft)] p-6 text-center">
                <p className="text-gradient font-display text-4xl font-bold">
                  <Counter value={c.valor} suffix={c.sufijo} />
                </p>
                <p className="text-muted-foreground mt-2 text-sm">{c.label}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.lista.map((b, i) => (
            <Reveal as="li" key={b} delay={i * 50}>
              <div className="glass hover:border-cyan/30 h-full rounded-2xl p-5 text-sm leading-relaxed transition-colors">
                <span
                  aria-hidden="true"
                  className="mb-3 block h-8 w-8 rounded-xl bg-[image:var(--gradient-brand)] opacity-70"
                />
                {b}
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="text-muted-foreground/70 mt-8 text-center text-xs">
          Las cifras corresponden a información reportada por clientes y son editables desde el
          archivo de contenido del sitio.
        </p>
      </div>
    </section>
  );
}
