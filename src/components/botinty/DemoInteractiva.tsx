import { useState } from "react";
import { demoConversaciones } from "@/content/site";
import { ChatSimulator } from "./ChatSimulator";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

export function DemoInteractiva() {
  const [activo, setActivo] = useState(0);
  const conv = demoConversaciones[activo];

  return (
    <section id="demo-interactiva" className="relative px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Demostración interactiva"
          title="Elige una situación y conversa con Bot Inty."
          highlight="conversa con Bot Inty."
          description="Cada área tiene sus propias solicitudes. Selecciona una para ver cómo Bot Inty interpreta, consulta y resuelve."
        />

        <div
          role="tablist"
          aria-label="Situaciones de demostración"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {demoConversaciones.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={i === activo}
              aria-controls={`panel-${c.id}`}
              type="button"
              onClick={() => setActivo(i)}
              className={cn(
                "rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                i === activo
                  ? "text-primary-foreground bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]"
                  : "glass text-muted-foreground hover:text-foreground",
              )}
            >
              {c.area}
            </button>
          ))}
        </div>

        <Reveal className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <span className="text-cyan text-xs font-semibold tracking-[0.16em] uppercase">
              {conv.area}
            </span>
            <h3 className="mt-3 text-2xl font-bold text-balance">{conv.resumen}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Bot Inty identifica la intención del colaborador, valida su contexto y ejecuta la
              acción correspondiente sin salir de la conversación.
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "Intención", v: "Detectada" },
                { k: "Contexto", v: "Perfil y área" },
                { k: "Acción", v: "Automática" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl bg-[oklch(0.16_0.05_278_/_70%)] px-2 py-3">
                  <dt className="text-muted-foreground text-[11px]">{s.k}</dt>
                  <dd className="mt-1 text-xs font-semibold">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            role="tabpanel"
            id={`panel-${conv.id}`}
            aria-labelledby={`tab-${conv.id}`}
            key={conv.id}
          >
            <ChatSimulator
              mensajes={conv.mensajes}
              loop
              className="h-[26rem]"
              subtitle={`Caso · ${conv.area}`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
