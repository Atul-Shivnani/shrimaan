export const services = [
  {
    id: 1,
    slug: "corporate-uniform",
    name: "Corporate Uniform",
    shortDescription: "Tailored uniforms that align with your brand identity.",
    mainImage: "/1. Corporate Uniform.jpeg",
    descriptionImage: "/1a. Corporate Uniform.PNG",
  },
  {
    id: 2,
    slug: "t-shirts",
    name: "T-Shirt",
    shortDescription: "Comfortable and durable t-shirts for teams and events.",
    mainImage: "/2. Tshirts.png",
    descriptionImage: "/2a. Tshirts.PNG",
  },
  {
    id: 3,
    slug: "boiler-suits",
    name: "Boiler Suits",
    shortDescription: "Protective workwear designed for industrial use.",
    mainImage: "/3. Boiler suit.jpeg",
    descriptionImage: "/3a. Boiler Suits.PNG",
  },
  {
    id: 4,
    slug: "suits-blazers",
    name: "Suits & Blazers",
    shortDescription: "Professional formal wear for hospitality and corporate teams.",
    mainImage: "/4. Suit.png",
    descriptionImage: "/4a. Blazers and Waistcoats.PNG",
  },
  {
    id: 5,
    slug: "safety-uniform",
    name: "Safety Uniform",
    shortDescription: "Safety-focused uniforms for high-risk operations.",
    mainImage: "/5. Safety Uniform.png",
    descriptionImage: "/5a. Safety Uniform.PNG",
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) || null;
}
