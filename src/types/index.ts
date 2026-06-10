import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: { label: string; detail: string }[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
};

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type PricingTier = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  bestFor: string;
  structure: string;
  featured?: boolean;
};

export type BlogPillar = "it" | "legal";

export type PostMeta = {
  title: string;
  description: string;
  pillar: BlogPillar;
  keywords: string[];
  date: string; // ISO
  readingTime: string;
};
