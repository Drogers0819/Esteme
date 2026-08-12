import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { LinkButton } from "@/components/Button";
import { FlowDiagram } from "@/components/FlowDiagram";

// ---------------------------------------------------------------------------
// Content data — kept close to the page so copy is easy to edit.
// ---------------------------------------------------------------------------

const problemCards = [
  {
    title: "Inconsistent onboarding",
    body: "Different managers develop new starters differently.",
  },
  {
    title: "Unclear progression",
    body: "Expectations often change as people move through their careers, without those changes being made explicit.",
  },
  {
    title: "Late visibility",
    body: "Performance issues become obvious only after they've become expensive.",
  },
];

const rposComponents = [
  {
    n: "01",
    title: "Onboarding",
    detail: "30/60/90-day progression framework",
  },
  { n: "02", title: "Performance", detail: "Weekly and monthly KPI visibility" },
  { n: "03", title: "Scorecards", detail: "Clear expectations by career stage" },
  { n: "04", title: "Governance", detail: "Consistent management visibility" },
  {
    n: "05",
    title: "Implementation",
    detail: "A practical rollout framework",
  },
];

const intelligenceLayers = [
  {
    n: "01",
    title: "New Starter",
    question: "Are they progressing?",
    measures: ["Knowledge", "Skills", "Activity", "Early performance"],
  },
  {
    n: "02",
    title: "Developing Consultant",
    question: "Are they moving toward independent productivity?",
    measures: ["Consistency", "Performance", "Behaviour", "Development"],
  },
  {
    n: "03",
    title: "Established Team",
    question: "Is the wider team performing consistently?",
    measures: [
      "KPIs",
      "Performance trends",
      "Manager visibility",
      "Progression",
    ],
  },
];

const processSteps = [
  {
    n: "01",
    title: "Discover",
    body: "Understand your current onboarding, KPIs and management processes.",
  },
  {
    n: "02",
    title: "Assess",
    body: "Identify gaps between leadership expectations, management practice and employee experience.",
  },
  {
    n: "03",
    title: "Design",
    body: "Build your tailored RPOS framework.",
  },
  {
    n: "04",
    title: "Implement",
    body: "Workshop the system with your leadership team and establish the rollout.",
  },
  {
    n: "05",
    title: "Govern",
    body: "Maintain visibility and review performance through the ongoing governance layer.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Section 1 — Hero (warm white, per brand direction)               */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-warmwhite">
        {/* Subtle geometric background — brand colours only, very low opacity. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#E0D8CF 1px, transparent 1px), linear-gradient(90deg, #E0D8CF 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 70% 20%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 70% 20%, black, transparent 75%)",
            opacity: 0.4,
          }}
        />
        <div className="container-content relative py-24 sm:py-32">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Recruitment performance consulting</p>
            <h1 className="mt-5 text-4xl leading-[1.08] tracking-tightest text-slate sm:text-5xl lg:text-6xl">
              Make recruiter performance{" "}
              <span className="text-terracotta">more predictable.</span>
            </h1>
            <p className="prose-measure mt-6 text-lg leading-relaxed text-slate-mid">
              Esteme helps recruitment agencies build structured paths from new
              hire to productive consultant — with clearer performance
              expectations, earlier visibility of risk and consistent management
              frameworks.
            </p>
            <p className="mt-4 font-sans text-sm text-slate-mid">
              Powered by the Recruitment Performance Operating System.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact" variant="primary">
                Talk to Esteme
              </LinkButton>
              <LinkButton href="/rpos" variant="ghost">
                Explore RPOS
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Section 2 — Problem framing (stone)                              */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="stone" aria-labelledby="problem-heading">
        <Reveal className="max-w-3xl">
          <h2
            id="problem-heading"
            className="text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            The problem isn&rsquo;t always hiring. It&rsquo;s knowing what
            happens after.
          </h2>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-slate-mid">
            Recruitment agencies invest heavily in finding the right people. But
            once someone joins, performance often depends on the manager, the
            team they&rsquo;re placed into and the experience of the individual
            delivering the training. That can make time-to-productivity
            inconsistent, performance difficult to measure and underperformance
            visible only once significant time and money have already been
            spent.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problemCards.map((card, i) => (
            <Reveal
              key={card.title}
              as="article"
              delay={i * 0.06}
              className="rounded-lg border border-stone-border bg-warmwhite p-7"
            >
              <h3 className="font-serif text-xl text-slate">{card.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-mid">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Section 3 — RPOS introduction (warm white)                       */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="warmwhite" aria-labelledby="rpos-intro-heading">
        <Reveal className="max-w-3xl">
          <Eyebrow>The methodology</Eyebrow>
          <h2
            id="rpos-intro-heading"
            className="mt-4 text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            Introducing the Recruitment Performance Operating System
          </h2>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-slate-mid">
            RPOS brings onboarding, performance measurement and progression into
            one structured framework built around your agency&rsquo;s existing
            KPIs, targets and expectations.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-stone-border bg-stone-border lg:grid-cols-5">
          {rposComponents.map((c, i) => (
            <Reveal
              key={c.n}
              as="li"
              delay={i * 0.05}
              className="flex flex-col bg-warmwhite p-6"
            >
              <span className="font-serif text-3xl text-terracotta">{c.n}</span>
              <h3 className="mt-4 font-sans text-base font-semibold text-slate">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-mid">
                {c.detail}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10">
          <LinkButton href="/rpos" variant="ghost" withArrow>
            See how RPOS works
          </LinkButton>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Section 4 — Differentiator (stone)                               */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="stone" aria-labelledby="differentiator-heading">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2
            id="differentiator-heading"
            className="text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            Built around your business, not ours.
          </h2>
          <p className="mx-auto mt-7 max-w-prose text-lg leading-relaxed text-slate-mid">
            Esteme doesn&rsquo;t prescribe how your agency should operate. Your
            team provides the KPIs, targets, expectations and commercial
            objectives. We provide the structure. We turn what your best
            managers already know into a system that can be understood, measured
            and applied consistently across the organisation.
          </p>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Section 5 — From judgement to intelligence (slate, dark band)    */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="slate" aria-labelledby="judgement-heading">
        <Reveal className="max-w-3xl">
          <Eyebrow onDark>The idea</Eyebrow>
          <h2
            id="judgement-heading"
            className="mt-4 text-3xl leading-tight tracking-tightest text-warmwhite sm:text-4xl"
          >
            From individual judgement to organisational intelligence.
          </h2>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-white/75">
            Your most experienced people often know what good looks like. The
            challenge is making that knowledge visible, measurable and
            repeatable across the organisation.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <FlowDiagram
            onDark
            steps={[
              "Founder judgement",
              "Defined indicators",
              "Structured assessment",
              "Performance visibility",
              "Consistent management",
            ]}
          />
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Section 6 — Three intelligence layers (warm white)               */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="warmwhite" aria-labelledby="layers-heading">
        <Reveal className="max-w-3xl">
          <h2
            id="layers-heading"
            className="text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            Performance intelligence across the employee lifecycle
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {intelligenceLayers.map((layer, i) => (
            <Reveal
              key={layer.n}
              as="article"
              delay={i * 0.06}
              className="flex flex-col rounded-lg border border-stone-border bg-stone p-7"
            >
              <span className="font-serif text-3xl text-terracotta">
                {layer.n}
              </span>
              <h3 className="mt-4 font-serif text-xl text-slate">
                {layer.title}
              </h3>
              <p className="mt-2 text-base font-medium text-slate">
                {layer.question}
              </p>
              <ul className="mt-5 space-y-2 border-t border-stone-border pt-5">
                {layer.measures.map((m) => (
                  <li
                    key={m}
                    className="font-sans text-sm text-slate-mid"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="text-sm italic text-slate-mid">
            The ongoing governance layer extends this visibility across the full
            team.
          </p>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Section 7 — Process overview (stone)                             */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="stone" aria-labelledby="process-heading">
        <Reveal className="max-w-3xl">
          <h2
            id="process-heading"
            className="text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            From assessment to implementation
          </h2>
        </Reveal>

        <ol className="mt-12 space-y-px overflow-hidden rounded-lg border border-stone-border bg-stone-border">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.n}
              as="li"
              delay={i * 0.04}
              className="flex flex-col gap-2 bg-warmwhite p-6 sm:p-7 md:flex-row md:items-baseline md:gap-8"
            >
              <span className="font-serif text-2xl text-terracotta md:w-14 md:shrink-0 lg:w-16">
                {step.n}
              </span>
              <h3 className="font-sans text-lg font-semibold text-slate md:w-40 md:shrink-0 lg:w-48">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-mid">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10">
          <LinkButton href="/contact" variant="primary" withArrow>
            Talk to Esteme
          </LinkButton>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Section 8 — Final CTA band (slate)                               */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="slate" compact aria-labelledby="cta-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="text-3xl leading-tight tracking-tightest text-warmwhite sm:text-4xl"
          >
            Ready to build more predictable performance?
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-white/75">
            Scope is tailored to the size, structure and existing performance
            framework of each agency.
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
