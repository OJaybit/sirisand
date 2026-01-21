"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Trips", href: "/trip" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/aboutus" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* DESKTOP NAV */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* LOGO */}
          {/* LOGO */}
<Link href="/" className="flex items-center justify-center pl-8">
  <Image
    src="/logo.png"
    alt="Siri Sand Tour Logo"
    width={80}  
    height={100} 
    priority
  />
</Link>


          {/* DESKTOP LINKS */}
          <div className="hidden md:flex pr-15 items-center gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}

            <Link
              href="/trip"
              className="rounded-full bg-[#0A7BBE] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#d6b36b]"
            >
              Book Now
            </Link>
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
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />

            {/* DRAWER */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed right-0 top-0 z-50 h-full w-3/5 bg-black shadow-2xl"
            >
              <button
                className="absolute right-5 top-5 text-3xl text-white"
                onClick={() => setMobileOpen(false)}
              >
                <HiOutlineX />
              </button>

              <nav className="mt-24 flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-medium text-white hover:text-[#d6b36b] transition"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/trip"
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 rounded-full bg-[#0A7BBE] px-6 py-2 text-white font-semibold hover:bg-[#d6b36b] transition"
                >
                  Book Now
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- NAV LINK ---------------- */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative text-sm font-medium text-white px-3 hover:text-[#d6b36b] transition"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#d6b36b] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
