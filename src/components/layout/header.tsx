import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

/** Sticky marketing header. Server component; only the mobile menu is client. */
export function Header() {
  return (
    <header className="border-ink-800 bg-ink-950/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="relative flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-300 hover:text-ink-50 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/hire-talent" size="sm">
            Hire Talent
          </ButtonLink>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
