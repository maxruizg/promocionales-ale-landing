import { buildWhatsAppUrl } from "~/lib/whatsapp";
import { cn } from "~/lib/utils";

interface WhatsAppLinkProps {
  productName?: string;
  sku?: string;
  children: React.ReactNode;
  className?: string;
}

export function WhatsAppLink({ productName, sku, children, className }: WhatsAppLinkProps) {
  const url = buildWhatsAppUrl({ productName, sku });

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] font-semibold transition-colors",
        className
      )}
    >
      {children}
    </a>
  );
}
