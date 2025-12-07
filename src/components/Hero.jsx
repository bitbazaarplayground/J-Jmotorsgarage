import { motion } from "framer-motion";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/34600111222?text=Hola,+quiero+pedir+información";

  return (
    <section className="min-h-screen bg-dark text-white flex items-center pt-20 w-full">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Tu taller de confianza en{" "}
            <span className="text-primary">Castellón</span>
          </h1>

          <p className="mt-5 text-lg text-gray-300">
            Mecánica, diagnosis y mantenimiento profesional para tu vehículo.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href={whatsappLink}
              className="bg-primary px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              WhatsApp
            </a>

            <a
              href="tel:+34600111222"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold"
            >
              Llamar
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1500"
            alt="Mecánico trabajando en un coche"
            className="rounded-lg shadow-lg object-cover w-full h-[400px] md:h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
