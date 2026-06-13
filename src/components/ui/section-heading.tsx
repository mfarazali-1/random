import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

/** Consistent eyebrow + title + description heading block. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-blue-400 uppercase">
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "text-ink-50 text-balance",
          Heading === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className="text-ink-300 mt-4 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
