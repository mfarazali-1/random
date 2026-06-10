"use client";

import { useActionState } from "react";
import { submitInquiry } from "@/lib/actions/leads";
import { initialFormState, HONEYPOT_FIELD } from "@/lib/forms";
import { Input, Textarea, Label, FieldError } from "@/components/ui/field";
import { SubmitButton } from "@/components/ui/submit-button";
import {
  FormSuccess,
  FormError,
  Honeypot,
} from "@/components/ui/form-feedback";

export function InquiryForm() {
  const [state, action] = useActionState(submitInquiry, initialFormState);

  if (state.status === "success") {
    return <FormSuccess message={state.message} />;
  }

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};

  return (
    <form action={action} noValidate className="relative space-y-5">
      <Honeypot name={HONEYPOT_FIELD} />

      <div>
        <Label htmlFor="companyName">Company name</Label>
        <Input
          id="companyName"
          name="companyName"
          placeholder="Acme Law Group"
          aria-invalid={Boolean(errors.companyName)}
        />
        <FieldError message={errors.companyName} />
      </div>

      <div>
        <Label htmlFor="hiringNeeds">Hiring needs</Label>
        <Textarea
          id="hiringNeeds"
          name="hiringNeeds"
          placeholder="e.g. Two senior litigation associates and a DevOps engineer, U.S. remote."
          aria-invalid={Boolean(errors.hiringNeeds)}
        />
        <FieldError message={errors.hiringNeeds} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contactName">Your name</Label>
          <Input
            id="contactName"
            name="contactName"
            placeholder="Jordan Reeves"
            aria-invalid={Boolean(errors.contactName)}
          />
          <FieldError message={errors.contactName} />
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jordan@acmelaw.com"
            aria-invalid={Boolean(errors.email)}
          />
          <FieldError message={errors.email} />
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
        />
        <FieldError message={errors.phone} />
      </div>

      {state.status === "error" && <FormError message={state.message} />}

      <SubmitButton className="w-full sm:w-auto">Submit inquiry</SubmitButton>
    </form>
  );
}
