import { siteSettings } from "./constants";

interface WhatsAppMessageOptions {
  productName?: string;
  sku?: string;
  quantity?: number;
  customMessage?: string;
}

export function buildWhatsAppUrl(options?: WhatsAppMessageOptions): string {
  const phone = siteSettings.whatsapp;
  let message = "Hola, me interesa informacion sobre articulos promocionales.";

  if (options) {
    const parts: string[] = ["Hola, me interesa cotizar:"];

    if (options.productName) {
      parts.push(`Producto: ${options.productName}`);
    }
    if (options.sku) {
      parts.push(`SKU: ${options.sku}`);
    }
    if (options.quantity) {
      parts.push(`Cantidad: ${options.quantity}`);
    }
    if (options.customMessage) {
      parts.push(`\n${options.customMessage}`);
    }

    message = parts.join("\n");
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteWhatsAppUrl(data: {
  name: string;
  phone: string;
  state: string;
  productName?: string;
  sku?: string;
  quantity: number;
  message?: string;
}): string {
  const phone = siteSettings.whatsapp;
  const parts = [
    `Hola, soy ${data.name}.`,
    `Telefono: ${data.phone}`,
    `Estado: ${data.state}`,
  ];

  if (data.productName) {
    parts.push(`Producto: ${data.productName}`);
  }
  if (data.sku) {
    parts.push(`SKU: ${data.sku}`);
  }
  parts.push(`Cantidad: ${data.quantity}`);
  if (data.message) {
    parts.push(`\nMensaje: ${data.message}`);
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(parts.join("\n"))}`;
}
