import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Navbar from "../components/Navbar";

export default function Contacto() {
  const whatsappNumber = "34711207067"; // no "+" inside wa.me link
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola,+quiero+pedir+información`;

  const embedMap =
    "https://www.google.com/maps?q=Av.+de+Europa,+217,+12006+Castell%C3%B3n+de+la+Plana,+Castell%C3%B3n&output=embed";

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE — CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>

            <p className="text-gray-300 mb-8">
              Estamos aquí para ayudarte con cualquier duda, consulta o
              solicitud de reparación. Puedes llamarnos, enviarnos un WhatsApp o
              visitarnos en nuestro taller.
            </p>

            <div className="space-y-5 text-gray-300">
              <p className="flex items-start gap-3">
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
                <EnvelopeIcon className="h-6 w-6 text-primary" />
                <a
                  href="mailto:info@jjmotors.es"
                  className="hover:text-primary"
                >
                  info@jjmotors.es
                </a>
              </p>

              <p className="flex items-start gap-3">
                <ClockIcon className="h-6 w-6 text-primary" />
                L–V: 8:00–13:30 / 15:00–18:00
              </p>

              <div className="pt-4 flex gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  className="bg-primary px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Enviar WhatsApp
                </a>

                <a
                  href="tel:+34711207067"
                  className="border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold"
                >
                  Llamar ahora
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — MAP */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
        </div>
      </section>

      <Footer />
    </>
  );
}
