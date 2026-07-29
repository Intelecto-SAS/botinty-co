import { conversacionHero, hero } from "@/content/site";
import { cn } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { ChatSimulator } from "./ChatSimulator";
import { Eyebrow, Reveal } from "./primitives";

export function Hero() {
  const [activo, setActivo] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setActivo((a) => (a + 1) % conversacionHero.length), 12000);
    return () => clearInterval(t);
  }, [auto]);

  const conv = conversacionHero[activo];

  return (
    <section id="inicio" className="relative px-4 pt-28 pb-12 sm:px-6 sm:pt-36 lg:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <Eyebrow>{hero.etiqueta}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl leading-[1.05] font-bold text-balance sm:text-5xl lg:text-6xl">
              Todo lo que tus colaboradores necesitan,{" "}
              <span className="text-gradient">en una sola conversación.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-muted-foreground max-w-xl text-base leading-relaxed text-pretty sm:text-lg">
              {hero.apoyo}
            </p>
          </Reveal>

          <Reveal delay={240} className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={hero.ctaPrimario.href}
                className="text-primary-foreground group inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              >
                {hero.ctaPrimario.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={hero.ctaSecundario.href}
                className="glass hover:bg-accent/30 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors"
              >
                <Play className="text-cyan h-4 w-4" />
                {hero.ctaSecundario.label}
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-muted-foreground/80 text-sm">{hero.nota}</p>
          </Reveal>

          <Reveal delay={360} className="w-full">
            <ul className="flex flex-wrap gap-2">
              {hero.chips.map((c, i) => (
                <li
                  key={c}
                  className="glass text-muted-foreground animate-float-slow rounded-full px-3.5 py-1.5 text-xs font-medium"
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          {/* Núcleo digital abstracto */}
          <div
            aria-hidden="true"
            className="animate-pulse-core absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_45%,oklch(0.55_0.25_302_/_45%),oklch(0.55_0.22_264_/_18%)_45%,transparent_70%)] blur-2xl"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
          >
            <defs>
              <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
            {[70, 110, 150].map((r, i) => (
              <circle
                key={r}
                cx="200"
                cy="200"
                r={r}
                fill="none"
                stroke="url(#hero-line)"
                strokeWidth="0.7"
                strokeDasharray="6 10"
                opacity={0.5 - i * 0.12}
                style={{ animation: `dash-flow ${12 + i * 6}s linear infinite` }}
              />
            ))}
          </svg>

          <ChatSimulator
            mensajes={conv.mensajes}
            loop
            className="h-[26rem] sm:h-[28rem]"
            subtitle={`Conectado · ${conv.area}`}
          />

          <div className="mt-4 flex flex-wrap gap-2">
            {conversacionHero.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setActivo(i);
                  setAuto(false);
                }}
                aria-pressed={i === activo}
                className={cn(
                  "rounded-full px-3.5 py-2 text-xs font-medium transition-all",
                  i === activo
                    ? "text-primary-foreground bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]"
                    : "glass text-muted-foreground hover:text-foreground",
                )}
              >
                {c.area}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
