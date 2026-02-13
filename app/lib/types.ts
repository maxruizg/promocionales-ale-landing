export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  brandId?: string;
  images: string[];
  price: number;
  minOrder: number;
  specs: ProductSpec[];
  variants: ProductVariant[];
  techniques: PrintingTechnique[];
  isFeatured: boolean;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  sku: string;
  color: string;
  colorHex: string;
  stock: "disponible" | "bajo" | "agotado";
}

export type PrintingTechnique =
  | "serigrafia"
  | "sublimacion"
  | "bordado"
  | "grabado-laser"
  | "tampografia"
  | "transfer";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  accentColor: string;
  productCount: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description?: string;
  website?: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  state: string;
  productName?: string;
  sku?: string;
  quantity: number;
  message?: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  subtitle: string;
  whatsapp: string;
  email: string;
  address: string;
  instagram: string;
  facebook: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface CategoryNavItem {
  slug: string;
  name: string;
  icon: string;
}

export interface Solution {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Technique {
  id: PrintingTechnique;
  name: string;
  description: string;
  image: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
