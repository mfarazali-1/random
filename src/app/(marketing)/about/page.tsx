import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/common/page-header";
import { CtaBand } from "@/components/common/cta-band";
import { MissionVision } from "@/features/about/mission-vision";
import { WorkingProcess } from "@/features/about/working-process";
import { TeamSection } from "@/features/about/team-section";
import { ServiceList } from "@/features/services/service-list";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Abdullah & Co. is a boutique U.S. executive search firm for IT and legal talent — built on active headhunting, cross-border reach, and absolute discretion.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Engineering strategic talent matches across IT & Legal"
        description="A relationship-driven executive search partner combining aggressive headhunting with the discipline to close the toughest searches."
      />
      <MissionVision />
      <WorkingProcess />
      <TeamSection />
      <Section className="bg-ink-50">
        <SectionHeading
          eyebrow="Our Services"
          title="What we recruit for"
          description="Full-cycle search across two demanding U.S. markets."
        />
        <div className="mt-12">
          <ServiceList />
        </div>
      </Section>
      <CtaBand
        title="Partner with a search firm built for speed and discretion"
        secondary={{ label: "About our pricing", href: "/pricing" }}
      />
    </>
  );
}
