import { services } from "@/lib/services";
import { getSiteUrl, siteConfig } from "@/lib/site";

export default function JsonLd() {
  const siteUrl = getSiteUrl();
  const logoUrl = `${siteUrl}/icon.png`;

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 512,
          height: 512,
        },
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
      },
      {
        "@type": ["LocalBusiness", "ClothingStore"],
        "@id": `${siteUrl}/#localbusiness`,
        name: siteConfig.name,
        url: siteUrl,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        description: siteConfig.description,
        priceRange: "₹₹",
        image: logoUrl,
        logo: logoUrl,
        openingHours: ["Mo-Sa 10:00-19:00"],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.3034,
          longitude: 73.1845,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
        areaServed: [
          { "@type": "State", name: "Gujarat" },
          { "@type": "Country", name: "India" },
        ],
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${siteConfig.name}, ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}`
        )}`,
      },
      ...services.map((service) => ({
        "@type": "Product",
        name: service.name,
        description: service.shortDescription,
        url: `${siteUrl}/services/${service.slug}`,
        image: `${siteUrl}${service.mainImage}`,
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        manufacturer: {
          "@id": `${siteUrl}/#organization`,
        },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
