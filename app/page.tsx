import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location"
import TourGrid from "./components/TourGrid";
import Accommodation from "./components/Accommodation";
import Collection from "./components/Destination";
import ContactSection from "./components/ContactSection";
import SustainabilityPage from "./components/Sustainability";
import ThankYouSection from "./components/ThankYouSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Location />
      <SustainabilityPage />
      <TourGrid />
      <Accommodation />
      <Collection />
      <ContactSection />
      <ThankYouSection />
    </>
  );
}
