export default function Footer() {
  return (
    <footer className="bg-suit-900 text-sky-100 py-12 px-5 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">UniformCo</h3>
          <p className="text-sky-200 text-sm">
            Premium corporate uniforms, tailored to your brand. Serving businesses across India with style and professionalism.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-sky-400">Home</a></li>
            <li><a href="/about" className="hover:text-sky-400">About Us</a></li>
            <li><a href="/services" className="hover:text-sky-400">Services</a></li>
            <li><a href="/contact" className="hover:text-sky-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Corporate Uniforms</li>
            <li>Suits & Blazers</li>
            <li>Hospital Uniforms</li>
            <li>Boiler Suits</li>
            <li>Custom T-Shirts</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 98765 43210</li>
            <li>✉ contact@uniformco.in</li>
            <li>🏢 Connaught Place, New Delhi, India</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-sky-700 mt-10 pt-6 text-center text-sky-300 text-sm">
        © {new Date().getFullYear()} UniformCo. All Rights Reserved.
      </div>
    </footer>
  );
}
