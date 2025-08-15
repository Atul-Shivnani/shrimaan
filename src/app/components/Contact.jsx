"use client";

export default function ContactSection() {
  return (
    <section className="w-full bg-sky-50 py-20 px-5 md:px-20" name="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-suit-900 mb-6">Contact Us</h2>
          <p className="text-suit-700 mb-8">
            Have questions or need a quote? Get in touch with our team today.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-suit-800">Phone</h3>
              <p className="text-suit-700">+91 98765 43210</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-suit-800">Email</h3>
              <p className="text-suit-700">contact@uniformco.in</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-suit-800">Office Address</h3>
              <p className="text-suit-700">
                4th Floor, Corporate Tower,  
                Connaught Place, New Delhi, 110001
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-suit-800 font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="mt-2 w-full border border-suit-300 rounded-lg p-3 focus:ring-2 focus:ring-suit-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-suit-800 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="mt-2 w-full border border-suit-300 rounded-lg p-3 focus:ring-2 focus:ring-suit-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-suit-800 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows="4"
                required
                className="mt-2 w-full border border-suit-300 rounded-lg p-3 focus:ring-2 focus:ring-suit-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-suit-800 text-white py-3 rounded-lg hover:bg-suit-900 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
