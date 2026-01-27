'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { pacifico } from '@/app/fonts';
import { tours } from '../data/tours';

export default function PopularDestinationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start end', 'end start'],
  });
  const containerWidth = useTransform(scrollYProgress, [0, 1], ['90%', '110vw']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section className="px-6 lg:px-20 py-2 -mt-40 relative">
    
  <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        breakpoints={{ 640: { slidesPerView: 1 }, 1024: { slidesPerView: 3 } }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="Our-Tours mt-10"
      >
        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">
              {/* Image card */}
              <div className="relative w-full h-100 overflow-hidden">
                <Image
                  src={tour.heroImage}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <Link href={`/tours/${tour.slug}`}>
                  <h3 className="font-semibold text-lg text-gray-600 leading-snug hover:text-[#0A7BBE] transition-colors cursor-pointer">
                    {tour.title}
                  </h3>
                </Link>

                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">⏱ {tour.days}</span>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="min-h-[48px] px-6 rounded-full border border-[#0A7BBE] text-[#0A7BBE] font-medium hover:bg-[#0A7BBE] hover:text-white transition-colors flex items-center"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots */}
      <div className="mt-10 flex justify-center gap-3">
        {tours.map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`h-3 w-3 -mt-2 rounded-full transition ${idx === currentIndex ? 'bg-[#0a7bbe]' : 'border border-[#2a4b4b]'}`}
          />
        ))}
      </div>

      {/* Mobile video */}
      <motion.div
        ref={videoRef}
        style={{ width: containerWidth, x: "-50%" }}
        className="block md:hidden mt-16 left-1/2 relative h-[750px] rounded-[32px] overflow-hidden border border-gray-200 shadow-lg"
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
