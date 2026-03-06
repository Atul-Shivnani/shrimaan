import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getServiceBySlug } from "@/lib/content";
import { ServicePixelEvent } from "@/app/components/PixelEvents";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className="w-full overflow-x-hidden min-h-screen bg-gradient-to-b from-white to-gray-100">
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
      <Footer />
    </main>
  );
}
