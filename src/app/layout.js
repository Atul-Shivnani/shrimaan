import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import AnalyticsTracker from "./components/AnalyticsTracker";
import MetaPixel from "./components/MetaPixel";
import JsonLd from "./components/JsonLd";
import { getSiteUrl, siteConfig } from "@/lib/site";

const siteUrl = getSiteUrl();
const ogImage = `${siteUrl}/og-image`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "uniform manufacturer Vadodara",
    "corporate uniforms Gujarat",
    "Mafatlal uniform distributor",
    "Raymond uniform distributor",
    "industrial workwear Vadodara",
    "boiler suits manufacturer",
    "safety uniform supplier India",
    "bulk uniform manufacturer",
    "office uniform Vadodara",
    "uniform supplier Gujarat",
  ],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [ogImage],
  },
};

export const viewport = {
  themeColor: "#0c4a6e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-sky-50">
        <JsonLd />
        <MetaPixel />
        <AnalyticsTracker />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
