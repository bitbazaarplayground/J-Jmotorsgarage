import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const whatsappLink =
    "https://wa.me/34711207067?text=Hola,+quiero+pedir+información"; // <-- updated phone number

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO / TITLE */}
        <Link to="/" className="text-white text-xl font-bold tracking-wide">
          J&J Motors Garage
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <Link to="/" className="hover:text-primary transition">
            Inicio
          </Link>

          <Link to="/servicios" className="hover:text-primary transition">
            Servicios
          </Link>

          <Link to="/contacto" className="hover:text-primary transition">
            Contacto
          </Link>

          <Link to="/sobre-nosotros" className="hover:text-primary transition">
            Sobre nosotros
          </Link>
        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition text-sm font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </motion.nav>
  );
}
