'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useState, useRef } from 'react';

export default function PopularDestinationsSlider() {
  const tours = [
    { title: '6 Day Egypt Desert & Oasis Tour', days: '6 Days', image: '/images/tours/1.jpg', height: 'h-52' },
    { title: 'Explore Egypt From the Pyramids to the White Desert', days: '8 Days', image: '/images/tours/2.webp', height: 'h-56' },
    { title: 'Egyptian Treasures Tour Pyramids, Temples & the Nile', days: '8 Days', image: '/images/tours/3.jpg', height: 'h-60' },
    { title: 'Luxury Siwa Oasis & White Desert Adventure', days: '7 Days', image: '/images/tours/4.jpg', height: 'h-52' },
    { title: 'Cairo & Alexandria Highlights Tour', days: '5 Days', image: '/images/tours/5.jpg', height: 'h-56' },
    { title: 'Classic Nile Cruise Experience', days: '7 Days', image: '/images/tours/6.jpg', height: 'h-60' },
    { title: 'Red Sea & Desert Safari Tour', days: '6 Days', image: '/images/tours/7.jpg', height: 'h-52' },
    { title: 'Ancient Egypt Discovery Tour', days: '9 Days', image: '/images/tours/8.jpg', height: 'h-56' },
    { title: 'Egypt Cultural Heritage Tour', days: '10 Days', image: '/images/tours/9.jpg', height: 'h-60' },
    { title: 'White Desert Camping Adventure', days: '4 Days', image: '/images/tours/10.jpeg', height: 'h-52' },
    { title: 'Grand Egypt Experience', days: '12 Days', image: '/images/tours/11.jpg', height: 'h-56' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="px-6 lg:px-20 py-10 relative">
      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-2xl font-[cursive] text-[#0A7BBE]">Top Destinations</p>
        <h2 className="mt-2 text-5xl font-bold text-[#0A7BBE]">Popular Destinations</h2>
      </div>

      {/* SWIPER CAROUSEL */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="popular-destinations-slider mt-5"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">
              {/* IMAGE */}
              <div className={`relative w-full ${tour.height} overflow-hidden`}>
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
                <h3 className="font-semibold text-lg text-[#0A3D40] leading-snug">{tour.title}</h3>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="text-gray-500 flex items-center gap-2">⏱ {tour.days}</span>
                  <button className="min-h-[48px] px-6 rounded-full border border-[#0A7BBE] text-[#0A7BBE] font-medium hover:bg-[#0A7BBE] hover:text-white transition-colors flex items-center">
                    Book Now →
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MANUAL DOTS */}
      <div className="mt-10 flex justify-center gap-3">
        {tours.map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current?.slideToLoop(idx)} // slideToLoop ensures loop works correctly
            className={`h-3 w-3 -mt-2 rounded-full transition ${
              idx === currentIndex ? 'bg-[#d6b36b]' : 'border border-[#2a4b4b]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
