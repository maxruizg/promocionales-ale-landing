import { useScrollAnimation } from "~/hooks/useScrollAnimation";
import { cn } from "~/lib/utils";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "scroll-hidden" | "scroll-fade-left" | "scroll-fade-right" | "scroll-scale" | "scroll-flip-up";
}

export function SectionReveal({ children, className, animation = "scroll-hidden" }: SectionRevealProps) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className={cn(animation, className)}>
      {children}
    </div>
  );
}
