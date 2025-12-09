import { ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SEO from "../seo/SEO";
import { whatsappMessage } from "../utils/whatsappMessage";

export default function Contacto() {
  const whatsappUrl = whatsappMessage();

  return (
    <>
      <SEO
        title="Contacto | Taller Mecánico en Castellón | WhatsApp, Mapa, Teléfono y Dirección"
        description="Contacta con J&J Motors Garage en Castellón. Teléfono, WhatsApp, horario y dirección. Resolvemos cualquier duda sobre tu vehículo."
        canonical="/contacto"
      />

      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="pt-28 pb-9 md:pt-32 md:pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Contacto y <span className="text-primary">Ubicación</span>
          </motion.h1>

          <p className="text-gray-400 mt-4 max-w-xl">
            Estamos aquí para ayudarte. Puedes llamarnos, escribirnos por
            WhatsApp o visitarnos en nuestro taller en Castellón.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT INFO + MAP ---------- */}
      <section className="bg-zinc-950 text-white py-9 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-white/10 shadow-xl h-[350px] md:h-[450px]"
          >
            <iframe
              src="https://www.google.com/maps?q=Av.+de+Europa,+217,+12006+Castell%C3%B3n+de+la+Plana,+Castell%C3%B3n&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              title="Mapa de J&J Motors Garage"
            ></iframe>
          </motion.div>

          {/* CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-semibold mb-6">
              Información de contacto
            </h2>

            <div className="space-y-6 text-gray-300">
              <p className="flex items-start gap-3 leading-relaxed">
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
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                className="bg-primary px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                WhatsApp
              </a>

              <a
                href="https://www.google.com/maps?q=Av.+de+Europa,+217"
                target="_blank"
                className="border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold"
              >
                Ver en Google Maps
              </a>
            </div>
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
