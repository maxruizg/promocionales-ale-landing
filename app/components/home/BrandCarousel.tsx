import type { Brand } from "~/lib/types";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

interface BrandCarouselProps {
  brands: Brand[];
}

export function BrandCarousel({ brands }: BrandCarouselProps) {
  const ref = useScrollAnimation();
  // Duplicate brands for infinite scroll effect
  const duplicated = [...brands, ...brands];

  return (
    <section id="brands" className="py-20 bg-white overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <p className="font-accent text-base text-electric-600 mb-2 scroll-hidden">Aliados</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-900 scroll-hidden" style={{ "--stagger": 1 } as React.CSSProperties}>
          Marcas de confianza
        </h2>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        <div className="flex animate-wave-flow gap-12 py-6 w-max">
          {duplicated.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex items-center justify-center w-40 h-20 bg-surface-50 rounded-xl border border-surface-100 px-6 shrink-0 hover:border-primary-200 hover:shadow-md transition-all duration-200"
            >
              <div className="font-heading font-bold text-surface-400 text-sm text-center">
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
