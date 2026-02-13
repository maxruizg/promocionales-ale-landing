import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "~/lib/utils";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, i) => (
        <div key={i} className="border border-surface-200 rounded-xl overflow-hidden bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left font-heading font-semibold text-surface-800 hover:bg-surface-50 transition-colors"
          >
            {item.title}
            <ChevronDown
              className={cn(
                "w-5 h-5 text-surface-400 transition-transform duration-200",
                openIndex === i && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              openIndex === i ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="px-5 pb-4 text-surface-600">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
