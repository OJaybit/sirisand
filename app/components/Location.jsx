'use client';

import { motion } from 'framer-motion';

export default function Location() {
  return (
    <section
      className="w-full min-h-[50vh] sm:min-h-[80vh] lg:min-h-[80vh]
 flex items-center justify-center overflow-hidden relative text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,123,190,0.9), rgba(10,123,190,0.9)), url('/background-image.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bg-transparent -top-9 -left-17 w-16 h-16 sm:w-32 sm:h-32
-bottom-10 sm:-bottom-20
 lg:w-48 lg:h-48 pointer-events-none opacity-10">
        <img
          src="/starfish.png"
          alt="Top left Decoration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl px-2 lg:px-20 py-10 sm:py-14 lg:py-20 text-center lg:text-center lg:-mt-15 lg:mt-6 z-10"
      >
        <h2 className="text-[30px] sm:text-[38px] lg:text-[56px] font-bold mt-3 lg:mb-2 -mt-15 sm:mb-5
mb-3 sm:mb-7
">
          WHERE WE ARE
        </h2>
<p className="text-gray-100 leading-[1.55] sm:leading-[1.65] lg:leading-[1.7] mb-4 sm:mb-6 mb-5 sm:mb-10 lg:mb-3">
  Based in the heart of Cairo, we bring the magic of Egypt to life across every major destination. Explore the bustling streets of the capital, the serene shores of the Red Sea, and the timeless temples of Luxor and Aswan.
</p>

<p className="text-gray-100 leading-[1.55] sm:leading-[1.65] lg:leading-[1.7] mb-4 sm:mb-6 mb-6 sm:mb-10">
  From luxurious comfort to eco-friendly adventures and family-friendly escapes, every journey is thoughtfully curated to deliver a refined, unforgettable experience for every traveler.
</p>


        <div className="absolute bg-transparent -bottom-20 -right-9 w-20 h-182 lg:w-60 lg:h-50 pointer-events-none opacity-15">
          <img
            src="/rebune.png"
            alt="Top left Decoration"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
