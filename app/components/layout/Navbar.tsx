import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { useMobileMenu } from "~/hooks/useMobileMenu";
import { cn } from "~/lib/utils";
import { navLinks, categoryNavItems, siteSettings } from "~/lib/constants";

export function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-surface-100 shadow-sm animate-fade-in-down">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={close}
          >
            <Zap className="w-6 h-6 text-primary-500 group-hover:text-electric-500 transition-colors" />
            <span className="font-display text-xl font-bold bg-gradient-to-r from-primary-600 to-coral-500 bg-clip-text text-transparent">
              {siteSettings.name}
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.href === "/categorias") {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      to={link.href}
                      className={cn(
                        "px-3 py-2 text-sm font-heading font-semibold rounded-lg transition-colors inline-flex items-center gap-1",
                        "text-surface-600 hover:text-primary-600 hover:bg-primary-50",
                        location.pathname.startsWith("/categorias") && "text-primary-600 bg-primary-50"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-surface-100 py-2 min-w-[200px]">
                        {categoryNavItems.map((cat) => (
                          <Link
                            key={cat.slug}
                            to={`/categorias/${cat.slug}`}
                            className="block px-4 py-2.5 text-sm text-surface-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                          >
                            {cat.name}
                          </Link>
                        ))}
                        <div className="border-t border-surface-100 mt-1 pt-1">
                          <Link
                            to="/categorias"
                            className="block px-4 py-2.5 text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                          >
                            Ver todas
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-heading font-semibold rounded-lg transition-colors",
                    "text-surface-600 hover:text-primary-600 hover:bg-primary-50",
                    link.href === "/cotizar" &&
                      "bg-primary-600 text-white hover:bg-primary-700 hover:text-white ml-2",
                    location.pathname === link.href && link.href !== "/cotizar" &&
                      "text-primary-600 bg-primary-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggle}
            className="md:hidden p-2 rounded-lg text-surface-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-surface-100 animate-fade-in-down">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={close}
                className={cn(
                  "block px-3 py-2.5 text-base font-heading font-semibold rounded-lg transition-colors",
                  "text-surface-600 hover:text-primary-600 hover:bg-primary-50",
                  link.href === "/cotizar" &&
                    "bg-primary-600 text-white hover:bg-primary-700 hover:text-white text-center mt-2"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Color accent bar */}
      {isHome && <div className="promo-divider h-[3px]" />}
    </nav>
  );
}
