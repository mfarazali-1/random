import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { guarantee } from "@/data/pricing";

export function GuaranteeBlock() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="border-gold-500/30 bg-gold-500/5 mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-3xl border p-10 text-center">
          <div className="bg-gold-500 text-ink-950 flex h-14 w-14 items-center justify-center rounded-2xl">
            <ShieldCheck size={28} />
          </div>
          <h2 className="text-ink-900 text-2xl sm:text-3xl">
            {guarantee.title}
          </h2>
          <p className="text-ink-600 leading-relaxed">{guarantee.body}</p>
        </div>
      </Container>
    </section>
  );
}
