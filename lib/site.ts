// Central site configuration — single source of truth for nav, metadata and
// contact details. Values that vary by environment come from env vars.

/**
 * Read an env var, falling back when it is missing OR blank. `??` alone only
 * catches undefined — but a Vercel env var added with no value arrives as an
 * empty string, which then breaks things like `new URL("")`. This coalesces
 * empty/whitespace-only values to the fallback too.
 */
function envOr(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

export const siteConfig = {
  name: "Esteme Consulting",
  shortName: "Esteme",
  description:
    "Esteme helps recruitment agencies build structured paths from new hire to productive consultant — clearer performance expectations, earlier visibility of risk and consistent management frameworks.",
  url: envOr(process.env.NEXT_PUBLIC_SITE_URL, "https://estemeconsulting.com"),
  contactEmail: envOr(
    process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    "hello@estemeconsulting.com",
  ),
  // Calendar is optional — blank correctly means "show the placeholder".
  calendarUrl: envOr(process.env.NEXT_PUBLIC_CALENDAR_URL, ""),
  // Fixed to avoid SSR/CSR hydration mismatch. Bump at year end.
  year: 2026,
};

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "/rpos", label: "RPOS" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
