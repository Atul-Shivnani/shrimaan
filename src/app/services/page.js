import Header from "@/app/components/Header";
import ServicesSection from "@/app/components/ServiceSection";
import ServicesPageExtras from "@/app/components/ServicesPageExtras";
import Footer from "@/app/components/Footer";
import { getAllSiteContent } from "@/lib/content";
import { getSiteUrl, siteConfig } from "@/lib/site";

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
    "workwear manufacturer Vadodara",
    "custom uniform stitching Gujarat",
    "branded uniform supplier India",
    "hospital uniform Vadodara",
    "hotel uniform Gujarat",
    "school uniform manufacturer Vadodara",
    "security uniform supplier Gujarat",
    "factory uniform manufacturer India",
    "Mafatlal fabric uniform Vadodara",
    "Raymond fabric uniform Gujarat",
    "bulk workwear order India",
  ],
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const content = await getAllSiteContent();
  const siteUrl = getSiteUrl();
  const services = content.services?.items ?? [];
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/services#webpage`,
        url: `${siteUrl}/services`,
        name: "Our Services",
        description: metadata.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/services#service-list`,
        name: `${siteConfig.name} services`,
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}/services/${service.slug}`,
          item: {
            "@type": "Service",
            "@id": `${siteUrl}/services/${service.slug}#service`,
            name: service.name,
            description: service.shortDescription,
            image: `${siteUrl}${service.mainImage}`,
            provider: { "@id": `${siteUrl}/#organization` },
            areaServed: { "@type": "Country", name: "India" },
          },
        })),
      },
    ],
  };

  return (
    <main className="w-full overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }} />
      <Header />
      <div className="pt-24">
        <ServicesSection content={content.services} />
      </div>
      <ServicesPageExtras />
      <Footer />
    </main>
  );
}
