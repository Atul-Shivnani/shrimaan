"use client";

import { useState } from "react";

export default function ContactSection({ phone = "+91 97695 74841", email = "enquiry@shrimaanuniforms.com", address = "Mafatlal Shrimaan Uniforms,\nNarmada Apartments, Raopura\nVadodara, 390001" }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: "success" | "error", text: string }

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setToast({ type: "success", text: "Message sent! We'll get back to you soon." });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setToast({ type: "error", text: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setToast({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-white to-gray-100 py-24 px-5 md:px-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need a quote? Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-lg text-sky-600 sm:text-sm hover:text-sky-700 font-medium transition-colors">{phone}</a>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                  <a href={`mailto:${email}`} className="text-sm sm:text-base text-sky-600 hover:text-sky-700 font-medium transition-colors break-all">{email}</a>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Office Address</h3>
                  <p className="text-lg text-slate-900 leading-relaxed sm:text-sm whitespace-pre-line">{address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h3>

            {toast && (
              <div className={`mb-6 rounded-xl p-4 text-sm font-medium ${toast.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                {toast.text}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-800 font-semibold mb-2 text-lg">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-all duration-300 text-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-800 font-semibold mb-2 text-lg">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-all duration-300 text-lg"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-slate-800 font-semibold mb-2 text-lg">
                  Phone <span className="text-slate-400 font-normal text-base">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={onChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-all duration-300 text-lg"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-800 font-semibold mb-2 text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows="5"
                  required
                  value={form.message}
                  onChange={onChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-all duration-300 text-lg resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
