// app/data/tours.ts

export type Testimonial = {
  id: number;
  name: string;
  date: string;
  title: string;
  text: string;
};

export type Tour = {
  title: string;
  slug: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  gallery: string[];
  overview: string;
  itinerary: string[];
  included: string[];
  excluded: string[];
  reviews: string[];
  days: string;

  // NEW FIELD
  testimonials: Testimonial[];
};

export const makeSlug = (title: string) =>
  title.toLowerCase().replace(/ /g, '-');

export const tours: Tour[] = [
  {
    title: "Luxor Trip Plan",
    slug: makeSlug("6 Day Egypt Desert  Oasis Tour"),
    description:
      "Experience Luxor’s legendary heritage and serene Nile vistas in comfort and style.",
    heroImage: "/images/tours/1.jpg",
    heroVideo: "/videos/vid1.webm",
    gallery: ["/images/tours/2.webp", "/images/tours/3.jpg"],
    overview:
      "Luxor is a living museum of ancient Egypt. This trip takes you through the city’s iconic temples, royal tombs, and historic sites along the Nile, offering a perfect blend of culture, history, and breathtaking landscapes.",
    itinerary: [
      "Day Tour – Arrival & Cairo City Tour",
      "Day 2 – Giza Pyramids & Museum",
      "Day 3 – Travel to Oasis",
      "Day 4 – White Desert Safari",
      "Day 5 – Cultural Villages",
      "Day 6 – Departure",
    ],
    included: ["Hotel Pickup", "Professional Guide", "Meals", "Transportation"],
    excluded: ["Flights", "Personal Expenses", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Amazing experience!", "⭐⭐⭐⭐ Great tour and friendly guide."],
    days: "6 Days",

    testimonials: [
      {
        id: 1,
        name: "Martina B",
        date: "2025-06-05",
        title: "Unforgettable trip",
        text: "Unforgettable trip in the company of Mohamed. Everything was organized to perfection.",
      },
      {
        id: 2,
        name: "Raziye A",
        date: "2025-05-07",
        title: "White Desert & Siwa",
        text: "Camping in the White Desert was a unique and unforgettable experience.",
      },
      {
        id: 3,
        name: "Noemi A",
        date: "2025-04-30",
        title: "Beautiful Experience",
        text: "A once-in-a-lifetime night in the desert. Truly magical.",
      },
      {
        id: 4,
        name: "Lucia F",
        date: "2025-04-23",
        title: "Desert Adventure",
        text: "Wonderful experience with excellent organization.",
      },
    ],
  },

  {
    title: "Classic",
    slug: makeSlug("Classic Nile Cruise Experience"),
    description:
      "Sail along the Nile River and explore Egypt’s legendary temples and cities.",
    heroImage: "/images/tours/6.jpg",
    heroVideo: "/videos/video1.mp4",
    gallery: ["/images/tours/4.jpg", "/images/tours/5.jpg"],
    overview:
      "Relax aboard a luxury cruise ship while visiting Egypt’s most famous ancient sites.",
    itinerary: [
      "Day 1 – Arrival & Luxor Temple",
      "Day 2 – Valley of the Kings",
      "Day 3 – Edfu & Kom Ombo",
      "Day 4 – Aswan",
      "Day 5 – Free Day",
      "Day 6 – Return",
    ],
    included: ["Cruise Cabin", "Meals", "Guide", "Transfers"],
    excluded: ["Drinks", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Beautiful cruise!", "⭐⭐⭐⭐ Highly recommended."],
    days: "7 Days",

    testimonials: [
      {
        id: 1,
        name: "Mark T",
        date: "2025-04-10",
        title: "Top Service",
        text: "Professional guides and amazing landscapes.",
      },
      {
        id: 2,
        name: "Sandra P",
        date: "2025-03-18",
        title: "Highly Recommended",
        text: "Everything was perfect from start to finish.",
      },
      {
        id: 3,
        name: "Ali R",
        date: "2025-03-02",
        title: "Memorable Trip",
        text: "Very safe, very well planned.",
      },
      {
        id: 4,
        name: "Helen K",
        date: "2025-02-21",
        title: "Loved It",
        text: "Would absolutely do this again.",
      },
    ],
  },

  {
    title: "Explore Egypt From the Pyramids to the White Desert",
    slug: makeSlug("Explore Egypt From the Pyramids to the White Desert"),
    description: "From Cairo pyramids to the desert adventures.",
    heroImage: "/images/tours/2.webp",
    heroVideo: "/videos/video1.mp4",
    gallery: ["/images/tours/1.jpg", "/images/tours/3.jpg"],
    overview: "See Egypt’s top destinations in a single trip.",
    itinerary: [
      "Day 1 – Cairo",
      "Day 2 – Giza",
      "Day 3 – White Desert",
      "Day 4 – Oasis",
      "Day 5 – Luxor",
      "Day 6 – Departure",
    ],
    included: ["Hotel", "Guide", "Meals"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Fantastic tour!", "⭐⭐⭐⭐ Loved it!"],
    days: "8 Days",

    testimonials: [
      {
        id: 1,
        name: "Jonas M",
        date: "2025-02-01",
        title: "Amazing Views",
        text: "The desert views were breathtaking.",
      },
      {
        id: 2,
        name: "Emily S",
        date: "2025-01-15",
        title: "Perfect Experience",
        text: "Highly professional team.",
      },
      {
        id: 3,
        name: "Martina B",
        date: "2025-06-05",
        title: "Unforgettable trip",
        text: "Unforgettable trip in the company of Mohamed. Everything was organized to perfection.",
      },
      {
        id: 4,
        name: "Raziye A",
        date: "2025-05-07",
        title: "White Desert & Siwa",
        text: "Camping in the White Desert was a unique and unforgettable experience.",
      },
    ],
  },

  {
    title: "Luxury Siwa Oasis & White Desert Adventure",
    slug: makeSlug("Luxury Siwa Oasis & White Desert Adventure"),
    description: "Experience luxury in Egypt’s hidden oases and deserts.",
    heroImage: "/images/tours/4.jpg",
    heroVideo: "/videos/video1.mp4",
    gallery: ["/images/tours/1.jpg", "/images/tours/2.webp"],
    overview: "Relax and explore Egypt’s desert in style.",
    itinerary: [
      "Day 1 – Arrival",
      "Day 2 – Siwa Oasis",
      "Day 3 – Desert Safari",
      "Day 4 – White Desert",
      "Day 5 – Return",
      "Day 6 – Departure",
    ],
    included: ["Luxury Accommodation", "Guide", "Meals", "Transportation"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Luxurious!", "⭐⭐⭐⭐ Amazing experience!"],
    days: "7 Days",

    testimonials: [
      {
        id: 1,
        name: "Lucia F",
        date: "2025-04-23",
        title: "Desert Adventure",
        text: "Wonderful experience with excellent organization.",
      },
      {
        id: 2,
        name: "Mark T",
        date: "2025-04-10",
        title: "Top Service",
        text: "Professional guides and amazing landscapes.",
      },
      {
        id: 3,
        name: "Sandra P",
        date: "2025-03-18",
        title: "Highly Recommended",
        text: "Everything was perfect from start to finish.",
      },
      {
        id: 4,
        name: "Ali R",
        date: "2025-03-02",
        title: "Memorable Trip",
        text: "Very safe, very well planned.",
      },
    ],
  },

  {
    title: "Cairo & Alexandria Highlights Tour",
    slug: makeSlug("Cairo & Alexandria Highlights Tour"),
    description: "Explore Egypt’s major cities and landmarks.",
    heroImage: "/images/tours/5.jpg",
    heroVideo: "/videos/video1.mp4",
    gallery: ["/images/tours/6.jpg", "/images/tours/7.jpg"],
    overview: "Visit Cairo pyramids, museums, and Alexandria’s coastline.",
    itinerary: [
      "Day 1 – Cairo",
      "Day 2 – Pyramids & Museum",
      "Day 3 – Alexandria",
      "Day 4 – City Tour",
      "Day 5 – Departure",
    ],
    included: ["Hotel", "Guide", "Meals"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Great tour!", "⭐⭐⭐⭐ Excellent guide."],
    days: "5 Days",

    testimonials: [
      {
        id: 1,
        name: "Helen K",
        date: "2025-02-21",
        title: "Loved It",
        text: "Would absolutely do this again.",
      },
      {
        id: 2,
        name: "Jonas M",
        date: "2025-02-01",
        title: "Amazing Views",
        text: "The desert views were breathtaking.",
      },
      {
        id: 3,
        name: "Emily S",
        date: "2025-01-15",
        title: "Perfect Experience",
        text: "Highly professional team.",
      },
      {
        id: 4,
        name: "Martina B",
        date: "2025-06-05",
        title: "Unforgettable trip",
        text: "Unforgettable trip in the company of Mohamed. Everything was organized to perfection.",
      },
    ],
  },

  {
    title: "Red Sea & Desert Safari Tour",
    slug: makeSlug("Red Sea & Desert Safari Tour"),
    description: "Adventure combining desert safari and Red Sea relaxation.",
    heroImage: "/images/tours/7.jpg",
    heroVideo: "/videos/video1.mp4",
    gallery: ["/images/tours/8.jpg", "/images/tours/9.jpg"],
    overview: "Swim, dive and explore Egypt’s deserts and beaches.",
    itinerary: [
      "Day 1 – Cairo",
      "Day 2 – Red Sea",
      "Day 3 – Desert Safari",
      "Day 4 – Adventure Activities",
      "Day 5 – Return",
    ],
    included: ["Hotel", "Guide", "Meals", "Transport"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐ Amazing tour!", "⭐⭐⭐⭐⭐ Loved it!"],
    days: "6 Days",

    testimonials: [
      {
        id: 1,
        name: "Ali R",
        date: "2025-03-02",
        title: "Memorable Trip",
        text: "Very safe, very well planned.",
      },
      {
        id: 2,
        name: "Helen K",
        date: "2025-02-21",
        title: "Loved It",
        text: "Would absolutely do this again.",
      },
      {
        id: 3,
        name: "Jonas M",
        date: "2025-02-01",
        title: "Amazing Views",
        text: "The desert views were breathtaking.",
      },
      {
        id: 4,
        name: "Emily S",
        date: "2025-01-15",
        title: "Perfect Experience",
        text: "Highly professional team.",
      },
    ],
  },

  {
    title: "Ancient Egypt Discovery Tour",
    slug: makeSlug("Ancient Egypt Discovery Tour"),
    description: "Discover the ancient wonders along the Nile.",
    heroImage: "/images/tours/8.jpg",
    heroVideo: "/videos/video1.mp4",
    gallery: ["/images/tours/1.jpg", "/images/tours/2.webp"],
    overview: "Visit temples, pyramids, and historical sites.",
    itinerary: [
      "Day 1 – Cairo",
      "Day 2 – Luxor",
      "Day 3 – Valley of the Kings",
      "Day 4 – Aswan",
      "Day 5 – Return",
    ],
    included: ["Hotel", "Guide", "Meals", "Transport"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Excellent!", "⭐⭐⭐⭐ Fun trip!"],
    days: "9 Days",

    testimonials: [
      {
        id: 1,
        name: "Sandra P",
        date: "2025-03-18",
        title: "Highly Recommended",
        text: "Everything was perfect from start to finish.",
      },
      {
        id: 2,
        name: "Ali R",
        date: "2025-03-02",
        title: "Memorable Trip",
        text: "Very safe, very well planned.",
      },
      {
        id: 3,
        name: "Helen K",
        date: "2025-02-21",
        title: "Loved It",
        text: "Would absolutely do this again.",
      },
      {
        id: 4,
        name: "Jonas M",
        date: "2025-02-01",
        title: "Amazing Views",
        text: "The desert views were breathtaking.",
      },
    ],
  },

  {
    title: "Egypt Cultural Heritage Tour",
    slug: makeSlug("Egypt Cultural Heritage Tour"),
    description: "Immerse yourself in Egypt’s history and culture.",
    heroImage: "/images/tours/9.jpg",
    heroVideo: "/videos/video1.mp4",
    gallery: ["/images/tours/10.jpeg", "/images/tours/11.jpg"],
    overview:
      "Learn about Egypt’s traditions, monuments, and culture.",
    itinerary: [
      "Day 1 – Cairo",
      "Day 2 – Cultural Sites",
      "Day 3 – Museums",
      "Day 4 – Villages",
      "Day 5 – Return",
    ],
    included: ["Hotel", "Guide", "Meals", "Transport"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐ Great cultural experience!", "⭐⭐⭐⭐⭐ Loved it!"],
    days: "10 Days",

    testimonials: [
      {
        id: 1,
        name: "Emily S",
        date: "2025-01-15",
        title: "Perfect Experience",
        text: "Highly professional team.",
      },
      {
        id: 2,
        name: "Martina B",
        date: "2025-06-05",
        title: "Unforgettable trip",
        text: "Unforgettable trip in the company of Mohamed. Everything was organized to perfection.",
      },
      {
        id: 3,
        name: "Raziye A",
        date: "2025-05-07",
        title: "White Desert & Siwa",
        text: "Camping in the White Desert was a unique and unforgettable experience.",
      },
      {
        id: 4,
        name: "Noemi A",
        date: "2025-04-30",
        title: "Beautiful Experience",
        text: "A once-in-a-lifetime night in the desert. Truly magical.",
      },
    ],
  },
];
