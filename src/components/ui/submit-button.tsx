"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./button";

/** Submit button that reflects the parent form's pending state. */
export function SubmitButton({
  children,
  pendingLabel = "Sending…",
  className,
}: {
  children: React.ReactNode;
  pendingLabel?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className={className}>
      {pending ? pendingLabel : children}
    </Button>
  );
}
