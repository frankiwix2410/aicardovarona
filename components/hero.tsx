"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Hero() {
  const whatsappLink = "https://wa.me/573043471267";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-beach.jpg"
          alt="Destino turístico paradisíaco"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary-foreground/90 uppercase tracking-[0.3em] text-sm mb-4 font-medium">
          Asesor & Agente de Turismo
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
          Aicardo Varona Perez
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto text-pretty">
          Atención personalizada para hacer realidad el viaje de tus sueños
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => window.open(whatsappLink, "_blank")}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Escríbeme por WhatsApp
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
