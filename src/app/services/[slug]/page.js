import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getServiceBySlug, getAllSiteContent } from "@/lib/content";
import { services } from "@/lib/services";
import { serviceDetails as staticServiceDetails } from "@/lib/serviceDetails";
import ServiceDetailExtras from "@/app/components/ServiceDetailExtras";
import { ServicePixelEvent } from "@/app/components/PixelEvents";
import { getSiteUrl, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: `${service.shortDescription} — ${siteConfig.name}, authorized Mafatlal & Raymond distributor in Vadodara, Gujarat. Bulk orders welcome.`,
    keywords: [
      `${service.name} Vadodara`,
      `${service.name} manufacturer Gujarat`,
      `${service.name} supplier India`,
      "bulk uniform order Gujarat",
      "Mafatlal fabric uniform",
    ],
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const [service, siteContent] = await Promise.all([getServiceBySlug(slug), getAllSiteContent()]);
  if (!service) notFound();
  const serviceDetails = siteContent.serviceDetails ?? staticServiceDetails;

  const siteUrl = getSiteUrl();
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${siteUrl}/services/${service.slug}` },
    ],
  };

  return (
    <main className="w-full overflow-x-hidden min-h-screen bg-gradient-to-b from-white to-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePixelEvent serviceName={service.name} serviceSlug={service.slug} />
      <Header />
      <section className="pt-28 pb-16 px-5 md:px-20 max-w-6xl mx-auto">
        <Link href="/services" className="text-sky-600 font-semibold hover:underline">
          Back to Services
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">{service.name}</h1>
        <p className="text-lg text-gray-700 mb-8">{service.shortDescription}</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-80 bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image src={service.mainImage} alt={service.name} fill unoptimized className="object-contain" />
          </div>
          <div className="relative h-80 bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image src={service.descriptionImage} alt={`${service.name} detail`} fill unoptimized className="object-contain" />
          </div>
        </div>
      </section>
      <ServiceDetailExtras service={service} details={serviceDetails[service.slug]} />
      <Footer />
    </main>
  );
}
