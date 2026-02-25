"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Markers from "@/components/Markers";
import SourceTiers from "@/components/SourceTiers";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Platforms from "@/components/Platforms";
import CTA from "@/components/CTA";
import Research from "@/components/Research";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function ClientPage() {
  return (
    <LanguageProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-terracotta focus:text-ivory focus:rounded-bvvg focus:font-sans focus:font-semibold focus:text-sm"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Problem />
        <Markers />
        <SourceTiers />
        <Features />
        <HowItWorks />
        <Platforms />
        <CTA />
        <Research />
        <Feedback />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
