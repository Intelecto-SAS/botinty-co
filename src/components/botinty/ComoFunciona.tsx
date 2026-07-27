import { comoFunciona } from "@/content/site";
import { Reveal, SectionHeading } from "./primitives";

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="De una pregunta a una solución, en segundos."
          highlight="en segundos."
          description="Un recorrido simple para el colaborador y trazable para la organización."
        />

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="absolute top-14 right-6 left-6 hidden h-px bg-[image:var(--gradient-brand)] opacity-40 lg:block"
          />
          {comoFunciona.pasos.map((p, i) => (
            <Reveal as="li" key={p.titulo} delay={i * 120} className="relative">
              <div className="glass hover:border-cyan/30 h-full rounded-3xl p-6 transition-colors">
                <span
                  className="text-primary-foreground relative z-10 grid h-11 w-11 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-sm font-bold shadow-[var(--shadow-glow)]"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{p.titulo}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.texto}</p>
              </div>
              {i < comoFunciona.pasos.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="bg-cyan/60 absolute -bottom-4 left-1/2 hidden h-4 w-px lg:block"
                />
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
