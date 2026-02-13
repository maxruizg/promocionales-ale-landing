import { useParallax } from "~/hooks/useParallax";
import { useReducedMotion } from "~/hooks/useReducedMotion";
import { cn } from "~/lib/utils";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({ children, speed = 0.2, className }: ParallaxLayerProps) {
  const offset = useParallax(speed);
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn("will-change-transform", className)}
      style={reducedMotion ? undefined : { transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}
