"use client";
import Image from "next/image";

const services = [
  {
    id: 1,
    name: "Corporate Uniform",
    mainImage: "/1. Corporate Uniform.jpeg",
    descriptionImage: "/1a. Corporate Uniform.PNG",
  },
  {
    id: 2,
    name: "T-Shirt",
    mainImage: "/2. Tshirts.png",
    descriptionImage: "/2a. Tshirts.PNG",
  },
  {
    id: 3,
    name: "Boiler Suits",
    mainImage: "/3. Boiler suit.jpeg",
    descriptionImage: "/3a. Boiler Suits.PNG",
  },
  {
    id: 4,
    name: "Suits & Blazers",
    mainImage: "/4. Suit.png",
    descriptionImage: "/4a. Blazers and Waistcoats.PNG",
  },
  {
    id: 5,
    name: "Safety Uniform",
    mainImage: "/5. Safety Uniform.png",
    descriptionImage: "/5a. Safety Uniform.PNG",
  },
  {
    id: 6,
    name: "Bed and Bath",
    mainImage: "/6. Bed and bath.png",
    descriptionImage: "/6a. Bed and bath.PNG",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 mb-6">
            Products & Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of premium uniform solutions
            tailored to your industry needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`group relative flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } w-full overflow-hidden transition-all duration-500 hover:shadow-2xl`}
          >
            {/* Main Service Image */}

            <div className="w-full relative h-[250px] lg:h-[400px] bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-sky-900/20 to-transparent z-10"></div>
              <Image
                src={service.descriptionImage}
                alt={`${service.name} description`}
                fill
                className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Service Name Badge */}
              {/* <div className="absolute bottom-8 left-8 z-20 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl transform group-hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
              </div> */}
            </div>

            {/* Description Image */}
            <div className="w-full relative h-[250px] lg:h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-transparent z-10 group-hover:from-slate-900/5 transition-all duration-500"></div>
              <Image
                src={service.mainImage}
                alt={service.name}
                fill
                className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
