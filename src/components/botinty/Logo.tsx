import { cn } from "@/lib/utils";
import { useState } from "react";

/** Marca oficial Bot Inty by Intelecto. */
export function Logo({ className }: { className?: string }) {
  const primarySrc = "/assets/bot-inty-logo.png";
  const fallbackSrc = "/assets/bot-inty-logo.png";
  const [src, setSrc] = useState(primarySrc);
  const [showTextFallback, setShowTextFallback] = useState(false);

  if (showTextFallback) {
    return (
      <span
        aria-label="Bot Inty by Intelecto"
        className={cn("inline-flex shrink-0 items-center font-semibold", className)}
      >
        Bot Inty
      </span>
    );
  }

  return (
    <img
      src={src}
      alt="Bot Inty by Intelecto"
      className={cn("w-auto shrink-0 object-contain", className)}
      loading="eager"
      decoding="async"
      onError={() => {
        if (src !== fallbackSrc) {
          setSrc(fallbackSrc);
          return;
        }
        setShowTextFallback(true);
      }}
    />
  );
}
