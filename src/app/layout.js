import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

export const metadata = {
  title: "Srimaan Uniform",
  description: "Best Uniform Manufacturer in the Town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-sky-50">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
