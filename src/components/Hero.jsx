import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/34711207067?text=Hola,%20quiero%20información%20sobre%20mi%20coche";
  const heroImage =
    "https://images.pexels.com/photos/6870323/pexels-photo-6870323.jpeg?auto=compress&cs=tinysrgb&w=1600";

  return (
    <section className="relative bg-black text-white overflow-hidden pt-28 pb-20 md:pt-32">
      {/* BACKGROUND IMAGE + GRADIENT OVERLAY */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Taller mecánico moderno"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-center gap-10">
        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <p className="uppercase tracking-[0.25em] text-xs text-primary mb-4">
            Taller mecánico en Castellón
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Tu taller de confianza en{" "}
            <span className="text-primary">Castellón</span>.
          </h1>

          <p className="text-gray-300 text-sm md:text-base max-w-xl mb-8">
            Mantenimiento, reparación y diagnosis electrónica con un trato
            profesional, cercano y transparente. Cuidamos tu coche como si fuera
            nuestro.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-sm md:text-base text-center"
            >
              Pedir información por WhatsApp
            </a>

            <Link
              to="/servicios"
              className="border border-white/70 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition text-sm md:text-base text-center"
            >
              Ver servicios
            </Link>
          </div>

          {/* SMALL TRUST TEXT */}
          <p className="text-xs text-gray-400 mt-4">
            Revisiones, frenos, suspensión, diagnosis y más. Pide cita sin
            compromiso.
          </p>
        </motion.div>

        {/* DECORATIVE IMAGE AREA (DESKTOP-ONLY EMPHASIS) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full lg:w-1/2 hidden md:block"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
            <img
              src={heroImage}
              alt="Interior del taller J&J Motors Garage"
              className="w-full h-full object-cover"
            />

            {/* Small badge */}
            <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded-lg border border-white/10">
              <p className="text-xs text-gray-300">
                Mecánica general · Diagnosis electrónica · Frenos y suspensión
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
