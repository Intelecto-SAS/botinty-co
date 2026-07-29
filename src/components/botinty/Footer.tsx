import { brand, contacto, nav } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-[oklch(0.35_0.06_280_/_35%)] px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo className="h-8" />
            <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-relaxed">
              {brand.descripcionCorta}
            </p>
            <p className="text-muted-foreground/70 mt-4 text-xs">
              {brand.nombre} es una solución de {brand.empresaResponsable}.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="text-xs font-semibold tracking-[0.16em] uppercase">Navegación</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] uppercase">Contacto</h2>
            <ul className="text-muted-foreground mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${contacto.correo}`} className="hover:text-foreground transition-colors">
                  {contacto.correo}
                </a>
              </li>
              <li>{contacto.telefono}</li>
              <li>{contacto.ciudad}</li>
            </ul>
          </div>
        </div>

        <p className="text-muted-foreground/70 mt-12 text-center text-xs">
          © {anio} {brand.nombre} · {brand.empresaResponsable}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
