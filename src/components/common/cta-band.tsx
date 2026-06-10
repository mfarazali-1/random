import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CtaBandProps = {
  title: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/** Full-bleed conversion band reused across marketing pages. */
export function CtaBand({
  title,
  description,
  primary = { label: "Hire Talent", href: "/hire-talent" },
  secondary,
}: CtaBandProps) {
  return (
    <section className="bg-ink-950">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-balance text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="text-ink-300 mx-auto mt-4 max-w-2xl text-lg">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={primary.href} size="lg">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink
                href={secondary.href}
                variant="outline"
                size="lg"
                className="border-ink-700 hover:bg-ink-900 text-white"
              >
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
