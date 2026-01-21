"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle } from "lucide-react";

const benefits = [
  "Orientación personalizada según tu caso",
  "Revisión completa de documentos",
  "Preparación para la entrevista consular",
  "Seguimiento del proceso hasta la obtención",
];

export function VisaSection() {
  const whatsappLink = "https://wa.me/573043471267?text=Hola,%20me%20interesa%20la%20asesoría%20de%20visa";

  return (
    <section id="visa" className="py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/visa-documents.jpg"
              alt="Asesoría de visa profesional"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-medium">
                Servicio destacado
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Trámite de Visa
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Te acompaño en cada paso del proceso de solicitud de visa. 
                Con experiencia y dedicación, maximizo tus posibilidades de éxito.
              </p>
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
              Consultar asesoría de visa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
