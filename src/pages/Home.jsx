import Footer from "../Components/Footer";
import MapSection from "../Components/MapSection";
import WhyUs from "../Components/WhyUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <MapSection />
      <Footer />
    </>
  );
}
