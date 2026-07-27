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
            <div className="grid items-center gap-10">

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

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
