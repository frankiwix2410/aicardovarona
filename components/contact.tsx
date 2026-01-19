"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+53 5312 3456",
    href: "tel:+5353123456",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "aicardo.varona@email.com",
    href: "mailto:aicardo.varona@email.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "La Habana, Cuba",
    href: null,
  },
];

export function Contact() {
  const whatsappLink = "https://wa.me/+5353123456?text=Hola,%20me%20gustaría%20obtener%20más%20información";

  return (
    <section id="contacto" className="py-24 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-medium">
          Hablemos
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Contacto
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12">
          Estoy disponible para responder tus preguntas y ayudarte a planificar tu próxima aventura
        </p>

        {/* WhatsApp CTA */}
        <Card className="mb-12 border-0 shadow-xl bg-primary overflow-hidden">
          <CardContent className="p-8">
            <MessageCircle className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              La forma más rápida de contactarme
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Respondo en menos de 24 horas
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-primary bg-primary-foreground hover:bg-primary-foreground/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Escríbeme por WhatsApp
            </Button>
          </CardContent>
        </Card>

        {/* Other contact methods */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{item.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
