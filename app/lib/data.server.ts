import { categories, products, brands } from "./data";
import type { Category, Product, Brand } from "./types";

// Data access abstraction layer
// Currently reads from static data.ts - swap to API/DB in future

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return categories.find((c) => c.slug === slug);
}

export async function getProducts(filters?: {
  categoryId?: string;
  search?: string;
  technique?: string;
  featured?: boolean;
}): Promise<Product[]> {
  let result = [...products];

  if (filters?.categoryId) {
    result = result.filter((p) => p.categoryId === filters.categoryId);
  }
  if (filters?.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
    );
  }
  if (filters?.technique) {
    result = result.filter((p) =>
      p.techniques.includes(filters.technique as Product["techniques"][number])
    );
  }
  if (filters?.featured) {
    result = result.filter((p) => p.isFeatured);
  }

  return result;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((p) => p.slug === slug);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.filter((p) => p.isFeatured);
}

export async function getBrands(): Promise<Brand[]> {
  return brands;
}

export async function getBrandById(id: string): Promise<Brand | undefined> {
  return brands.find((b) => b.id === id);
}

export async function getCategoryById(id: string): Promise<Category | undefined> {
  return categories.find((c) => c.id === id);
}
