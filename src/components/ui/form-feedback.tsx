import { CheckCircle2, AlertCircle } from "lucide-react";

/** Success confirmation panel shown after a form submits. */
export function FormSuccess({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={22} />
      <p className="text-emerald-900">{message}</p>
    </div>
  );
}

/** Form-level error banner. */
export function FormError({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3.5 text-sm text-red-800">
      <AlertCircle className="mt-0.5 shrink-0 text-red-600" size={18} />
      <p>{message}</p>
    </div>
  );
}

/** Visually-hidden honeypot input (bot trap). */
export function Honeypot({ name }: { name: string }) {
  return (
    <div
      aria-hidden
      className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
    >
      <label>
        Company website
        <input type="text" name={name} tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
