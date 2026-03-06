import { services } from "@/lib/services";
import { getSiteUrl, siteConfig } from "@/lib/site";

export default function JsonLd() {
  const siteUrl = getSiteUrl();

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
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
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
        areaServed: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      ...services.map((service) => ({
        "@type": "Product",
        name: service.name,
        description: service.shortDescription,
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          seller: { "@id": `${siteUrl}/#organization` },
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
