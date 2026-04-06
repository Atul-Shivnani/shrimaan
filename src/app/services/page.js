import Header from "@/app/components/Header";
import ServicesSection from "@/app/components/ServiceSection";
import ServicesPageExtras from "@/app/components/ServicesPageExtras";
import Footer from "@/app/components/Footer";
import { getAllSiteContent } from "@/lib/content";

export const metadata = {
  title: "Our Services",
  description:
    "Shrimaan Uniforms offers premium corporate uniforms, boiler suits, safety wear, T-shirts, and suits & blazers in Vadodara, Gujarat. Bulk orders welcome for companies across India.",
  keywords: [
    "corporate uniforms Vadodara",
    "boiler suits manufacturer Gujarat",
    "safety uniforms supplier India",
    "bulk uniform order Gujarat",
    "industrial workwear Vadodara",
    "T-shirt printing Gujarat",
    "suits blazers uniform manufacturer",
  ],
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const content = await getAllSiteContent();

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <ServicesSection content={content.services} />
      </div>
      <ServicesPageExtras />
      <Footer />
    </main>
  );
}
