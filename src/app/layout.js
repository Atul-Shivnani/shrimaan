import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter"
});

const robotoCondensed = Roboto_Condensed({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto-condensed"
});

export const metadata = {
  title: "Srimaan Uniform",
  description: "Best Uniform Manufacturer in the Town",
  icons: {
    icon: "/Only logo- without bg.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-sky-50 ${inter.variable} ${robotoCondensed.variable}`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
