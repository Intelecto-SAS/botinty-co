import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Navegación principal"
        className={cn(
          "glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl transition-all duration-300",
          scrolled ? "px-4 py-2 shadow-[var(--shadow-card)] sm:px-5" : "px-4 py-3 sm:px-6 sm:py-4",
        )}
      >
        <a href="#inicio" className="flex min-w-0 items-center gap-2">
          <Logo className={cn("transition-all", scrolled ? "h-7" : "h-8")} />
          <span className="sr-only">Bot Inty, inicio</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted-foreground hover:text-foreground hover:bg-accent/40 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#demo"
            className={cn(
              "text-primary-foreground hidden rounded-xl bg-[image:var(--gradient-brand)] font-semibold shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] sm:inline-flex",
              scrolled ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-sm",
            )}
          >
            Solicitar una demo
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="glass grid h-10 w-10 shrink-0 place-items-center rounded-xl lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        hidden={!open}
        className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 lg:hidden"
      >
        <ul className="flex flex-col gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:bg-accent/40 block rounded-xl px-4 py-3 text-sm font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="text-primary-foreground block rounded-xl bg-[image:var(--gradient-brand)] px-4 py-3 text-center text-sm font-semibold"
            >
              Solicitar una demo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
