import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "About Esteme",
  description:
    "Esteme was created to help recruitment agencies understand the progression between joining, developing and becoming productive — and to make that progression more consistent.",
};

// TODO(client): replace placeholder biographies with factual copy. Do not
// invent achievements, dates or credentials — leave blank until confirmed.
const team = [
  {
    name: "Daniel Rogers",
    role: "Co-Founder, Managing Director",
    bio: "[Placeholder — factual biographical note to be completed by Esteme.]",
    initials: "DR",
  },
  {
    name: "Aidan Spencer",
    role: "Partner Director",
    bio: "[Placeholder — factual biographical note to be completed by Esteme.]",
    initials: "AS",
  },
];

const values = [
  "We don't prescribe how you should recruit.",
  "We don't write scripts or tell you how to manage your people.",
  "We build the structure. You run the business.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Why Esteme exists"
        lead={
          <p>
            Recruitment agencies are exceptionally good at measuring billings.
            But the systems behind those billings are often less visible. Esteme
            was created to help agencies understand the progression between
            joining, developing and becoming productive — and to make that
            progression more consistent.
          </p>
        }
      />

      {/* The team */}
      <Section tone="stone" aria-labelledby="team-heading">
        <Reveal className="max-w-3xl">
          <Eyebrow>The team</Eyebrow>
          <h2
            id="team-heading"
            className="mt-4 text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            The people behind Esteme
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((person, i) => (
            <Reveal
              key={person.name}
              as="article"
              delay={i * 0.06}
              className="rounded-lg border border-stone-border bg-warmwhite p-8"
            >
              {/* Monogram placeholder — no photography until real images exist. */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full border border-stone-border bg-stone font-serif text-lg text-slate"
                aria-hidden="true"
              >
                {person.initials}
              </div>
              <h3 className="mt-5 font-serif text-2xl text-slate">
                {person.name}
              </h3>
              <p className="mt-1 font-sans text-sm font-medium text-terracotta">
                {person.role}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-mid">
                {person.bio}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="warmwhite" aria-labelledby="values-heading">
        <Reveal className="max-w-3xl">
          <Eyebrow>How we work</Eyebrow>
          <h2
            id="values-heading"
            className="mt-4 text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            The structure is ours. The business is yours.
          </h2>
          <div className="prose-measure mt-8 space-y-5">
            {values.map((value) => (
              <p
                key={value}
                className="border-l-2 border-terracotta pl-5 text-lg leading-relaxed text-slate"
              >
                {value}
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section tone="slate" compact aria-labelledby="about-cta-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="about-cta-heading"
            className="text-3xl leading-tight tracking-tightest text-warmwhite sm:text-4xl"
          >
            Let&rsquo;s talk about your agency
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-white/75">
            A short conversation is the best way to see whether Esteme is a fit.
          </p>
          <div className="mt-9 flex justify-center">
            <LinkButton href="/contact" variant="primary">
              Talk to Esteme
            </LinkButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
