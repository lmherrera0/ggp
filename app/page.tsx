import Hero from "@/components/Hero";
import Markers from "@/components/Markers";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Platforms from "@/components/Platforms";
import QuickStart from "@/components/QuickStart";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Markers />
      <Features />
      <HowItWorks />
      <Platforms />
      <QuickStart />
      <Footer />
    </main>
  );
}
