import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Shrimaan Uniforms — learn how we collect, use, and protect your personal information when you use our website and services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 19, 2025";

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Hero Banner */}
      <div className="pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
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
              Welcome to <strong>Shrimaan Uniforms</strong> (also operating as <em>Mafatlal Sheetal Emporium</em>), located at Narmada Apartments, Raopura, Vadodara — 390001, Gujarat, India. We are committed to protecting your privacy and ensuring transparency in how we handle your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights in relation to it.
            </p>
            <p className="text-base text-gray-500 mt-3">
              By visiting <strong>shrimaanuniforms.com</strong> or contacting us through any channel, you agree to the practices described in this policy.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">1</span>
              Information We Collect
            </h2>
            <p>We collect the following types of information:</p>
            <ul className="list-none mt-4 space-y-3">
              {[
                { title: "Contact Details", desc: "Name, phone number, email address, and business name when you submit an enquiry or contact form." },
                { title: "Usage Data", desc: "Pages visited, time spent, browser type, and device information collected automatically through analytics tools (e.g., Google Analytics, Meta Pixel)." },
                { title: "Communication Data", desc: "Messages you send us via WhatsApp, email, or the website contact form." },
                { title: "Business Information", desc: "Company name and uniform requirements shared voluntarily when requesting a quote." },
              ].map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div><strong className="text-slate-800">{title}:</strong> {desc}</div>
                </li>
              ))}
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">2</span>
              How We Use Your Information
            </h2>
            <ul className="list-none mt-4 space-y-3">
              {[
                "Responding to enquiries and providing quotes for uniform orders",
                "Processing and fulfilling your orders",
                "Sending important updates about your order or services",
                "Improving our website experience and understanding how visitors use it",
                "Complying with legal and regulatory obligations",
                "Marketing communications (only with your consent)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Sharing of Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">3</span>
              Sharing of Information
            </h2>
            <p>
              We do <strong>not sell, rent, or trade</strong> your personal information to third parties. We may share it only in these limited circumstances:
            </p>
            <ul className="list-none mt-4 space-y-3">
              {[
                "With service providers who assist us in operating our website or conducting our business (e.g., hosting providers, analytics services), bound by confidentiality obligations.",
                "With logistics or delivery partners for order fulfilment.",
                "When required by law, court order, or government authority.",
                "To protect the rights, property, or safety of Shrimaan Uniforms or others.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">4</span>
              Cookies & Tracking Technologies
            </h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your experience. These include:
            </p>
            <ul className="list-none mt-4 space-y-3">
              {[
                { title: "Essential Cookies", desc: "Required for the website to function correctly." },
                { title: "Analytics Cookies", desc: "Google Analytics and similar tools help us understand user behaviour in aggregate." },
                { title: "Marketing Pixels", desc: "Meta (Facebook) Pixel helps us measure the effectiveness of our marketing and show relevant ads." },
              ].map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div><strong className="text-slate-800">{title}:</strong> {desc}</div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </section>

          {/* 5. Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">5</span>
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">6</span>
              Data Retention
            </h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements. Enquiry and order data is typically retained for 5 years. You may request deletion of your data at any time.
            </p>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">7</span>
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-none mt-4 space-y-3">
              {[
                "Access the personal data we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of your personal data",
                "Withdraw consent for marketing communications at any time",
                "Lodge a complaint with the relevant data protection authority",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:enquiry@shrimaanuniforms.com" className="text-sky-600 hover:text-sky-700 font-medium">
                enquiry@shrimaanuniforms.com
              </a>.
            </p>
          </section>

          {/* 8. Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">8</span>
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites (e.g., Instagram, Google Maps, WhatsApp). We are not responsible for the privacy practices or content of those sites. We encourage you to read their respective privacy policies.
            </p>
          </section>

          {/* 9. Changes */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0">9</span>
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The date at the top of this page reflects when it was last revised. We encourage you to review it periodically. Continued use of our website after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* 10. Contact */}
          <section className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 border border-sky-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="mb-4">For any privacy-related enquiries, please reach out to us:</p>
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
