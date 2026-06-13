import { CheckCircle2, AlertCircle } from "lucide-react";

/** Success confirmation panel shown after a form submits. */
export function FormSuccess({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
      <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={22} />
      <p className="text-emerald-200">{message}</p>
    </div>
  );
}

/** Form-level error banner. */
export function FormError({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-red-500/30 bg-red-500/10 p-3.5 text-sm text-red-300">
      <AlertCircle className="mt-0.5 shrink-0 text-red-400" size={18} />
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
