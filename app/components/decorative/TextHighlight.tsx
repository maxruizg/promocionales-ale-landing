import { useScrollAnimation } from "~/hooks/useScrollAnimation";
import { cn } from "~/lib/utils";

interface TextHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function TextHighlight({ children, className }: TextHighlightProps) {
  const ref = useScrollAnimation<HTMLSpanElement>();

  return (
    <span ref={ref} className={cn("text-highlight scroll-hidden", className)}>
      {children}
    </span>
  );
}
