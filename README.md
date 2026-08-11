# Esteme Consulting — Website

A production-grade marketing website for **Esteme Consulting**, built with
Next.js (App Router), TypeScript and Tailwind CSS.

Positioning is outcome-first: _"Make recruiter performance more predictable."_
The Recruitment Performance Operating System (RPOS) is presented as the
mechanism, not the lead.

---

## Tech stack

| Concern      | Choice                                          |
| ------------ | ----------------------------------------------- |
| Framework    | Next.js 14 (App Router), TypeScript             |
| Styling      | Tailwind CSS with brand tokens                  |
| Animation    | Framer Motion (subtle, reduced-motion aware)    |
| Fonts        | Playfair Display + DM Sans, self-hosted via `next/font` |
| Icons        | Lucide React                                    |
| Forms        | Native form → `/api/contact` → configurable endpoint |
| Deployment   | Vercel                                          |

---

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values (see below)
npm run dev                  # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

---

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable                     | Purpose                                                        |
| ---------------------------- | -------------------------------------------------------------- |
| `CONTACT_FORM_ENDPOINT`      | Where contact submissions are forwarded (Formspree / Resend handler / CRM webhook). If blank, submissions are logged to the server console (dev). |
| `NEXT_PUBLIC_SITE_URL`       | Canonical site URL — used for metadata, sitemap and Open Graph. No trailing slash. |
| `NEXT_PUBLIC_CALENDAR_URL`   | Cal.com / Calendly embed URL for the contact page. Blank shows a placeholder. |
| `NEXT_PUBLIC_CONTACT_EMAIL`  | Contact email shown in the footer and on the contact page.     |
| `NEXT_PUBLIC_ANALYTICS_ID`   | Analytics ID placeholder — not wired to a provider by default. |

---

## Project structure

```
app/
  layout.tsx          Root layout — fonts, header, footer, base metadata
  page.tsx            Home (8 sections)
  rpos/page.tsx       RPOS methodology
  services/page.tsx   Engagement options
  about/page.tsx      About + founders
  contact/page.tsx    Contact form + calendar placeholder
  api/contact/route.ts  Form handler → forwards to CONTACT_FORM_ENDPOINT
  privacy, terms      Legal placeholders
  sitemap.ts, robots.ts
components/            Header, Footer, Button, Section, Reveal, PageHero,
                      Eyebrow, FlowDiagram, ContactForm
lib/site.ts           Nav, contact details, site config
```

Brand tokens (colours, fonts, spacing) live in `tailwind.config.ts`.

---

## ✅ Personalise before launch

Search the codebase for `TODO(client)` to find every spot that needs real
content. In summary:

- [ ] **Founder bios** — `app/about/page.tsx`. Replace the two placeholder
      biographies with factual copy. Do not invent credentials or dates.
- [ ] **Indicative timeline** — `app/services/page.tsx`. Confirm the typical
      RPOS Implementation engagement length (or remove the line).
- [ ] **Contact email** — set `NEXT_PUBLIC_CONTACT_EMAIL`.
- [ ] **Contact form endpoint** — set `CONTACT_FORM_ENDPOINT` (Formspree,
      Resend, or CRM webhook) and send a test submission.
- [ ] **Calendar booking** — set `NEXT_PUBLIC_CALENDAR_URL` to activate the
      embed on `/contact`.
- [ ] **Site URL** — set `NEXT_PUBLIC_SITE_URL` to the live domain.
- [ ] **Privacy & Terms** — `app/privacy/page.tsx`, `app/terms/page.tsx`.
      Add reviewed legal copy.
- [ ] **Analytics** — add your provider snippet in `app/layout.tsx` and set
      `NEXT_PUBLIC_ANALYTICS_ID`.
- [ ] **Open Graph image** — add a branded `opengraph-image` if desired
      (see Next.js metadata file conventions).
- [ ] **Favicon** — add `app/icon.png` / `app/favicon.ico`.

---

## Content principles (baked into the copy)

- No prices anywhere on the site.
- No fabricated statistics, case studies or testimonials — placeholders only,
  clearly marked.
- No transformation language or superlatives.
- Primary CTA is always **"Talk to Esteme"**.

---

## Accessibility & performance

- WCAG 2.1 AA baseline: semantic HTML, one `<h1>` per page, skip-to-content
  link, visible focus rings, labelled form fields, `aria-current` on nav.
- `prefers-reduced-motion` honoured — all entrance animation is disabled when
  the user requests reduced motion.
- Fonts self-hosted with `display: swap`; no external CDN at runtime.
- Target: Lighthouse 90+ across all four categories.
