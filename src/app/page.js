import Header from "./components/Header";
import HeroCarousel from "./components/Hero";
import ServicesSection from "./components/ServiceSection";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import { getAllSiteContent } from "@/lib/content";

export default async function Home() {
  const content = await getAllSiteContent();

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <HeroCarousel slides={content.hero?.slides ?? []} />
      <ServicesSection content={content.services} />
      <AboutSection content={content.about} />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
