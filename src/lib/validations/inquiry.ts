import { z } from "zod";

/** Hire Talent inquiry form — shared by client and server (single source of truth). */
export const inquirySchema = z.object({
  companyName: z.string().trim().min(2, "Please enter your company name."),
  hiringNeeds: z
    .string()
    .trim()
    .min(10, "Tell us a little about the roles you need to fill."),
  contactName: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
