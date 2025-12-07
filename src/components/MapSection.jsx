import { ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function MapSection() {
  const googleMapsUrl =
    "https://www.google.com/maps?q=J%26J+Motors+Garage,+Av.+de+Europa,+217,+12006+Castell%C3%B3n+de+la+Plana,+Castell%C3%B3n";

  const navigateUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Av.+de+Europa,+217,+12006+Castell%C3%B3n+de+la+Plana,+Castell%C3%B3n";

  const embedMap =
    "https://www.google.com/maps?q=Av.+de+Europa,+217,+12006+Castell%C3%B3n+de+la+Plana,+Castell%C3%B3n&output=embed";

  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Encuéntranos en <span className="text-primary">Castellón</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden border border-white/10 shadow-lg"
          >
            <iframe
              title="Mapa de J&J Motors Garage"
              src={embedMap}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* INFO + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Información de contacto
            </h3>

            <p className="flex items-center gap-3">
              <MapPinIcon className="h-6 w-6 text-primary" />
              Av. de Europa, 217, 12006 Castellón de la Plana
            </p>

            <p className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 text-primary" />
              <a href="tel:+34711207067" className="hover:text-primary">
                +34 711 20 70 67
              </a>
            </p>

            <p className="flex items-center gap-3">
              <ClockIcon className="h-6 w-6 text-primary" />
              L–V: 8:00–13:30 / 15:00–18:00
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href={googleMapsUrl}
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
      </div>
    </section>
  );
}
