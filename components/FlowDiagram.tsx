import { ArrowRight, ArrowDown } from "lucide-react";

type FlowDiagramProps = {
  steps: string[];
  /** Render legibly on the dark slate band. */
  onDark?: boolean;
};

/**
 * Typographic flow: a sequence of labelled nodes joined by arrows. Horizontal
 * on wider screens, stacking vertically on mobile. No charts, no decoration.
 */
export function FlowDiagram({ steps, onDark = false }: FlowDiagramProps) {
  const nodeClass = onDark
    ? "border-white/20 bg-white/5 text-warmwhite"
    : "border-stone-border bg-warmwhite text-slate";

  return (
    <ol className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-2">
      {steps.map((step, i) => (
        <li
          key={step}
          className="flex flex-col items-center gap-3 lg:flex-1 lg:flex-row"
        >
          <span
            className={`w-full rounded-md border px-4 py-3 text-center font-sans text-sm font-medium leading-snug ${nodeClass}`}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <>
              <ArrowDown
                className="h-4 w-4 shrink-0 text-terracotta lg:hidden"
                aria-hidden="true"
              />
              <ArrowRight
                className="hidden h-4 w-4 shrink-0 text-terracotta lg:block"
                aria-hidden="true"
              />
            </>
          )}
        </li>
      ))}
    </ol>
  );
}
