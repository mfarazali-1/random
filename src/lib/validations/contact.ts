import { z } from "zod";

/** General contact form schema. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  message: z.string().trim().min(10, "Please add a short message."),
});

export type ContactInput = z.infer<typeof contactSchema>;
