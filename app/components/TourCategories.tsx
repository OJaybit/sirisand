'use client';

import Image from 'next/image';
import Link from 'next/link';
import { pacifico } from '@/app/fonts';
import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';

const categories = [
  { title: 'Desert Safari', listings: 3, image: '/images/categories/desert-safari.webp', link: '/tours/desert' },
  { title: 'Historical', listings: 4, image: '/images/categories/historical.webp', link: '/tours/historical' },
  { title: 'Holiday', listings: 2, image: '/images/categories/holiday.webp', link: '/tours/holiday' },
];

/* ================= ANIMATION VARIANTS ================= */
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function TourCategories() {
  const [active, setActive] = useState<number | null>(0); // first one open by default

  return (
    <section className="bg-white py-10 md:py-16">
      {/* HEADER */}
      <motion.div
        className="mb-10 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.p
          variants={item}
          className={`${pacifico.className} text-2xl font-[cursive] text-[#0A7BBE]`}
        >
          Wonderful Places For You
        </motion.p>
        <motion.h2
          variants={item}
          className="mt-3 text-4xl md:text-5xl font-bold text-[#0A7BBE]"
        >
          Tour Categories
        </motion.h2>
      </motion.div>

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
                  <motion.h3
                    variants={item}
                    className="text-xl font-semibold"
                  >
                    {cat.title}
                  </motion.h3>
                  {isActive && (
                    <>
                      <motion.p
                        variants={item}
                        className="mt-1 text-sm opacity-90"
                      >
                        {cat.listings} Listings
                      </motion.p>
                      <motion.div variants={item}>
                        <Link
                          href={cat.link}
                          className="mt-3 inline-block rounded-full border border-white px-6 py-2 text-sm font-semibold hover:bg-[#0A7BBE] hover:border-[#0A7BBE] hover:text-white transition"
                        >
                          View All
                        </Link>
                      </motion.div>
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
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                  >
                    <motion.h3 variants={item} className="text-4xl font-semibold">{cat.title}</motion.h3>
                    <motion.p variants={item} className="mt-1 text-sm opacity-90">{cat.listings} Listing</motion.p>
                    <motion.div variants={item}>
                      <Link
                        href={cat.link}
                        className="mt-6 inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-sm font-semibold hover:border-[#0A7BBE] hover:bg-[#0A7BBE] transition"
                      >
                        View All
                      </Link>
                    </motion.div>
                  </motion.div>
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
