import Link from "next/link";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum order quantity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept orders from 50 pieces per style. For mixed styles, each style should meet the minimum individually.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide fabric samples before ordering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We send Mafatlal and Raymond fabric swatches for approval before production begins. No payment required for samples.",
      },
    },
    {
      "@type": "Question",
      name: "How long does production take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard production lead time is 15–21 working days after sample approval and order confirmation, depending on order size.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match our company's brand colours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer custom colour matching on most fabric types. Share your brand guidelines or Pantone codes and we'll do the rest.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle logo embroidery and printing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We provide embroidery, screen printing, and woven label options. Share your logo file (vector preferred) and we handle production.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver outside Gujarat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we deliver pan-India. Shipping costs and estimated delivery times are included in your quotation.",
      },
    },
  ],
};

const orderSteps = [
  {
    step: "01",
    title: "Tell Us Your Requirements",
    description:
      "Call, WhatsApp, or fill the enquiry form. Share your industry, workforce size, preferred colours, and any branding requirements.",
  },
  {
    step: "02",
    title: "Receive Samples & Quote",
    description:
      "We send fabric swatches and a detailed quotation within 48 hours. No commitment needed — review the samples at your own pace.",
  },
  {
    step: "03",
    title: "Confirm & We Deliver",
    description:
      "Once approved, we begin production and deliver the complete order on the agreed date. Pan-India delivery available.",
  },
];

const highlights = [
  {
    icon: "📦",
    title: "Minimum Order: 50 Pieces",
    description: "We accept bulk orders starting from 50 pieces per style. Higher quantities unlock better per-unit pricing.",
  },
  {
    icon: "🎨",
    title: "Custom Branding",
    description: "Logo embroidery, screen printing, woven labels, and custom colour matching available on all products.",
  },
  {
    icon: "🏭",
    title: "Direct from Manufacturer",
    description: "No middlemen. We manufacture in-house with Mafatlal and Raymond fabrics, passing savings directly to you.",
  },
  {
    icon: "🚚",
    title: "Pan-India Delivery",
    description: "We ship across India with proper packaging for bulk orders. Delivery timelines shared upfront.",
  },
  {
    icon: "📏",
    title: "Size Customization",
    description: "Standard sizing or custom size charts — we accommodate diverse workforce sizing requirements.",
  },
  {
    icon: "🔁",
    title: "Repeat Order Program",
    description: "We maintain your order profile for quick repeat orders. No need to re-brief on every restock.",
  },
];

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "We accept orders from 50 pieces per style. For mixed styles, each style should meet the minimum individually.",
  },
  {
    q: "Do you provide fabric samples before ordering?",
    a: "Yes. We send Mafatlal and Raymond fabric swatches for approval before production begins. No payment required for samples.",
  },
  {
    q: "How long does production take?",
    a: "Standard production lead time is 15–21 working days after sample approval and order confirmation, depending on order size.",
  },
  {
    q: "Can you match our company's brand colours?",
    a: "Yes. We offer custom colour matching on most fabric types. Share your brand guidelines or Pantone codes and we'll do the rest.",
  },
  {
    q: "Do you handle logo embroidery and printing?",
    a: "Absolutely. We provide embroidery, screen printing, and woven label options. Share your logo file (vector preferred) and we handle production.",
  },
  {
    q: "Do you deliver outside Gujarat?",
    a: "Yes, we deliver pan-India. Shipping costs and estimated delivery times are included in your quotation.",
  },
];

export default function ServicesPageExtras() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* How to Place a Bulk Order */}
      <section className="py-24 px-5 md:px-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">How to Place a Bulk Order</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple. Transparent. No unnecessary back-and-forth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {orderSteps.map((item, index) => (
              <div key={index} className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center shadow-xl">
                  <span className="text-xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-sky-500/30"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Order Highlights */}
      <section className="py-24 px-5 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Why Order with Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:bg-sky-50 hover:border-sky-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-5 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-block border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-300"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
