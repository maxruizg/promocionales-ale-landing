import { useState } from "react";
import { MessageCircle, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import type { Route } from "./+types/contacto";
import { siteSettings } from "~/lib/constants";
import { buildWhatsAppUrl } from "~/lib/whatsapp";
import { contactSchema, validateForm } from "~/lib/validators";

import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";
import { WhatsAppFAB } from "~/components/whatsapp/WhatsAppFAB";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";
import { Textarea } from "~/components/ui/Textarea";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Contacto | ${siteSettings.name}` },
    { name: "description", content: "Contactanos por WhatsApp para cotizaciones y consultas." },
  ];
}

export default function Contacto() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData);

    const result = validateForm(contactSchema, raw);
    if (!result.success) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const message = `Hola, soy ${result.data.name}.\nTelefono: ${result.data.phone}\n\n${result.data.message}`;
    const url = buildWhatsAppUrl({ customMessage: message });
    window.open(url, "_blank");
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Banner */}
        <div className="relative py-16 sm:py-20 bg-gradient-to-br from-[#128C7E] to-[#25D366] text-white overflow-hidden">
          <div className="absolute inset-0 dot-grid-bg opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">Contacto</h1>
            <p className="text-lg text-white/80 max-w-xl">
              Estamos a un mensaje de distancia.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-surface-900 mb-6">
                    Hablemos
                  </h2>
                  <p className="text-surface-500 mb-8 leading-relaxed">
                    Nuestro principal canal de comunicacion es WhatsApp. Escribenos y te respondemos en minutos.
                  </p>
                </div>

                <Button
                  variant="whatsapp"
                  size="lg"
                  as="a"
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escribe por WhatsApp
                </Button>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-surface-700">Email</p>
                      <a href={`mailto:${siteSettings.email}`} className="text-sm text-surface-500 hover:text-primary-600 transition-colors">
                        {siteSettings.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-surface-700">Ubicacion</p>
                      <p className="text-sm text-surface-500">{siteSettings.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Instagram className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-surface-700">Instagram</p>
                      <a href={siteSettings.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-surface-500 hover:text-primary-600 transition-colors">
                        @alepromocionales
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Facebook className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-surface-700">Facebook</p>
                      <a href={siteSettings.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-surface-500 hover:text-primary-600 transition-colors">
                        Ale Promocionales
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="promo-card p-8">
                <h3 className="font-heading text-lg font-bold text-surface-900 mb-4">
                  Enviar mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    id="contact-name"
                    name="name"
                    label="Nombre"
                    placeholder="Tu nombre"
                    error={errors.name}
                  />
                  <Input
                    id="contact-phone"
                    name="phone"
                    label="Telefono"
                    placeholder="55 1234 5678"
                    type="tel"
                    error={errors.phone}
                  />
                  <Textarea
                    id="contact-message"
                    name="message"
                    label="Mensaje"
                    placeholder="Cuentanos como podemos ayudarte..."
                    error={errors.message}
                  />
                  <Button type="submit" variant="whatsapp" size="lg" className="w-full gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Enviar por WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
