import { ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Navbar from "../components/Navbar";

export default function Ubicacion() {
  const embedMap =
    "https://www.google.com/maps?q=Av.+de+Europa,+217,+12006+Castell%C3%B3n+de+la+Plana,+Castell%C3%B3n&output=embed";

  const mapsUrl =
    "https://www.google.com/maps?q=J%26J+Motors+Garage,+Av.+de+Europa,+217,+12006+Castell%C3%B3n+de+la+Plana,+Castell%C3%B3n";

  const navigateUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Av.+de+Europa,+217,+12006+Castell%C3%B3n+de+la+Plana,+Castell%C3%B3n";

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-black text-white">
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

      {/* MAP & INFO */}
      <section className="bg-zinc-950 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden border border-white/10 shadow-lg h-[450px]"
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
            animate={{ opacity: 1, x: 0 }}
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
                className="bg-primary px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Ver en Google Maps
              </a>

              <a
                href={navigateUrl}
                target="_blank"
                className="border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold"
              >
                Abrir navegador
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPTIONAL PARKING / ACCESS INFO */}
      <section className="bg-black text-gray-300 py-16">
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
