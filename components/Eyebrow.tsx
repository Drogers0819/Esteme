type EyebrowProps = {
  children: React.ReactNode;
  /** Use on dark slate bands where the accent needs to stay legible. */
  onDark?: boolean;
};

/** Small uppercase label that introduces a section. */
export function Eyebrow({ children, onDark = false }: EyebrowProps) {
  return (
    <p
      className={`font-sans text-xs font-semibold uppercase tracking-[0.14em] ${
        onDark ? "text-terracotta" : "text-terracotta"
      }`}
    >
      {children}
    </p>
  );
}
