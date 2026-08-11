import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "ghost-dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-sans text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Solid terracotta — the primary action.
  primary:
    "bg-terracotta text-warmwhite hover:bg-terracotta-hover focus-visible:ring-terracotta focus-visible:ring-offset-warmwhite",
  // Outlined for light backgrounds.
  ghost:
    "border border-stone-border bg-transparent text-slate hover:border-terracotta hover:text-terracotta focus-visible:ring-terracotta focus-visible:ring-offset-warmwhite",
  // Outlined for the dark slate bands.
  "ghost-dark":
    "border border-white/25 bg-transparent text-warmwhite hover:border-terracotta hover:text-terracotta focus-visible:ring-terracotta focus-visible:ring-offset-slate",
};

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  withArrow?: boolean;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function LinkButton({
  href,
  variant = "primary",
  withArrow = false,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`} {...rest}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}

type SubmitButtonProps = {
  variant?: Variant;
  children: ReactNode;
} & ComponentProps<"button">;

export function SubmitButton({
  variant = "primary",
  children,
  ...rest
}: SubmitButtonProps) {
  return (
    <button className={`${base} ${variants[variant]}`} {...rest}>
      {children}
    </button>
  );
}
