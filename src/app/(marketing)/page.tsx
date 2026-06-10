import { Hero } from "@/features/home/hero";
import { IndustriesPreview } from "@/features/home/industries-preview";
import { WhyChooseUs } from "@/features/home/why-choose-us";
import { CtaBand } from "@/components/common/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustriesPreview />
      <WhyChooseUs />
      <CtaBand
        title="Need top talent? Go Abdullah."
        description="Tell us about your hiring needs and we'll build a pre-vetted, exact-match shortlist — with active headhunting precision and absolute discretion."
        primary={{ label: "Hire Talent", href: "/hire-talent" }}
        secondary={{ label: "View pricing", href: "/pricing" }}
      />
    </>
  );
}
