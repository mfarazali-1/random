import { Briefcase, Target, Landmark } from "lucide-react";
import type { PricingTier } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    icon: Briefcase,
    name: "Contingent Search",
    tagline: "Success-driven results",
    bestFor:
      "Mid-to-senior technical expansions and standard associate placements.",
    structure:
      "Our fee is fully contingent on the successful identification, placement, and onboarding of your selected professional. You only pay for results.",
  },
  {
    icon: Target,
    name: "Engaged / Container Search",
    tagline: "Prioritized project sourcing",
    bestFor:
      "Critical, time-sensitive technical roles or highly specialized legal counsel.",
    structure:
      "A small, upfront commitment fee prioritizes your search within our global pipeline, ensuring dedicated active-headhunting resources until the role is closed.",
    featured: true,
  },
  {
    icon: Landmark,
    name: "Retained Executive Search",
    tagline: "Elite & discreet headhunting",
    bestFor:
      "High-stakes leadership roles — lateral partners with portable books, CTOs, and C-suite executives.",
    structure:
      "A structured, multi-phase retainer that secures exclusive market mapping, exhaustive vetting, and absolute discretion from our senior advisors.",
  },
];

export const guarantee = {
  title: "Our 90-Day Professional Guarantee",
  body: "We stand firmly behind the caliber of our network. Every placement is backed by an industry-standard 90-day retention guarantee. In the rare event a candidate exits within their first 90 days, our team will source and secure a replacement at zero additional cost to your organization.",
};
