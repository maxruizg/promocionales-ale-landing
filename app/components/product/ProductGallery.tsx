import { useState } from "react";
import { cn } from "~/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Placeholder when no real images
  const displayImages = images.length > 0 ? images : ["/images/products/placeholder.jpg"];

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="aspect-square rounded-2xl overflow-hidden bg-surface-100 border border-surface-200">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-100 to-surface-200">
          <span className="font-heading text-surface-400 text-center px-8">{productName}</span>
        </div>
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="flex gap-2">
          {displayImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors",
                activeIndex === i ? "border-primary-500" : "border-surface-200 hover:border-surface-300"
              )}
            >
              <div className="w-full h-full bg-surface-100 flex items-center justify-center">
                <span className="text-[10px] text-surface-400">{i + 1}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
