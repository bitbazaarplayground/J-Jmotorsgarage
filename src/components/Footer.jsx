import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 py-10 md:py-12 border-t border-white/10">
      {/* GRID: 1 col mobile, 2 tablet, 3 desktop */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* BRANDING */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            J&J Motors <span className="text-primary">Garage</span>
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed max-w-[90%] md:max-w-none">
            Taller mecánico profesional en Castellón. Mantenimiento, diagnosis y
            reparaciones de confianza con atención personalizada.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Enlaces</h4>

          <ul className="grid grid-cols-2 gap-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/contacto" className="hover:text-primary transition">
                Contacto
              </Link>
            </li>

            <li>
              <Link to="/servicios" className="hover:text-primary transition">
                Servicios
              </Link>
            </li>

            <li>
              <Link to="/aviso-legal" className="hover:text-primary transition">
                Aviso Legal
              </Link>
            </li>

            <li className="col-span-2">
              <Link to="/privacidad" className="hover:text-primary transition">
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL / THIRD COLUMN */}
        <div className="hidden md:block">
          <h4 className="text-lg font-semibold text-white mb-4">Síguenos</h4>
          <p className="text-gray-500 text-sm">Próximamente redes sociales…</p>
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
