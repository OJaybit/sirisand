"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Trips", href: "/ourtrip" },
  { label: "Blog", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // main menu visibility
  const [shadowVisible, setShadowVisible] = useState(false); // shadow visibility
  const [showNav, setShowNav] = useState(true);

  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open/close sequence
  useEffect(() => {
    if (mobileOpen) {
      setShadowVisible(true); // show shadow first
      const menuTimer = setTimeout(() => setMenuVisible(true), 300); // then menu
      return () => clearTimeout(menuTimer);
    } else {
      setMenuVisible(false); // close menu first
      const shadowTimer = setTimeout(() => setShadowVisible(false), 400); // then shadow
      return () => clearTimeout(shadowTimer);
    }
  }, [mobileOpen]);

  if (!showNav) return null;

  return (
    <>
      {/* DESKTOP NAV */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full bg-transparent"
      >
       <div className="
  mx-auto flex max-w-7xl items-center justify-between
  px-6 -ml-13 lg:ml-5
  -mt-22 pb-3 lg:-mt-27
  md:py-4
  lg:-mt-10
">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Siri Sand Tour Logo"
              width={290}
              height={100}
              priority
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6 -ml-12">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* BOOK NOW BUTTON */}
          <div className="hidden md:flex">
            <Link href="/trip">
              <button className="relative overflow-hidden px-6 py-3 rounded-full bg-[#0A7BBE] text-white text-base font-semibold group">
                <span className="absolute inset-0 bg-[#075E94] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">Book Now</span>
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="text-4xl text-black md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE SHADOW */}
      <AnimatePresence>
        {shadowVisible && (
          <motion.div
            key="shadow"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              duration: 0.6,
            }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuVisible && (
          <motion.aside
            key="menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 28, duration: 0.6 }}
            className="fixed left-0 top-0 z-50 h-full w-[92%] bg-white shadow-2xl"
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute right-5 top-8 text-4xl text-black"
              onClick={() => setMobileOpen(false)}
            >
              <HiOutlineX />
            </button>

            {/* LOGO IN MOBILE MENU */}
            <div className="flex justify-start pl-0 -ml-5 
            -mt-9">
              <Image
                src="/logo.png"
                alt="Siri Sand Tour Logo"
                width={190}
                height={80}
              />
            </div>

            {/* NAV LINKS */}
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                },
              }}
              className="-mt-8 flex flex-col items-start pl-5 gap-6"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-xl font-medium transition ${
                      link.label === "" ? "text-[#0A7BBE]" : "text-black"
                    } hover:text-[#0A7BBE]`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative text-lg font-semibold text-[#0a7bbe] px-3 hover:text-[#075E94]"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
