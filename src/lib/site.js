const fallbackUrl = "https://shrimaanuniforms.com";

export function getSiteUrl() {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

  if (!configured) return fallbackUrl;
  return configured.startsWith("http") ? configured : `https://${configured}`;
}

export const siteConfig = {
  name: "Shrimaan Uniform",
  description:
    "Authorized distributors of Mafatlal & Raymond fabrics. Premium corporate uniforms, boiler suits, safety wear & workwear manufacturer in Vadodara, Gujarat.",
  phone: "+919769574841",
  email: "enquiry@shrimaanuniforms.com",
  address: {
    streetAddress: "Narmada Apartments, Raopura",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390001",
    addressCountry: "IN",
  },
};
