"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { LinkButton } from "@/components/Button";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Condense the header once the user scrolls past a small threshold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-warmwhite/95 backdrop-blur transition-[padding,border-color] duration-200 ${
        scrolled ? "border-stone-border py-2" : "border-transparent py-4"
      }`}
    >
      <div className="container-content flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-tightest text-slate"
          aria-label="Esteme Consulting — home"
        >
          Esteme<span className="text-terracotta">.</span>
        </Link>

        {/* Desktop nav — centred links, no hamburger. */}
        <nav
          className="hidden items-center gap-6 md:flex lg:gap-8"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative font-sans text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all after:duration-200 hover:text-terracotta hover:after:w-full ${
                isActive(link.href)
                  ? "text-terracotta after:w-full"
                  : "text-slate"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton href="/contact" variant="primary">
            Talk to Esteme
          </LinkButton>
        </div>

        {/* Mobile toggle. */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu. */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-stone-border bg-warmwhite md:hidden"
          aria-label="Primary"
        >
          <ul className="container-content flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block rounded-md px-2 py-3 font-sans text-base font-medium ${
                    isActive(link.href)
                      ? "text-terracotta"
                      : "text-slate hover:text-terracotta"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <LinkButton href="/contact" variant="primary">
                Talk to Esteme
              </LinkButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
