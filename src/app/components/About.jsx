import { DEFAULT_CONTENT } from "@/lib/content";

export default function AboutSection({ content }) {
  const {
    title,
    description,
    stats,
    whyChooseUs,
  } = {
    ...DEFAULT_CONTENT.about,
    ...content,
    stats: content?.stats?.length ? content.stats : DEFAULT_CONTENT.about.stats,
    whyChooseUs: content?.whyChooseUs?.length ? content.whyChooseUs : DEFAULT_CONTENT.about.whyChooseUs,
  };

  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-gray-50 to-white py-24 px-5 md:px-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-0"></div>

      {/* Who We Are */}
      <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 mb-6">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto mb-20 relative z-10">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-slate-900">
          Our Impact by the Numbers
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-16"></div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-xl rounded-3xl p-10 text-center hover:-translate-y-3 transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>
                <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">{stat.label}</p>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-400/20 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto relative z-10">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-slate-900">
          Why Choose Us?
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-16"></div>
        <div className="grid gap-10 md:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-3xl p-10 hover:-translate-y-3 transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-tl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
