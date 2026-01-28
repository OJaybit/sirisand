"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tours, Tour } from "../../data/tours";
import { ArrowRightIcon } from "lucide-react";
import ReviewTestimonial from "../../components/ReviewTestimonial";
import NewsletterSection from "../../components/Newsletter";

const tabs = [
  { id: "overview", label: "Trip Overview" },
  { id: "itinerary", label: "Itinerary Details" },
  { id: "included", label: "What's Included" },
  { id: "excluded", label: "What's Not Included" },
  { id: "reviews", label: "Traveler Reviews" },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const tour: Tour | undefined = tours.find((t) => t.slug === slug);

  const [activeTab, setActiveTab] = useState<string | null>("overview");
  const isMobile = useMediaQuery("(max-width: 768px)");

  // ✅ FORCE FIRST TAB TO OPEN ON LOAD
  useEffect(() => {
    setActiveTab("overview");
  }, []);

  if (!tour) {
    return <div className="p-20 text-center text-2xl">Tour Not Found</div>;
  }

  const handleTabClick = (id: string) => {
    if (activeTab === id) {
      setActiveTab(null);
    } else {
      setActiveTab(id);
    }
  };

  return (
    <section className="w-full -ml-2 px-4 md:px-12 py-14 mt-35">

      {/* ===== TITLE SECTION ===== */}
     {/* ===== TITLE SECTION ===== */}
<div className="w-full mb-10 flex justify-center -mt-10 items-center">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A7BBE] break-words text-center">
    {tour.title}
  </h1>
</div>



      <div className="overflow-x-hidden">
        <div className="grid grid-cols-2 gap-5 w-screen items-start">

          {/* VIDEO LEFT */}
          <div
            className="overflow-hidden rounded-[30px] h-[340px] w-full lg:w-195
            md:h-[360px] lg:h-[520px]"
          >
            <motion.video
              src={tour.heroVideo || undefined}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGES RIGHT */}
          <div className="flex flex-col w-full lg:w-100 -ml-2  lg:ml-35 md:w-80 gap-2 pr-8 lg:pr-10">
            {tour.gallery.slice(0, 2).map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[30px] relative w-full h-[165px] md:h-[180px] lg:h-[250px]"
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="mt-10">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:flex-wrap">
          {tabs.map((tab) => (
            <div key={tab.id} className="w-full md:w-auto">

              <button
                onClick={() => handleTabClick(tab.id)}
                className={`w-full md:w-auto px-6 py-3 rounded-t-3xl h-15 transition-all text-black
                  ${
                    activeTab === tab.id
                      ? "bg-[#0a7bbe] text-white"
                      : "bg-gray-100 hover:bg-[#075E94] hover:text-white"
                  }`}
              >
                {tab.label}
              </button>

              {/* MOBILE CONTENT */}
              {isMobile && activeTab === tab.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white text-black rounded-b-3xl p-6 shadow"
                >
                  {tab.id === "overview" && <p>{tour.overview}</p>}

                  {tab.id === "itinerary" && (
                    <ul className="list-disc ml-5 space-y-2">
                      {tour.itinerary.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {tab.id === "included" && (
                    <ul className="list-disc ml-5 space-y-2">
                      {tour.included.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {tab.id === "excluded" && (
                    <ul className="list-disc ml-5 space-y-2">
                      {tour.excluded.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {tab.id === "reviews" && (
                    <ReviewTestimonial testimonials={tour.testimonials} />
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP TAB CONTENT */}
      {!isMobile && activeTab && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mx-auto mt-8 bg-white text-black rounded-3xl p-6 shadow"
          >
            {activeTab === "overview" && <p>{tour.overview}</p>}
            {activeTab === "itinerary" && (
              <ul className="list-disc ml-5 space-y-2">
                {tour.itinerary.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {activeTab === "included" && (
              <ul className="list-disc ml-5 space-y-2">
                {tour.included.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {activeTab === "excluded" && (
              <ul className="list-disc ml-5 space-y-2">
                {tour.excluded.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {activeTab === "reviews" && (
              <ReviewTestimonial testimonials={tour.testimonials} />
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* ACTION BUTTONS */}
      <div className="mt-10 flex flex-col gap-4 items-center">
        <button className="flex items-center justify-center gap-3 bg-[#0a7bbe] text-white px-14 py-5 rounded-full font-semibold hover:bg-[#075E94] transition text-lg">
          Book Now <ArrowRightIcon className="w-5 h-5" />
        </button>

        <a
          href="https://wa.me/+201288062555"
          target="_blank"
          className="flex items-center justify-center gap-3 bg-green-500 text-white px-14 py-5 rounded-full font-semibold hover:bg-green-600 transition text-lg"
        >
          WhatsApp <ArrowRightIcon className="w-5 h-5" />
        </a>
      </div>

      <NewsletterSection />
    </section>
  );
}
