'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useState, useRef } from 'react';
import { pacifico } from '@/app/fonts'


export default function PopularDestinationsSlider() {
  const tours = [
    { title: '6 Day Egypt Desert & Oasis Tour', image: '/images/tours/1.jpg' },
    { title: 'Explore Egypt From the Pyramids to the White Desert', image: '/images/tours/2.webp' },
    { title: 'Egyptian Treasures Tour Pyramids, Temples & the Nile', image: '/images/tours/3.jpg' },
    { title: 'Luxury Siwa Oasis & White Desert Adventure', image: '/images/tours/4.jpg' },
    { title: 'Cairo & Alexandria Highlights Tour', image: '/images/tours/5.jpg' },
    { title: 'Classic Nile Cruise Experience', image: '/images/tours/6.jpg' },
    { title: 'Red Sea & Desert Safari Tour', image: '/images/tours/7.jpg' },
    { title: 'Ancient Egypt Discovery Tour', image: '/images/tours/8.jpg' },
    { title: 'Egypt Cultural Heritage Tour', image: '/images/tours/9.jpg' },
    { title: 'White Desert Camping Adventure', image: '/images/tours/10.jpeg' },
    { title: 'Grand Egypt Experience', image: '/images/tours/11.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative px-6 lg:px-20 py-5 -mt-30 bg-[#faf6ef]">

      {/* ================= ZIGZAG BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,15 L8,5 L16,15 L24,5 L32,15 L40,5 L48,15 L56,5 L64,15 L72,5 L80,15 L88,5 L96,15 L100,10 L100,100 L0,100 Z"
            fill="#faf6ef"
          />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-25">
        <p className={`${pacifico.className} mb-2  text-sm sm:text-lg md:text-xl lg:text-2xl -mt-5 text-[#0A7BBE]`}>
          Travel Stories & Insights
        </p>

        {/* ====== On mobile, stack vertically ====== */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A7BBE]">
            Explore More with Our Articles
          </h2>

          {/* Contact button */}
          <button
            className="
              relative overflow-hidden w-fit px-4 py-2 sm:px-8 sm:py-4 rounded-full
              border border-[#E6B56C] bg-[#E6B56C]
              text-xs sm:text-base font-semibold
              group
            "
          >
            <span
              className="
                absolute inset-0 bg-[#0A7BBE]
                translate-x-[100%]
                group-hover:translate-x-0
                transition-transform duration-500 ease-out
              "
            />
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              See More Article
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* ================= SWIPER CAROUSEL ================= */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="popular-destinations-slider -mt-10"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">

              {/* IMAGE */}
              <div className="relative w-full h-80 overflow-hidden">
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
                <h3 className="font-semibold text-sm sm:text-lg text-gray-600 leading-snug">
                  {tour.title}
                </h3>

                <div className="mt-auto pt-6 flex items-center justify-between">
                  {/* EMPTY SPACE */}
                  <span className="text-gray-600 flex items-center gap-2 invisible">
                    ⏱
                  </span>
                </div>
              </div>

              {/* Book button fully moved to the left outside card */}
              <div className="absolute left-4 bottom-6">
                <button className="min-h-[44px] px-5 sm:px-6 rounded-full border border-[#0A7BBE] text-[#0A7BBE] font-medium hover:bg-[#0A7BBE] hover:text-white transition-colors flex items-center text-sm sm:text-base">
                  Book Now →
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
