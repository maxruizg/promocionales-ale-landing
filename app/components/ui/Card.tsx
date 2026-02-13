import { cn } from "~/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({ children, className, padding = "md", hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "promo-card",
        paddingClasses[padding],
        !hover && "hover:transform-none hover:shadow-[0_4px_24px_rgba(59,130,246,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
