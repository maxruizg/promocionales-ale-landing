import { SearchBar } from "~/components/ui/SearchBar";
import { cn } from "~/lib/utils";
import type { PrintingTechnique } from "~/lib/types";

interface ProductFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeTechnique?: string;
  onTechniqueChange: (technique: string | undefined) => void;
}

const techniqueOptions: { value: PrintingTechnique; label: string }[] = [
  { value: "serigrafia", label: "Serigrafia" },
  { value: "sublimacion", label: "Sublimacion" },
  { value: "bordado", label: "Bordado" },
  { value: "grabado-laser", label: "Grabado Laser" },
  { value: "tampografia", label: "Tampografia" },
  { value: "transfer", label: "Transfer" },
];

export function ProductFilters({
  search,
  onSearchChange,
  activeTechnique,
  onTechniqueChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-4">
      <SearchBar value={search} onChange={onSearchChange} />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onTechniqueChange(undefined)}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm font-semibold transition-colors",
            !activeTechnique
              ? "bg-primary-600 text-white"
              : "bg-surface-100 text-surface-600 hover:bg-surface-200"
          )}
        >
          Todos
        </button>
        {techniqueOptions.map((tech) => (
          <button
            key={tech.value}
            onClick={() => onTechniqueChange(activeTechnique === tech.value ? undefined : tech.value)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-semibold transition-colors",
              activeTechnique === tech.value
                ? "bg-primary-600 text-white"
                : "bg-surface-100 text-surface-600 hover:bg-surface-200"
            )}
          >
            {tech.label}
          </button>
        ))}
      </div>
    </div>
  );
}
