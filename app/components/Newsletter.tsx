'use client';

import { motion, type Variants } from 'framer-motion';

export default function NewsletterSection() {
  // ----------------- VARIANTS -----------------
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="bg-white py-20 px-6 lg:px-40">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        {/* TEXT */}
        <motion.div variants={item} className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A7BBE] leading-tight">
            Subscribe To Our <br /> Newsletter
          </h2>
        </motion.div>

        {/* INPUT + BUTTON */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row w-full lg:w-[500px] gap-4"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            className="flex-1 border border-gray-300 rounded-full px-8 py-4 text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
          />
          <button className="bg-[#0A7BBE] text-white rounded-full px-8 py-4 text-sm sm:text-base flex items-center justify-center hover:bg-[#095c8c] transition-colors duration-300">
            Subscribe Now <span className="ml-2">📧</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
