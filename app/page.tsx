"use client";

import { ThemeProvider, LangProvider } from "@/lib/context";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Classes from "@/components/Classes";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Hours from "@/components/Hours";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <ThemeProvider>
      <LangProvider>
        <main>
          <LoadingScreen />
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Classes />
          <Pricing />
          <Gallery />
          <Hours />
          <FAQ />
          <Contact />
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </main>
      </LangProvider>
    </ThemeProvider>
  );
}
