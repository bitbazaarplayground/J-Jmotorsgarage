import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { whatsappMessage } from "../utils/whatsappMessage";
import logo from "/img/logo.jpg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuPanelRef = useRef(null);

  const whatsappLink = whatsappMessage();

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const focusMenu = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = menuPanelRef.current?.querySelectorAll(
        'a[href], button:not([disabled])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMobileMenu, mobileOpen]);

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
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex space-x-8 text-white text-sm font-medium"
          >
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
          </nav>

          {/* DESKTOP WHATSAPP BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition text-sm font-semibold"
          >
            WhatsApp
          </a>

          {/* MOBILE HAMBURGER ICON */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
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
            onClick={closeMobileMenu}
            aria-hidden="true"
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
            id="mobile-navigation"
            ref={menuPanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            {/* CLOSE BUTTON */}
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Cerrar menú de navegación"
              className="absolute top-4 right-4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              onClick={closeMobileMenu}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>

            {/* MENU LINKS */}
            <nav aria-label="Navegación móvil" className="mt-12 space-y-6 text-lg">
              <Link
                to="/"
                className="block hover:text-primary"
                onClick={closeMobileMenu}
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className="block hover:text-primary"
                onClick={closeMobileMenu}
              >
                Servicios
              </Link>
              <Link
                to="/contacto"
                className="block hover:text-primary"
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
              <Link
                to="/sobre-nosotros"
                className="block hover:text-primary"
                onClick={closeMobileMenu}
              >
                Sobre nosotros
              </Link>
            </nav>

            {/* WHATSAPP BUTTON */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
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
