import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-ink-800 hover:border-ink-700 bg-ink-900 rounded-2xl border p-7 transition-colors",
        className,
      )}
      {...props}
    />
  );
}
