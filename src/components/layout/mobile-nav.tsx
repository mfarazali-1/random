"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button";

/** Hamburger menu for small screens. Client component (interactive only). */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="text-ink-200 hover:bg-ink-800 inline-flex h-10 w-10 items-center justify-center rounded-lg"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="border-ink-800 bg-ink-950 absolute inset-x-0 top-full border-b shadow-lg">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {siteConfig.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-ink-200 hover:bg-ink-800 rounded-lg px-3 py-2.5 text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href="/hire-talent"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Hire Talent
            </ButtonLink>
          </nav>
        </div>
      )}
    </div>
  );
}
