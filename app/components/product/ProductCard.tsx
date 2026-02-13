import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "~/lib/types";
import { formatCurrency } from "~/lib/utils";
import { Badge } from "~/components/ui/Badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/producto/${product.slug}`} className="group">
      <div className="promo-card overflow-hidden h-full flex flex-col">
        {/* Image placeholder */}
        <div className="relative aspect-square bg-surface-100 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-100 to-surface-200">
            <span className="font-heading text-surface-400 text-sm text-center px-4">{product.name}</span>
          </div>
          {product.isFeatured && (
            <div className="absolute top-3 left-3">
              <Badge variant="info">Destacado</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-heading text-base font-bold text-surface-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-surface-500 mb-3 line-clamp-2 flex-1">{product.shortDescription}</p>

          {/* Color swatches */}
          <div className="flex gap-1.5 mb-3">
            {product.variants.slice(0, 5).map((v) => (
              <div
                key={v.sku}
                className="w-5 h-5 rounded-full border border-surface-200"
                style={{ backgroundColor: v.colorHex }}
                title={v.color}
              />
            ))}
            {product.variants.length > 5 && (
              <span className="text-xs text-surface-400 self-center ml-1">+{product.variants.length - 5}</span>
            )}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <div>
              <span className="font-heading text-lg font-bold text-surface-900">
                {formatCurrency(product.price)}
              </span>
              <span className="text-xs text-surface-400 ml-1">c/u</span>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
              Ver <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
