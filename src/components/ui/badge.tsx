import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "bg-ink-50 text-ink-600 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        className,
      )}
      {...props}
    />
  );
}
