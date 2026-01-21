"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/logo.png"
              alt="Siri Sand Tour"
              width={60}
              height={60}
            />
            <div>
              <h2 className="text-xl font-semibold text-[#0A7BBE]">
                Siri Sand Tour
              </h2>
              <p className="text-sm text-gray-400">
                Desert Adventures
              </p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
           From golden deserts to vibrant cultural landmarks, we bring you the authentic experiences that make Egypt truly unforgettable.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaInstagram].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full
                  bg-[#EEF7FB] text-[#0A7BBE]
                  hover:bg-[#0A7BBE] hover:text-white transition"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Quick Links
          </h3>
          <ul className="space-y-4 text-gray-600">
            {[
              { name: "Home", href: "/" },
              { name: "Our Trips", href: "/trips" },
              { name: "Blog", href: "/blog" },
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 hover:text-[#0A7BBE] transition"
                >
                  <span className="text-xl">›</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Get In Touch
          </h3>

          <ul className="space-y-6 text-gray-600">
            <li className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-[#EEF7FB] flex items-center justify-center text-[#0A7BBE]">
                <FaPhoneAlt />
              </span>
              +201206911696
            </li>

            <li className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-[#EEF7FB] flex items-center justify-center text-[#0A7BBE]">
                <FaEnvelope />
              </span>
              tours@sirisandtour.com
            </li>

            <li className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-[#EEF7FB] flex items-center justify-center text-[#0A7BBE]">
                <FaMapMarkerAlt />
              </span>
              {/* El Bawiti, Bahariya Oasis, */}
               Giza, Egypt
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 border-t pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Siri Sand Tour. All rights reserved.
      </div>
    </footer>
  );
}
