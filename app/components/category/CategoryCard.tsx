import { Link } from "react-router";
import { ArrowRight, Shirt, PenTool, Smartphone, Coffee, ShoppingBag, Briefcase } from "lucide-react";
import type { Category } from "~/lib/types";
import { cn } from "~/lib/utils";

interface CategoryCardProps {
  category: Category;
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

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon];
  const gradient = colorBgs[category.accentColor] || colorBgs.primary;

  return (
    <Link to={`/categorias/${category.slug}`} className="group">
      <div className="promo-card p-6 h-full">
        <div className={cn("w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-5 group-hover:scale-110 transition-transform", gradient)}>
          {Icon && <Icon className="w-8 h-8 text-white" />}
        </div>
        <h3 className="font-heading text-xl font-bold text-surface-900 mb-2 heading-hover-gradient">
          {category.name}
        </h3>
        <p className="text-sm text-surface-500 mb-4">{category.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-surface-400">
            {category.productCount} productos
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
            Explorar <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
