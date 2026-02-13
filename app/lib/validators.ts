import { z } from "zod/v4";

export const quoteSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  phone: z.string().min(10, "Telefono invalido (minimo 10 digitos)"),
  email: z.email("Email invalido").optional().or(z.literal("")),
  state: z.string().min(1, "Selecciona tu estado"),
  productName: z.string().optional(),
  sku: z.string().optional(),
  quantity: z.coerce.number().positive("Ingresa una cantidad valida"),
  message: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  phone: z.string().min(10, "Telefono invalido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export function validateForm<I, O>(schema: z.ZodType<O, I>, data: unknown) {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = issue.path.join(".");
      if (!errors[key]) {
        errors[key] = issue.message;
      }
    }
    return { success: false as const, errors, data: undefined };
  }
  return { success: true as const, errors: undefined, data: result.data };
}
