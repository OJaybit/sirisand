'use client';

import { use } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { tours, Tour } from '../../data/tours';
import { useState } from 'react';

const tabs = [
  { id: 'overview', label: 'Trip Overview' },
  { id: 'itinerary', label: 'Itinerary Details' },
  { id: 'included', label: "What's Included" },
  { id: 'excluded', label: "What's Not Included" },
  { id: 'reviews', label: 'Traveler Reviews' },
];

export default function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const tour: Tour | undefined = tours.find(t => t.slug === slug);

  const [activeTab, setActiveTab] = useState('overview');

  if (!tour) {
    return <div className="p-20 text-center text-2xl">Tour Not Found</div>;
  }

  return (
    <section className="w-full  -ml-2 px-4 md:px-12 py-14 mt-22">

       {/* ===== TITLE SECTION ===== */}
      <div className="mb-8 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          {tour.title}
        </h1>
        <p className="text-gray-600 mt-2">
          {tour.description}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 items-start">

        {/* VIDEO LEFT */}
        <div className="overflow-hidden rounded-[30px] h-[340px] w-[175px] lg:w-195
       md:h-[360px] lg:h-[520px]">
          <motion.video
            src={tour.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* IMAGES RIGHT */}
        <div className="flex flex-col  w-[180px] lg:w-100 pl-1 lg:ml-52 gap-2">
          {tour.gallery.slice(0, 2).map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[30px] relative h-[165px] md:h-[180px] lg:h-[250px]"
            >
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* TABS */}
      <div className="mt-10">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full md:w-auto px-6 py-3 rounded-t-3xl h-15 border transition-all text-black
                ${
                  activeTab === tab.id
                    ? 'bg-[#0a7bbe] text-white'
                    : 'bg-gray-100 hover:bg-[#075E94] hover:text-white'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl mx-auto mt-8 bg-white text-black rounded-3xl p-6 shadow"
        >
          {activeTab === 'overview' && <p>{tour.overview}</p>}

          {activeTab === 'itinerary' && (
            <ul className="list-disc ml-5 space-y-2">
              {tour.itinerary.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {activeTab === 'included' && (
            <ul className="list-disc ml-5 space-y-2">
              {tour.included.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {activeTab === 'excluded' && (
            <ul className="list-disc ml-5 space-y-2">
              {tour.excluded.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-3">
              {tour.reviews.map((rev, i) => (
                <p key={i} className="italic">
                  “{rev}”
                </p>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ACTION BUTTONS */}
      <div className="mt-10 flex flex-col gap-4 items-start">
        <button className="bg-[#0a7bbe] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#075E94] transition">
          Book Now
        </button>

        <a
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          className="bg-green-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-green-600 transition text-center"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
