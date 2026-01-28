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
  FaYoutube,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* Brand */}
        <div>
          <div className="flex items-center -ml-6 gap-3 -mt-25  mb-5">
            <Image
              src="/logo.png"
              alt="Siri Sand Tour"
              width={180}
              height={60}
            />
          </div>

          <p className="text-gray-600 leading-relaxed -mt-20 mb-6">
            From golden deserts to vibrant cultural landmarks, we bring you the authentic experiences that make Egypt truly unforgettable.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { Icon: FaFacebookF, href: "https://www.facebook.com/share/1GSg2bFn1Z/" },
              { Icon: FaYoutube, href: "https://youtube.com/@sirisandtours?si=sGpI_SpxQ8JeD2Rq" },
              { Icon: FaTiktok, href: "https://www.tiktok.com/@siri.sand.tours?_r=1&_t=ZS-93QFhoDBpmm" },
              { Icon: FaWhatsapp, href: "https://wa.me/234XXXXXXXXXX" },
              { Icon: FaInstagram, href: "https://www.instagram.com/sirisandtours?igsh=emltNHVlejE4ZnBl" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
                  bg-[#EEF7FB] text-[#0A7BBE]
                  hover:bg-[#0A7BBE] hover:text-white transition"
              >
                <item.Icon size={16} />
              </a>
            ))}
          </div>
        </div> {/* <-- THIS WAS MISSING */}

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Quick Links
          </h3>
          <ul className="space-y-4 text-gray-600">
            {[
              { name: "Home", href: "/" },
              { name: "Our Trips", href: "/ourtrip" },
              { name: "Blog", href: "/blogs" },
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
              +201288062555
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
