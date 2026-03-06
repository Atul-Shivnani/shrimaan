import Header from "@/app/components/Header";
import ContactSection from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import { ContactIntentTracker } from "@/app/components/PixelEvents";

export const metadata = {
  title: "Contact",
  description: "Contact Shrimaan Uniforms for requirements and quotes.",
};

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ContactIntentTracker />
      <Header />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
