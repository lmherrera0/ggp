import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Markers from "@/components/Markers";
import SourceTiers from "@/components/SourceTiers";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Platforms from "@/components/Platforms";
import CTA from "@/components/CTA";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Markers />
        <SourceTiers />
        <Features />
        <HowItWorks />
        <Platforms />
        <CTA />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}
