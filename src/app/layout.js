import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Srimaan Uniform",
  description: "Best Uniform Manufacturer in the Town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-dvh w-dvw bg-sky-50">
        {children}
      </body>
    </html>
  );
}
