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
    "Raymond uniform distributor Vadodara",
    "corporate uniform company Gujarat",
  ],
};

export default async function AboutPage() {
  const content = await getAllSiteContent();

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <AboutSection content={content.about} />
      </div>
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
