import type { Category } from "~/lib/types";
import { CategoryCard } from "./CategoryCard";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, i) => (
        <div
          key={cat.id}
          className="scroll-scale"
          style={{ "--stagger": i } as React.CSSProperties}
        >
          <CategoryCard category={cat} />
        </div>
      ))}
    </div>
  );
}
