import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/common/page-header";
import { CtaBand } from "@/components/common/cta-band";
import { PricingGrid } from "@/features/pricing/pricing-grid";
import { GuaranteeBlock } from "@/features/pricing/guarantee-block";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pricing & Engagement Models",
  description:
    "Flexible, transparent engagement models — Contingent, Engaged/Container, and Retained executive search — each backed by a 90-day retention guarantee.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Engagement models tailored to your search"
        description="Every talent search carries unique demands around speed, complexity, and confidentiality. Choose the structure that fits your goals."
      />
      <Section>
        <PricingGrid />
      </Section>
      <GuaranteeBlock />
      <CtaBand
        title="Request a custom rate proposal"
        description="Every hiring pipeline is different. Contact our executive team for a tailored fee structure aligned with your timeline and target talent profile."
        primary={{ label: "Request a proposal", href: "/contact" }}
        secondary={{ label: "Start a search", href: "/hire-talent" }}
      />
    </>
  );
}
