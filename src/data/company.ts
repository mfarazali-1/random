import { Crosshair, Globe2, HeartHandshake, Dumbbell } from "lucide-react";
import type { Value } from "@/types";

export const mission =
  "To engineer strategic talent matches that drive seamless corporate growth — connecting elite U.S. legal and technical professionals with the organizations that need them most.";

export const vision =
  "To be the most trusted boutique executive search partner for U.S. law firms and technology enterprises, defined by discretion, speed, and an unrelenting standard of quality.";

/** "Why Choose Us" differentiators — also reused as company values. */
export const values: Value[] = [
  {
    icon: Crosshair,
    title: "Active Headhunting, Not Passive Sourcing",
    description:
      "We don't post jobs and wait. We proactively map the market and use aggressive, active headhunting to reach passive, elite professionals who aren't on job boards.",
  },
  {
    icon: Globe2,
    title: "Cross-Border Talent Network",
    description:
      "A proven recruitment footprint across the U.S. and South Asian markets gives our clients a broader, more resilient talent pipeline.",
  },
  {
    icon: HeartHandshake,
    title: "People-First, Relationship-Driven",
    description:
      "We act as an extension of your brand. Deep, trusted candidate relationships mean higher retention, seamless onboarding, and streamlined hiring.",
  },
  {
    icon: Dumbbell,
    title: "Unyielding Grit & Discipline",
    description:
      "Led by a founder rooted in competitive athletics and corporate leadership, we operate with the discipline and resilience to close the toughest searches.",
  },
];
