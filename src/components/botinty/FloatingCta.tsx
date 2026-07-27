import { useEffect, useState } from "react";
import { MessageSquareText } from "lucide-react";
import { cn } from "@/lib/utils";

/** Botón flotante persistente para solicitar una demostración. */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#demo"
      className={cn(
        "text-primary-foreground fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-5 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] transition-all duration-300 sm:right-6 sm:bottom-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <MessageSquareText className="h-4 w-4" aria-hidden="true" />
      Solicitar una demo
    </a>
  );
}
