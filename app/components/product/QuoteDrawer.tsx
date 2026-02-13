import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "~/lib/utils";
import { QuoteForm } from "./QuoteForm";

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  sku: string;
  productImage?: string;
  price?: string;
  variantLabel?: string;
}

export function QuoteDrawer({
  isOpen,
  onClose,
  productName,
  sku,
  productImage,
  price,
  variantLabel,
}: QuoteDrawerProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    }
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Solicitar cotizacion"
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full sm:w-[28rem] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-100">
          <h2 className="font-heading text-lg font-bold text-surface-900">
            Solicitar cotizacion
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-surface-400 hover:text-surface-700 hover:bg-surface-100 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product summary */}
        <div className="px-6 py-4 bg-surface-50 border-b border-surface-100">
          <div className="flex gap-3 items-center">
            {productImage && (
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-white border border-surface-200 shrink-0">
                <img
                  src={productImage}
                  alt={productName}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="min-w-0">
              <p className="font-heading font-bold text-surface-900 truncate">
                {productName}
              </p>
              <div className="flex items-center gap-2 text-sm text-surface-500">
                {variantLabel && <span>{variantLabel}</span>}
                {variantLabel && sku && <span>·</span>}
                {sku && <span className="font-mono text-xs">{sku}</span>}
              </div>
              {price && (
                <p className="text-sm font-semibold text-primary-600 mt-0.5">
                  {price} c/u
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <QuoteForm productName={productName} sku={sku} />
        </div>
      </div>
    </>
  );
}
