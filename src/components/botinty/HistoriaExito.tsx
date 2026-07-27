import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { historiaExito } from "@/content/site";
import { Reveal, SectionHeading } from "./primitives";

export function HistoriaExito() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Historia de éxito"
          title="Cuando cada segundo cuenta, una conversación puede cambiarlo todo."
          highlight="una conversación puede cambiarlo todo."
        />

        <Reveal className="mt-12">
          <article className="glow-ring overflow-hidden rounded-3xl bg-[image:var(--gradient-soft)] p-6 sm:p-10">
            <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="glass grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xs font-bold"
                  aria-hidden="true"
                >
                  {historiaExito.cliente.slice(0, 2).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-xl font-bold">{historiaExito.cliente}</h3>
                  <p className="text-muted-foreground text-xs">Caso de implementación</p>
                </div>
              </div>
              <span className="glass text-cyan shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold">
                Atención interna
              </span>
            </header>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-muted-foreground text-xs font-semibold tracking-[0.16em] uppercase">
                  Situación anterior
                </h4>
                <p className="mt-2 text-sm leading-relaxed">{historiaExito.situacion}</p>
              </div>
              <div>
                <h4 className="text-muted-foreground text-xs font-semibold tracking-[0.16em] uppercase">
                  Solución implementada
                </h4>
                <p className="mt-2 text-sm leading-relaxed">{historiaExito.solucion}</p>
              </div>
            </div>

            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              {historiaExito.resultados.map((r) => (
                <div key={r.label} className="glass rounded-2xl p-4 text-center">
                  <dt className="sr-only">{r.label}</dt>
                  <dd className="text-gradient font-display text-2xl font-bold">{r.valor}</dd>
                  <p className="text-muted-foreground mt-1 text-xs">{r.label}</p>
                </div>
              ))}
            </dl>

            <blockquote className="mt-8 border-l-2 border-[oklch(0.63_0.23_304)] pl-4 text-base leading-relaxed italic sm:text-lg">
              “{historiaExito.frase}”
            </blockquote>



          </article>
        </Reveal>
      </div>

      {abierto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Caso completo de ${historiaExito.cliente}`}
          className="fixed inset-0 z-[60] grid place-items-center bg-[oklch(0.08_0.03_279_/_85%)] p-4 backdrop-blur-sm"
          onClick={() => setAbierto(false)}
        >
          <div
            className="glass max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold">{historiaExito.cliente}</h3>
              <button
                type="button"
                onClick={() => setAbierto(false)}
                aria-label="Cerrar"
                className="glass grid h-9 w-9 shrink-0 place-items-center rounded-xl"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              {historiaExito.casoCompleto}
            </p>
            <a
              href="#demo"
              onClick={() => setAbierto(false)}
              className="text-primary-foreground mt-6 inline-flex rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold"
            >
              Solicitar una demo
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}
