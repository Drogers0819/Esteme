import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
};

/** Consistent hero band for inner pages (warm white). */
export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="bg-warmwhite pt-16 pb-14 sm:pt-24 sm:pb-20">
      <div className="container-content">
        <Reveal>
          {eyebrow && (
            <div className="mb-4">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1 className="max-w-3xl text-4xl leading-[1.1] tracking-tightest text-slate sm:text-5xl">
            {title}
          </h1>
          {lead && (
            <div className="prose-measure mt-6 text-lg leading-relaxed text-slate-mid">
              {lead}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
