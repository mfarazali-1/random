import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-ink-100 rounded-2xl border bg-white p-7 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
      {...props}
    />
  );
}
