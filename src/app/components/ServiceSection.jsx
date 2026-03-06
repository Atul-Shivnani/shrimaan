import Image from "next/image";
import Link from "next/link";
import { DEFAULT_CONTENT } from "@/lib/content";

export default function ServicesSection({ content }) {
  const { title, subtitle, items } = {
    ...DEFAULT_CONTENT.services,
    ...content,
    items: content?.items?.length ? content.items : DEFAULT_CONTENT.services.items,
  };

  return (
    <section id="services" className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 mb-6">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
      </div>

      <div className="space-y-0">
        {items.map((service, index) => (
          <Link
            key={service.id ?? index}
            href={`/services/${service.slug}`}
            className={`group relative flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } w-full overflow-hidden transition-all duration-500 hover:shadow-2xl`}
          >
            <div className="w-full relative h-[250px] lg:h-[400px] bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-sky-900/20 to-transparent z-10"></div>
              <Image
                src={service.descriptionImage}
                alt={`${service.name} description`}
                fill
                unoptimized
                className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="w-full relative h-[250px] lg:h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-transparent z-10 group-hover:from-slate-900/5 transition-all duration-500"></div>
              <Image
                src={service.mainImage}
                alt={service.name}
                fill
                unoptimized
                className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
