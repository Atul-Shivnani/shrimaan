import Link from "next/link";
import { services } from "@/lib/services";

export default function ServiceDetailExtras({ service, details }) {
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="w-full">
      {/* Long Description */}
      <section className="py-20 px-5 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                {service.name} Manufacturer &amp; Supplier in Vadodara, Gujarat
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-8"></div>
              <div className="space-y-4">
                {details.longDescription.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Features</h3>
              <ul className="space-y-3">
                {details.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 flex-shrink-0 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Options */}
      <section className="py-20 px-5 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Fabric Options</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              All fabrics sourced directly from our Mafatlal &amp; Raymond partnerships — no substitutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {details.fabrics.map((fabric) => (
              <div
                key={fabric.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{fabric.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{fabric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For + Order Info */}
      <section className="py-20 px-5 md:px-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Ideal For */}
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-6">Ideal For</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-8"></div>
              <div className="grid grid-cols-2 gap-3">
                {details.idealFor.map((industry) => (
                  <div
                    key={industry}
                    className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-gray-200 hover:bg-white/20 transition-colors duration-200"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>

            {/* Order Info + CTA */}
            <div className="flex flex-col justify-between gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-6">Order Details</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-8"></div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Minimum Order Quantity</p>
                      <p className="text-white font-bold text-lg">{details.minOrder}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Estimated Delivery</p>
                      <p className="text-white font-bold text-lg">{details.deliveryTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Shipping</p>
                      <p className="text-white font-bold text-lg">Pan-India delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block text-center bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-sky-500/30"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-5 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Other Services</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:bg-sky-50 hover:border-sky-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-sky-700 mb-2 transition-colors">{related.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{related.shortDescription}</p>
                <span className="text-sky-600 font-semibold text-sm group-hover:underline">View Details →</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
