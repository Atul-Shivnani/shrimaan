import Image from "next/image";
import Header from "./components/Header";
import HeroCarousel from "./components/Hero";
import ServicesSection from "./components/ServiceSection";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden">
    <Header/>
    <HeroCarousel/>
    <ServicesSection/>
    <AboutSection/>
    <ContactSection/>
    <Footer/>
    </div>
  );
}
