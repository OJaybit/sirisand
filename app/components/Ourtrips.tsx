'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { pacifico } from '@/app/fonts';

export default function PopularDestinationsSlider() {
  const tours = [
    { title: '6 Day Egypt Desert & Oasis Tour', days: '6 Days', image: '/images/tours/1.jpg' },
    { title: 'Explore Egypt From the Pyramids to the White Desert', days: '8 Days', image: '/images/tours/2.webp' },
    { title: 'Egyptian Treasures Tour Pyramids, Temples & the Nile', days: '8 Days', image: '/images/tours/3.jpg' },
    { title: 'Luxury Siwa Oasis & White Desert Adventure', days: '7 Days', image: '/images/tours/4.jpg' },
    { title: 'Cairo & Alexandria Highlights Tour', days: '5 Days', image: '/images/tours/5.jpg' },
    { title: 'Classic Nile Cruise Experience', days: '7 Days', image: '/images/tours/6.jpg' },
    { title: 'Red Sea & Desert Safari Tour', days: '6 Days', image: '/images/tours/7.jpg' },
    { title: 'Ancient Egypt Discovery Tour', days: '9 Days', image: '/images/tours/8.jpg' },
    { title: 'Egypt Cultural Heritage Tour', days: '10 Days', image: '/images/tours/9.jpg' },
    { title: 'White Desert Camping Adventure', days: '4 Days', image: '/images/tours/10.jpeg' },
    { title: 'Grand Egypt Experience', days: '12 Days', image: '/images/tours/11.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  /* ================= SCROLL ZOOM VIDEO ================= */
  const videoRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start end', 'end start'],
  });

  const containerWidth = useTransform(scrollYProgress, [0, 1], ['90%', '110vw']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section className="px-6 lg:px-20 py-2 -mt-10 relative">

      {/* ===== HEADER TEXT ===== */}
      <div className="text-center mb-8">
        <h2 className={`${pacifico.className} text-4xl text-[#0A7BBE]`}>
          Our Tours
        </h2>
        <p className="text-6xl text-[#0A7BBE] mt-2">
  Discover Our Best Tours
</p>

      </div>

      {/* ================= SWIPER ================= */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="popular-destinations-slider mt-5 "
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">

              {/* IMAGE */}
              <div className="relative w-full h-100 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg text-gray-600 leading-snug">
                  {tour.title}
                </h3>

                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    ⏱ {tour.days}
                  </span>

                  <button className="min-h-[48px] px-6 rounded-full border border-[#0A7BBE] text-[#0A7BBE] font-medium hover:bg-[#0A7BBE] hover:text-white transition-colors flex items-center">
                    Book Now →
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ================= DOTS ================= */}
      <div className="mt-10 flex justify-center gap-3">
        {tours.map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`h-3 w-3 -mt-2 rounded-full transition ${
              idx === currentIndex
                ? 'bg-[#0a7bbe]'
                : 'border border-[#2a4b4b]'
            }`}
          />
        ))}
      </div>

      {/* ================= MOBILE VIDEO – ZOOM ON SCROLL ================= */}
      <motion.div
        ref={videoRef}
        style={{
          width: containerWidth,
          x: "-50%",
        }}
        className="
          block md:hidden
          mt-16
          left-1/2
          relative
          h-[750px]
          rounded-[32px]
          overflow-hidden
          border border-gray-200
          shadow-lg
        "
      >
        <motion.video
          src="/images/tours/video2.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ scale: videoScale }}
          className="w-full h-full object-cover"
        />
      </motion.div>

    </section>
  );
}
