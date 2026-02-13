import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Input } from "~/components/ui/Input";
import { Select } from "~/components/ui/Select";
import { Textarea } from "~/components/ui/Textarea";
import { Button } from "~/components/ui/Button";
import { mexicanStates } from "~/lib/constants";
import { quoteSchema, validateForm } from "~/lib/validators";
import { buildQuoteWhatsAppUrl } from "~/lib/whatsapp";

interface QuoteFormProps {
  productName?: string;
  sku?: string;
}

export function QuoteForm({ productName, sku }: QuoteFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData);

    const result = validateForm(quoteSchema, {
      ...raw,
      productName,
      sku,
    });

    if (!result.success) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const url = buildQuoteWhatsAppUrl(result.data);
    window.open(url, "_blank");
  }

  const stateOptions = mexicanStates.map((s) => ({ value: s, label: s }));

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-heading text-lg font-bold text-surface-900">Solicitar cotizacion</h3>

      <Input
        id="name"
        name="name"
        label="Nombre"
        placeholder="Tu nombre completo"
        error={errors.name}
      />
      <Input
        id="phone"
        name="phone"
        label="Telefono"
        placeholder="55 1234 5678"
        type="tel"
        error={errors.phone}
      />
      <Select
        id="state"
        name="state"
        label="Estado"
        placeholder="Selecciona tu estado"
        options={stateOptions}
        error={errors.state}
      />
      <Input
        id="quantity"
        name="quantity"
        label="Cantidad"
        placeholder="100"
        type="number"
        min={1}
        error={errors.quantity}
      />
      <Textarea
        id="message"
        name="message"
        label="Mensaje (opcional)"
        placeholder="Detalles adicionales..."
        error={errors.message}
      />

      <Button type="submit" variant="whatsapp" size="lg" className="w-full gap-2">
        <MessageCircle className="w-5 h-5" />
        Enviar por WhatsApp
      </Button>
    </form>
  );
}
