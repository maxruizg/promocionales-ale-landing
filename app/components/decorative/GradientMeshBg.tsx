import { cn } from "~/lib/utils";

interface GradientMeshBgProps {
  className?: string;
  children: React.ReactNode;
}

export function GradientMeshBg({ className, children }: GradientMeshBgProps) {
  return (
    <div className={cn("relative gradient-mesh-bg noise-overlay", className)}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
