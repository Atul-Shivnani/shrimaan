"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200"
          : "bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-b border-white/10"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="Company Logo - Corporate Uniform Manufacturer"
            className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#home"
                className={`font-semibold text-lg transition-all duration-300 relative group ${
                  scrolled ? "text-slate-800 hover:text-sky-600" : "text-white hover:text-sky-300"
                }`}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`font-semibold text-lg transition-all duration-300 relative group ${
                  scrolled ? "text-slate-800 hover:text-sky-600" : "text-white hover:text-sky-300"
                }`}
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`font-semibold text-lg transition-all duration-300 relative group ${
                  scrolled ? "text-slate-800 hover:text-sky-600" : "text-white hover:text-sky-300"
                }`}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-6 py-3 font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden flex items-center transition-colors duration-300 ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-200 shadow-2xl transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col items-center gap-1 py-6">
            <li className="w-full">
              <a
                href="#home"
                className="block text-center py-3 text-slate-800 hover:bg-sky-50 hover:text-sky-600 font-semibold text-lg transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="w-full">
              <a
                href="#services"
                className="block text-center py-3 text-slate-800 hover:bg-sky-50 hover:text-sky-600 font-semibold text-lg transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li className="w-full">
              <a
                href="#about"
                className="block text-center py-3 text-slate-800 hover:bg-sky-50 hover:text-sky-600 font-semibold text-lg transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li className="w-full px-6 mt-2">
              <a
                href="#contact"
                className="block text-center bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-6 py-3 font-bold text-lg transition-all duration-300 shadow-lg"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
