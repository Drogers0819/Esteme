import type { ReactNode } from "react";

type Tone = "warmwhite" | "stone" | "slate";

const toneClasses: Record<Tone, string> = {
  warmwhite: "bg-warmwhite text-slate",
  stone: "bg-stone text-slate",
  slate: "bg-slate text-warmwhite",
};

type SectionProps = {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  id?: string;
  /** Tighten vertical padding for compact bands (e.g. CTA strips). */
  compact?: boolean;
  "aria-labelledby"?: string;
};

/**
 * Full-bleed section band with a tone-driven background and a consistent
 * vertical rhythm. Section rhythm is created by alternating tone + generous
 * padding — never by heavy dividers.
 */
export function Section({
  tone = "warmwhite",
  children,
  className = "",
  id,
  compact = false,
  ...rest
}: SectionProps) {
  const padding = compact ? "py-16 sm:py-20" : "py-20 sm:py-28";
  return (
    <section
      id={id}
      className={`${toneClasses[tone]} ${padding} ${className}`}
      {...rest}
    >
      <div className="container-content">{children}</div>
    </section>
  );
}
