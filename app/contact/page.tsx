import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";
import { CalendarClock } from "lucide-react";

export const metadata: Metadata = {
  title: "Talk to Esteme",
  description:
    "Start a conversation with Esteme about making recruiter performance more predictable across your agency.",
};

export default function ContactPage() {
  const calendarUrl = siteConfig.calendarUrl;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Esteme"
        lead={
          <p>
            Tell us a little about your agency and what&rsquo;s prompting you to
            look at performance now. We&rsquo;ll follow up to arrange a short
            conversation.
          </p>
        }
      />

      <section className="bg-warmwhite pb-24">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — form */}
            <div>
              <h2 className="font-serif text-2xl text-slate">
                Send a message
              </h2>
              <p className="mt-2 text-base text-slate-mid">
                Fields marked as required help us prepare properly.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Right — calendar embed / placeholder */}
            <div>
              <h2 className="font-serif text-2xl text-slate">
                Prefer to find a time directly?
              </h2>
              <p className="mt-2 text-base text-slate-mid">
                Book a 30-minute conversation below.
              </p>

              <div className="mt-8">
                {calendarUrl ? (
                  // Calendar embed. Set NEXT_PUBLIC_CALENDAR_URL to your
                  // Cal.com / Calendly scheduling link.
                  <div className="overflow-hidden rounded-lg border border-stone-border">
                    <iframe
                      src={calendarUrl}
                      title="Book a conversation with Esteme"
                      className="h-[640px] w-full"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  // Placeholder shown until a calendar URL is configured.
                  // TODO(client): set NEXT_PUBLIC_CALENDAR_URL in .env.local to
                  // your Cal.com or Calendly link to activate the embed here.
                  <div className="flex flex-col items-start rounded-lg border border-dashed border-stone-border bg-stone p-8">
                    <CalendarClock
                      className="h-8 w-8 text-terracotta"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 font-serif text-xl text-slate">
                      Calendar booking
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-mid">
                      A scheduling calendar will appear here once connected. In
                      the meantime, send a message using the form and we&rsquo;ll
                      reply with times — or email us directly.
                    </p>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="mt-5 font-sans text-sm font-medium text-terracotta underline-offset-4 hover:underline"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
