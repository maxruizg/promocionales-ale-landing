import type { Route } from "./+types/categorias";
import { getCategories } from "~/lib/data.server";
import { siteSettings } from "~/lib/constants";

import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";
import { WhatsAppFAB } from "~/components/whatsapp/WhatsAppFAB";
import { CategoryBanner } from "~/components/category/CategoryBanner";
import { CategoryGrid } from "~/components/category/CategoryGrid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Categorias | ${siteSettings.name}` },
    { name: "description", content: "Explora nuestro catalogo completo de articulos promocionales por categoria." },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const categories = await getCategories();
  return { categories };
}

export default function Categorias({ loaderData }: Route.ComponentProps) {
  const { categories } = loaderData;

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <CategoryBanner
          title="Categorias"
          description="Encuentra el articulo promocional perfecto para tu marca."
        />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CategoryGrid categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
