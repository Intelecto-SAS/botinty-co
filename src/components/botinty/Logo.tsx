import { cn } from "@/lib/utils";
import logo from "@/assets/bot-inty-logo.png.asset.json";

/** Marca oficial Bot Inty by Intelecto. */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Bot Inty by Intelecto"
      className={cn("w-auto shrink-0 object-contain", className)}
      loading="eager"
      decoding="async"
    />
  );
}
