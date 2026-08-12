"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Small stagger (seconds) for sequential items. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Subtle entrance animation: fade + 10px rise, ~300ms, once when the element
 * enters the viewport. Honours prefers-reduced-motion by rendering with no
 * motion at all.
 *
 * Uses the `useInView` hook (state-driven) rather than the `whileInView`
 * prop. `whileInView` can miss its trigger on a hard mobile page load for
 * content already on-screen at load — leaving those sections stuck invisible
 * until a client-side navigation re-mounts them. `useInView` sets up its
 * IntersectionObserver in an effect after mount, so above-the-fold content
 * reliably animates in on first load.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  // once: true — animate a single time and stay put.
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      // `as` is a union of tags, so Framer types the ref as an impossible
      // intersection of element refs. The underlying node is always an
      // HTMLElement, so cast through to satisfy the type checker.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
