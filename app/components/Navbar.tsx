'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Trips', href: '#tours' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* DESKTOP NAV */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Siri Sand Tour Logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}

            <a
              href="#tours"
              className="rounded-full bg-[#d6b36b] px-6 py-2 text-sm font-semibold text-black transition hover:bg-[#0A7BBE]"
            >
              Book Now
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="text-2xl text-white md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />

            {/* RIGHT DRAWER */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed right-0 top-0 z-50 h-full w-1/2 bg-white shadow-2xl"
            >
              {/* CLOSE BUTTON */}
              <button
                className="absolute right-5 top-5 text-3xl text-black"
                onClick={() => setMobileOpen(false)}
              >
                <HiOutlineX />
              </button>

              {/* NAV LINKS */}
              <nav className="mt-24 flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-medium text-[#0A7BBE]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- LINK COMPONENT ---------------- */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative text-sm font-medium text-gold"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
