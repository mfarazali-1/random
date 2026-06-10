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
        "font-serif text-xl font-semibold tracking-tight",
        tone === "dark" ? "text-ink-900" : "text-white",
        className,
      )}
    >
      Abdullah<span className="text-gold-500">&nbsp;&amp;&nbsp;Co.</span>
    </Link>
  );
}
