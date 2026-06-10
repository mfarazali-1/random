import { Code2, Scale } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    icon: Code2,
    title: "Information Technology & Technical Hiring",
    description:
      "In a fast-evolving digital market, speed and technical accuracy are everything. We manage full-cycle technical recruitment across a diverse array of IT roles, using advanced sourcing methodologies to deliver agile, top-tier tech talent capable of driving innovation from day one.",
    highlights: [
      "Software engineers & data scientists",
      "Infrastructure & cloud architects",
      "Cybersecurity & DevOps specialists",
      "Full-cycle technical pipelines",
    ],
  },
  {
    icon: Scale,
    title: "Legal Placement & Executive Search",
    description:
      "The U.S. legal landscape demands absolute precision, discretion, and elite talent. We identify, vet, and place high-caliber attorneys, lateral partners, and senior legal executives into leading law firms and corporate legal departments — aligned with your billable standards and corporate culture.",
    highlights: [
      "Lateral partners with portable books",
      "Corporate & litigation associates",
      "Senior in-house counsel",
      "C-suite & executive search",
    ],
  },
];
