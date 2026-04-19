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
            aria-label={`View ${service.name} service details`}
            className={`group relative flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } w-full overflow-hidden border-y border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl`}
          >
            {/* Description Image (Information Image) - Hidden on Mobile */}
            <div className="hidden lg:block w-full lg:w-1/2 relative h-[300px] lg:h-[420px] bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-sky-900/20 to-transparent z-10"></div>
              <Image
                src={service.descriptionImage}
                alt={`${service.name} description`}
                fill
                unoptimized
                className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Main Image */}
            <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[350px] lg:h-[420px] overflow-hidden bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-transparent z-10 group-hover:from-slate-900/10 transition-all duration-500"></div>
              <Image
                src={service.mainImage}
                alt={service.name}
                fill
                unoptimized
                className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Text Content - Overlapping on Mobile, Hidden on Desktop */}
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-5 py-6 lg:hidden">
              <div className="mx-auto flex w-full flex-col gap-3">
                <div>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-sky-400">Bulk Uniform Solutions</p>
                  <h3 className="mt-1 text-2xl font-extrabold text-white">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300 line-clamp-2">{service.shortDescription}</p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-white mt-1">
                  Explore {service.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
