import { ctaFinal } from "@/content/site";
import { ChatSimulator } from "./ChatSimulator";
import { Reveal } from "./primitives";

export function CtaFinal() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="glow-ring relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[image:var(--gradient-brand)] opacity-90"
          />
          <div
            aria-hidden="true"
            className="grid-lines absolute inset-0 -z-10 opacity-25 mix-blend-overlay"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-3xl leading-tight font-bold text-balance sm:text-4xl">
                {ctaFinal.titulo}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty opacity-90">
                {ctaFinal.texto}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center rounded-xl bg-[#070816] px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-card)] transition-transform hover:scale-[1.02]"
                >
                  {ctaFinal.primario}
                </a>
                <a
                  href="#demo"
                  className="glass inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold"
                >
                  {ctaFinal.secundario}
                </a>
              </div>
            </div>

            <ChatSimulator
              mensajes={[
                { autor: "empleado", texto: ctaFinal.chat.empleado },
                { autor: "bot", texto: ctaFinal.chat.bot },
              ]}
              loop
              className="h-64"
              subtitle="Conversación de bienvenida"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
