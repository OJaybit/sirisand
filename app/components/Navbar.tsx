'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/AboutUs' },
  {
    name: 'TOURS',
    href: '/tours',
    dropdown: [
      'Cairo',
      'Luxor',
      'Hurghada',
      'Marsa Alam',
      'Sharm El Sheikh',
      'Aswan',
      'Siwa',
      'Fayoum',
    ],
  },
  { name: 'DESTINATION', href: '/destination' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);
  const [desktopToursOpen, setDesktopToursOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // ✅ moved inside component

  const desktopToursRef = useRef<HTMLDivElement>(null);

  // Detect scroll to add border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        desktopToursRef.current &&
        !desktopToursRef.current.contains(e.target as Node)
      ) {
        setDesktopToursOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      {!mobileMenuOpen && (
      <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${scrolled ? ' backdrop-blur-sm' : 'bg-transparent'}
  `}
>

          <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="relative z-50">
              <div className="relative w-40 h-20">
                <Image
                  src="/logo.png"
                  alt="Sirisand Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => {
                if (!link.dropdown) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-sm font-bold tracking-widest text-gray-900 hover:text-[#0A7BBE]"
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <div key={link.name} ref={desktopToursRef} className="relative">
                    <button
                      onClick={() => setDesktopToursOpen(prev => !prev)}
                      className="flex items-center gap-1 text-sm font-bold tracking-widest text text-gray-900 hover:text-[#0A7BBE]"
                    >
                      TOURS
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          desktopToursOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {desktopToursOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full mt-4 w-56 bg-white rounded-xl shadow-xl overflow-hidden"
                        >
                          {link.dropdown.map(city => (
                            <Link
                              key={city}
                              href={`/tours/${city.toLowerCase().replace(/ /g, '-')}`}
                              onClick={() => setDesktopToursOpen(false)}
                              className="block px-6 py-3 text-sm text-gray-700 hover:bg-cyan-50 hover:text-[#0A7BBE]"
                            >
                              {city}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* HAMBURGER */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1 z-50"
            >
              <span className="w-6 h-0.5 bg-gray-900" />
              <span className="w-6 h-0.5 bg-gray-900" />
              <span className="w-6 h-0.5 bg-gray-900" />
            </button>
          </div>
        </header>
      )}

      {/* ================= FULLSCREEN MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="
  fixed inset-0 z-[9999]
  bg-[#0A7BBE]
  md:hidden
  px-6 pt-28
  h-screen
  overflow-y-auto
  overscroll-contain
"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-4xl font-light"
            >
              ×
            </button>

            <div className="divide-y divide-white/30">
              {navLinks.map(link => {
                if (!link.dropdown) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-6 text-2xl font-semibold text-white"
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <div key={link.name} className="py-6">
                    <button
                      onClick={() => setMobileToursOpen(prev => !prev)}
                      className="w-full flex items-center justify-between text-2xl font-semibold text-white"
                    >
                      TOURS
                      <ChevronDown
                        className={`w-6 h-6 transition-transform ${
                          mobileToursOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileToursOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mt-4 pl-4 space-y-4"
                        >
                          {link.dropdown.map(city => (
                            <Link
                              key={city}
                              href={`/tours/${city.toLowerCase().replace(/ /g, '-')}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-lg text-white/90"
                            >
                              {city}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
