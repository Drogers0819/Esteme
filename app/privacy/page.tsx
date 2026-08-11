import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Esteme Consulting handles personal data.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        lead={
          <p>
            {/* TODO(client): replace with a reviewed privacy policy before launch. */}
            <span className="italic">
              [Placeholder — a full privacy policy should be added and reviewed
              before launch.]
            </span>
          </p>
        }
      />
      <Section tone="stone">
        <div className="prose-measure space-y-4 text-base leading-relaxed text-slate-mid">
          <p>
            This page will describe what personal data Esteme Consulting
            collects through this website (for example, contact form
            submissions), how it is used, how long it is retained and the rights
            available to you under UK GDPR.
          </p>
          <p>
            Until this policy is finalised, contact form data is used solely to
            respond to your enquiry.
          </p>
        </div>
      </Section>
    </>
  );
}
