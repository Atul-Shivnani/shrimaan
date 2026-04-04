import prisma from "@/lib/prisma";
import { services as staticServices } from "@/lib/services";
import { serviceDetails as staticServiceDetails } from "@/lib/serviceDetails";

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
  aboutPage: {
    timeline: [
      { year: "1970s", title: "Founded in Vadodara", description: "Shrimaan Uniforms was established in the heart of Vadodara by our founder with a vision to bring quality workwear to Gujarat's growing industrial sector." },
      { year: "1985", title: "Authorized Mafatlal Distributor", description: "We became an authorized distributor of Mafatlal fabrics — one of India's most trusted textile brands — giving us direct access to premium shirting and suiting material." },
      { year: "1998", title: "Raymond Partnership", description: "Expanded our portfolio by partnering with Raymond, India's largest integrated textile company, allowing us to offer a wider range of premium fabric options to corporate clients." },
      { year: "2005", title: "Pan-India Clientele", description: "Crossed 500 satisfied clients spanning industries from manufacturing and hospitality to IT and healthcare, delivering uniforms across India." },
      { year: "Today", title: "2000+ Clients, 50+ Years Strong", description: "With over five decades of expertise, we continue to serve businesses of all sizes — from startups to Fortune 500 companies — with the same commitment to quality and on-time delivery." },
    ],
    partners: [
      { name: "Mafatlal", tagline: "India's Heritage Fabric Brand", description: "Founded in 1905, Mafatlal is one of India's oldest and most respected textile companies. As an authorized distributor, we source authentic Mafatlal shirting, suiting, and workwear fabrics directly — ensuring your uniforms carry the quality of a century-old legacy.", badge: "Authorized Distributor" },
      { name: "Raymond", tagline: "The Complete Man's Fabric", description: "Raymond is India's largest integrated manufacturer of worsted suiting fabric. Our partnership gives clients access to Raymond's premium range for formal uniforms, suits, blazers, and corporate wear — crafted with their signature finish and durability.", badge: "Authorized Distributor" },
    ],
    process: [
      { step: "01", title: "Consultation", description: "We understand your brand, industry requirements, and workforce size. Our team helps you select the right fabric, colour, and style." },
      { step: "02", title: "Fabric Selection", description: "Choose from our exclusive range of Mafatlal and Raymond fabrics. We provide swatches and samples before you commit." },
      { step: "03", title: "Customization & Stitching", description: "Every uniform is stitched to your specifications — size charts, logo embroidery, branding, and finishing details included." },
      { step: "04", title: "Quality Check & Delivery", description: "Each batch goes through a rigorous quality check before dispatch. We deliver on-time, pan-India, with bulk order packaging." },
    ],
    industries: [
      { name: "Corporate & IT", icon: "🏢" },
      { name: "Manufacturing & Industrial", icon: "🏭" },
      { name: "Hospitality & Hotels", icon: "🏨" },
      { name: "Healthcare", icon: "🏥" },
      { name: "Education", icon: "🎓" },
      { name: "Security & Facility", icon: "🛡️" },
    ],
  },
  contactPage: {
    phone: "+91 97695 74841",
    email: "enquiry@shrimaanuniforms.com",
    address: "Mafatlal Shrimaan Uniforms,\nNarmada Apartments, Raopura\nVadodara, 390001",
    businessHours: [
      { day: "Monday – Friday", hours: "10:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    nextSteps: [
      { step: "01", title: "We Review Your Enquiry", description: "Our team reviews your message within 4 business hours and assigns a dedicated account manager to your enquiry." },
      { step: "02", title: "Consultation Call", description: "We call you to understand your requirements in detail — fabric preference, quantity, timeline, and branding needs." },
      { step: "03", title: "Samples & Quotation", description: "You receive fabric swatches and a detailed, itemized quotation within 48 hours of the consultation." },
      { step: "04", title: "Order Confirmation & Production", description: "Once you approve, we begin production and keep you updated at every milestone until delivery." },
    ],
  },
  serviceDetails: staticServiceDetails,
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
      aboutPage: map.aboutPage ?? DEFAULT_CONTENT.aboutPage,
      contactPage: map.contactPage ?? DEFAULT_CONTENT.contactPage,
      serviceDetails: map.serviceDetails ?? DEFAULT_CONTENT.serviceDetails,
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
