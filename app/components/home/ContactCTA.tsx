import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/Button";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";
import { buildWhatsAppUrl } from "~/lib/whatsapp";

export function ContactCTA() {
  const ref = useScrollAnimation();

  return (
    <section id="cta" className="py-24 bg-surface-50">
      <div ref={ref} className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-accent text-base text-[#25D366] mb-2 scroll-hidden">Contacto</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-900 mb-4 scroll-hidden" style={{ "--stagger": 1 } as React.CSSProperties}>
          Hablemos de tu proyecto
        </h2>
        <p className="text-lg text-surface-500 mb-10 max-w-2xl mx-auto scroll-hidden" style={{ "--stagger": 2 } as React.CSSProperties}>
          Envianos un mensaje y recibe una cotizacion personalizada en minutos.
        </p>

        <div className="flex flex-wrap justify-center gap-4 scroll-hidden" style={{ "--stagger": 3 } as React.CSSProperties}>
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
            WhatsApp
          </Button>
          <Link to="/cotizar">
            <Button variant="primary" size="lg" className="gap-2">
              Cotizar en linea
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
