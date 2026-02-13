import type { ProductSpec, PrintingTechnique } from "~/lib/types";
import { Badge } from "~/components/ui/Badge";

interface ProductSpecsProps {
  specs: ProductSpec[];
  techniques: PrintingTechnique[];
}

const techniqueLabels: Record<PrintingTechnique, string> = {
  serigrafia: "Serigrafia",
  sublimacion: "Sublimacion",
  bordado: "Bordado",
  "grabado-laser": "Grabado Laser",
  tampografia: "Tampografia",
  transfer: "Transfer",
};

export function ProductSpecs({ specs, techniques }: ProductSpecsProps) {
  return (
    <div className="space-y-6">
      {/* Specs table */}
      <div>
        <h3 className="font-heading text-lg font-bold text-surface-900 mb-3">Especificaciones</h3>
        <div className="border border-surface-200 rounded-xl overflow-hidden">
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`flex px-4 py-3 text-sm ${i % 2 === 0 ? "bg-surface-50" : "bg-white"}`}
            >
              <span className="font-semibold text-surface-700 w-40 shrink-0">{spec.label}</span>
              <span className="text-surface-600">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Printing techniques */}
      <div>
        <h3 className="font-heading text-lg font-bold text-surface-900 mb-3">Tecnicas disponibles</h3>
        <div className="flex flex-wrap gap-2">
          {techniques.map((tech) => (
            <Badge key={tech} variant="info">
              {techniqueLabels[tech]}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
