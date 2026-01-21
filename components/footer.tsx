import { MessageCircle, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Aicardo Varona Perez</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Asesor & Agente de Turismo dedicado a hacer realidad tus sueños de viaje.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <nav className="space-y-2">
              <a href="#servicios" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Servicios
              </a>
              <a href="#visa" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Trámite de Visa
              </a>
              <a href="#sobre-mi" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Sobre Mí
              </a>
              <a href="#contacto" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/573043471267"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="tel:+573043471267"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
              >
                <Phone className="h-4 w-4" />
                +57 304 347 1267
              </a>
              <a
                href="mailto:aicardo.varona@email.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                aicardo.varona@email.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Aicardo Varona Perez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
