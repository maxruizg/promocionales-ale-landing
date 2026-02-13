import type { ProductVariant } from "~/lib/types";
import { Badge } from "~/components/ui/Badge";
import { cn } from "~/lib/utils";

interface StockTableProps {
  variants: ProductVariant[];
  selectedSku?: string;
  onSelect: (sku: string) => void;
}

const stockBadge: Record<string, { variant: "success" | "warning" | "danger"; label: string }> = {
  disponible: { variant: "success", label: "Disponible" },
  bajo: { variant: "warning", label: "Bajo stock" },
  agotado: { variant: "danger", label: "Agotado" },
};

export function StockTable({ variants, selectedSku, onSelect }: StockTableProps) {
  return (
    <div>
      <h3 className="font-heading text-lg font-bold text-surface-900 mb-3">Colores y disponibilidad</h3>
      <div className="border border-surface-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-surface-50">
            <tr>
              <th className="px-4 py-3 text-left font-heading font-semibold text-surface-600">Color</th>
              <th className="px-4 py-3 text-left font-heading font-semibold text-surface-600">SKU</th>
              <th className="px-4 py-3 text-left font-heading font-semibold text-surface-600">Stock</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((v) => {
              const badge = stockBadge[v.stock];
              return (
                <tr
                  key={v.sku}
                  onClick={() => v.stock !== "agotado" && onSelect(v.sku)}
                  className={cn(
                    "border-t border-surface-100 transition-colors",
                    v.stock !== "agotado" && "cursor-pointer hover:bg-primary-50",
                    selectedSku === v.sku && "bg-primary-50",
                    v.stock === "agotado" && "opacity-50"
                  )}
                >
                  <td className="px-4 py-3 flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-full border border-surface-300 shrink-0"
                      style={{ backgroundColor: v.colorHex }}
                    />
                    {v.color}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-surface-500">{v.sku}</td>
                  <td className="px-4 py-3">
                    <Badge variant={badge.variant}>{badge.label}</Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
