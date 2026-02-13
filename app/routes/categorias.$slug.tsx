import { useState, useMemo } from "react";
import { data } from "react-router";
import type { Route } from "./+types/categorias.$slug";
import { getCategoryBySlug, getProducts } from "~/lib/data.server";
import { siteSettings } from "~/lib/constants";
import { useDebounce } from "~/hooks/useDebounce";

import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";
import { WhatsAppFAB } from "~/components/whatsapp/WhatsAppFAB";
import { CategoryBanner } from "~/components/category/CategoryBanner";
import { ProductGrid } from "~/components/product/ProductGrid";
import { ProductFilters } from "~/components/product/ProductFilters";

export function meta({ data: loaderData }: Route.MetaArgs) {
  const title = loaderData?.category?.name || "Categoria";
  return [
    { title: `${title} | ${siteSettings.name}` },
    { name: "description", content: loaderData?.category?.description || "" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const category = await getCategoryBySlug(params.slug);
  if (!category) {
    throw data("Categoria no encontrada", { status: 404 });
  }

  const products = await getProducts({ categoryId: category.id });
  return { category, products };
}

export default function CategoriaSlug({ loaderData }: Route.ComponentProps) {
  const { category, products } = loaderData;
  const [search, setSearch] = useState("");
  const [technique, setTechnique] = useState<string | undefined>();
  const debouncedSearch = useDebounce(search);

  const filtered = useMemo(() => {
    let result = products;

    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    if (technique) {
      result = result.filter((p) =>
        p.techniques.includes(technique as typeof p.techniques[number])
      );
    }

    return result;
  }, [products, debouncedSearch, technique]);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <CategoryBanner
          title={category.name}
          description={category.description}
          accentColor={category.accentColor}
        />
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <ProductFilters
              search={search}
              onSearchChange={setSearch}
              activeTechnique={technique}
              onTechniqueChange={setTechnique}
            />
            <ProductGrid products={filtered} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
