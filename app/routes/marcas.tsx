import type { Route } from "./+types/marcas";
import { getBrands } from "~/lib/data.server";
import { siteSettings } from "~/lib/constants";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";
import { WhatsAppFAB } from "~/components/whatsapp/WhatsAppFAB";
import { Card } from "~/components/ui/Card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Marcas Premium | ${siteSettings.name}` },
    { name: "description", content: "Trabajamos con las mejores marcas del mercado para ofrecer articulos promocionales de calidad." },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const brands = await getBrands();
  return { brands };
}

export default function Marcas({ loaderData }: Route.ComponentProps) {
  const { brands } = loaderData;
  const ref = useScrollAnimation();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Banner */}
        <div className="relative py-16 sm:py-20 bg-gradient-to-br from-surface-800 to-surface-900 text-white overflow-hidden">
          <div className="absolute inset-0 dot-grid-bg opacity-10" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-accent text-base text-electric-400 mb-2">Premium</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">Marcas de confianza</h1>
            <p className="text-lg text-surface-400 max-w-xl">
              Trabajamos con marcas lideres para garantizar calidad en cada producto.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {brands.map((brand, i) => (
                <Card
                  key={brand.id}
                  className="scroll-scale text-center"
                  style={{ "--stagger": i } as React.CSSProperties}
                >
                  {/* Logo */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-surface-900 mb-1">
                    {brand.name}
                  </h3>
                  {brand.description && (
                    <p className="text-sm text-surface-500">{brand.description}</p>
                  )}
                  {brand.website && (
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Visitar sitio
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
