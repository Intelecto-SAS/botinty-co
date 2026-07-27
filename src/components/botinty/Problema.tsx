import { Mail, FolderOpen, MessageSquare, Phone, FileWarning, Clock } from "lucide-react";
import { problema } from "@/content/site";
import { Reveal, SectionHeading } from "./primitives";

const iconosCaos = [
  { Icon: Mail, label: "Correos" },
  { Icon: FolderOpen, label: "Carpetas" },
  { Icon: MessageSquare, label: "Chats" },
  { Icon: Phone, label: "Llamadas" },
  { Icon: FileWarning, label: "Formularios" },
  { Icon: Clock, label: "Esperas" },
];

export function Problema() {
  return (
    <section id="soluciones" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="El punto de partida"
          title="Tus colaboradores no deberían perder tiempo buscando respuestas."
          highlight="buscando respuestas."
          description="La atención interna se dispersa entre canales, personas y sistemas. Bot Inty concentra esa experiencia en un solo lugar."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Escenario tradicional */}
          <Reveal className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <span className="text-muted-foreground text-xs font-semibold tracking-[0.16em] uppercase">
              Escenario tradicional
            </span>
            <div className="mt-6 grid grid-cols-3 gap-3" aria-hidden="true">
              {iconosCaos.map(({ Icon, label }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-[oklch(0.7_0.05_285_/_18%)] bg-[oklch(0.16_0.05_278_/_60%)] px-2 py-4"
                  style={{ transform: `rotate(${(i % 3) - 1}deg)` }}
                >
                  <Icon className="text-muted-foreground h-5 w-5" />
                  <span className="text-muted-foreground text-[11px]">{label}</span>
                </div>
              ))}
            </div>
            <ul className="mt-6 space-y-2.5">
              {problema.antes.map((p) => (
                <li key={p} className="text-muted-foreground flex gap-3 text-sm leading-relaxed">
                  <span className="bg-destructive/70 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Con Bot Inty */}
          <Reveal delay={120} className="glow-ring relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[image:var(--gradient-soft)]"
            />
            <span className="text-cyan text-xs font-semibold tracking-[0.16em] uppercase">
              Con Bot Inty
            </span>

            <div className="relative mt-6 h-40" aria-hidden="true">
              <svg viewBox="0 0 320 160" className="h-full w-full">
                <defs>
                  <linearGradient id="pr-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
                {[20, 60, 100, 140].map((y, i) => (
                  <path
                    key={y}
                    d={`M8 ${y} C 110 ${y}, 120 80, 160 80`}
                    fill="none"
                    stroke="url(#pr-line)"
                    strokeWidth="1.2"
                    strokeDasharray="5 7"
                    style={{ animation: `dash-flow ${6 + i}s linear infinite` }}
                  />
                ))}
                {[20, 60, 100, 140].map((y, i) => (
                  <path
                    key={`r-${y}`}
                    d={`M160 80 C 200 80, 210 ${y}, 312 ${y}`}
                    fill="none"
                    stroke="url(#pr-line)"
                    strokeWidth="1.2"
                    strokeDasharray="5 7"
                    opacity="0.7"
                    style={{ animation: `dash-flow ${7 + i}s linear infinite reverse` }}
                  />
                ))}
                <circle cx="160" cy="80" r="24" fill="url(#pr-line)" opacity="0.25" />
                <circle cx="160" cy="80" r="14" fill="url(#pr-line)" />
                <text x="160" y="84" textAnchor="middle" fontSize="9" fill="#070816" fontWeight="700">
                  BI
                </text>
              </svg>
            </div>

            <ul className="mt-2 space-y-2.5">
              {problema.despues.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed">
                  <span className="bg-cyan mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p className="text-gradient mt-12 text-center text-2xl font-bold text-balance sm:text-3xl">
            {problema.cierre}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
