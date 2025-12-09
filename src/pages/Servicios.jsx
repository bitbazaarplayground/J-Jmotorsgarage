import {
  AdjustmentsHorizontalIcon,
  BoltIcon,
  Cog6ToothIcon,
  SparklesIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FAQSchema from "../seo/FAQSchema";
import SEO from "../seo/SEO";

export default function Servicios() {
  const services = [
    {
      title: "Mantenimiento general",
      desc: "Incluye cambio de filtros, revisión de niveles, inspección de seguridad y mantenimiento preventivo para asegurar el buen estado del vehículo.",
      icon: WrenchScrewdriverIcon,
      img: "/img/general.jpg",
      alt: "Mecánico realizando mantenimiento general en un vehículo",
    },
    {
      title: "Cambio de aceite y filtros",
      desc: "Servicio rápido y eficiente con aceites de alta calidad apropiados para cada tipo de motor.",
      icon: BoltIcon,
      img: "/img/oil-change.jpg",
      alt: "Cambio de aceite y filtros realizado en coche en J&J Motors Garage",
    },
    {
      title: "Frenos y suspensión",
      desc: "Reemplazo de pastillas, discos, amortiguadores y otros componentes esenciales para la seguridad del vehículo.",
      icon: TruckIcon,
      img: "/img/brakes.jpg",
      alt: "Revisión y reparación de frenos y suspensión en automóvil",
    },
    {
      title: "Diagnosis electrónica",
      desc: "Equipos avanzados para diagnosticar fallos electrónicos, sensores, motor, ABS, airbag y más.",
      icon: Cog6ToothIcon,
      img: "/img/diagnosis.jpg",
      alt: "Mecánico realizando diagnosis electrónica con herramienta especializada",
    },
    {
      title: "Neumáticos y alineación",
      desc: "Montaje, equilibrado, alineación de dirección y reparación de pinchazos.",
      icon: AdjustmentsHorizontalIcon,
      img: "/img/tyres.jpg",
      alt: "Cambio de neumáticos y alineación de ruedas en el taller",
    },
    {
      title: "Reparaciones de motor",
      desc: "Reparaciones completas de motor, correas, fugas, ruidos o pérdida de potencia.",
      icon: SparklesIcon,
      img: "/img/engine.jpg",
      alt: "Mecánico realizando reparación de motor en vehículo",
    },
  ];

  return (
    <>
      <SEO
        title="Servicios de Mecánica en Castellón | Frenos, Aceite, Neumáticos y Diagnosis"
        description="Reparación de frenos, cambio de aceite, suspensión, neumáticos y diagnosis electrónica en Castellón. Mecánicos expertos, servicio rápido y transparente."
        canonical="/servicios"
      />

      <FAQSchema />
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="pt-28 pb-9 md:pt-32 md:pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-6"
          >
            Nuestros <span className="text-primary">Servicios</span>
          </motion.h1>

          <p className="text-gray-400 max-w-2xl">
            Ofrecemos un servicio integral para el cuidado, mantenimiento y
            reparación de tu vehículo. Trabajamos con profesionalidad, rapidez y
            total transparencia.
          </p>
        </div>
      </section>

      {/* ---------- SERVICES GRID ---------- */}
      <section className="bg-zinc-950 py-9 md:py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-zinc-900 rounded-xl overflow-hidden border border-white/10 shadow-md hover:shadow-primary/30 transition"
              >
                {/* IMAGE */}
                <img
                  src={service.img}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: "auto" }}
                  className="w-full h-40 md:h-56 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.pexels.com/photos/3806245/pexels-photo-3806245.jpeg?auto=compress&cs=tinysrgb&w=1500";
                  }}
                />

                <div className="p-6">
                  <Icon className="h-10 w-10 text-primary mb-4" />

                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-400">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  );
}
