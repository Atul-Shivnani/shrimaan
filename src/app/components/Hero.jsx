"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/sheetal cover.jpg",
    srcMobile: "/sheetal cover V.jpg",
    alt: "INDIAQO - Quality Textile Solutions",
    title: "Premium Corporate Uniforms",
    description: "Tailored solutions for your company's image and comfort.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hasMultipleSlides = slides.length > 1;

  // Check if screen is mobile size with smooth transition
  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsMobile(newIsMobile);
          setTimeout(() => setIsTransitioning(false), 50);
        }, 300);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isMobile]);

  // Auto-rotate every 5 seconds - only if multiple slides
  useEffect(() => {
    if (!hasMultipleSlides) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hasMultipleSlides]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Desktop Image */}
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-500 ${
              isMobile || isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
              objectPosition: 'center 70%'
            }}
          />
          
          {/* Mobile Image */}
          <Image
            src={slide.srcMobile}
            alt={slide.alt}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-500 ${
              isMobile && !isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              objectPosition: 'center center'
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
            <div className="max-w-5xl animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-white to-sky-100 drop-shadow-2xl">
                  {slide.title}
                </span>
              </h1>
              <p className="text-xl md:text-3xl text-sky-50 mt-6 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <a
                  href="#contact"
                  className="group relative bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
                >
                  <span className="relative z-10">Get a Quote</span>
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#services"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:bg-white hover:text-gray-900 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        </div>
      ))}

      {/* Navigation Buttons - Only show if multiple slides */}
      {hasMultipleSlides && (
        <>
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
        </>
      )}

      {/* Indicators - Only show if multiple slides */}
      {hasMultipleSlides && (
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
      )}
    </section>
  );
}
