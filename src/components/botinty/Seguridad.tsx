import { seguridad } from "@/content/site";
import { Reveal, SectionHeading } from "./primitives";

export function Seguridad() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Seguridad y control"
          title="Inteligencia artificial alineada con las reglas de tu empresa."
          highlight="con las reglas de tu empresa."
          description="La organización define qué información existe, quién puede verla y qué puede hacer Bot Inty con ella."
        />

        <div className="mt-14">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {seguridad.items.map((s, i) => (
              <Reveal as="li" key={s.titulo} delay={i * 60}>
                <div className="glass hover:border-cyan/30 h-full rounded-2xl p-5 transition-colors">
                  <h3 className="text-sm font-semibold">{s.titulo}</h3>
                  <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">{s.texto}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
