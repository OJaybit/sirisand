'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const categories = [
  { title: 'Desert Safari', listings: 3, image: '/images/categories/desert-safari.webp', link: '/tours/desert' },
  { title: 'Historical', listings: 4, image: '/images/categories/historical.webp', link: '/tours/historical' },
  { title: 'Holiday', listings: 2, image: '/images/categories/holiday.webp', link: '/tours/holiday' },
];

export default function TourCategories() {
  const [active, setActive] = useState<number | null>(0); // first one open by default

  return (
    <section className="bg-white py-10 md:py-16">
      {/* HEADER */}
      <div className="mb-10 text-center">
        <p className="text-2xl font-[cursive] text-[#0A7BEE]">Wonderful Places For You</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0A7BEE]">Tour Categories</h2>
      </div>

      {/* MOBILE VERTICAL ACCORDION */}
      <div className="flex flex-col gap-6 md:hidden px-6">
        {categories.map((cat, index) => {
          const isActive = active === index;
          const collapsedHeight = 150; // height when collapsed
          const expandedHeight = 300; // height when expanded

          return (
            <motion.div
              key={index}
              layout
              onClick={() => setActive(isActive ? null : index)}
              className="relative w-full cursor-pointer rounded-2xl overflow-hidden"
            >
              <motion.div
                style={{ position: 'relative', overflow: 'hidden' }}
                initial={{ height: collapsedHeight }}
                animate={{ height: isActive ? expandedHeight : collapsedHeight }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover w-full"
                />
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
                  <h3 className="text-xl font-semibold">{cat.title}</h3>
                  {isActive && (
                    <>
                      <p className="mt-1 text-sm opacity-90">{cat.listings} Listings</p>
                      <Link
                        href={cat.link}
                        className="mt-3 inline-block rounded-full border border-white px-6 py-2 text-sm font-semibold hover:bg-[#0A7BBE] hover:border-[#0A7BBE] hover:text-white transition"
                      >
                        View All
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* DESKTOP HORIZONTAL ACCORDION */}
      <div className="hidden md:flex mx-auto max-w-[1300px] gap-6 px-6">
        {categories.map((cat, index) => {
          const isActive = active === index;
          return (
            <motion.div
              key={index}
              onClick={() => setActive(isActive ? null : index)}
              animate={{ width: isActive ? '55%' : '22%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="relative h-[520px] cursor-pointer overflow-hidden rounded-[40px] flex-shrink-0"
            >
              <Image src={cat.image} alt={cat.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-end p-8 text-white">
                {isActive ? (
                  <div>
                    <h3 className="text-4xl font-semibold">{cat.title}</h3>
                    <p className="mt-1 text-sm opacity-90">{cat.listings} Listing</p>
                    <Link
                      href={cat.link}
                      className="mt-6 inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-sm font-semibold hover:border-[#0A7BBE] hover:bg-[#0A7BBE] transition"
                    >
                      View All
                    </Link>
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="translate-y-10 rotate-[-90deg] text-center">
                      <h3 className="text-2xl font-semibold">{cat.title}</h3>
                      <p className="mt-1 text-xs opacity-80">{cat.listings} Listing</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
