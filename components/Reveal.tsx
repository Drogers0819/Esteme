import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Small stagger (seconds) for sequential items. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Subtle entrance animation: fade + 10px rise on load, driven entirely by CSS
 * (see `.reveal` in globals.css).
 *
 * Deliberately NOT JavaScript-driven. Content is server-rendered and visible
 * by default; the CSS animation is a pure enhancement. If scripts fail, the
 * IntersectionObserver misbehaves, or prefers-reduced-motion is set, the
 * content simply shows — it can never be left stuck invisible. This replaces
 * an earlier Framer Motion approach whose viewport observer could miss its
 * trigger on a hard mobile load, leaving sections blank.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const style: CSSProperties | undefined =
    delay > 0 ? { animationDelay: `${delay}s` } : undefined;

  return (
    <Tag className={`reveal ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
