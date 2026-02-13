import { CalendarDays, Gift, Megaphone, Package } from "lucide-react";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";
import { Card } from "~/components/ui/Card";
import { solutions } from "~/lib/constants";
import { cn } from "~/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  CalendarDays,
  Gift,
  Megaphone,
  Package,
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary-50", text: "text-primary-600", border: "border-primary-200" },
  coral: { bg: "bg-coral-50", text: "text-coral-600", border: "border-coral-200" },
  electric: { bg: "bg-electric-50", text: "text-electric-600", border: "border-electric-200" },
  mint: { bg: "bg-mint-50", text: "text-mint-600", border: "border-mint-200" },
};

export function Solutions() {
  const ref = useScrollAnimation();

  return (
    <section id="solutions" className="py-24 bg-white">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-accent text-base text-coral-500 mb-2 scroll-hidden">Soluciones</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-900 mb-12 scroll-hidden" style={{ "--stagger": 1 } as React.CSSProperties}>
          Impulsamos tu marca
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, i) => {
            const Icon = iconMap[sol.icon];
            const colors = colorMap[sol.color];
            return (
              <Card
                key={sol.title}
                className={cn("scroll-flip-up", colors.border)}
                style={{ "--stagger": i + 2 } as React.CSSProperties}
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", colors.bg)}>
                  {Icon && <Icon className={cn("w-6 h-6", colors.text)} />}
                </div>
                <h3 className="font-heading text-lg font-bold text-surface-900 mb-2">{sol.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{sol.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
