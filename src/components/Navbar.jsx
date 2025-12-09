import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/about/logo.JPG";
import { whatsappMessage } from "../utils/whatsappMessage";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const whatsappLink = whatsappMessage();

  // Close menu automatically when route changes
  useState(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* NAVBAR TOP */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img
              src={logo}
              alt="J&J Motors Garage logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
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
            <Link
              to="/sobre-nosotros"
              className="hover:text-primary transition"
            >
              Sobre nosotros
            </Link>
          </div>

          {/* DESKTOP WHATSAPP BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition text-sm font-semibold"
          >
            WhatsApp
          </a>

          {/* MOBILE HAMBURGER ICON */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setMobileOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-64 bg-zinc-900 text-white p-6 z-50 shadow-xl border-l border-white/10"
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setMobileOpen(false)}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>

            {/* MENU LINKS */}
            <nav className="mt-10 space-y-6 text-lg">
              <Link
                to="/"
                className="block hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className="block hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                Servicios
              </Link>
              <Link
                to="/contacto"
                className="block hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                Contacto
              </Link>
              <Link
                to="/sobre-nosotros"
                className="block hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                Sobre nosotros
              </Link>
            </nav>

            {/* WHATSAPP BUTTON */}
            <a
              href={whatsappLink}
              target="_blank"
              className="block mt-10 bg-primary text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
