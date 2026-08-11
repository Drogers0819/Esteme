// Central site configuration — single source of truth for nav, metadata and
// contact details. Values that vary by environment come from env vars.

export const siteConfig = {
  name: "Esteme Consulting",
  shortName: "Esteme",
  description:
    "Esteme helps recruitment agencies build structured paths from new hire to productive consultant — clearer performance expectations, earlier visibility of risk and consistent management frameworks.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://estemeconsulting.com",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@estemeconsulting.com",
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL ?? "",
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
