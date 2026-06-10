import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = React.ComponentProps<"section"> & {
  /** Render the inner Container automatically. Set false for full-bleed sections. */
  contained?: boolean;
};

/** A page section with consistent vertical rhythm. */
export function Section({
  className,
  contained = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-24", className)} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
