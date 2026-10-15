import { ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SEO from "../seo/SEO";

export default function Ubicacion() {
  const confirmedAddress =
    "Av.+de+Europa,+217,+12006+Castell%C3%B3+de+la+Plana,+Castell%C3%B3n,+Spain";

  const embedMap =
    `https://www.google.com/maps?q=${confirmedAddress}&output=embed`;

  const mapsUrl = "https://maps.app.goo.gl/cobSHjEwXnWz5mtq8";

  const navigateUrl =
    `https://www.google.com/maps/dir/?api=1&destination=${confirmedAddress}`;

  return (
    <>
      <SEO
        title="Taller Mecánico en Castellón | Ubicación y Cómo Llegar | J&J Motors Garage"
        description="Visítanos en Av. de Europa 217, Castellón. Taller de fácil acceso con aparcamiento en la entrada. Cómo llegar, horario y contacto."
        canonical="/ubicacion"
      />

      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="pt-28 pb-9 md:pt-32 md:pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Nuestra <span className="text-primary">Ubicación</span>
          </motion.h1>

          <p className="text-gray-400 max-w-2xl">
            Encuéntranos en Castellón de la Plana. Acceso fácil, zona tranquila
            y bien comunicada.
          </p>
        </div>
      </section>

      {/* ---------- MAP + INFO ---------- */}
      <section className="bg-zinc-950 py-9 md:py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden border border-white/10 shadow-lg h-[350px] md:h-[450px]"
          >
            <iframe
              title="Mapa J&J Motors Garage"
              src={embedMap}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-6">Cómo llegar</h2>

            <div className="space-y-5 text-gray-300">
              <p className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-primary mt-1" />
                Av. de Europa, 217
                <br />
                12006 Castellón de la Plana
              </p>

              <p className="flex items-center gap-3">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <a href="tel:+34711207067" className="hover:text-primary">
                  +34 711 20 70 67
                </a>
              </p>

              <p className="flex items-start gap-3">
                <ClockIcon className="h-6 w-6 text-primary mt-1" />
                L–V: 8:00–13:30 / 15:00–18:00
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Ver en Google Maps
              </a>

              <a
                href={navigateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold"
              >
                Abrir navegador
              </a>
            </div>

            <Link
              to="/servicios"
              className="mt-5 self-start text-sm font-semibold text-primary hover:text-white transition underline underline-offset-4"
            >
              Conoce nuestros servicios de taller
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- PARKING INFO ---------- */}
      <section className="bg-black text-gray-300 py-9 md:py-16">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Acceso y aparcamiento
          </h3>

          <p className="max-w-3xl">
            El taller se encuentra en una avenida amplia de fácil acceso. Hay
            espacio para parar el vehículo en la entrada del taller al dejarlo o
            recogerlo. Si necesitas ayuda para llegar, puedes llamarnos o
            enviarnos un WhatsApp.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
