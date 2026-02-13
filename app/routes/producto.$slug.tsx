import { useState, useCallback } from "react";
import { Link, data } from "react-router";
import { ChevronRight, MessageCircle } from "lucide-react";
import type { Route } from "./+types/producto.$slug";
import { getProductBySlug, getCategoryById } from "~/lib/data.server";
import { siteSettings } from "~/lib/constants";
import { formatCurrency } from "~/lib/utils";

import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";
import { WhatsAppFAB } from "~/components/whatsapp/WhatsAppFAB";
import { Button } from "~/components/ui/Button";
import { ProductGallery } from "~/components/product/ProductGallery";
import { ProductSpecs } from "~/components/product/ProductSpecs";
import { StockTable } from "~/components/product/StockTable";
import { QuoteDrawer } from "~/components/product/QuoteDrawer";

export function meta({ data: loaderData }: Route.MetaArgs) {
  const name = loaderData?.product?.name || "Producto";
  return [
    { title: `${name} | ${siteSettings.name}` },
    { name: "description", content: loaderData?.product?.shortDescription || "" },
    { property: "og:title", content: `${name} - ${siteSettings.name}` },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    throw data("Producto no encontrado", { status: 404 });
  }

  const category = await getCategoryById(product.categoryId);

  return { product, category };
}

export default function ProductoSlug({ loaderData }: Route.ComponentProps) {
  const { product, category } = loaderData;
  const [selectedSku, setSelectedSku] = useState(
    product.variants.find((v) => v.stock === "disponible")?.sku || ""
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const selectedVariant = product.variants.find((v) => v.sku === selectedSku);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-surface-50 border-b border-surface-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-1.5 text-sm text-surface-400">
              <Link to="/" className="hover:text-primary-600 transition-colors">Inicio</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/categorias" className="hover:text-primary-600 transition-colors">Categorias</Link>
              {category && (
                <>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <Link to={`/categorias/${category.slug}`} className="hover:text-primary-600 transition-colors">
                    {category.name}
                  </Link>
                </>
              )}
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-surface-700 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Gallery */}
            <ProductGallery images={product.images} productName={product.name} />

            {/* Right: Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-surface-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-surface-500 leading-relaxed">{product.description}</p>
              </div>

              {/* Price + Quick CTA */}
              <div className="flex items-center gap-4 p-4 bg-surface-50 rounded-xl border border-surface-100">
                <div>
                  <div className="font-display text-3xl font-bold text-surface-900">
                    {formatCurrency(product.price)}
                  </div>
                  <div className="text-sm text-surface-400">por unidad | Min. {product.minOrder} pzas</div>
                </div>
                <Button
                  variant="whatsapp"
                  onClick={openDrawer}
                  className="ml-auto gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Cotizar
                </Button>
              </div>

              {/* Stock table */}
              <StockTable
                variants={product.variants}
                selectedSku={selectedSku}
                onSelect={setSelectedSku}
              />

              {/* Specs */}
              <ProductSpecs specs={product.specs} techniques={product.techniques} />
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
      <QuoteDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        productName={product.name}
        sku={selectedSku}
        productImage={product.images[0]}
        price={formatCurrency(product.price)}
        variantLabel={selectedVariant?.color}
      />
    </>
  );
}
