import { AnimatedCounter } from "~/components/decorative/AnimatedCounter";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";
import { stats } from "~/lib/constants";

const statColors = [
  "text-primary-600",
  "text-coral-500",
  "text-purple-600",
  "text-mint-600",
];

export function CompanyStats() {
  const ref = useScrollAnimation();

  return (
    <section id="stats" className="py-20 bg-surface-900 text-white">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center scroll-scale"
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <div className={`font-display text-4xl sm:text-5xl font-bold mb-2 ${statColors[i]}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-surface-400 font-heading">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
