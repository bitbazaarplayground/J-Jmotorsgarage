import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* BRANDING */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            J&J Motors Garage
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Taller mecánico profesional en Castellón. Mantenimiento, diagnosis y
            reparaciones de confianza con atención personalizada.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Enlaces</h4>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-primary transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="/servicios" className="hover:text-primary transition">
                Servicios
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-primary transition">
                Contacto
              </a>
            </li>
            <li>
              <a href="/ubicacion" className="hover:text-primary transition">
                Ubicación
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 text-primary mt-1" />
              <span>Av. de Europa, 217, 12006 Castellón de la Plana</span>
            </li>

            <li className="flex items-start gap-3">
              <PhoneIcon className="h-5 w-5 text-primary mt-1" />
              <a href="tel:+34600111222" className="hover:text-primary">
                +34 711 20 70 67
              </a>
            </li>

            <li className="flex items-start gap-3">
              <EnvelopeIcon className="h-5 w-5 text-primary mt-1" />
              <a href="mailto:info@jjmotors.es" className="hover:text-primary">
                info@jjmotors.es
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} J&J Motors Garage. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
