import Header from "@/app/components/Header";
import ServicesSection from "@/app/components/ServiceSection";
import Footer from "@/app/components/Footer";
import { getAllSiteContent } from "@/lib/content";

export const metadata = {
  title: "Services",
  description: "Explore our premium uniform products and services.",
};

export default async function ServicesPage() {
  const content = await getAllSiteContent();

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <ServicesSection content={content.services} />
      </div>
      <Footer />
    </main>
  );
}
