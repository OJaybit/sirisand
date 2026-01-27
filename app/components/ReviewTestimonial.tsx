"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image"; // Kept for your local usage
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

// --- Types & Mock Data ---
export type Testimonial = {
  id: number;
  name: string;
  date: string;
  title: string;
  text: string;
};

const MOCK_TESTIMONIALS: Testimonial[] = Array.from({ length: 11 }).map((_, i) => ({
  id: i,
  name: `Reviewer ${i + 1}`,
  date: "Oct 2023",
  title: "Amazing Experience!",
  text: "This was absolutely the best trip of my life. The guides were knowledgeable, the scenery was breathtaking, and everything was perfectly organized. I would highly recommend this to anyone looking for an adventure.",
}));

type ReviewTestimonialProps = {
  testimonials?: Testimonial[];
};

export default function ReviewTestimonial({ testimonials = MOCK_TESTIMONIALS }: ReviewTestimonialProps) {
  const [index, setIndex] = useState(0);
  const [openId, setOpenId] = useState<number | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(1); 

  // Detect screen size to set items per page (4 for LG, 1 for Mobile)
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 4 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Max index allows us to slide until the last item is visible at the very end
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
  
  // Ensure index is valid when resizing
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // ✅ AUTO SLIDE: Works for both Mobile (1 item) and Desktop (1 item shift)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        // If we reach the end, loop back to the start
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setIndex((prev) => Math.max(prev - 1, 0));

  const Card = (item: Testimonial) => {
    const isOpen = openId === item.id;

    return (
      <div className="border rounded-2xl p-6 bg-white shadow-sm h-full flex flex-col">
        <h4 className="font-bold text-black">{item.name}</h4>
        <p className="text-sm text-black mb-2">{item.date}</p>

        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full border-2 border-[#00AA6C] flex items-center justify-center"
            >
              <span className="w-2 h-2 rounded-full bg-[#00AA6C]" />
            </span>
          ))}
        </div>

        <h5 className="font-semibold mb-2 text-black">{item.title}</h5>
        <p className={`text-sm text-black ${isOpen ? "" : "line-clamp-3"}`}>
          {item.text}
        </p>

        <button
          onClick={() => setOpenId(isOpen ? null : item.id)}
          className="mt-4 mt-auto flex items-center gap-1 text-sm text-black pt-2"
        >
          {isOpen ? (
            <>
              Hide <ChevronUp size={16} />
            </>
          ) : (
            <>
              Read more <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A7BBE] mb-6">EXCELLENT</h2>
          <p className="text-black">
            Based on <span className="font-semibold">{testimonials.length} reviews</span>
          </p>
          <div className="flex justify-center mt-3">
            {/* Restored TripAdvisor Logo */}
            {/* Using standard img tag for compatibility with this preview. 
                You can switch back to <Image /> in your Next.js app. */}
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="Tripadvisor"
              width={150}
              height={30}
              // unoptimized 
            />
          </div>
        </div>

        {/* UNIFIED SLIDER LOGIC 
          We use one motion div that behaves differently based on screen size:
          - Mobile: slides 100% per index
          - Desktop: slides 25% per index (showing 4 items)
        */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            // If itemsPerPage is 4 (desktop), we slide 25% per index. 
            // If itemsPerPage is 1 (mobile), we slide 100% per index.
            animate={{ x: `-${index * (100 / itemsPerPage)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            
            // Drag support for mobile (and desktop if desired)
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(event, info) => {
              const offset = info.offset.x;
              if (offset < -50 && index < maxIndex) nextSlide();
              if (offset > 50 && index > 0) prevSlide();
            }}
          >
            {testimonials.map((t) => (
              <div 
                key={t.id} 
                // On mobile: w-full (1 item visible).
                // On desktop: w-1/4 (4 items visible).
                // px-3 creates the visual "gap" between cards inside the flex container.
                className="w-full lg:w-1/4 flex-shrink-0 px-3"
              >
                {Card(t)}
              </div>
            ))}
          </motion.div>

          {/* NAVIGATION BUTTONS (Visible on Desktop) */}
          <div className="hidden lg:block">
            <button
              onClick={prevSlide}
              disabled={index === 0}
              className={`absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-black transition-all z-10 ${
                  index === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 hover:scale-110"
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              disabled={index >= maxIndex}
               className={`absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-black transition-all z-10 ${
                  index >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 hover:scale-110"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* PROGRESS TRACKER (Visible on Mobile) */}
        <div className="lg:hidden mt-6">
            <div className="relative h-1 w-full max-w-[120px] mx-auto bg-gray-200 rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-1 w-6 bg-black rounded-full"
                animate={{
                  x: testimonials.length > 1 ? (index / maxIndex) * 96 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </div>
          </div>
      </div>
    </section>
  );
}