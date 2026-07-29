import { problema } from "@/content/site";
import { Clock, FileWarning, FolderOpen, Mail, MessageSquare, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const iconosCaos = [
  { Icon: Mail, label: "Correos" },
  { Icon: FolderOpen, label: "Carpetas" },
  { Icon: MessageSquare, label: "Chats" },
  { Icon: Phone, label: "Llamadas" },
  { Icon: FileWarning, label: "Formularios" },
  { Icon: Clock, label: "Mesa de ayuda" },
];

export function Problema() {
  return (
    <section id="soluciones" className="px-4 py-14 sm:px-6 lg:py-20">
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

            <div className="mt-6" />



            <ul className="mt-2 space-y-2.5">
              {problema.despues.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed">
                  <span className="bg-cyan mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {p}
                </li>
              ))}
            </ul>

            <p className="text-gradient mt-8 text-lg font-bold text-balance sm:text-xl">
              {problema.cierre}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
