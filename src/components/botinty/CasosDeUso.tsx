import { casosDeUso } from "@/content/site";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";
import { ChatSimulator } from "./ChatSimulator";
import { Reveal, SectionHeading } from "./primitives";

/** Ilustración abstracta por área (sin fotografías ni robots genéricos). */
function Abstracta({ index }: { index: number }) {
  const seeds = [3, 5, 4, 6, 7];
  const n = seeds[index % seeds.length];
  return (
    <svg viewBox="0 0 200 120" aria-hidden="true" className="h-24 w-full opacity-80">
      <defs>
        <linearGradient id={`cu-${index}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      {Array.from({ length: n }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${100 - i * 12} C 60 ${40 + i * 8}, 140 ${110 - i * 14}, 200 ${30 + i * 10}`}
          fill="none"
          stroke={`url(#cu-${index})`}
          strokeWidth="1.1"
          strokeDasharray="6 8"
          opacity={0.8 - i * 0.1}
          style={{ animation: `dash-flow ${8 + i * 2}s linear infinite` }}
        />
      ))}
    </svg>
  );
}

export function CasosDeUso() {
  const [activo, setActivo] = useState(0);
  const caso = casosDeUso[activo];

  return (
    <section id="casos-de-uso" className="px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Casos de uso"
          title="Una experiencia inteligente para toda la organización."
          highlight="para toda la organización."
          description="Cada área activa los procesos que más le pesan y suma nuevos casos con el tiempo."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[15rem_1fr]">
          <nav aria-label="Áreas de la organización">
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {casosDeUso.map((c, i) => (
                <li key={c.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => setActivo(i)}
                    aria-current={i === activo}
                    className={cn(
                      "w-full rounded-2xl px-4 py-3 text-left text-sm font-medium whitespace-nowrap transition-all",
                      i === activo
                        ? "glow-ring bg-[image:var(--gradient-soft)] text-foreground"
                        : "glass text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {c.area}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <Reveal key={caso.id} className="glass rounded-3xl p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">{caso.area}</h3>
                <Abstracta index={activo} />
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {caso.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="text-cyan mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ChatSimulator
                mensajes={caso.conversacion}
                loop
                className="h-72"
                subtitle={caso.area}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
