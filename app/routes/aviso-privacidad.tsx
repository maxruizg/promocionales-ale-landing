import type { Route } from "./+types/aviso-privacidad";
import { siteSettings } from "~/lib/constants";

import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Aviso de Privacidad | ${siteSettings.name}` },
    { name: "description", content: `Aviso de privacidad de ${siteSettings.name}.` },
  ];
}

export default function AvisoPrivacidad() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-surface-900 mb-8">
            Aviso de Privacidad
          </h1>

          <div className="prose prose-slate max-w-none space-y-6 text-surface-600 leading-relaxed">
            <p>
              <strong>{siteSettings.name}</strong>, con domicilio en {siteSettings.address}, es responsable del tratamiento de los datos personales que nos proporcione.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Datos que recopilamos
            </h2>
            <p>
              Recopilamos los siguientes datos personales: nombre, telefono, correo electronico y estado de la republica, proporcionados voluntariamente a traves de nuestros formularios de contacto y cotizacion.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Finalidad del tratamiento
            </h2>
            <p>
              Sus datos personales seran utilizados para: atender solicitudes de cotizacion, dar seguimiento a pedidos, enviar informacion sobre productos y servicios, y mejorar la experiencia del usuario.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Proteccion de datos
            </h2>
            <p>
              Implementamos medidas de seguridad administrativas, tecnicas y fisicas para proteger sus datos personales contra dano, perdida, alteracion, destruccion o uso no autorizado.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Derechos ARCO
            </h2>
            <p>
              Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos, puede contactarnos a traves de nuestro correo electronico: {siteSettings.email}.
            </p>

            <h2 className="font-heading text-xl font-bold text-surface-900 mt-8 mb-3">
              Cambios al aviso de privacidad
            </h2>
            <p>
              Nos reservamos el derecho de modificar este aviso de privacidad. Cualquier cambio sera publicado en esta pagina.
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
