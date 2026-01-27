'use client';

import Image from "next/image";
import Link from "next/link";

const primaryColor = "#0A7BBE";

const blogPosts = [
  {
    id: 1,
    email: "tours@sirisandtour.com",
    date: "June 19, 2025",
    category: "Uncategorized",
    title: "Why You Should Experience a Personalised Safari Tour in Egypt",
    excerpt:
      "A personalised safari tour in Egypt is more than just a trip — it’s a journey into untouched landscapes, golden deserts, and ancient silence. Unlike standard tours, a private safari allows you to explore at your own pace, connect deeply with nature, and enjoy authentic Bedouin hospitality. From sunset drives across rolling dunes to stargazing under vast desert skies, every moment is crafted just for you.",
    image: "/images/blog/safari.jpg",
  },
  {
    id: 2,
    email: "tours@sirisandtour.com",
    date: "June 19, 2025",
    category: "Crystal Mountain",
    title: "Exploring the Magic of Siwa Oasis and White Desert Tour",
    excerpt:
      "The Siwa Oasis and White Desert tour offers a rare blend of peace and adventure. Hidden deep in Egypt’s Western Desert, Siwa welcomes visitors with palm-filled landscapes, salt lakes, and timeless traditions. The journey continues into the White Desert, where surreal chalk formations, open horizons, and silent nights create an unforgettable experience for travelers seeking something truly extraordinary.",
    image: "/images/blog/siwa.jpg",
  },
  {
    id: 3,
    email: "tours@sirisandtour.com",
    date: "June 19, 2025",
    category: "White Desert",
    title: "Why the White Desert Safari Egypt Should Be on Your Bucket List",
    excerpt:
      "The White Desert Safari is one of Egypt’s most breathtaking adventures. Far from crowded tourist routes, this natural wonder showcases sculpted limestone formations, endless white sands, and dramatic desert skies. Whether you’re camping overnight or exploring by 4x4, the White Desert offers a sense of freedom, isolation, and beauty that few places on Earth can match.",
    image: "/images/blog/white-desert.jpg",
  },
  {
    id: 4,
    email: "tours@sirisandtour.com",
    date: "June 19, 2025",
    category: "Black Desert",
    title: "Exploring the Wonders of the Black Desert and Crystal Mountain in Egypt",
    excerpt:
      "The Black Desert stands in striking contrast to its white counterpart. Covered in dark volcanic stones and dramatic hills, this region feels raw and powerful. Nearby, Crystal Mountain sparkles with natural quartz formations that shimmer in the sunlight. Together, these landscapes reveal the geological beauty and untamed spirit of Egypt’s Western Desert.",
    image: "/images/blog/black-desert.jpg",
  },
  {
    id: 5,
    email: "tours@sirisandtour.com",
    date: "June 20, 2025",
    category: "Bahariya Oasis",
    title: "Bahariya Oasis: Natural Springs, History, and Desert Serenity",
    excerpt:
      "Bahariya Oasis is a peaceful retreat surrounded by desert vastness. Famous for its natural hot springs, lush palm groves, and ancient ruins, the oasis has long been a resting point for travelers. Today, it offers visitors relaxation, cultural insight, and a gateway to nearby desert adventures including the White and Black Deserts.",
    image: "/images/blog/bahariya.jpg",
  },
  {
    id: 6,
    email: "tours@sirisandtour.com",
    date: "June 20, 2025",
    category: "Desert Camping",
    title: "Desert Camping in Egypt: A Night Under a Million Stars",
    excerpt:
      "Desert camping in Egypt is a magical experience that connects you to nature in its purest form. As the sun sets, the desert transforms into a sea of stars, silence, and cool air. Sharing stories by the fire, enjoying traditional meals, and sleeping beneath open skies creates memories that stay with you long after the journey ends.",
    image: "/images/blog/desert-camp.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="px-6 lg:px-20 py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {blogPosts.map((post) => (
          <article key={post.id} className="hover:scale-[1.02] transition">
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            <div className="pt-6">
              <div className="text-sm text-gray-500 flex gap-2 flex-wrap">
                <span>{post.email}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>

              <h3
                className="text-2xl font-semibold mt-4"
                style={{ color: primaryColor }}
              >
                {post.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {post.excerpt}
              </p>

              <Link
                href="#"
                className="inline-block mt-6 px-8 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition"
                style={{ backgroundColor: primaryColor }}
              >
                READ MORE
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
