import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Esteme Consulting website.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        lead={
          <p>
            {/* TODO(client): replace with reviewed terms of use before launch. */}
            <span className="italic">
              [Placeholder — terms of use should be added and reviewed before
              launch.]
            </span>
          </p>
        }
      />
      <Section tone="stone">
        <div className="prose-measure space-y-4 text-base leading-relaxed text-slate-mid">
          <p>
            This page will set out the terms governing use of this website,
            including intellectual property, acceptable use and limitation of
            liability.
          </p>
          <p>
            Nothing on this website constitutes a contractual offer. Engagements
            are governed by a separate agreement.
          </p>
        </div>
      </Section>
    </>
  );
}
