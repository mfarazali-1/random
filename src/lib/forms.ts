import { z } from "zod";

/** Discriminated state returned by form Server Actions, consumed via useActionState. */
export type FormState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string>;
    };

export const initialFormState: FormState = { status: "idle" };

/** Hidden field name used as a honeypot — bots fill it, humans never see it. */
export const HONEYPOT_FIELD = "company_website";

/** Flatten a ZodError into a { field: firstMessage } map (version-agnostic). */
export function toFieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "");
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
