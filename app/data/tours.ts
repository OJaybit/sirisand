// app/data/tours.ts

export type Tour = {
  title: string;
  slug: string;
  description: string;
  heroImage: string;
  heroVideo?: string; // NEW FIELD
  gallery: string[];
  overview: string;
  itinerary: string[];
  included: string[];
  excluded: string[];
  reviews: string[];
  days: string;
};

export const makeSlug = (title: string) =>
  title.toLowerCase().replace(/ /g, '-');

export const tours: Tour[] = [
  {
    title: 'ceila',
    slug: makeSlug('6 Day Egypt Desert  Oasis Tour'),
    description:
      'Journey through Egypt’s breathtaking deserts, oases, and cultural landmarks.',
    heroImage: '/images/tours/1.jpg',
    heroVideo: '/videos/vid1.webm', // <-- NEW
    gallery: ['/images/tours/2.webp', '/images/tours/3.jpg'],
    overview:
      'Discover ancient temples, golden sand dunes, salt lakes, desert safari adventures, and authentic Egyptian culture.',
    itinerary: [
      'Day 1 – Arrival & Cairo City Tour',
      'Day 2 – Giza Pyramids & Museum',
      'Day 3 – Travel to Oasis',
      'Day 4 – White Desert Safari',
      'Day 5 – Cultural Villages',
      'Day 6 – Departure',
    ],
    included: ['Hotel Pickup', 'Professional Guide', 'Meals', 'Transportation'],
    excluded: ['Flights', 'Personal Expenses', 'Tips'],
    reviews: ['⭐⭐⭐⭐⭐ Amazing experience!', '⭐⭐⭐⭐ Great tour and friendly guide.'],
    days: '6 Days',
  },
  {
    title: 'Classic',
    slug: makeSlug('Classic Nile Cruise Experience'),
    description: 'Sail along the Nile River and explore Egypt’s legendary temples and cities.',
    heroImage: '/images/tours/6.jpg',
    heroVideo: '/videos/video1.mp4',
    gallery: ['/images/tours/4.jpg', '/images/tours/5.jpg'],
    overview: 'Relax aboard a luxury cruise ship while visiting Egypt’s most famous ancient sites.',
    itinerary: [
      'Day 1 – Arrival & Luxor Temple',
      'Day 2 – Valley of the Kings',
      'Day 3 – Edfu & Kom Ombo',
      'Day 4 – Aswan',
      'Day 5 – Free Day',
      'Day 6 – Return',
    ],
    included: ['Cruise Cabin', 'Meals', 'Guide', 'Transfers'],
    excluded: ['Drinks', 'Tips'],
    reviews: ['⭐⭐⭐⭐⭐ Beautiful cruise!', '⭐⭐⭐⭐ Highly recommended.'],
    days: '7 Days',
  },
  {
    title: 'Explore Egypt From the Pyramids to the White Desert',
    slug: makeSlug('Explore Egypt From the Pyramids to the White Desert'),
    description: 'From Cairo pyramids to the desert adventures.',
    heroImage: '/images/tours/2.webp',
    heroVideo: '/videos/video1.mp4',
    gallery: ['/images/tours/1.jpg', '/images/tours/3.jpg'],
    overview: 'See Egypt’s top destinations in a single trip.',
    itinerary: [
      'Day 1 – Cairo',
      'Day 2 – Giza',
      'Day 3 – White Desert',
      'Day 4 – Oasis',
      'Day 5 – Luxor',
      'Day 6 – Departure',
    ],
    included: ['Hotel', 'Guide', 'Meals'],
    excluded: ['Flights', 'Tips'],
    reviews: ['⭐⭐⭐⭐⭐ Fantastic tour!', '⭐⭐⭐⭐ Loved it!'],
    days: '8 Days',
  },
  {
    title: 'Luxury Siwa Oasis & White Desert Adventure',
    slug: makeSlug('Luxury Siwa Oasis & White Desert Adventure'),
    description: 'Experience luxury in Egypt’s hidden oases and deserts.',
    heroImage: '/images/tours/4.jpg',
    heroVideo: '/videos/video1.mp4',
    gallery: ['/images/tours/1.jpg', '/images/tours/2.webp'],
    overview: 'Relax and explore Egypt’s desert in style.',
    itinerary: [
      'Day 1 – Arrival',
      'Day 2 – Siwa Oasis',
      'Day 3 – Desert Safari',
      'Day 4 – White Desert',
      'Day 5 – Return',
      'Day 6 – Departure',
    ],
    included: ['Luxury Accommodation', 'Guide', 'Meals', 'Transportation'],
    excluded: ['Flights', 'Tips'],
    reviews: ['⭐⭐⭐⭐⭐ Luxurious!', '⭐⭐⭐⭐ Amazing experience!'],
    days: '7 Days',
  },
  {
    title: 'Cairo & Alexandria Highlights Tour',
    slug: makeSlug('Cairo & Alexandria Highlights Tour'),
    description: 'Explore Egypt’s major cities and landmarks.',
    heroImage: '/images/tours/5.jpg',
    heroVideo: '/videos/video1.mp4',
    gallery: ['/images/tours/6.jpg', '/images/tours/7.jpg'],
    overview: 'Visit Cairo pyramids, museums, and Alexandria’s coastline.',
    itinerary: [
      'Day 1 – Cairo',
      'Day 2 – Pyramids & Museum',
      'Day 3 – Alexandria',
      'Day 4 – City Tour',
      'Day 5 – Departure',
    ],
    included: ['Hotel', 'Guide', 'Meals'],
    excluded: ['Flights', 'Tips'],
    reviews: ['⭐⭐⭐⭐⭐ Great tour!', '⭐⭐⭐⭐ Excellent guide.'],
    days: '5 Days',
  },
  {
    title: 'Red Sea & Desert Safari Tour',
    slug: makeSlug('Red Sea & Desert Safari Tour'),
    description: 'Adventure combining desert safari and Red Sea relaxation.',
    heroImage: '/images/tours/7.jpg',
    heroVideo: '/videos/video1.mp4',
    gallery: ['/images/tours/8.jpg', '/images/tours/9.jpg'],
    overview: 'Swim, dive and explore Egypt’s deserts and beaches.',
    itinerary: [
      'Day 1 – Cairo',
      'Day 2 – Red Sea',
      'Day 3 – Desert Safari',
      'Day 4 – Adventure Activities',
      'Day 5 – Return',
    ],
    included: ['Hotel', 'Guide', 'Meals', 'Transport'],
    excluded: ['Flights', 'Tips'],
    reviews: ['⭐⭐⭐⭐ Amazing tour!', '⭐⭐⭐⭐⭐ Loved it!'],
    days: '6 Days',
  },
  {
    title: 'Ancient Egypt Discovery Tour',
    slug: makeSlug('Ancient Egypt Discovery Tour'),
    description: 'Discover the ancient wonders along the Nile.',
    heroImage: '/images/tours/8.jpg',
    heroVideo: '/videos/video1.mp4',
    gallery: ['/images/tours/1.jpg', '/images/tours/2.webp'],
    overview: 'Visit temples, pyramids, and historical sites.',
    itinerary: [
      'Day 1 – Cairo',
      'Day 2 – Luxor',
      'Day 3 – Valley of the Kings',
      'Day 4 – Aswan',
      'Day 5 – Return',
    ],
    included: ['Hotel', 'Guide', 'Meals', 'Transport'],
    excluded: ['Flights', 'Tips'],
    reviews: ['⭐⭐⭐⭐⭐ Excellent!', '⭐⭐⭐⭐ Fun trip!'],
    days: '9 Days',
  },
  {
    title: 'Egypt Cultural Heritage Tour',
    slug: makeSlug('Egypt Cultural Heritage Tour'),
    description: 'Immerse yourself in Egypt’s history and culture.',
    heroImage: '/images/tours/9.jpg',
    heroVideo: '/videos/video1.mp4',
    gallery: ['/images/tours/10.jpeg', '/images/tours/11.jpg'],
    overview: 'Learn about Egypt’s traditions, monuments, and culture.',
    itinerary: [
      'Day 1 – Cairo',
      'Day 2 – Cultural Sites',
      'Day 3 – Museums',
      'Day 4 – Villages',
      'Day 5 – Return',
    ],
    included: ['Hotel', 'Guide', 'Meals', 'Transport'],
    excluded: ['Flights', 'Tips'],
    reviews: ['⭐⭐⭐⭐ Great cultural experience!', '⭐⭐⭐⭐⭐ Loved it!'],
    days: '10 Days',
  },
];
