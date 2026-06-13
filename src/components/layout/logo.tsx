import Link from "next/link";
import { cn } from "@/lib/utils";

/** Wordmark logo linking home. `tone` adapts to light/dark backgrounds. */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "font-display text-xl font-semibold tracking-tight",
        tone === "dark" ? "text-ink-50" : "text-white",
        className,
      )}
    >
      Hire<span className="text-blue-400">lo</span>
    </Link>
  );
}
