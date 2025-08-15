"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    name: "Corporate Uniform",
    image: "/images/corporate-uniform.jpg",
  },
  {
    name: "T-Shirt",
    image: "/images/tshirt.jpg",
  },
  {
    name: "Suits & Blazers Fabrics",
    image: "/images/suits-blazers.jpg",
  },
  {
    name: "Boiler Suits",
    image: "/images/boiler-suit.jpg",
  },
  {
    name: "Hospital Uniforms",
    image: "/images/hospital-uniform.jpg",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={services[activeIndex].image}
        alt={services[activeIndex].name}
        fill
        priority
        className="object-cover transition-all duration-700 ease-in-out"
      />

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Services List */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white space-y-5">
        {services.map((service, index) => (
          <button
            key={service.name}
            onMouseEnter={() => setActiveIndex(index)}
            className={`text-3xl font-semibold transition-all duration-300 ${
              index === activeIndex ? "text-sky-300" : "text-white"
            }`}
          >
            {service.name}
          </button>
        ))}
      </div>
    </section>
  );
}
