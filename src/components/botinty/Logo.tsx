import { cn } from "@/lib/utils";

/** Marca Bot Inty: núcleo conversacional abstracto + wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 40 40"
        role="img"
        aria-label="Bot Inty"
        className="h-full w-auto shrink-0"
      >
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="55%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <path
          d="M20 3.5c9.1 0 16.5 7.4 16.5 16.5S29.1 36.5 20 36.5H6.2l3.1-5.4A16.4 16.4 0 0 1 3.5 20C3.5 10.9 10.9 3.5 20 3.5Z"
          fill="none"
          stroke="url(#logo-g)"
          strokeWidth="2.4"
        />
        <circle cx="20" cy="20" r="4.6" fill="url(#logo-g)" />
        <circle cx="20" cy="20" r="8.6" fill="none" stroke="url(#logo-g)" strokeWidth="1" opacity="0.5" />
      </svg>
      <span className="font-display truncate text-lg leading-none font-bold">
        Bot <span className="text-gradient">Inty</span>
      </span>
    </span>
  );
}
