import { Link } from "react-router";
import { Zap, MessageCircle, Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { siteSettings, categoryNavItems } from "~/lib/constants";
import { buildWhatsAppUrl } from "~/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-300">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary-400" />
              <span className="font-display text-xl font-bold text-white">
                {siteSettings.name}
              </span>
            </Link>
            <p className="text-sm text-surface-400 leading-relaxed">
              {siteSettings.subtitle}
            </p>
            <div className="flex gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-800 hover:bg-[#25D366] text-surface-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={siteSettings.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-coral-500 text-surface-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteSettings.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-800 hover:bg-blue-600 text-surface-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Categorias</h3>
            <ul className="space-y-2">
              {categoryNavItems.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/categorias/${cat.slug}`}
                    className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marcas" className="text-sm text-surface-400 hover:text-primary-400 transition-colors">
                  Marcas
                </Link>
              </li>
              <li>
                <Link to="/cotizar" className="text-sm text-surface-400 hover:text-primary-400 transition-colors">
                  Cotizar
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-surface-400 hover:text-primary-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/aviso-privacidad" className="text-sm text-surface-400 hover:text-primary-400 transition-colors">
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-sm text-surface-400 hover:text-primary-400 transition-colors">
                  Terminos y condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 mt-0.5 text-[#25D366]" />
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-400 hover:text-[#25D366] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-surface-500" />
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                >
                  {siteSettings.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-surface-500" />
                <span className="text-sm text-surface-400">{siteSettings.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-500">
            &copy; {new Date().getFullYear()} {siteSettings.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link to="/aviso-privacidad" className="text-xs text-surface-500 hover:text-surface-300 transition-colors">
              Privacidad
            </Link>
            <Link to="/terminos" className="text-xs text-surface-500 hover:text-surface-300 transition-colors">
              Terminos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
