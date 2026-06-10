"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/actions/leads";
import { initialFormState, HONEYPOT_FIELD } from "@/lib/forms";
import { Input, Textarea, Label, FieldError } from "@/components/ui/field";
import { SubmitButton } from "@/components/ui/submit-button";
import {
  FormSuccess,
  FormError,
  Honeypot,
} from "@/components/ui/form-feedback";

export function ContactForm() {
  const [state, action] = useActionState(submitContact, initialFormState);

  if (state.status === "success") {
    return <FormSuccess message={state.message} />;
  }

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};

  return (
    <form action={action} noValidate className="relative space-y-5">
      <Honeypot name={HONEYPOT_FIELD} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Jordan Reeves"
            aria-invalid={Boolean(errors.name)}
          />
          <FieldError message={errors.name} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jordan@example.com"
            aria-invalid={Boolean(errors.email)}
          />
          <FieldError message={errors.email} />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help with your hiring needs?"
          aria-invalid={Boolean(errors.message)}
        />
        <FieldError message={errors.message} />
      </div>

      {state.status === "error" && <FormError message={state.message} />}

      <SubmitButton className="w-full sm:w-auto">Send message</SubmitButton>
    </form>
  );
}
