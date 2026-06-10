import { cn } from "@/lib/utils";
import { pricingTiers } from "@/data/pricing";

export function PricingGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingTiers.map((tier) => {
        const Icon = tier.icon;
        return (
          <div
            key={tier.name}
            className={cn(
              "flex flex-col rounded-2xl border p-7",
              tier.featured
                ? "border-gold-500 bg-ink-950 ring-gold-500/40 text-white shadow-lg ring-1"
                : "border-ink-100 bg-white",
            )}
          >
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl",
                tier.featured
                  ? "bg-gold-500 text-ink-950"
                  : "bg-ink-900 text-gold-400",
              )}
            >
              <Icon size={24} />
            </div>
            <h3
              className={cn(
                "mt-5 text-xl",
                tier.featured ? "text-white" : "text-ink-900",
              )}
            >
              {tier.name}
            </h3>
            <p
              className={cn(
                "text-sm font-medium tracking-wide uppercase",
                tier.featured ? "text-gold-400" : "text-gold-600",
              )}
            >
              {tier.tagline}
            </p>
            <p
              className={cn(
                "mt-4 text-sm font-semibold",
                tier.featured ? "text-ink-100" : "text-ink-800",
              )}
            >
              Best for
            </p>
            <p
              className={cn(
                "mt-1 text-sm leading-relaxed",
                tier.featured ? "text-ink-300" : "text-ink-500",
              )}
            >
              {tier.bestFor}
            </p>
            <p
              className={cn(
                "mt-4 border-t pt-4 text-sm leading-relaxed",
                tier.featured
                  ? "border-ink-800 text-ink-200"
                  : "border-ink-100 text-ink-500",
              )}
            >
              {tier.structure}
            </p>
          </div>
        );
      })}
    </div>
  );
}
