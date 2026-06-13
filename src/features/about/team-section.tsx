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
            <div className="font-display flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-400">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h3 className="text-ink-50 text-xl">{member.name}</h3>
              <p className="text-sm font-medium tracking-wide text-blue-400 uppercase">
                {member.role}
              </p>
              <p className="text-ink-300 mt-3 leading-relaxed">{member.bio}</p>
              <ul className="mt-4 space-y-2">
                {member.credentials.map((c) => (
                  <li
                    key={c}
                    className="text-ink-200 flex items-start gap-2 text-sm"
                  >
                    <Check
                      className="mt-0.5 shrink-0 text-blue-400"
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
