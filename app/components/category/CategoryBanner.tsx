import { cn } from "~/lib/utils";

interface CategoryBannerProps {
  title: string;
  description: string;
  accentColor?: string;
}

const colorGradients: Record<string, string> = {
  primary: "from-primary-600 to-primary-700",
  coral: "from-coral-500 to-coral-600",
  purple: "from-purple-600 to-purple-700",
  mint: "from-mint-600 to-mint-700",
  electric: "from-electric-500 to-electric-600",
};

export function CategoryBanner({ title, description, accentColor = "primary" }: CategoryBannerProps) {
  const gradient = colorGradients[accentColor] || colorGradients.primary;

  return (
    <div className={cn("relative py-16 sm:py-20 bg-gradient-to-br text-white overflow-hidden", gradient)}>
      <div className="absolute inset-0 dot-grid-bg opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">{title}</h1>
        <p className="text-lg text-white/80 max-w-xl">{description}</p>
      </div>
    </div>
  );
}
