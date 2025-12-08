import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import LocalBusinessSchema from "../seo/LocalBusinessSchema";
import OrganizationSchema from "../seo/OrganizationSchema";
import SEO from "../seo/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Taller Mecánico en Castellón | J&J Motors Garage"
        description="Taller mecánico en Castellón especializado en mantenimiento, reparación, frenos, suspensión y diagnosis electrónica. Servicio profesional, rápido y transparente."
        canonical="/"
      />

      <LocalBusinessSchema />
      <OrganizationSchema />

      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <MapSection />
      <Footer />
    </>
  );
}
