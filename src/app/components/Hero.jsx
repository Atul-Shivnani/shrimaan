"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero1.jpg",
    alt: "Professional corporate uniforms for office staff",
    title: "Premium Corporate Uniforms",
    description: "Tailored solutions for your company’s image and comfort.",
  },
  {
    src: "/images/hero2.jpg",
    alt: "Hospital staff wearing custom medical uniforms",
    title: "Healthcare & Hospitality",
    description: "High-quality uniforms designed for durability and style.",
  },
  {
    src: "/images/hero3.jpg",
    alt: "School children in well-fitted school uniforms",
    title: "Educational Institutions",
    description: "Smart, comfortable uniforms for schools and colleges.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden" name="home">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-suit-900/50 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-sky-100 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-sky-200 mt-4 max-w-2xl">
              {slide.description}
            </p>
            <a
              href="/contact"
              className="mt-8 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-suit-900/50 hover:bg-suit-900/70 text-white p-3 rounded-full z-20"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-suit-900/50 hover:bg-suit-900/70 text-white p-3 rounded-full z-20"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-sky-400" : "bg-sky-100/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
