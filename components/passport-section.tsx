"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, BookOpen, Clock, FileText, Users } from "lucide-react";

const benefits = [
  "Asesoría completa sobre requisitos y documentación",
  "Acompañamiento en el proceso de solicitud",
  "Orientación para renovación de pasaportes",
  "Gestión de pasaportes para menores de edad",
];

const features = [
  {
    icon: FileText,
    title: "Documentación",
    description: "Te indico todos los documentos necesarios",
  },
  {
    icon: Clock,
    title: "Ahorra tiempo",
    description: "Proceso optimizado y sin complicaciones",
  },
  {
    icon: Users,
    title: "Familiar",
    description: "Gestión para toda la familia",
  },
];

export function PassportSection() {
  const whatsappLink = "https://wa.me/573043471267?text=Hola,%20me%20interesa%20el%20trámite%20de%20pasaporte";

  return (
    <section id="pasaportes" className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-medium">
                Nuevo servicio
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Trámite de Pasaportes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Facilito todo el proceso para obtener o renovar tu pasaporte. 
                Te guío paso a paso para que tengas tu documento de viaje sin complicaciones.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-secondary rounded-xl">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h4>
                  <p className="text-muted-foreground text-xs">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar trámite de pasaporte
            </Button>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="/images/two-us-passports-held-hand.jpg"
              alt="Trámite de pasaportes profesional"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-foreground/30 to-transparent" />
            <div className="absolute bottom-6 right-6 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Tu pasaporte</p>
                  <p className="text-sm text-muted-foreground">Sin complicaciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
