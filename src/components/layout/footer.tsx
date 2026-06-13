import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-ink-800 bg-ink-950 text-ink-200 mt-auto border-t">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <p className="font-display text-xl font-semibold text-white">
              Abdullah <span className="text-blue-400">&amp; Co.</span>
            </p>
            <p className="text-ink-300 mt-3 text-sm leading-relaxed">
              {siteConfig.slogan} Elite U.S. executive search and staffing for
              IT &amp; legal talent.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-300 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white uppercase">
              Get in touch
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-ink-300 mt-4 inline-flex items-center gap-2 text-sm transition-colors hover:text-blue-400"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="border-ink-800 text-ink-400 mt-12 border-t pt-6 text-xs">
          © {year} {siteConfig.legalName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
