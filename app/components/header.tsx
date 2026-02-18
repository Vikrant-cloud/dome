'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const downArrow = (
  <svg style={{display: 'inline', marginLeft: '10'}} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.569 1.43051e-06L13.6876 1.10161L7.591 7.10177C7.49331 7.19849 7.37714 7.27524 7.24918 7.32762C7.12122 7.38 6.984 7.40697 6.84541 7.40697C6.70681 7.40697 6.56959 7.38 6.44163 7.32762C6.31367 7.27524 6.19751 7.19849 6.09982 7.10177L0 1.10161L1.11865 0.00103951L6.84382 5.63262L12.569 1.43051e-06Z" fill="white"/>
  </svg>
);

const menuIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Resources" },
    { href: "#", label: "Purchases" },
    { href: "#", label: "Case Studies" },
    { href: "#", label: "Services" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-20 px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-6 lg:py-8 flex justify-between items-center text-white">
      {/* Logo */}
      <Link href="/" className="outline-0 z-30">
        <Image
          src="/images/dome-logo-light.png"
          alt="Logo"
          width={140}
          height={27}
          className="w-auto h-auto"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6 xl:gap-[50px] text-sm tracking-widest uppercase">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className="hover:opacity-70 transition">
            {item.label}
            {downArrow}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Toggle menu"
      >
        {menuIcon}
      </button>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`flex flex-col items-center justify-center h-full transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}>
          {/* Mobile Logo */}
          <div className="mb-12">
            <Image
              src="/images/dome-logo-light.png"
              alt="Logo"
              width={180}
              height={35}
              className="w-auto h-auto"
            />
          </div>

          {/* Mobile Nav Items */}
          <nav className="flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-light tracking-wider uppercase hover:text-orange-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-12">
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Close Button */}
      {isMobileMenuOpen && (
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5l10 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </header>
  )
}

export default Header