"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { pacifico } from "@/app/fonts";
import { tours } from "../data/tours";

/* ---------------- MOTION VARIANTS ---------------- */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PopularDestinationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative px-6 lg:px-20 py-5 -mt-30 bg-[#faf6ef]">

      {/* HEADER */}
      <motion.div
        className="relative z-10 -mt-10 mx-auto max-w-6xl px-4 py-25"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.p
          variants={item}
          className={`${pacifico.className} mb-2 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#0A7BBE]`}
        >
          Travel Stories & Insights
        </motion.p>

<motion.div
  variants={item}
  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
>
  <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A7BBE]">
    Explore More with Our Articles
  </h2>

  <Link href="/blogs">
    <button className="relative overflow-hidden w-fit px-4 py-2 sm:px-8 sm:py-4 rounded-full border border-[#0A7BBE] bg-[#0A7BBE] text-xs sm:text-base font-semibold group">
      <span className="absolute inset-0 bg-[#075E94] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      <span className="relative z-10 flex items-center gap-2">
        See More Article →
      </span>
    </button>
  </Link>
</motion.div>

      </motion.div>

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{ 640: { slidesPerView: 1 }, 1024: { slidesPerView: 3 } }}
        className="-mt-15"
      >
        {tours.slice(0,8).map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={tour.heroImage}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <Link href={`/tours/${tour.slug}`}>
                  <h3 className="font-semibold text-lg text-gray-600 hover:text-[#0A7BBE] transition">
                    {tour.title}
                  </h3>
                </Link>

                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="text-gray-600">⏱ {tour.days}</span>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="px-6 py-2 rounded-full border border-[#0A7BBE] text-[#0A7BBE] hover:bg-[#0A7BBE] hover:text-white transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM DOTS */}
      <div className="mt-8 flex justify-center gap-3">
        {tours.map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`h-3 w-3 rounded-full transition ${
              idx === currentIndex ? 'bg-[#0a7bbe]' : 'border border-[#2a4b4b]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
