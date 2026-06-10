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
            <div className="bg-ink-900 text-gold-400 flex h-12 w-12 items-center justify-center rounded-xl">
              <Icon size={24} />
            </div>
            <h3 className="text-ink-900 mt-5 text-xl">{service.title}</h3>
            <p className="text-ink-500 mt-3 leading-relaxed">
              {service.description}
            </p>
            <ul className="border-ink-100 mt-5 space-y-2.5 border-t pt-5">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="text-ink-700 flex items-start gap-2.5 text-sm"
                >
                  <Check className="text-gold-600 mt-0.5 shrink-0" size={16} />
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
