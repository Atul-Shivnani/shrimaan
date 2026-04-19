import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Shrimaan Uniforms — the terms and conditions governing the use of our website and the purchase of uniform products and services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  const lastUpdated = "April 19, 2025";

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Hero Banner */}
      <div className="pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-400 mx-auto rounded-full mb-4"></div>
          <p className="text-sky-200 text-lg">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 md:px-10 py-16">
        <div className="prose prose-slate max-w-none space-y-10 text-gray-700 leading-relaxed">

          {/* Intro */}
          <section>
            <p className="text-lg text-gray-600">
              These Terms of Service (&quot;Terms&quot;) govern your use of the website <strong>shrimaanuniforms.com</strong> and all services offered by <strong>Shrimaan Uniforms</strong> (Mafatlal Sheetal Emporium), headquartered at Narmada Apartments, Raopura, Vadodara — 390001, Gujarat, India.
            </p>
            <p className="mt-3 text-base text-gray-500">
              By accessing our website or placing an order with us, you signify your acceptance of these Terms. If you do not agree, please discontinue use of our website and services.
            </p>
          </section>

          {/* 1. Our Services */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">1</span>
              Our Services
            </h2>
            <p>
              Shrimaan Uniforms manufactures and supplies custom corporate uniforms, workwear, safety uniforms, suits, blazers, boiler suits, and related garments to businesses across India. We are an authorised distributor of Mafatlal fabrics.
            </p>
            <p className="mt-3">
              Our website is primarily an informational and enquiry platform. Specific order terms, quantities, pricing, and delivery timelines are agreed upon separately through direct communication.
            </p>
          </section>

          {/* 2. Enquiries & Orders */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">2</span>
              Enquiries & Orders
            </h2>
            <ul className="list-none mt-4 space-y-3">
              {[
                "Submitting a contact form or enquiry does not constitute a binding order. All orders are confirmed only after mutual agreement on specifications, quantities, pricing, and a purchase order or written confirmation.",
                "Minimum order quantities (MOQs) may apply depending on the product category. Our team will communicate these during the quotation process.",
                "Prices quoted are valid for the period stated in the quotation and are subject to change based on fabric costs, customisation complexity, and order volume.",
                "Samples may be provided at a nominal charge, which can be adjusted against a confirmed bulk order.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Payment */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">3</span>
              Payment Terms
            </h2>
            <ul className="list-none mt-4 space-y-3">
              {[
                "Standard payment terms are 50% advance upon order confirmation and 50% before dispatch, unless otherwise agreed in writing.",
                "We accept bank transfers (NEFT/RTGS/IMPS), UPI, cheque, and other mutually agreed payment methods.",
                "Late payment may result in delays to production or dispatch.",
                "All prices are in Indian Rupees (INR) and are exclusive of GST unless explicitly stated otherwise.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Production & Delivery */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">4</span>
              Production & Delivery
            </h2>
            <ul className="list-none mt-4 space-y-3">
              {[
                "Production timelines vary by order complexity and quantity and will be communicated at the time of order confirmation.",
                "Delivery timelines are estimates and may be affected by factors beyond our control, including raw material availability, logistics delays, or force majeure events.",
                "Risk of loss transfers to the buyer upon dispatch of goods.",
                "Shrimaan Uniforms is not liable for delays caused by third-party logistics partners.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Returns & Quality */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">5</span>
              Returns, Defects & Quality Assurance
            </h2>
            <p>We stand behind the quality of our products. In the event of a genuine manufacturing defect:</p>
            <ul className="list-none mt-4 space-y-3">
              {[
                "Claims must be raised within 7 days of delivery with photographic evidence of the defect.",
                "Defective items will be replaced or credited at our discretion.",
                "Returns are not accepted for custom-manufactured items that conform to the agreed specifications.",
                "Minor colour variations due to fabric dye lots or embroidery thread shades are not considered defects.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">6</span>
              Intellectual Property
            </h2>
            <p>
              All content on this website — including text, images, logos, and design — is the property of Shrimaan Uniforms or its licensors and is protected under applicable intellectual property laws. You may not reproduce, distribute, or use any content without our express written permission.
            </p>
            <p className="mt-3">
              By sharing your company logo or branding materials with us for embroidery or printing, you confirm you have the rights to use that branding and grant us a limited licence to reproduce it solely for the purpose of fulfilling your order.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">7</span>
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Shrimaan Uniforms shall not be liable for any indirect, incidental, special, or consequential damages arising out of the use of our website or services. Our total liability to you for any claim shall not exceed the amount paid by you for the goods giving rise to the claim.
            </p>
          </section>

          {/* 8. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">8</span>
              Governing Law & Disputes
            </h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising from or related to these Terms or our services shall be subject to the exclusive jurisdiction of the courts in <strong>Vadodara, Gujarat, India</strong>. We encourage resolution of disputes through good-faith negotiation before pursuing legal remedies.
            </p>
          </section>

          {/* 9. Amendments */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">9</span>
              Amendments
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our website or services after any modification constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* 10. Contact */}
          <section className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 border border-sky-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions About These Terms?</h2>
            <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
            <div className="space-y-2 text-slate-700">
              <p><strong>Shrimaan Uniforms (Mafatlal Sheetal Emporium)</strong></p>
              <p>Narmada Apartments, Raopura, Vadodara — 390001, Gujarat, India</p>
              <p>
                Email:{" "}
                <a href="mailto:enquiry@shrimaanuniforms.com" className="text-sky-600 hover:text-sky-700 font-medium">
                  enquiry@shrimaanuniforms.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919769574841" className="text-sky-600 hover:text-sky-700 font-medium">
                  +91 97695 74841
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
