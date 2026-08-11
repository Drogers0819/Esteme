import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/Button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Engagement options",
  description:
    "Two ways to work with Esteme: a fixed-scope RPOS Implementation, and an Ongoing Governance retainer that keeps performance intelligence live across the team.",
};

const implementationIncludes = [
  "Onboarding framework — a 30/60/90-day progression structure",
  "Performance KPIs — weekly and monthly visibility mapped to your metrics",
  "Scorecards — clear expectations by career stage",
  "Governance layer — a consistent structure for management visibility",
  "Implementation roadmap — a sequenced plan for rollout and adoption",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Two ways to work with Esteme"
        lead={
          <p>
            One engagement builds the system. The other keeps it live. Both are
            scoped to your agency, and both start with a discovery conversation
            rather than a price list.
          </p>
        }
      />

      {/* RPOS Implementation */}
      <Section tone="stone" aria-labelledby="implementation-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Engagement one</Eyebrow>
            <h2
              id="implementation-heading"
              className="mt-4 text-3xl leading-tight tracking-tightest sm:text-4xl"
            >
              RPOS Implementation
            </h2>
            <div className="prose-measure mt-6 space-y-4 text-base leading-relaxed text-slate-mid">
              <p>
                A fixed-scope engagement that delivers a tailored Recruitment
                Performance Operating System for your agency — designed around
                your KPIs, targets and the way your team already works.
              </p>
              <p>
                <span className="font-semibold text-slate">How it works.</span>{" "}
                We start with discovery to understand your current onboarding,
                metrics and management practice. From there we produce a scoped
                proposal, then design and implement the framework with your
                leadership team.
              </p>
              <p>
                <span className="font-semibold text-slate">
                  Indicative timeline.
                </span>{" "}
                {/* TODO(client): confirm typical engagement length. */}
                <span className="italic">
                  [Placeholder — typical engagement length to be confirmed by
                  Esteme.]
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal
            as="article"
            delay={0.06}
            className="rounded-lg border border-stone-border bg-warmwhite p-8"
          >
            <h3 className="font-serif text-xl text-slate">What&rsquo;s included</h3>
            <ul className="mt-6 space-y-4">
              {implementationIncludes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-terracotta"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-slate-mid">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-stone-border pt-6">
              <p className="text-sm leading-relaxed text-slate-mid">
                Scope and investment are determined following a discovery
                conversation. Engagements are fixed-fee.
              </p>
              <div className="mt-6">
                <LinkButton href="/contact" variant="primary" withArrow>
                  Discuss your agency
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Ongoing Governance */}
      <Section tone="warmwhite" aria-labelledby="governance-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Engagement two</Eyebrow>
            <h2
              id="governance-heading"
              className="mt-4 text-3xl leading-tight tracking-tightest sm:text-4xl"
            >
              Ongoing Governance
            </h2>
            <div className="prose-measure mt-6 space-y-4 text-base leading-relaxed text-slate-mid">
              <p>
                A retainer that provides continuing performance intelligence
                across new starters, developing consultants and the established
                team — keeping the system live once it is in place.
              </p>
              <p>
                <span className="font-semibold text-slate">
                  What you receive.
                </span>{" "}
                Data and interpretation — not management of your managers. We
                surface what the numbers show and what it means. Every decision
                about people and performance remains yours.
              </p>
              <p>
                <span className="font-semibold text-slate">
                  How it relates to implementation.
                </span>{" "}
                The governance layer is built during implementation. The
                retainer activates it on an ongoing basis, so visibility
                doesn&rsquo;t fade once the project ends.
              </p>
            </div>
          </Reveal>

          <Reveal
            as="article"
            delay={0.06}
            className="rounded-lg border border-stone-border bg-stone p-8"
          >
            <h3 className="font-serif text-xl text-slate">
              What stays with you
            </h3>
            <div className="prose-measure mt-6 space-y-4 text-base leading-relaxed text-slate-mid">
              <p>
                Esteme provides the performance intelligence. You keep full
                control of the business — hiring, development, promotion and
                performance decisions all remain with your leadership team.
              </p>
              <p>
                The retainer is a visibility layer, not an outsourced management
                function.
              </p>
            </div>
            <div className="mt-8 border-t border-stone-border pt-6">
              <p className="text-sm leading-relaxed text-slate-mid">
                Scope is tailored to the size and structure of your team.
              </p>
              <div className="mt-6">
                <LinkButton href="/contact" variant="primary" withArrow>
                  Discuss your agency
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Which is right for you */}
      <Section tone="stone" aria-labelledby="which-heading">
        <Reveal className="max-w-3xl">
          <h2
            id="which-heading"
            className="text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            Which is right for you?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal
            as="article"
            className="rounded-lg border border-stone-border bg-warmwhite p-8"
          >
            <h3 className="font-serif text-xl text-slate">
              Start with RPOS Implementation
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-mid">
              If your agency is starting from scratch with no structured
              performance framework, implementation comes first. It builds the
              onboarding, KPIs, scorecards and governance structure your
              managers will work from.
            </p>
          </Reveal>

          <Reveal
            as="article"
            delay={0.06}
            className="rounded-lg border border-stone-border bg-warmwhite p-8"
          >
            <h3 className="font-serif text-xl text-slate">
              Add Ongoing Governance
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-mid">
              Once implementation is complete and you want to maintain
              visibility over time, the governance retainer keeps the
              intelligence current across every stage of the team&rsquo;s
              lifecycle.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="slate" compact aria-labelledby="services-cta-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="services-cta-heading"
            className="text-3xl leading-tight tracking-tightest text-warmwhite sm:text-4xl"
          >
            Not sure which fits? Start with a conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-white/75">
            We&rsquo;ll help you work out where your agency is now and what would
            move it forward.
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
