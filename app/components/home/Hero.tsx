import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { AnimatedText } from "~/components/decorative/AnimatedText";
import { GradientMeshBg } from "~/components/decorative/GradientMeshBg";
import { buildWhatsAppUrl } from "~/lib/whatsapp";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <GradientMeshBg className="absolute inset-0" >
        <div className="absolute inset-0 dot-grid-bg" />
      </GradientMeshBg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Accent label */}
          <p className="font-accent text-lg text-primary-600 mb-4 animate-fade-in">
            Articulos promocionales
          </p>

          {/* Headline - max 8 words */}
          <AnimatedText
            text="Tu marca, nuestro impulso creativo"
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-surface-900 leading-tight tracking-tight"
          />

          {/* Subtitle - max 12 words */}
          <p className="mt-6 text-lg sm:text-xl text-surface-600 max-w-xl animate-fade-in-up [animation-delay:0.4s]">
            Productos personalizados que hacen crecer tu marca en todo Mexico.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up [animation-delay:0.6s]">
            <Link to="/categorias">
              <Button size="lg" className="gap-2">
                Explorar
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="whatsapp"
              size="lg"
              as="a"
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
