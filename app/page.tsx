import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourGrid from './components/TourGrid';
import EndlessWonder from './components/EndlessWonder';
import TourCategories from './components/TourCategories';
import Professionalguide from './components/Professionalguide'
import PopularDestinations from './components/PopularDestinations'
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TourGrid />
      <EndlessWonder />
      <TourCategories />
      <Professionalguide/>
      <PopularDestinations/>
    </>
  );
}
