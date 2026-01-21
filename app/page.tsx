import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { VisaSection } from "@/components/visa-section";
import { PassportSection } from "@/components/passport-section";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { PassportSection } from "@/components/passport-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <VisaSection />
      <PassportSection />
      <About />
      <VisaSection />
      <PassportSection />
      <Contact />
      <Footer />
    </main>
  );
}
