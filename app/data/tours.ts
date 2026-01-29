// app/data/tours.ts

export type Testimonial = {
  id: number;
  name: string;
  date: string;
  title: string;
  text: string;
};

export type Tour = {
  title: string;      // Shown on the inner Tour Page
  cardTitle?: string; // NEW: Shown on the Slider/Card. Independent of title and slug.
  slug: string;       // The URL
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
  testimonials: Testimonial[];
};

export const makeSlug = (title: string) =>
  title.toLowerCase().replace(/ /g, '-');

export const tours: Tour[] = [
  {
    title: "Experience Luxor’s legendary heritage ", 
    cardTitle: "Luxor Trip Plan", 
    
    slug: makeSlug("6 Day Egypt Desert  Oasis Tour"), 
    
    description:
      "Experience Luxor’s legendary heritage and serene Nile vistas in comfort and style.",
    heroImage: "/images/tours/1.jpg",
    heroVideo: "/videos/luxor.mp4",
    gallery: ["/images/tours/2.webp", "/images/tours/3.jpg"],
    overview:
      "Luxor is a living museum of ancient Egypt. This trip takes you through the city’s iconic temples, royal tombs, and historic sites along the Nile, offering a perfect blend of culture, history, and breathtaking landscapes.",
    itinerary: [
      "Day Tour – Karnak, Valley of the kings, Memmon, Hatshepsut",
      "Ballon – Hot Air Ballon Ride",
      "Nile Cruise – Luxor to Aswan Boat Trip",
    ],
    included: ["Hotel Pickup", "Professional Guide",],
    excluded: [""],
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
    title: "Experience world-class sea trips from Sharm El-Sheikh",
    cardTitle: "Sharm El-Sheikh Diving",
    slug: makeSlug("Classic Nile Cruise Experience"),
    description:
      "Experience world-class sea trips from Sharm El-Sheikh, featuring iconic dive spots and stunning scenery.",
    heroImage: "/images/tours/6.jpg",
    heroVideo: "/videos/sham.mp4",
    gallery: ["/images/tours/4.jpg", "/images/tours/5.jpg"],
    overview:
      "Sharm El-Sheikh sea trips offer unforgettable marine experiences, from snorkeling over coral gardens to diving in famous Red Sea sites. Enjoy scenic boat rides and explore the underwater world of Egypt’s most popular coastal destination.",
    itinerary: [
      "Sea Trip – Pirate Boat",
      "Sea Trip 2 – Ras",
      "Sea Trip 3 –Tiran Island",
      "Submarin – Semi-submarine",
      "Safari – Daily Safari",
    ],
    included: [ "Airport Transfers", "Guide",],
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
    title: "Discover the heart of Egypt with its pyramids, museums, and bustling streets.",
    cardTitle: "Cairo",
    slug: makeSlug("Explore Egypt From the Pyramids to the White Desert"),
    description: "Discover the heart of Egypt with its pyramids, museums, and bustling streets.",
    heroImage: "/images/tours/2.webp",
    heroVideo: "/videos/cario.mp4",
    gallery: ["/images/tours/1.jpg", "/images/tours/3.jpg"],
    overview: "A perfect blend of history and modern Egypt, this Cairo trip covers the major archaeological sites and cultural highlights, giving you a deep insight into the country’s rich past.",
    itinerary: [
      "Day Tour – Giza Pyramids & The New Museum (GEM) ",
      " Flight – scenic Flight iver Pyramids & Museum",
      "Historic Cairo – Al-Muizz St. & Khan el-Khalili",
      "Islamic Sites – Citadel, Al-Azhar, Mohamed Ali, Ibn Tulun & Main Mosques",
      "Coptic Sites – Old Cairo Churches, Coptic Museum, & Hanging Church",
    ],
    included: [ "Guide",],
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
    title: "Experience a peaceful Red Sea getaway with snorkeling & diving,",
    cardTitle: "Marsa Alam ",
    slug: makeSlug("Luxury Siwa Oasis White Desert Adventure"),
    description: "Experience a peaceful Red Sea getaway with snorkeling, diving, and coastal relaxation in Marsa Alam.",
    heroImage: "/images/tours/4.jpg",
    heroVideo: "/videos/marsa.mp4",
    gallery: ["/images/tours/1.jpg", "/images/tours/2.webp"],
    overview: "Marsa Alam is ideal for those looking to escape the crowds. This plan highlights the Red Sea’s natural wonders, from colorful coral reefs to crystal-clear waters, making it perfect for eco-tourism and marine adventures.",
    itinerary: [
      "Submarine 1 – Royal Sea Scope",
      "Submarine 2 – Nefertari",
      "Safari– Super Safari",
      "Sea Trip 1 –Dolphin House ",
      "Sea Trip 2 – Satyah (Turtle)",
      "Nature – Satyah ()Wadi el Gemal",
      "Diving – Scuba Diving",
    ],
    included: ["Taxi", "Guide", "Limousine"],
    excluded: [""],
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
    title: "Explore Fayoum’s natural beauty & ancient sites",
    cardTitle: "Fayoum Oasis",
    slug: makeSlug("Cairo Alexandria Highlights Tour"),
    description: "Explore Fayoum’s natural beauty, ancient sites, and desert landscapes on a refreshing escape from the city.",
    heroImage: "/images/tours/5.jpg",
    heroVideo: "/videos/fayoum.mp4",
    gallery: ["/images/tours/6.jpg", "/images/tours/7.jpg"],
    overview: "Fayoum is a peaceful oasis southwest of Cairo, known for its lakes, waterfalls, and protected natural areas. This itinerary includes visits to Wadi El-Rayan, Mudawara Mountain, and local villages, offering a perfect blend of nature and culture.",
    itinerary: [
      "Day 1 – Tunis village",
      "Day 2 – Wadil El Rayan, Sandboarding & Safari",
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
    title: "A peaceful escape to Egypt’s remote Siwa Oasis",
    cardTitle: " Siwa Oasis",
    slug: makeSlug("Red Sea  Desert Safari Tour"),
    description: "A peaceful escape to Egypt’s remote Siwa Oasis, blending ancient history, salt lakes, and desert adventure.",
    heroImage: "/images/tours/7.jpg",
    heroVideo: "/videos/siwa.mp4",
    gallery: [
      "/images/tours/8.jpg",
      "/images/tours/9.jpg"
    ],
    overview: "Discover the magic of Siwa Oasis as you explore ancient ruins, relax in natural salt lakes, and experience thrilling desert safaris in Egypt’s western desert.",
    itinerary: [
      "Day 1 – Shali Fortress & Mountain of the Dead",
      "Day 2 – Salt Lakes & Cleopatra’s Bath",
      "Day 3 – Great Sand Sea Desert Safari",
      "Extra – Extended Safari Experience", 
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
    title: "Explore Aswan’s serene Nile scenery & ancient temples",
    cardTitle: "Aswan Cultural Tour",
    slug: makeSlug("Ancient Egypt Discovery Tour"),
    description: "Explore Aswan’s serene Nile scenery, ancient temples, and Nubian culture.",
    heroImage: "/images/tours/8.jpg",
    heroVideo: "/videos/aswan.mp4",
    gallery: ["/images/tours/1.jpg", "/images/tours/2.webp"],
    overview: "Aswan is known for its peaceful Nile setting and rich Nubian heritage. This itinerary includes visits to iconic sites such as Philae Temple, the High Dam, and traditional Nubian villages, offering a perfect mix of history and relaxation.",
    itinerary: [
      "Day 1 – High Dam, Philae, Kalabsha, Nubian Village & Museum",
      "Day 2 – Abu Simbel(full Day) & Komo Ombo",
      "Cruise – Nile Cruise: Aswan-luxor",
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
    title: "Immerse yourself in Egypt’s history and culture.",
    cardTitle: "Hurghada",
    slug: makeSlug("Egypt Cultural Heritage Tour"),
    description: "Immerse yourself in Egypt’s history and culture.",
    heroImage: "/images/tours/9.jpg",
    heroVideo: "/videos/hurghada.mp4",
    gallery: ["/images/tours/10.jpeg", "/images/tours/11.jpg"],
    overview:
      "Learn about Egypt’s traditions, monuments, and culture.",
    itinerary: [
  "Luxury Island Experience – Tawila Island Hotel & Resort (VVIP)",
  "Island Trip 1 – Hula Hula Island",
  "Island Trip 2 – Eden Island",
  "Island Trip 3 – Orange Island",
  "Island Trip 4 – Paradise Island",
  "Beach & Snorkeling – Sharm El Naga Beach",
  "Underwater Tour – Sinbad Submarine",
  "Water Sports – Parasailing",
  "Sightseeing – Hurghada Aquarium",
  "Private Sea  Re – Private Speedboat",
  "Sea Activity – Fishing Trip",
  "Scuba Diving – Diving",
  "Desert / Beach Activity – Horse Riding",
  "Marine Life / Snorkeling – Dolphin House",
  "Evening Water Sports – Night Surf",
],

    included: [ "Guide", "Meals", "Transport"],
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