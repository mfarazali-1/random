import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

const stats = [
  { value: "24/7", label: "Cross-border sourcing engine" },
  { value: "90-day", label: "Retention guarantee" },
  { value: "IT + Legal", label: "Specialized practice areas" },
];

export function Hero() {
  return (
    <section className="bg-ink-950 relative overflow-hidden text-white">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="bg-gold-500/10 pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl"
      />
      <Container className="relative py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="border-ink-700 text-gold-400 mb-5 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium tracking-[0.18em] uppercase">
            Elite U.S. Executive Search &amp; Staffing
          </p>
          <h1 className="text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
            {siteConfig.slogan}
          </h1>
          <p className="text-ink-200 mt-6 max-w-2xl text-lg leading-relaxed">
            We connect top-tier IT and legal professionals with leading U.S.
            organizations — combining active headhunting precision with a
            relationship-driven approach to drive seamless corporate growth.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/hire-talent" size="lg">
              Hire Talent
            </ButtonLink>
            <ButtonLink
              href="/about"
              variant="outline"
              size="lg"
              className="border-ink-700 hover:bg-ink-900 text-white"
            >
              Why Abdullah &amp; Co.
            </ButtonLink>
          </div>
        </div>

        <dl className="border-ink-800 mt-16 grid max-w-2xl grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-gold-400 font-serif text-3xl">
                {stat.value}
              </dt>
              <dd className="text-ink-300 mt-1 text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
