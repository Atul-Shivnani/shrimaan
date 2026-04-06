import Header from "@/app/components/Header";
import ContactSection from "@/app/components/Contact";
import ContactPageExtras from "@/app/components/ContactPageExtras";
import Footer from "@/app/components/Footer";
import { ContactIntentTracker } from "@/app/components/PixelEvents";
import { getAllSiteContent } from "@/lib/content";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Shrimaan Uniforms in Vadodara, Gujarat for bulk uniform orders, corporate workwear quotes, and custom uniform requirements. Call or WhatsApp us today.",
  keywords: [
    "contact Shrimaan Uniforms Vadodara",
    "uniform supplier contact Gujarat",
    "bulk uniform quote India",
    "corporate uniform inquiry Vadodara",
    "uniform order inquiry Gujarat",
    "workwear quote Vadodara",
    "custom uniform enquiry India",
    "uniform manufacturer contact Vadodara",
    "bulk workwear supplier contact Gujarat",
  ],
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const content = await getAllSiteContent();
  const cp = content.contactPage;

  return (
    <main className="w-full overflow-x-hidden">
      <ContactIntentTracker />
      <Header />
      <div className="pt-24">
        <ContactSection phone={cp.phone} email={cp.email} address={cp.address} />
      </div>
      <ContactPageExtras businessHours={cp.businessHours} nextSteps={cp.nextSteps} />
      <Footer />
    </main>
  );
}
