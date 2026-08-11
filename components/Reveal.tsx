"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Small stagger (seconds) for sequential items. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Subtle entrance animation: fade + 10px rise, ~300ms, once on scroll into
 * view. Honours prefers-reduced-motion by rendering with no motion at all.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
