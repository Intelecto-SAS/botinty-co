import { useState } from "react";
import { antesDespues } from "@/content/site";
import { Reveal, SectionHeading } from "./primitives";

export function AntesDespues() {
  const [valor, setValor] = useState(50);

  return (
    <section className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Antes y después"
          title="El mismo proceso, una experiencia distinta."
          highlight="una experiencia distinta."
          description="Desliza el control para comparar la atención interna tradicional con la atención conversacional de Bot Inty."
        />

        <Reveal className="mt-12">
          <div className="glass relative overflow-hidden rounded-3xl">
            <div className="grid grid-cols-2">
              <div
                className="p-6 transition-opacity duration-300 sm:p-8"
                style={{ opacity: 0.35 + (1 - valor / 100) * 0.65 }}
              >
                <span className="text-muted-foreground text-xs font-semibold tracking-[0.16em] uppercase">
                  Antes
                </span>
                <ul className="mt-5 space-y-3">
                  {antesDespues.antes.map((a) => (
                    <li key={a} className="text-muted-foreground flex gap-2.5 text-sm">
                      <span className="bg-destructive/70 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="bg-[image:var(--gradient-soft)] p-6 transition-opacity duration-300 sm:p-8"
                style={{ opacity: 0.35 + (valor / 100) * 0.65 }}
              >
                <span className="text-cyan text-xs font-semibold tracking-[0.16em] uppercase">
                  Con Bot Inty
                </span>
                <ul className="mt-5 space-y-3">
                  {antesDespues.despues.map((a) => (
                    <li key={a} className="flex gap-2.5 text-sm">
                      <span className="bg-cyan mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 w-px bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]"
              style={{ left: `${valor}%` }}
            />
          </div>

          <div className="mt-6 px-1">
            <label htmlFor="comparador" className="text-muted-foreground text-xs">
              Comparador antes / después
            </label>
            <input
              id="comparador"
              type="range"
              min={0}
              max={100}
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
              className="accent-violet mt-2 w-full cursor-pointer"
              aria-valuetext={valor > 50 ? "Con Bot Inty" : "Antes"}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
