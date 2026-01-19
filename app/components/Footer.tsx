'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A7BBE] text-white mt-0">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* LOGO & ABOUT */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <div className="relative w-32 h-25 -mb-6">
              <Image
                src="/logo.png"
                alt="Sirisand Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p className="text-sm leading-relaxed">
            Sirisand Tour crafts unforgettable journeys with luxury, culture, and adventure at the heart of every experience.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-cyan-200">Home</Link>
            </li>
            <li>
              <Link href="/AboutUs" className="hover:text-cyan-200">About</Link>
            </li>
            <li>
              <Link href="/tours" className="hover:text-cyan-200">Tours</Link>
            </li>
            <li>
              <Link href="/destination" className="hover:text-cyan-200">Destinations</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-200">Contact</Link>
            </li>
          </ul>
        </div>

        {/* TOP DESTINATIONS */}
        <div>
          <h3 className="font-semibold mb-4 tracking-wide">Top Destinations</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/tours/cairo" className="hover:text-cyan-200">Cairo</Link>
            </li>
            <li>
              <Link href="/tours/luxor" className="hover:text-cyan-200">Luxor</Link>
            </li>
            <li>
              <Link href="/tours/hurghada" className="hover:text-cyan-200">Hurghada</Link>
            </li>
            <li>
              <Link href="/tours/marsa-alam" className="hover:text-cyan-200">Marsa Alam</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT & SOCIAL */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold mb-4 tracking-wide">Contact Us</h3>
          <p className="text-sm">info@sirisandtour.com</p>
          <p className="text-sm">+234 800 123 4567</p>
          <div className="flex gap-4 mt-2">
            <Link href="#"><Instagram className="w-5 h-5 hover:text-cyan-200"/></Link>
            <Link href="#"><Twitter className="w-5 h-5 hover:text-cyan-200"/></Link>
            <Link href="#"><Facebook className="w-5 h-5 hover:text-cyan-200"/></Link>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} Sirisand Tour. All rights reserved.
      </div>
    </footer>
  )
}
