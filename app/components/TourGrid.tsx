'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

/* ================= ANIMATION SYSTEM (THANK YOU STYLE) ================= */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const stepUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ================= DATA ================= */

const tours = [
  {
    id: 'hurghada',
    city: 'Hurghada',
    tag: 'Red Sea Paradise',
    image: '/images/tours/hurghada.webp',
    rating: '4.9',
    details: 'Tawila Island, Orange Bay, Submarine & Safari',
    link: '#',
  },
  {
    id: 'fayoum',
    city: 'Fayoum',
    tag: 'Desert Oasis',
    image: '/images/tours/fayoum.webp',
    rating: '4.8',
    details: 'Tunis Village, Wadi El Rayan & Sandboarding',
    link: '#',
  },
  {
    id: 'marsa-alam',
    city: 'Marsa Alam',
    tag: 'Diving Haven',
    image: '/images/tours/marsa-alam.webp',
    rating: '5.0',
    details: 'Royal Sea Scope, Satayah Dolphin House & Safari',
    link: '#',
  },
  {
    id: 'cairo',
    city: 'Cairo',
    tag: 'Ancient History',
    image: '/images/tours/cairo.webp',
    rating: '5.0',
    details: 'Giza Pyramids, GEM Museum & Historic Mosques',
    link: '#',
  },
  {
    id: 'sharm',
    city: 'Sharm El-Sheikh',
    tag: 'Luxury Resort',
    image: '/images/tours/sharm.webp',
    rating: '4.9',
    details: 'Ras Mohamed, Tiran Island & Pirate Boat',
    link: '#',
  },
  {
    id: 'luxor',
    city: 'Luxor',
    tag: 'Open Air Museum',
    image: '/images/tours/luxor.webp',
    rating: '5.0',
    details: 'Valley of the Kings, Karnak & Hot Air Balloon',
    link: '#',
  },
  {
    id: 'siwa',
    city: 'Siwa',
    tag: 'Serene Escape',
    image: '/images/tours/siwa.webp',
    rating: '4.7',
    details: 'Salt Lakes, Shali Fortress & Safari',
    link: '#',
  },
  {
    id: 'aswan',
    city: 'Aswan',
    tag: 'Nubian Beauty',
    image: '/images/tours/aswan.webp',
    rating: '4.8',
    details: 'Philae Temple, High Dam & Felucca Ride',
    link: '#',
  },
];

/* ================= COMPONENT ================= */

export default function TourGrid() {
  return (
    <section
      id="tours"
      className="relative overflow-hidden py-12 md:py-20 bg-white -mt-15"
    >
      <div className="container mx-auto px-6 md:px-12">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <motion.span
            variants={stepUp}
            className="text-[#0A7BBE] font-bold tracking-widest text-sm uppercase block mb-3"
          >
            Explore Our Tours
          </motion.span>

          <motion.h2
            variants={stepUp}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5"
          >
            Choose Your <br />
            <span className="text-[#0A7BBE]">Perfect Adventure</span>
          </motion.h2>

          <motion.p
            variants={stepUp}
            className="text-slate-600 text-base md:text-lg"
          >
            From the deep blue of the Red Sea to the golden sands of the desert.
          </motion.p>
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              variants={stepUp}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.city}
                  fill
                  priority={tour.id === 'hurghada'}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-slate-900">
                    {tour.rating}
                  </span>
                </div>

                {/* Tag */}
                <div className="absolute top-3 left-3 bg-[#0A7BBE] px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold">
                    {tour.tag}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0A7BBE] transition-colors">
                  {tour.city}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                  {tour.details}
                </p>

                {/* ACTIONS */}
                <div className="flex gap-2 mt-auto">
                  <Link
                    href={tour.link}
                    className="flex-1 bg-[#0A7BBE] hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center transition"
                  >
                    Details
                  </Link>

                  <Link
                    href={tour.link}
                    className="flex-1 border-2 border-[#0A7BBE] text-[#0A7BBE] hover:bg-slate-50 text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1 transition group/btn"
                  >
                    Book
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
