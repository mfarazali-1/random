import { Target, Compass } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { mission, vision } from "@/data/company";

export function MissionVision() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Who We Are"
        title="A boutique search firm built on discipline and discretion"
        description="Hirelo. is an elite U.S. executive search and staffing agency specializing in technical IT recruitment and high-caliber attorney placements."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <Target size={22} />
          </div>
          <h3 className="text-ink-50 mt-5 text-xl">Our Mission</h3>
          <p className="text-ink-300 mt-3 leading-relaxed">{mission}</p>
        </Card>
        <Card>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <Compass size={22} />
          </div>
          <h3 className="text-ink-50 mt-5 text-xl">Our Vision</h3>
          <p className="text-ink-300 mt-3 leading-relaxed">{vision}</p>
        </Card>
      </div>
    </Section>
  );
}
