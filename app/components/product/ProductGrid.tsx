import type { Product } from "~/lib/types";
import { ProductCard } from "./ProductCard";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const ref = useScrollAnimation();

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="font-heading text-lg text-surface-400">No se encontraron productos.</p>
      </div>
    );
  }

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, i) => (
        <div
          key={product.id}
          className="scroll-hidden"
          style={{ "--stagger": i % 8 } as React.CSSProperties}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
