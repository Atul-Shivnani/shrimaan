import Header from "@/app/components/Header";
import AboutSection from "@/app/components/About";
import Footer from "@/app/components/Footer";
import { getAllSiteContent } from "@/lib/content";

export const metadata = {
  title: "About",
  description: "Learn about Shrimaan Uniforms and our legacy.",
};

export default async function AboutPage() {
  const content = await getAllSiteContent();

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <AboutSection content={content.about} />
      </div>
      <Footer />
    </main>
  );
}
