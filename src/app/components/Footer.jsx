import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 py-16 px-5 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex flex-col mb-6">
                <div className="flex items-center gap-3">
                  <Link href="/" className="flex items-center group flex-shrink-0">
                    <img
                      src="/Only logo- without bg.png"
                      alt="Shrimaan Uniforms Logo"
                      className="h-13 w-auto transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Brand Name */}
                  <div className="flex flex-col justify-center">
                    <span className="brand-name-underline">
                      <span className="brand-name text-sky-100 text-[18px]">
                        SHRIMAAN UNIFORMS
                      </span>
                    </span>
                    <span className="brand-tagline text-sky-300/60 text-[10px] mt-1">
                      Crafting Identity, Tailoring Excellence
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Premium corporate uniforms, tailored to your brand. Serving businesses across India with style and professionalism for over 50 years.
              </p>

              {/* Social Media Icons — Instagram Only */}
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/mafatlal_sheetal_emporium?igsh=cno3dnF5eTZkZHNx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                  aria-label="Instagram — Mafatlal Sheetal Emporium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-sky-300">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center group">
                      <span className="w-0 h-0.5 bg-sky-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-sky-300">Our Services</h4>
              <ul className="space-y-3">
                {[
                  { href: "/services/corporate-uniform", label: "Corporate Uniforms" },
                  { href: "/services/t-shirts", label: "T-Shirts" },
                  { href: "/services/boiler-suits", label: "Boiler Suits" },
                  { href: "/services/suits-blazers", label: "Suits & Blazers" },
                  { href: "/services/safety-uniform", label: "Safety Uniforms" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center group">
                      <span className="w-0 h-0.5 bg-sky-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-sky-300">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919769574841" className="hover:text-sky-400 transition-colors">
                    +91 97695 74841
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:enquiry@shrimaanuniforms.com" className="hover:text-sky-400 transition-colors break-all">
                    enquiry@shrimaanuniforms.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a
                    href="https://maps.app.goo.gl/Z5MQ8vSpWVhTfA7U9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:text-sky-400 transition-colors"
                  >
                    Mafatlal Shrimaan Uniforms,<br />
                    Narmada Apartments, Raopura<br />
                    Vadodara, 390001
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} SHRIMAAN UNIFORMS. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <Link href="/privacy-policy" className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
                <span>•</span>
                <Link href="/terms-of-service" className="hover:text-sky-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
