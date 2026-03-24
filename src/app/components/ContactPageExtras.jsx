import Link from "next/link";

const businessHours = [
  { day: "Monday – Friday", hours: "10:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const nextSteps = [
  {
    step: "01",
    title: "We Review Your Enquiry",
    description: "Our team reviews your message within 4 business hours and assigns a dedicated account manager to your enquiry.",
  },
  {
    step: "02",
    title: "Consultation Call",
    description: "We call you to understand your requirements in detail — fabric preference, quantity, timeline, and branding needs.",
  },
  {
    step: "03",
    title: "Samples & Quotation",
    description: "You receive fabric swatches and a detailed, itemized quotation within 48 hours of the consultation.",
  },
  {
    step: "04",
    title: "Order Confirmation & Production",
    description: "Once you approve, we begin production and keep you updated at every milestone until delivery.",
  },
];

export default function ContactPageExtras() {
  return (
    <div className="w-full">
      {/* Map + Business Hours side-by-side */}
      <section className="py-24 px-5 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Find Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our store in Raopura, Vadodara or connect with us remotely — we work with clients across India.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-96">
              <iframe
                title="Shrimaan Uniforms Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3!2d73.1845!3d22.3034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzEyLjIiTiA3M8KwMTEnMDQuMiJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Business Hours + WhatsApp */}
            <div className="space-y-6">
              {/* Business Hours */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🕐</span> Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                      <span className="font-medium text-slate-700">{day}</span>
                      <span className={`font-semibold ${hours === "Closed" ? "text-red-500" : "text-sky-600"}`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919769574841?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20uniform%20orders."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 border-2 border-green-200 hover:bg-green-500 hover:border-green-500 hover:text-white text-green-800 rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-green-500 group-hover:bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-green-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Chat on WhatsApp</p>
                  <p className="text-sm opacity-80">Quick responses during business hours</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After You Contact Us */}
      <section className="py-24 px-5 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">What Happens Next</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's exactly what to expect after you send an enquiry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 px-5 md:px-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Outfit Your Team?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-xl mx-auto">
            Join 2000+ businesses across India who trust Shrimaan Uniforms for their workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919769574841"
              className="bg-white text-sky-700 hover:bg-sky-50 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-xl"
            >
              Call Now: +91 97695 74841
            </a>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-sky-700 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
