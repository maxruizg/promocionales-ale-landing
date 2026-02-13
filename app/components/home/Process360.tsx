import { Lightbulb, Palette, Factory, Truck } from "lucide-react";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";
import { processSteps } from "~/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Palette,
  Factory,
  Truck,
};

const stepColors = [
  "from-primary-500 to-primary-600",
  "from-coral-500 to-coral-600",
  "from-purple-500 to-purple-600",
  "from-mint-500 to-mint-600",
];

export function Process360() {
  const ref = useScrollAnimation();

  return (
    <section id="process" className="py-24 bg-surface-50">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-accent text-base text-purple-500 mb-2 scroll-hidden">Proceso</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-900 scroll-hidden" style={{ "--stagger": 1 } as React.CSSProperties}>
            Servicio 360
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.step}
                className="scroll-hidden text-center"
                style={{ "--stagger": i + 2 } as React.CSSProperties}
              >
                {/* Step number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stepColors[i]} text-white mb-6 shadow-lg`}>
                  {Icon && <Icon className="w-7 h-7" />}
                </div>
                <div className="font-display text-sm font-bold text-surface-400 mb-1">
                  Paso {step.step}
                </div>
                <h3 className="font-heading text-xl font-bold text-surface-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-surface-500">{step.description}</p>

                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-surface-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
