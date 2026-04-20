import Header from "@/app/components/Header";
import AboutSection from "@/app/components/About";
import AboutPageExtras from "@/app/components/AboutPageExtras";
import Footer from "@/app/components/Footer";
import { getAllSiteContent } from "@/lib/content";

export const metadata = {
  title: "About Us",
  description:
    "Shrimaan Uniforms is an authorized distributor of Mafatlal & Raymond fabrics based in Vadodara, Gujarat. Over a decade of experience in premium corporate uniforms, workwear, and industrial safety clothing.",
  keywords: [
    "Shrimaan Uniforms about",
    "uniform manufacturer Vadodara",
    "Mafatlal fabric distributor Gujarat",
    "Mafatlal authorized distributor Vadodara",
    "Raymond uniform distributor Vadodara",
    "Raymond fabric distributor Gujarat",
    "corporate uniform company Gujarat",
    "50 years uniform manufacturer India",
    "workwear manufacturer Vadodara",
    "uniform supplier Gujarat history",
    "premium fabric uniform Vadodara",
    "hospital uniform manufacturer Gujarat",
    "hotel uniform supplier Vadodara",
    "school uniform manufacturer Gujarat",
  ],
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const content = await getAllSiteContent();

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <AboutSection content={content.about} />
      <AboutPageExtras
        timeline={content.aboutPage.timeline}
        partners={content.aboutPage.partners}
        process={content.aboutPage.process}
        industries={content.aboutPage.industries}
      />
      <Footer />
    </main>
  );
}
