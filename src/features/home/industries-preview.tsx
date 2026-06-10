import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { ServiceList } from "@/features/services/service-list";

export function IndustriesPreview() {
  return (
    <Section className="bg-ink-50">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Specialized search across IT & Legal"
        description="Two demanding markets where precision, discretion, and speed decide the outcome."
      />
      <div className="mt-12">
        <ServiceList />
      </div>
      <div className="mt-10">
        <ButtonLink href="/hire-talent" variant="secondary">
          Explore hiring solutions
        </ButtonLink>
      </div>
    </Section>
  );
}
