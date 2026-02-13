import type { Route } from "./+types/terminos";
import { siteSettings } from "~/lib/constants";

import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Terminos y Condiciones | ${siteSettings.name}` },
    { name: "description", content: `Terminos y condiciones de ${siteSettings.name}.` },
  ];
}

export default function Terminos() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-surface-900 mb-8">
            Terminos y Condiciones
          </h1>

          <div className="prose prose-slate max-w-none space-y-6 text-surface-600 leading-relaxed">
            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Cotizaciones
            </h2>
            <p>
              Todas las cotizaciones son validas por 15 dias naturales a partir de su emision. Los precios pueden variar segun volumen, personalizacion y disponibilidad de inventario.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Pedidos minimos
            </h2>
            <p>
              Cada producto tiene un pedido minimo especificado en su ficha tecnica. Los pedidos por debajo del minimo pueden estar sujetos a un cargo adicional.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Personalizacion
            </h2>
            <p>
              El arte o diseno para personalizacion debe ser proporcionado por el cliente en formato vectorial (AI, EPS, PDF). Se realizara una muestra digital para aprobacion antes de iniciar la produccion.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Tiempos de entrega
            </h2>
            <p>
              Los tiempos de produccion varian entre 5 y 15 dias habiles dependiendo del producto y la tecnica de personalizacion. El envio se cotiza por separado segun el destino.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Pagos
            </h2>
            <p>
              Se requiere un anticipo del 50% para iniciar la produccion. El saldo restante se liquida antes del envio. Aceptamos transferencia bancaria y deposito en efectivo.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Garantia
            </h2>
            <p>
              Garantizamos la calidad de la personalizacion. En caso de defectos de fabrica o error en la impresion, se realizara la reposicion sin costo adicional.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Cancelaciones
            </h2>
            <p>
              Los pedidos pueden cancelarse antes de iniciar produccion con reembolso completo del anticipo. Una vez iniciada la produccion, no se aceptan cancelaciones.
            </p>

            <p className="text-sm text-surface-400 mt-8">
              Ultima actualizacion: Febrero 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
