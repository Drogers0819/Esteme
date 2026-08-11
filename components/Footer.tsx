import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="bg-slate text-warmwhite">
      <div className="container-content py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Wordmark + description */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl tracking-tightest text-warmwhite"
            >
              Esteme<span className="text-terracotta">.</span>
            </Link>
            <p className="prose-measure mt-4 text-sm leading-relaxed text-white/70">
              Making recruiter performance more predictable — powered by the
              Recruitment Performance Operating System.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              Explore
            </h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/80 transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              Contact
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="font-sans text-sm text-white/80 transition-colors hover:text-terracotta"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-sans text-sm text-white/80 transition-colors hover:text-terracotta"
                >
                  Talk to Esteme
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {siteConfig.year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-terracotta"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
