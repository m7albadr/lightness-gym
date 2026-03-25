"use client";

import { ThemeProvider, LangProvider } from "@/lib/context";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Classes from "@/components/Classes";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <ThemeProvider>
      <LangProvider>
        <main>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Classes />
          <Pricing />
          <Gallery />
          <Contact />
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </main>
      </LangProvider>
    </ThemeProvider>
  );
}
