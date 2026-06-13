import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/common/page-header";
import { ContactForm } from "@/features/contact/contact-form";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Abdullah & Co. to initiate a confidential executive search or request a custom rate proposal for IT and legal recruitment.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your next hire"
        description="Reach out to initiate a confidential search or request a tailored proposal."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Get in touch"
                description="We typically respond within one business day. For sensitive lateral or executive searches, we handle every conversation with absolute discretion."
              />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-ink-200 mt-8 inline-flex items-center gap-2.5 transition-colors hover:text-blue-400"
              >
                <Mail size={18} />
                {siteConfig.email}
              </a>
            </div>
            <div className="border-ink-800 bg-ink-900 rounded-3xl border p-7 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
