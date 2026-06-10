import { TrendingDown, EyeOff, Gauge } from "lucide-react";
import type { Benefit } from "@/types";

/** Strategic benefits of outsourcing IT & legal recruitment to the agency. */
export const benefits: Benefit[] = [
  {
    icon: TrendingDown,
    title: "Significant Cost Reduction & Higher ROI",
    description:
      "Convert high fixed talent-acquisition costs into a variable, success-based model.",
    points: [
      {
        label: "Zero overhead",
        detail:
          "Skip the fixed salaries, software licenses, and benefits of an in-house TA team — partner on a success-based model instead.",
      },
      {
        label: "Minimized cost-of-vacancy",
        detail:
          "Our active sourcing framework reduces time-to-hire, keeping projects moving and billable hours flowing.",
      },
    ],
  },
  {
    icon: EyeOff,
    title: 'Immediate Access to "Invisible" Passive Talent',
    description:
      "The highest-caliber attorneys and elite tech professionals rarely look at job postings.",
    points: [
      {
        label: "Beyond job boards",
        detail:
          "Top professionals are busy performing at their current firms — not browsing listings.",
      },
      {
        label: "The headhunting advantage",
        detail:
          "We use active, aggressive headhunting to engage top-tier talent invisible to your internal HR team.",
      },
    ],
  },
  {
    icon: Gauge,
    title: "Accelerated Sourcing Speed Through Global Scale",
    description:
      "A unique cross-border footprint lets us source around the clock.",
    points: [
      {
        label: "The 24/7 recruitment engine",
        detail:
          "We map U.S. markets, source candidates, and vet tech stacks or practice portfolios around the clock.",
      },
      {
        label: "Rapid talent pipelines",
        detail:
          "While your competitors sleep, our engine builds your pipeline — delivering shortlists in a fraction of the standard time.",
      },
    ],
  },
];
