"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "HR Manager, Infosys",
    text: "The uniforms are top-notch in quality and comfort. Our team looks professional every day!",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Priya Mehta",
    role: "Operations Head, Tata Steel",
    text: "Exceptional service and timely delivery. They truly understand corporate requirements.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Rohit Verma",
    role: "Doctor, Apollo Hospitals",
    text: "The hospital uniforms are both comfortable and hygienic — perfect for long shifts.",
    image: "/images/testimonial3.jpg",
  },
];

export default function AboutSection() {
  return (
    <section className="relative w-full bg-sky-50 py-20 px-5 md:px-20" name="about">
      {/* About Us Text */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-suit-900 mb-6">
          About Us
        </h2>
        <p className="text-lg text-suit-700 leading-relaxed">
          With decades of experience, we are one of India’s leading corporate
          uniform manufacturers. Our mission is to deliver premium-quality
          uniforms that combine style, comfort, and durability — tailored for
          every industry from corporate offices to healthcare facilities.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="relative mt-20 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-3 transition-transform duration-300"
            style={{ transform: `translateY(${i % 2 === 0 ? "0px" : "20px"})` }} // floating offset
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image
                src={t.image}
                alt={`${t.name} - ${t.role}`}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-suit-900">{t.name}</h3>
            <p className="text-sm text-suit-600 mb-3">{t.role}</p>
            <p className="text-suit-700 text-sm">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
