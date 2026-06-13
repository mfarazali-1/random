import { Check } from "lucide-react";
import { services } from "@/data/services";
import { Card } from "@/components/ui/card";

/** Reusable IT + Legal services grid (used on About and Hire Talent). */
export function ServiceList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Card key={service.title} className="flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Icon size={24} />
            </div>
            <h3 className="text-ink-50 mt-5 text-xl">{service.title}</h3>
            <p className="text-ink-300 mt-3 leading-relaxed">
              {service.description}
            </p>
            <ul className="border-ink-800 mt-5 space-y-2.5 border-t pt-5">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="text-ink-200 flex items-start gap-2.5 text-sm"
                >
                  <Check className="mt-0.5 shrink-0 text-blue-400" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        );
      })}
    </div>
  );
}
