import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { values } from "@/data/company";

export function WhyChooseUs() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why Choose Us"
        title="We don't fill vacancies — we engineer talent matches"
        description="Here is why U.S. law firms and corporate enterprises trust us with their most critical hires."
      />
      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div key={value.title} className="flex gap-4">
              <div className="bg-gold-500/10 text-gold-600 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-ink-900 text-lg">{value.title}</h3>
                <p className="text-ink-500 mt-2 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
