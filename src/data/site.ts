import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Abdullah & Co.",
  legalName: "Abdullah & Co. Staffing",
  domain: "goabdullah.com",
  url: "https://goabdullah.com",
  slogan: "Need top talent? Go Abdullah.",
  description:
    "Abdullah & Co. is an elite U.S. executive search and staffing agency specializing in technical IT recruitment and high-caliber attorney placements. We combine active headhunting precision with a relationship-driven approach to connect top-tier professionals with leading organizations.",
  email: "hello@goabdullah.com",
  nav: [
    { label: "About", href: "/about" },
    { label: "Hire Talent", href: "/hire-talent" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
} as const;

export type SiteConfig = typeof siteConfig;
