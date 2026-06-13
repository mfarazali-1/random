import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/process";

export function WorkingProcess() {
  return (
    <Section className="bg-ink-900">
      <SectionHeading
        eyebrow="Our Process"
        title="An overview of how we work"
        description="A proactive, relationship-driven framework that delivers elite shortlists — fast."
      />
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <li
            key={step.step}
            className="border-ink-800 bg-ink-950 rounded-2xl border p-6"
          >
            <span className="font-display text-3xl text-blue-400">
              {step.step}
            </span>
            <h3 className="text-ink-50 mt-3 text-lg">{step.title}</h3>
            <p className="text-ink-300 mt-2 text-sm leading-relaxed">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
