import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

/** Reusable inner-page header band (h1). */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-ink-100 bg-ink-50 border-b py-16 sm:py-20">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </Container>
    </section>
  );
}
