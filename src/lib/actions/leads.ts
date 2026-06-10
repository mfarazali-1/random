"use server";

import { inquirySchema } from "@/lib/validations/inquiry";
import { contactSchema } from "@/lib/validations/contact";
import { sendLeadEmail } from "@/lib/email/send-lead";
import { HONEYPOT_FIELD, toFieldErrors, type FormState } from "@/lib/forms";

const GENERIC_ERROR =
  "Something went wrong submitting the form. Please try again or email us directly.";

/** Returns true when the honeypot field was filled (likely a bot). */
function isBot(formData: FormData) {
  return Boolean(formData.get(HONEYPOT_FIELD));
}

/** Hire Talent inquiry submission. */
export async function submitInquiry(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (isBot(formData)) {
    return {
      status: "success",
      message: "Thanks — we'll be in touch shortly.",
    };
  }

  const parsed = inquirySchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors: toFieldErrors(parsed.error),
    };
  }

  const { companyName, hiringNeeds, contactName, email, phone } = parsed.data;

  try {
    await sendLeadEmail({
      subject: `New hiring inquiry — ${companyName}`,
      fields: [
        { label: "Company", value: companyName },
        { label: "Contact", value: contactName },
        { label: "Email", value: email },
        { label: "Phone", value: phone || "—" },
        { label: "Hiring needs", value: hiringNeeds },
      ],
    });
  } catch {
    return { status: "error", message: GENERIC_ERROR };
  }

  return {
    status: "success",
    message:
      "Thank you — your inquiry has been received. A member of our team will reach out shortly.",
  };
}

/** General contact submission. */
export async function submitContact(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (isBot(formData)) {
    return {
      status: "success",
      message: "Thanks — we'll be in touch shortly.",
    };
  }

  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors: toFieldErrors(parsed.error),
    };
  }

  const { name, email, message } = parsed.data;

  try {
    await sendLeadEmail({
      subject: `New contact message — ${name}`,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Message", value: message },
      ],
    });
  } catch {
    return { status: "error", message: GENERIC_ERROR };
  }

  return {
    status: "success",
    message: "Thank you for reaching out — we'll respond as soon as possible.",
  };
}
