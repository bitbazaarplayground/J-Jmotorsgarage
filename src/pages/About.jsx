import { motion } from "framer-motion";
import tallerImg from "../assets/about/taller.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SEO from "../seo/SEO";
export default function About() {
  return (
    <>
      <SEO
        title="Sobre Nosotros | Taller Mecánico de Confianza en Castellón | J&J Motors Garage"
        description="Conócenos. Taller mecánico en Castellón con años de experiencia en mantenimiento, reparación y diagnosis electrónica. Honestidad, profesionalidad y pasión por el motor."
        canonical="/sobre-nosotros"
      />

      <Navbar />
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Sobre <span className="text-primary">Nosotros</span>
          </motion.h1>

          <p className="text-gray-400 max-w-2xl">
            En J&J Motors Garage ofrecemos un servicio profesional, cercano y
            transparente. Somos un taller especializado en mantenimiento,
            reparación y diagnosis, con pasión por el motor y años de
            experiencia.
          </p>
        </div>
      </section>
      {/* IMAGE + STORY SECTION */}
      <section className="bg-zinc-950 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-lg border border-white/10"
          >
            <img
              src={tallerImg}
              alt="Interior del taller J&J Motors Garage"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Pasión, experiencia y compromiso
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Nuestro taller nació con el objetivo de ofrecer un servicio de
              confianza para todos los conductores de Castellón. Trabajamos con
              dedicación para asegurar que cada vehículo recibe el mejor cuidado
              posible, ya sea un coche de uso diario o un vehículo de alto
              rendimiento.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Contamos con equipos de diagnosis avanzados, herramientas
              profesionales y una amplia experiencia en mecánica general,
              frenos, suspensión, mantenimiento y reparaciones completas.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Nuestro compromiso es tratar cada vehículo como si fuera propio,
              ofreciendo un trato transparente, precios razonables y resultados
              de calidad.
            </p>
          </motion.div>
        </div>
      </section>
      {/* VALUES SECTION */}
      <section className="bg-black py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Nuestros valores</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-6 rounded-xl border border-white/5">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Honestidad
              </h4>
              <p className="text-gray-400">
                Explicamos cada reparación con claridad para que siempre sepas
                qué necesita tu vehículo y por qué.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl border border-white/5">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Profesionalidad
              </h4>
              <p className="text-gray-400">
                Trabajamos con precisión y cuidado, utilizando herramientas y
                técnicas actualizadas.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl border border-white/5">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Pasión por el motor
              </h4>
              <p className="text-gray-400">
                Amamos los coches y disfrutamos cada proyecto, desde un
                mantenimiento sencillo hasta una reparación compleja.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
