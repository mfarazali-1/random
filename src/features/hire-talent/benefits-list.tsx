import { Card } from "@/components/ui/card";
import { benefits } from "@/data/benefits";

/** The strategic benefits of outsourcing hiring to the agency. */
export function BenefitsList() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <Card key={benefit.title} className="flex flex-col">
            <div className="bg-gold-500/10 text-gold-600 flex h-12 w-12 items-center justify-center rounded-xl">
              <Icon size={24} />
            </div>
            <h3 className="text-ink-900 mt-5 text-lg">{benefit.title}</h3>
            <p className="text-ink-500 mt-2 text-sm leading-relaxed">
              {benefit.description}
            </p>
            <dl className="border-ink-100 mt-5 space-y-4 border-t pt-5">
              {benefit.points.map((point) => (
                <div key={point.label}>
                  <dt className="text-ink-800 text-sm font-semibold">
                    {point.label}
                  </dt>
                  <dd className="text-ink-500 mt-1 text-sm leading-relaxed">
                    {point.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        );
      })}
    </div>
  );
}
