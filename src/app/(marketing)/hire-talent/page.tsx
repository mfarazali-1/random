import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/common/page-header";
import { ServiceList } from "@/features/services/service-list";
import { BenefitsList } from "@/features/hire-talent/benefits-list";
import { InquiryForm } from "@/features/hire-talent/inquiry-form";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Hire Talent",
  description:
    "Outsource your IT and legal recruitment to Hirelo. Faster time-to-hire, access to passive elite talent, and a 24/7 cross-border sourcing engine.",
  path: "/hire-talent",
});

export default function HireTalentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hire Talent"
        title="A faster, more cost-effective path to elite hires"
        description="Partnering with Hirelo. eliminates the friction of talent acquisition while unlocking faster, more cost-effective growth."
      />

      <Section>
        <SectionHeading
          eyebrow="Industries Served"
          title="IT & Legal recruitment, done with precision"
        />
        <div className="mt-12">
          <ServiceList />
        </div>
      </Section>

      <Section className="bg-ink-900">
        <SectionHeading
          eyebrow="Benefits of Outsourcing"
          title="The strategic edge of outsourcing your hiring"
          description="Convert fixed HR overhead into a variable, success-based model — and reach talent your internal team can't."
        />
        <div className="mt-12">
          <BenefitsList />
        </div>
      </Section>

      <section className="py-16 sm:py-24" id="inquiry">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Start a Search"
                title="Tell us about your hiring needs"
                description="Share a few details and a member of our executive team will reach out with a tailored plan."
              />
              <ul className="text-ink-300 mt-8 space-y-3">
                <li>• Pre-vetted, exact-match shortlists</li>
                <li>• Active headhunting of passive talent</li>
                <li>• 90-day retention guarantee on every placement</li>
              </ul>
            </div>
            <div className="border-ink-800 bg-ink-900 rounded-3xl border p-7 sm:p-9">
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
