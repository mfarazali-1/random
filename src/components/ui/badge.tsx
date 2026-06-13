import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "bg-ink-800 text-ink-300 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        className,
      )}
      {...props}
    />
  );
}
