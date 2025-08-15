"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-suit-700/80 backdrop-blur-sm 
        text-sky-100 border-b border-suit-800
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Company Logo - Corporate Uniform Manufacturer"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            <li><Link href="#home" className="hover:text-sky-300 transition">Home</Link></li>
            <li><Link href="#about" className="hover:text-sky-300 transition">About</Link></li>
            <li><Link href="#services" className="hover:text-sky-300 transition">Services</Link></li>
            <li>
              <Link
                href="#contact"
                className="bg-suit-800 rounded-full px-4 py-2 text-sky-100 hover:bg-suit-700 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-sky-100 hover:text-sky-300 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-suit-900/90 backdrop-blur-sm border-t border-suit-800 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><Link href="/" className="hover:text-sky-300 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-sky-300 transition">About</Link></li>
            <li><Link href="/services" className="hover:text-sky-300 transition">Services</Link></li>
            <li>
              <Link
                href="/contact"
                className="bg-suit-800 rounded-full px-4 py-2 text-sky-100 hover:bg-suit-700 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
