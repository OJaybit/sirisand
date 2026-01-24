'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { pacifico } from '@/app/fonts';

type Testimonial = {
  id: number;
  name: string;
  date: string;
  title: string;
  text: string;
};

const testimonials: Testimonial[] = [
  { id: 1, name: 'Martina B', date: '2025-06-05', title: 'Unforgettable trip', text: 'Unforgettable trip in the company of Mohamed. Everything was organized to perfection.' },
  { id: 2, name: 'Raziye A', date: '2025-05-07', title: 'White Desert & Siwa', text: 'Camping in the White Desert was a unique and unforgettable experience.' },
  { id: 3, name: 'Noemi A', date: '2025-04-30', title: 'Beautiful Experience', text: 'A once-in-a-lifetime night in the desert. Truly magical.' },
  { id: 4, name: 'Lucia F', date: '2025-04-23', title: 'Desert Adventure', text: "Wonderful experience with excellent organization." },
  { id: 5, name: 'Mark T', date: '2025-04-10', title: 'Top Service', text: 'Professional guides and amazing landscapes.' },
  { id: 6, name: 'Sandra P', date: '2025-03-18', title: 'Highly Recommended', text: 'Everything was perfect from start to finish.' },
  { id: 7, name: 'Ali R', date: '2025-03-02', title: 'Memorable Trip', text: 'Very safe, very well planned.' },
  { id: 8, name: 'Helen K', date: '2025-02-21', title: 'Loved It', text: 'Would absolutely do this again.' },
  { id: 9, name: 'Jonas M', date: '2025-02-01', title: 'Amazing Views', text: 'The desert views were breathtaking.' },
  { id: 10, name: 'Emily S', date: '2025-01-15', title: 'Perfect Experience', text: 'Highly professional team.' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [openId, setOpenId] = useState<number | null>(null);

  const maxIndexLg = testimonials.length - 4; // 4 visible on desktop

  const nextLg = () => setIndex(prev => Math.min(prev + 1, maxIndexLg));
  const prevLg = () => setIndex(prev => Math.max(prev - 1, 0));

  // AUTO SLIDE EFFECT
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        if (window.innerWidth >= 1024) {
          return prev >= maxIndexLg ? 0 : prev + 1;
        }
        return prev >= testimonials.length - 1 ? 0 : prev + 1;
      });
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [maxIndexLg]);

  const Card = (item: Testimonial) => {
    const isOpen = openId === item.id;
    return (
      <div className="border rounded-2xl p-6 bg-white shadow-sm">
        <h4 className="font-bold text-black">{item.name}</h4>
        <p className="text-sm text-black mb-2">{item.date}</p>

        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="w-4 h-4 rounded-full border-2 border-[#00AA6C] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#00AA6C]" />
            </span>
          ))}
        </div>

        <h5 className="font-semibold mb-2 text-black">{item.title}</h5>
        <p className={`text-sm text-black ${isOpen ? '' : 'line-clamp-3'}`}>{item.text}</p>

        <button onClick={() => setOpenId(isOpen ? null : item.id)} className="mt-4 flex items-center gap-1 text-sm text-black">
          {isOpen ? <>Hide <ChevronUp size={16} /></> : <>Read more <ChevronDown size={16} /></>}
        </button>
      </div>
    );
  };

  // Mobile tracker settings
  const trackerWidth = 120; // px total length of track
  const indicatorWidth = 24; // px width of moving indicator
  const maxTranslate = trackerWidth - indicatorWidth; // max movement

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className={`text-[#0A7BBE] text-3xl mb-2 ${pacifico.className}`}>Testimonials</p>
          <h2 className="text-4xl font-bold text-[#0A7BBE]  mb-6">What Clients Say About us</h2>
          <p className="font-bold text-lg text-black">EXCELLENT</p>

          <div className="flex justify-center gap-2 my-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="w-5 h-5 rounded-full border-2 border-[#00AA6C] flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-[#00AA6C]" />
              </span>
            ))}
          </div>

          <p className="text-black">Based on <span className="font-semibold">43 reviews</span></p>

          <div className="flex justify-center mt-3">
            <Image
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="Tripadvisor"
              width={150}
              height={30}
              unoptimized
            />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-4 gap-6">
            {testimonials.slice(index, index + 4).map((t) => <div key={t.id}>{Card(t)}</div>)}
          </div>

          {index > 0 && (
            <button onClick={prevLg} className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow text-black"><ChevronLeft /></button>
          )}
          {index < maxIndexLg && (
            <button onClick={nextLg} className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow text-black"><ChevronRight /></button>
          )}
        </div>

        {/* MOBILE */}
        <div className="lg:hidden overflow-hidden relative">
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(event, info) => {
              const velocity = info.velocity.x;
              const offset = info.offset.x;

              if (offset < -50 || velocity < -200) {
                setIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
              } else if (offset > 50 || velocity > 200) {
                setIndex((prev) => Math.max(prev - 1, 0));
              }
            }}
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="flex-shrink-0 w-full px-2">
                {Card(t)}
              </div>
            ))}
          </motion.div>

          {/* MOBILE TRACKER */}
          <div className="mt-4 relative h-1 w-full max-w-[120px] mx-auto bg-gray-200 rounded-full">
            <motion.div
              className="absolute top-0 left-0 h-1 w-6 bg-black rounded-full"
              animate={{ x: (index / (testimonials.length - 1)) * maxTranslate }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
