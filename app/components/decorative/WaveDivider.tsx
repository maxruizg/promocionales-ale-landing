import { cn } from "~/lib/utils";

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

export function WaveDivider({ className, flip, color = "var(--color-surface-50)" }: WaveDividerProps) {
  return (
    <div className={cn("w-full overflow-hidden leading-none", flip && "rotate-180", className)}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 32L48 37.3C96 43 192 53 288 56C384 59 480 53 576 42.7C672 32 768 16 864 10.7C960 5 1056 11 1152 21.3C1248 32 1344 48 1392 56L1440 64V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V32Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
