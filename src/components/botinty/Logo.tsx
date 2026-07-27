import { cn } from "@/lib/utils";
import { useState } from "react";

/** Marca oficial Bot Inty by Intelecto. */
export function Logo({ className }: { className?: string }) {
  const primarySrc = "/__l5e/assets-v1/3db06cdf-640a-47ec-a68c-919c3bc77896/bot-inty-logo.png";
  const fallbackSrc =
    "https://cdn.lovable.dev/a/v1/52224b69-63e2-400b-b5a5-03b8b22ca0d3/3db06cdf-640a-47ec-a68c-919c3bc77896/bot-inty-logo.png";
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
