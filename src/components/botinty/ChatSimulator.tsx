import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { Mensaje } from "@/content/site";

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const on = () => setReduce(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduce;
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="bg-cyan inline-block h-1.5 w-1.5 rounded-full"
          style={{ animation: `blink-dot 1.2s ${i * 0.15}s infinite ease-in-out` }}
        />
      ))}
    </span>
  );
}

function Burbuja({ m, typed }: { m: Mensaje; typed: string }) {
  const esBot = m.autor === "bot";
  return (
    <div className={cn("flex w-full", esBot ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)]",
          esBot
            ? "glass rounded-tl-sm text-foreground"
            : "text-primary-foreground rounded-tr-sm bg-[image:var(--gradient-brand)]",
        )}
      >
        {esBot ? (
          <span className="text-cyan mb-1 block text-[10px] font-semibold tracking-[0.14em] uppercase">
            Bot Inty
          </span>
        ) : null}
        {m.buscando ? (
          <span className="text-muted-foreground flex items-center gap-2 text-xs">
            <span className="border-cyan/70 inline-block h-3 w-3 animate-spin rounded-full border-2 border-t-transparent" />
            {m.buscando}
            <TypingDots />
          </span>
        ) : (
          <span>
            {typed}
            {typed.length < m.texto.length ? (
              <span className="bg-cyan ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 animate-pulse" />
            ) : null}
          </span>
        )}
        {m.adjunto && typed.length === m.texto.length ? (
          <span className="glow-ring mt-3 flex items-center gap-3 rounded-xl bg-[oklch(0.16_0.05_278)] px-3 py-2">
            <span
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-[10px] font-bold"
              aria-hidden="true"
            >
              PDF
            </span>
            <span className="min-w-0">
              <span className="block truncate text-xs font-semibold">{m.adjunto}</span>
              <span className="text-muted-foreground block text-[11px]">Documento listo</span>
            </span>
          </span>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Simulador de conversación con efecto de escritura y estados de búsqueda.
 * `loop` reinicia la secuencia; `resetKey` fuerza el reinicio al cambiar de caso.
 */
export function ChatSimulator({
  mensajes,
  className,
  loop = false,
  title = "Bot Inty",
  subtitle = "Asistente interno",
}: {
  mensajes: Mensaje[];
  className?: string;
  loop?: boolean;
  title?: string;
  subtitle?: string;
}) {
  const reduce = usePrefersReducedMotion();
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const key = useMemo(() => mensajes.map((m) => m.texto + m.buscando).join("|"), [mensajes]);

  useEffect(() => {
    setStep(0);
    setTyped("");
  }, [key]);

  useEffect(() => {
    if (reduce) {
      setStep(mensajes.length - 1);
      setTyped(mensajes[mensajes.length - 1]?.texto ?? "");
      return;
    }
    const actual = mensajes[step];
    if (!actual) return;

    let cancel = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (actual.buscando) {
      timers.push(
        setTimeout(() => {
          if (cancel) return;
          avanzar();
        }, 1400),
      );
      return cleanup;
    }

    let i = 0;
    const speed = actual.autor === "empleado" ? 34 : 18;
    const interval = setInterval(() => {
      if (cancel) return;
      i += 1;
      setTyped(actual.texto.slice(0, i));
      if (i >= actual.texto.length) {
        clearInterval(interval);
        timers.push(setTimeout(avanzar, actual.adjunto ? 2200 : 1100));
      }
    }, speed);

    function avanzar() {
      if (step < mensajes.length - 1) {
        setStep((s) => s + 1);
        setTyped("");
      } else if (loop) {
        timers.push(
          setTimeout(() => {
            setStep(0);
            setTyped("");
          }, 3200),
        );
      }
    }

    function cleanup() {
      cancel = true;
      clearInterval(interval);
      timers.forEach(clearTimeout);
    }

    return cleanup;
  }, [step, key, reduce, loop, mensajes]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [typed, step]);

  const visibles = mensajes.slice(0, step + 1);

  return (
    <div
      className={cn(
        "glass glow-ring flex flex-col overflow-hidden rounded-3xl shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-[oklch(0.85_0.06_285_/_10%)] px-4 py-3">
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-xs font-bold"
          aria-hidden="true"
        >
          BI
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold">{title}</span>
          <span className="text-muted-foreground flex items-center gap-1.5 text-[11px]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {subtitle}
          </span>
        </span>
      </div>

      <div
        ref={scrollRef}
        className="flex flex-1 flex-col gap-3 overflow-y-auto p-4"
        aria-live="polite"
      >
        {visibles.map((m, idx) => (
          <Burbuja
            key={idx}
            m={m}
            typed={idx === step ? typed : m.texto}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-[oklch(0.85_0.06_285_/_10%)] px-4 py-3">
        <span className="text-muted-foreground/70 flex-1 truncate rounded-full bg-[oklch(0.16_0.05_278)] px-4 py-2 text-xs">
          Escribe tu solicitud…
        </span>
        <span
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-xs"
          aria-hidden="true"
        >
          ↑
        </span>
      </div>
    </div>
  );
}
