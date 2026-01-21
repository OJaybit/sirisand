import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourGrid from './components/TourGrid';
import EndlessWonder from './components/EndlessWonder';
import TourCategories from './components/TourCategories';
import Professionalguide from './components/Professionalguide'
import PopularDestinations from './components/PopularDestinations'
import BackgroundSection from './components/BackgroundSection';
import Recentravel from './components/Recentravel'
import Tourbgsection from './components/Tourbgsection'
import StatsCircles from './components/StatsCircles'
import Explore from './components/Explore'
import Animation from './components/Animation'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tourbgsection/>
      <TourGrid />
      <EndlessWonder />
      <TourCategories />
      <Professionalguide/>
      <BackgroundSection />
            <PopularDestinations/>
      <Recentravel/>
      <StatsCircles/>
      <Animation/>
      <Explore/>
    </>
  );
}
