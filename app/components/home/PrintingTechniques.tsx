import { useScrollAnimation } from "~/hooks/useScrollAnimation";
import { techniques } from "~/lib/constants";
import { Card } from "~/components/ui/Card";

const techColors = [
  "bg-coral-50 text-coral-600",
  "bg-primary-50 text-primary-600",
  "bg-purple-50 text-purple-600",
  "bg-electric-50 text-electric-600",
  "bg-mint-50 text-mint-600",
  "bg-coral-50 text-coral-600",
];

export function PrintingTechniques() {
  const ref = useScrollAnimation();

  return (
    <section id="techniques" className="py-24 bg-white">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-accent text-base text-coral-500 mb-2 scroll-hidden">Tecnicas</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-900 scroll-hidden" style={{ "--stagger": 1 } as React.CSSProperties}>
            Tecnicas de impresion
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((tech, i) => (
            <Card
              key={tech.id}
              className="scroll-hidden"
              style={{ "--stagger": i + 2 } as React.CSSProperties}
            >
              {/* Placeholder visual */}
              <div className={`w-full h-32 rounded-lg mb-4 flex items-center justify-center ${techColors[i]?.split(" ")[0] || "bg-surface-100"}`}>
                <span className={`font-display text-2xl font-bold ${techColors[i]?.split(" ")[1] || "text-surface-400"}`}>
                  {tech.name}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-surface-900 mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-surface-500 leading-relaxed">{tech.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
