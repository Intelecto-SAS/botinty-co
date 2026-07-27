import { seguridad } from "@/content/site";
import { Reveal, SectionHeading } from "./primitives";

export function Seguridad() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Seguridad y control"
          title="Inteligencia artificial alineada con las reglas de tu empresa."
          highlight="con las reglas de tu empresa."
          description="La organización define qué información existe, quién puede verla y qué puede hacer Bot Inty con ella."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="relative mx-auto aspect-square w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-[34%] animate-pulse-core rounded-2xl bg-[image:var(--gradient-brand)] blur-xl"
            />
            <div aria-hidden="true" className="absolute inset-0">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="glass absolute rounded-3xl"
                  style={{
                    inset: `${i * 11}%`,
                    opacity: 0.9 - i * 0.15,
                    transform: `rotate(${i * 9}deg)`,
                  }}
                />
              ))}
              <span className="absolute inset-[38%] grid place-items-center rounded-2xl bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-[#070816]">
                Datos
              </span>
            </div>
          </Reveal>

          <ul className="grid gap-3 sm:grid-cols-2">
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
