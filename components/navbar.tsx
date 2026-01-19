"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#visa", label: "Visa" },
  { href: "#pasaportes", label: "Pasaportes" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/+5353123456";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={cn(
            "text-xl font-bold transition-colors",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}
        >
          AVP
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-foreground font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            onClick={() => {
              window.open(whatsappLink, "_blank");
              setIsMobileMenuOpen(false);
            }}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
}
