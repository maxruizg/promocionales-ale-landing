import { Link } from "react-router";
import { ArrowRight, Shirt, PenTool, Smartphone, Coffee, ShoppingBag, Briefcase } from "lucide-react";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";
import type { Category } from "~/lib/types";
import { cn } from "~/lib/utils";

interface FeaturedCategoriesProps {
  categories: Category[];
}

const iconMap: Record<string, React.ElementType> = {
  Shirt,
  PenTool,
  Smartphone,
  Coffee,
  ShoppingBag,
  Briefcase,
};

const colorBgs: Record<string, string> = {
  primary: "from-primary-500 to-primary-600",
  coral: "from-coral-500 to-coral-600",
  purple: "from-purple-500 to-purple-600",
  mint: "from-mint-500 to-mint-600",
  electric: "from-electric-500 to-electric-600",
};

export function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
  const ref = useScrollAnimation();

  return (
    <section id="categories" className="py-24 bg-surface-50">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-accent text-base text-mint-600 mb-2 scroll-hidden">Catalogo</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-900 scroll-hidden" style={{ "--stagger": 1 } as React.CSSProperties}>
              Explora categorias
            </h2>
          </div>
          <Link
            to="/categorias"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-heading font-semibold text-primary-600 hover:text-primary-700 scroll-hidden"
            style={{ "--stagger": 2 } as React.CSSProperties}
          >
            Ver todas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            const gradient = colorBgs[cat.accentColor] || colorBgs.primary;
            return (
              <Link
                key={cat.id}
                to={`/categorias/${cat.slug}`}
                className="scroll-scale group"
                style={{ "--stagger": i + 2 } as React.CSSProperties}
              >
                <div className="promo-card p-6 h-full">
                  <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", gradient)}>
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-surface-900 mb-1 heading-hover-gradient">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-surface-500 mb-3">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-surface-400">
                      {cat.productCount} productos
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
