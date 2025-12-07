import { motion } from "framer-motion";

export default function Navbar() {
  const whatsappLink =
    "https://wa.me/34600111222?text=Hola,+quiero+pedir+información";

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-xl font-bold tracking-wide">
          J&J Motors Garage
        </h1>

        <div className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <a href="/" className="hover:text-primary transition">
            Inicio
          </a>
          <a href="/servicios" className="hover:text-primary transition">
            Servicios
          </a>
          <a href="/contacto" className="hover:text-primary transition">
            Contacto
          </a>

          <a href="/ubicacion" className="hover:text-primary transition">
            Ubicación
          </a>
          <a href="/sobre-nosotros" className="hover:text-primary transition">
            Sobre nosotros
          </a>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition text-sm font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </motion.nav>
  );
}
