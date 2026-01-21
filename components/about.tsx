"use client";

import Image from "next/image";
import { Award, Users, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "10k+", label: "Clientes satisfechos" },
  { icon: Award, value: "30+", label: "Años de experiencia" },
  { icon: Clock, value: "24/7", label: "Atención disponible" },
  { icon: Heart, value: "100%", label: "Compromiso" },
];

export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="Aicardo.png"
                alt="Aicardo Varona Perez - Asesor & Agente de Turismo"
                width={500}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-medium">
                Conóceme
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Sobre Mí
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Mi objetivo es acompañarte en cada paso de tu viaje o trámite, 
                con asesoría clara, honesta y personalizada.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada cliente es único y merece una atención especial. Ya sea que 
                estés planeando unas vacaciones en familia, un viaje de negocios 
                o necesites gestionar tu visa, estoy aquí para ayudarte a lograrlo 
                de la mejor manera posible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-secondary">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
