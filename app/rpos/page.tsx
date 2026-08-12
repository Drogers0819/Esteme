import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/Button";
import { FlowDiagram } from "@/components/FlowDiagram";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "The Recruitment Performance Operating System",
  description:
    "RPOS brings onboarding, performance measurement and progression into one structured framework — built around your agency's existing KPIs, targets and expectations.",
};

const components = [
  {
    n: "01",
    title: "Onboarding",
    what: "A 30/60/90-day progression framework that sets out what a new starter should know, do and deliver at each stage.",
    contains:
      "Stage-by-stage expectations, knowledge and activity milestones, and the checkpoints managers use to confirm progress.",
    gives:
      "A consistent onboarding experience regardless of which manager a new starter reports to — and an early signal when someone is off track.",
  },
  {
    n: "02",
    title: "Performance",
    what: "Weekly and monthly KPI visibility mapped to the metrics your agency already runs on.",
    contains:
      "The leading and lagging indicators that matter at each career stage, and the cadence for reviewing them.",
    gives:
      "A shared, current picture of performance — so conversations are based on evidence rather than impression.",
  },
  {
    n: "03",
    title: "Scorecards",
    what: "Clear expectations by career stage, from new starter to established consultant.",
    contains:
      "Defined indicators of what good looks like at each stage, expressed in language your managers and consultants recognise.",
    gives:
      "A common standard the whole team can be measured against — making progression explicit rather than assumed.",
  },
  {
    n: "04",
    title: "Governance",
    what: "A consistent structure for management visibility across the team.",
    contains:
      "Review rhythms, reporting formats and the questions leadership should be asking of the data.",
    gives:
      "Confidence that performance is being managed consistently — not left to the habits of individual managers.",
  },
  {
    n: "05",
    title: "Implementation",
    what: "A practical rollout framework for putting the system into day-to-day use.",
    contains:
      "A sequenced plan, leadership workshops and the artefacts your managers need to run RPOS themselves.",
    gives:
      "A system that is actually adopted — embedded in how the agency works, not filed away after the engagement ends.",
  },
];

const layers = [
  {
    n: "01",
    title: "New Starter",
    question: "Are they progressing?",
    detail:
      "In the first weeks, the question is whether a new starter is building the knowledge, skills and activity that lead to early performance. RPOS makes that progression visible against a defined benchmark, so a manager can act on drift within weeks rather than months.",
    measures: ["Knowledge", "Skills", "Activity", "Early performance"],
  },
  {
    n: "02",
    title: "Developing Consultant",
    question: "Are they moving toward independent productivity?",
    detail:
      "As a consultant develops, the question shifts to consistency and independence. RPOS tracks whether performance and behaviour are trending toward reliable, self-sufficient billing — and highlights where development effort will have the most effect.",
    measures: ["Consistency", "Performance", "Behaviour", "Development"],
  },
  {
    n: "03",
    title: "Established Team",
    question: "Is the wider team performing consistently?",
    detail:
      "For the established team, the question is organisational. RPOS surfaces KPI and performance trends across the group and gives managers a consistent view — so leadership can see where the business is strong, where it is exposed, and how progression is moving overall.",
    measures: ["KPIs", "Performance trends", "Manager visibility", "Progression"],
  },
];

const isFor = [
  "You are a growing agency with consistent hiring needs.",
  "You recognise that performance is currently managed through relationships and individual judgement rather than a structured framework.",
  "You want expectations and progression to be explicit and measurable across the team.",
];

const isNotFor = [
  "You are a solo recruiter or have fewer than five consultants.",
  "You are looking for a recruitment methodology — how to source or place — rather than a performance framework.",
  "You want a consultant to manage your managers and make people decisions on your behalf.",
];

export default function RposPage() {
  return (
    <>
      <PageHero
        eyebrow="The methodology"
        title="The Recruitment Performance Operating System"
        lead={
          <p>
            RPOS brings onboarding, performance measurement and progression into
            one structured framework — built around your agency&rsquo;s existing
            KPIs, targets and expectations. It turns the judgement your best
            managers already apply into a system the whole organisation can use.
          </p>
        }
      />

      {/* Five components */}
      <Section tone="stone" aria-labelledby="components-heading">
        <Reveal className="max-w-3xl">
          <Eyebrow>The five components</Eyebrow>
          <h2
            id="components-heading"
            className="mt-4 text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            One framework, five working parts
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {components.map((c, i) => (
            <Reveal
              key={c.n}
              as="article"
              delay={i * 0.04}
              className="grid gap-6 rounded-lg border border-stone-border bg-warmwhite p-7 md:grid-cols-[auto_1fr] md:gap-10 md:p-9"
            >
              <div className="flex items-baseline gap-4 md:flex-col md:gap-2">
                <span className="font-serif text-4xl text-terracotta">
                  {c.n}
                </span>
                <h3 className="font-serif text-2xl text-slate">{c.title}</h3>
              </div>
              <dl className="grid gap-5 lg:grid-cols-3">
                <div>
                  <dt className="eyebrow">What it is</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-mid">
                    {c.what}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">What it contains</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-mid">
                    {c.contains}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">What it gives you</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-mid">
                    {c.gives}
                  </dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Three intelligence layers */}
      <Section tone="warmwhite" aria-labelledby="layers-heading">
        <Reveal className="max-w-3xl">
          <Eyebrow>The three intelligence layers</Eyebrow>
          <h2
            id="layers-heading"
            className="mt-4 text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            One question at each stage of the lifecycle
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {layers.map((layer, i) => (
            <Reveal
              key={layer.n}
              as="article"
              delay={i * 0.05}
              className="grid gap-6 rounded-lg border border-stone-border bg-warmwhite p-7 md:grid-cols-[1fr_1.4fr] md:gap-10 md:p-9"
            >
              <div>
                <span className="font-serif text-3xl text-terracotta">
                  {layer.n}
                </span>
                <h3 className="mt-3 font-serif text-2xl text-slate">
                  {layer.title}
                </h3>
                <p className="mt-2 text-base font-medium text-slate">
                  {layer.question}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {layer.measures.map((m) => (
                    <li
                      key={m}
                      className="rounded-full border border-stone-border bg-stone px-3 py-1 font-sans text-xs text-slate-mid"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-base leading-relaxed text-slate-mid">
                {layer.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* From judgement to intelligence (dark band) */}
      <Section tone="slate" aria-labelledby="judgement-heading">
        <Reveal className="max-w-3xl">
          <Eyebrow onDark>Why the system exists</Eyebrow>
          <h2
            id="judgement-heading"
            className="mt-4 text-3xl leading-tight tracking-tightest text-warmwhite sm:text-4xl"
          >
            From founder knowledge to organisational system
          </h2>
          <div className="prose-measure mt-6 space-y-4 text-lg leading-relaxed text-white/75">
            <p>
              In most growing agencies, the real understanding of what drives
              performance lives in a few heads — usually the founder&rsquo;s and
              a handful of senior managers. They know what a strong first ninety
              days looks like, what separates a developing consultant from a
              stalled one, and when to intervene.
            </p>
            <p>
              That knowledge is valuable, but it is fragile. It doesn&rsquo;t
              scale, it isn&rsquo;t consistent between managers, and it walks out
              of the door when people leave. RPOS exists to convert that
              judgement into defined indicators, structured assessment and
              visible performance — so the standard is the organisation&rsquo;s,
              not one person&rsquo;s.
            </p>
          </div>
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

      {/* Who it is / is not for */}
      <Section tone="stone" aria-labelledby="fit-heading">
        <Reveal className="max-w-3xl">
          <h2
            id="fit-heading"
            className="text-3xl leading-tight tracking-tightest sm:text-4xl"
          >
            Is RPOS the right fit?
          </h2>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-slate-mid">
            RPOS is deliberately scoped. It works well for some agencies and not
            for others — and it is more useful to be clear about that up front.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal
            as="article"
            className="rounded-lg border border-stone-border bg-warmwhite p-8"
          >
            <h3 className="font-serif text-xl text-slate">
              RPOS is designed for you if&hellip;
            </h3>
            <ul className="mt-6 space-y-4">
              {isFor.map((item) => (
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
          </Reveal>

          <Reveal
            as="article"
            delay={0.06}
            className="rounded-lg border border-stone-border bg-warmwhite p-8"
          >
            <h3 className="font-serif text-xl text-slate">
              It is probably not for you if&hellip;
            </h3>
            <ul className="mt-6 space-y-4">
              {isNotFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <X
                    className="mt-1 h-4 w-4 shrink-0 text-slate-mid"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-slate-mid">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="slate" compact aria-labelledby="rpos-cta-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="rpos-cta-heading"
            className="text-3xl leading-tight tracking-tightest text-warmwhite sm:text-4xl"
          >
            See what RPOS would look like for your agency
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-white/75">
            The framework is tailored to your KPIs, structure and stage. The
            first step is a conversation.
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
