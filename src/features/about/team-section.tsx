import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { team } from "@/data/team";

export function TeamSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our Team"
        title="The people behind the placements"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {team.map((member) => (
          <Card key={member.name} className="flex flex-col gap-4 sm:flex-row">
            <div className="bg-ink-900 text-gold-400 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl font-serif text-2xl">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h3 className="text-ink-900 text-xl">{member.name}</h3>
              <p className="text-gold-600 text-sm font-medium tracking-wide uppercase">
                {member.role}
              </p>
              <p className="text-ink-500 mt-3 leading-relaxed">{member.bio}</p>
              <ul className="mt-4 space-y-2">
                {member.credentials.map((c) => (
                  <li
                    key={c}
                    className="text-ink-700 flex items-start gap-2 text-sm"
                  >
                    <Check
                      className="text-gold-600 mt-0.5 shrink-0"
                      size={15}
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
