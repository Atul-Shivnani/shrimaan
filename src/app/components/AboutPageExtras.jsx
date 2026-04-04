export default function AboutPageExtras({ timeline, partners, process, industries }) {
  return (
    <div className="w-full">
      {/* Our Journey - Timeline */}
      <section className="py-24 px-5 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five decades of crafting identity through quality uniforms.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-blue-600 -translate-x-1/2"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-md -translate-x-1/2 mt-2"></div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block flex-1"></div>

                  {/* Card */}
                  <div className="flex-1 ml-14 md:ml-0 bg-white border border-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <span className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Partners */}
      <section className="py-24 px-5 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Fabric Partners</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Direct partnerships with India's most trusted textile brands mean you get authentic fabric — no middlemen, no compromise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="relative bg-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-100 to-transparent rounded-bl-full"></div>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {partner.badge}
                </span>
                <h3 className="text-3xl font-black text-slate-900 mb-1">{partner.name}</h3>
                <p className="text-sky-600 font-semibold mb-4 italic">{partner.tagline}</p>
                <p className="text-gray-600 leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-5 md:px-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">How We Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A simple, transparent process from first call to final delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative text-center group">
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-sky-500/30"></div>
                )}
                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 px-5 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Industries We Serve</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From factory floors to five-star hotels — we outfit teams across every sector.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-sky-50 hover:border-sky-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <p className="font-semibold text-slate-800">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
