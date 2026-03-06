import prisma from "@/lib/prisma";
import { services as staticServices } from "@/lib/services";

export const DEFAULT_CONTENT = {
  hero: {
    slides: [
      {
        src: "/sheetal cover.jpg",
        srcMobile: "/sheetal cover V.jpg",
        alt: "Shrimaan Uniforms",
        title: "Premium Corporate Uniforms",
        description: "Tailored solutions for your company's image and comfort.",
      },
    ],
  },
  services: {
    title: "Products & Services",
    subtitle:
      "Discover our comprehensive range of premium uniform solutions tailored to your industry needs",
    items: staticServices,
  },
  about: {
    title: "Who We Are",
    description:
      "With a rich history spanning 50+ years, we are proud Authorized Distributors of Mafatlal and Raymond. We specialize in providing end-to-end corporate uniform solutions that blend durability with professional style.",
    stats: [
      { number: "50+", label: "Years of Industry Experience" },
      { number: "2000+", label: "Satisfied Clients across India" },
    ],
    whyChooseUs: [
      { title: "Direct Partnership", description: "Access to authentic Raymond and Mafatlal fabrics." },
      { title: "Reliability", description: "A half-century track record of timely delivery." },
      {
        title: "Client-Centric",
        description:
          "We tailor our services to meet your specific industry standards, ensuring customer satisfaction is at the heart of every stitch.",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    subtitle: "Have questions or need a quote? Get in touch with our team today.",
  },
};

export async function getAllSiteContent() {
  try {
    const rows = await prisma.siteContent.findMany();
    const map = Object.fromEntries(rows.map((row) => [row.section, row.content]));
    return {
      hero: map.hero ?? DEFAULT_CONTENT.hero,
      services: map.services ?? DEFAULT_CONTENT.services,
      about: map.about ?? DEFAULT_CONTENT.about,
      contact: map.contact ?? DEFAULT_CONTENT.contact,
    };
  } catch {
    return DEFAULT_CONTENT;
  }
}

export async function getServices() {
  try {
    const content = await getAllSiteContent();
    const items = content.services?.items;
    return Array.isArray(items) && items.length > 0 ? items : DEFAULT_CONTENT.services.items;
  } catch {
    return DEFAULT_CONTENT.services.items;
  }
}

export async function getServiceBySlug(slug) {
  const items = await getServices();
  return items.find((s) => s.slug === slug) ?? null;
}
