"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-50 shadow-lg border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-2.5">
        {/* Left: Company Logo and Tagline */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-1">
          {/* Logo and Company Name Unit */}
          <div className="flex items-center gap-1">
            <Link href="/" className="flex items-center group">
              <img
                src="/Only logo- without bg.png"
                alt="Company Logo - Corporate Uniform Manufacturer"
                className="h-12 sm:h-14 md:h-16 w-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            
            {/* Mobile Company Name (Stacked) */}
            <Link href="/" className="block sm:hidden flex flex-col justify-center">
              <span className="text-blue-900 font-black text-[17px] leading-none tracking-wide font-inter">
                SHRIMAAN
              </span>
              <span className="text-blue-900 font-bold text-[15px] leading-none tracking-[0.05em] font-inter">
                UNIFORMS
              </span>
            </Link>
          </div>

          {/* Mobile Tagline - Below Logo and Name */}
          <div className="block sm:hidden">
            <div className="text-blue-700/80 font-medium text-[10px] leading-tight italic tracking-wide font-roboto-condensed">
              Crafting Identity, Tailoring Excellence
            </div>
          </div>
          
          {/* Desktop/Tablet Company Name and Tagline */}
          <Link href="/" className="hidden sm:flex sm:flex-col hover:opacity-80 transition-opacity duration-300">
            <div className="text-blue-900 font-black text-lg md:text-xl lg:text-2xl leading-tight tracking-wide font-inter">
              SHRIMAAN UNIFORMS
            </div>
            <div className="text-blue-800 font-light text-xs md:text-sm lg:text-base -mt-1 italic tracking-wide font-roboto-condensed">
              Crafting Identity, Tailoring Excellence
            </div>
          </Link>
        </div>

        {/* Center: Mafatlal Embed Logo */}
        <div className="absolute left-[70%] sm:left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex items-center group">
            <img
              src="/Shrimaan new Mafatlal embed logo-Photoroom.png"
              alt="Authorized Distributor of Mafatlal"
              className="h-12 sm:h-14 md:h-16 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Right: Desktop Navigation */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-4 xl:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-semibold text-base lg:text-lg transition-all duration-300 relative group ${
                    isActive(item.href) ? "text-sky-600" : "text-slate-800 hover:text-sky-600"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-sky-500 transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tablet Navigation - Simplified */}
        <nav
          className="hidden md:block lg:hidden"
          aria-label="Tablet navigation"
        >
          <ul className="flex items-center gap-3">
            <li>
              <Link
                href="/"
                className="font-semibold text-sm transition-all duration-300 relative group text-slate-800 hover:text-sky-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="font-semibold text-sm transition-all duration-300 relative group text-slate-800 hover:text-sky-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-3 py-1.5 font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center transition-colors duration-300 text-slate-800 z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-7 sm:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-50/98 backdrop-blur-lg border-t border-gray-200 shadow-2xl transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col items-center gap-1 py-4 sm:py-6">
            {navItems.map((item) => (
              <li className="w-full" key={item.href}>
                <Link
                  href={item.href}
                  className="block text-center py-2.5 sm:py-3 text-slate-800 hover:bg-sky-50 hover:text-sky-600 font-semibold text-base sm:text-lg transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile Mafatlal Logo - Removed since center logo is now always visible */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
