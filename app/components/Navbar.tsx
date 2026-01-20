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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 -mt-5 py-0">
          
         <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="Siri Sand Tour Logo"
    width={40}
    height={40}
    priority
     sizes="(max-width: 768px) 50vw, 33vw" 
    className="block h-30 w-30"
  />
  {/* <div className="leading-tight">
    <p className="text-lg font-semibold text-white">
      Siri Sand Tour
    </p>
    <p className="text-[11px] tracking-widest uppercase text-white/70">
      Desert Adventures
    </p>
  </div> */}
</Link>


          {/* LINKS */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}

            {/* CTA */}
            <a
              href="#tours"
              className="rounded-full bg-[#0A7BBE]  px-6 py-2 text-sm font-semibold text-black transition hover:bg-[#0A7BBE] "
            >
              Book Now
            </a>
          </div>

          {/* MOBILE BUTTON */}
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
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 text-[#0A7BBE] ">
              
              {/* CLOSE */}
              <button
                className="absolute right-6 top-6 text-3xl"
                onClick={() => setMobileOpen(false)}
              >
                <HiOutlineX />
              </button>

              {/* LINKS */}
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium"
                >
                  {link.label}
                </a>
              ))}

              {/* CTA */}
              <a
                href="#tours"
                className="mt-6 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black"
                onClick={() => setMobileOpen(false)}
              >
                Explore Tours
              </a>
            </div>
          </motion.div>
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
