'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { useState, useRef } from 'react';
import { motion} from 'framer-motion';
import { pacifico } from '@/app/fonts';
import { tours } from '../data/tours';

/* -------------------- ANIMATION VARIANTS -------------------- */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/* -------------------- COMPONENT -------------------- */
export default function PopularDestinationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="px-6 lg:px-20 py-2 relative -mt-25 bg-[#faf6ef]">
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

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="Our-Tours -mt-15"
      >
        {tours.slice(0, 8).map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">
              {/* IMAGE */}
              <div className="relative w-full h-100 overflow-hidden">
                <Image
                  src={tour.heroImage}
                  alt={tour.cardTitle || 'Tour image'}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <Link href={`/tours/${tour.slug}`}>
                  <h3 className="font-semibold text-lg text-gray-600 leading-snug hover:text-[#0A7BBE] transition-colors cursor-pointer">
                    {tour.cardTitle}
                  </h3>
                </Link>

                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    ⏱ {tour.days}
                  </span>

                  <Link
                    href={`/tours/${tour.slug}`}
                    className="min-h-[48px] px-6 rounded-full border border-[#0A7BBE] text-[#0A7BBE] font-medium hover:bg-[#0A7BBE] hover:text-white transition-colors flex items-center"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DOTS */}
      <div className="mt-10 flex justify-center gap-3">
        {tours.slice(0, 8).map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`h-3 w-3 -mt-2 rounded-full transition ${
              idx === currentIndex ? 'bg-[#0a7bbe]' : 'border border-[#2a4b4b]'
            }`}
          />
        ))}
      </div>

     {/* ================= MOBILE VIDEO (FIXED – NO SCROLL ZOOM) ================= */}
<div
  className="
    block md:hidden
    mt-16
    mx-auto
    h-[750px]
    max-w-[90%]
    rounded-[32px]
    overflow-hidden
    border border-gray-200
    shadow-lg
  "
>
  <video
    src="/images/tours/video1.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />
</div>

    </section>
  );
}
