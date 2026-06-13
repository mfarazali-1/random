import { cn } from "@/lib/utils";

const controlBase =
  "w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-2.5 text-ink-50 placeholder:text-ink-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60";

export function Label({
  className,
  children,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("text-ink-200 mb-1.5 block text-sm font-medium", className)}
      {...props}
    >
      {children}
    </label>
  );
}

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(controlBase, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(controlBase, "min-h-32 resize-y", className)}
      {...props}
    />
  );
}

/** Inline validation message for a single field. */
export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-red-400">{message}</p>;
}
