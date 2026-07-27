import { clientes } from "@/content/site";
import { Reveal } from "./primitives";

/** Franja de confianza. Los logos son marcadores editables (ver src/content/site.ts). */
export function Clientes() {
  const items = [...clientes.logos, ...clientes.logos];

  return (
    <section aria-label="Empresas que confían en Bot Inty" className="px-4 py-12 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <p className="text-muted-foreground text-center text-xs font-semibold tracking-[0.18em] uppercase">
          {clientes.titulo}
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="animate-marquee flex w-max items-center gap-4">
            {items.map((logo, i) => (
              <li
                key={`${logo.nombre}-${i}`}
                className="glass text-muted-foreground hover:text-cyan flex h-16 w-44 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                {logo.nombre}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
