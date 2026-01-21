"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Globe, Hotel, Shield, FileCheck, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Venta de Tickets Aéreos",
    description: "Las mejores tarifas y rutas para tu próximo destino. Vuelos nacionales e internacionales.",
    image: "/images/airplane-sky.jpg",
  },
  {
    icon: Globe,
    title: "Paquetes Turísticos",
    description: "Experiencias completas con alojamiento, tours y actividades en los destinos más increíbles.",
    image: "/images/travel-destination.jpg",
  },
  {
    icon: Hotel,
    title: "Servicios Terrestres",
    description: "Traslados, alquiler de vehículos y transporte terrestre para tu comodidad.",
    image: "/images/hotel-lobby.jpg",
  },
  {
    icon: Shield,
    title: "Seguros de Viaje",
    description: "Viaja con tranquilidad. Cobertura médica y protección para cualquier imprevisto.",
    image: "/images/travel-insurance.jpg",
  },
  {
    icon: FileCheck,
    title: "Asesoría para Trámite de Visa",
    description: "Te acompaño en cada paso del proceso de solicitud de visa para cualquier país.",
    image: "/images/visa-documents.jpg",
  },
];

export function Services() {
  const whatsappLink = "https://wa.me/573043471267?text=Hola,%20me%20gustaría%20obtener%20más%20información";

  return (
    <section id="servicios" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-medium">
            Lo que ofrezco
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Mis Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones completas para viajeros que buscan experiencias únicas y sin complicaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  onClick={() => window.open(whatsappLink, "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Consultar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
