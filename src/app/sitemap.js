import { getServices } from "@/lib/content";
import { getSiteUrl } from "../lib/site";

export default async function sitemap() {
  const siteUrl = getSiteUrl();
  const now = new Date();
  const services = await getServices();

  const staticPages = ["", "/services", "/about", "/contact", "/privacy-policy", "/terms-of-service"];

  return [
    ...staticPages.map((path, index) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: index === 0 ? "weekly" : "monthly",
      priority: index === 0 ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
