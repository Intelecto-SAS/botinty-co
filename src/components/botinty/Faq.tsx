import { faq } from "@/content/site";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "./primitives";

export function Faq() {
  const [abierto, setAbierto] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Lo que suelen preguntarnos antes de empezar."
          highlight="antes de empezar."
        />

        <ul className="mt-12 space-y-3">
          {faq.map((item, i) => {
            const activo = abierto === i;
            return (
              <Reveal as="li" key={item.q} delay={i * 40}>
                <div
                  className={cn(
                    "glass overflow-hidden rounded-2xl transition-colors",
                    activo && "border-cyan/30",
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setAbierto(activo ? null : i)}
                      aria-expanded={activo}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold sm:text-base"
                    >
                      <span className="min-w-0">{item.q}</span>
                      <ChevronDown
                        className={cn(
                          "text-cyan h-4 w-4 shrink-0 transition-transform",
                          activo && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    hidden={!activo}
                    className="text-muted-foreground px-5 pb-5 text-sm leading-relaxed"
                  >
                    {item.a}
                    {i === faq.length - 1 ? (
                      <a
                        href="#demo"
                        className="text-cyan mt-3 block font-semibold hover:underline"
                      >
                        Ir al formulario comercial →
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
