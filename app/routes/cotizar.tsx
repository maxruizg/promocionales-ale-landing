import type { Route } from "./+types/cotizar";
import { siteSettings } from "~/lib/constants";

import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";
import { WhatsAppFAB } from "~/components/whatsapp/WhatsAppFAB";
import { QuoteForm } from "~/components/product/QuoteForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Cotizar | ${siteSettings.name}` },
    { name: "description", content: "Solicita una cotizacion de articulos promocionales personalizados." },
  ];
}

export default function Cotizar() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Banner */}
        <div className="relative py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-purple-700 text-white overflow-hidden">
          <div className="absolute inset-0 dot-grid-bg opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">Cotiza ahora</h1>
            <p className="text-lg text-white/80 max-w-xl">
              Llena el formulario y recibe atencion inmediata por WhatsApp.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <div className="promo-card p-8">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
