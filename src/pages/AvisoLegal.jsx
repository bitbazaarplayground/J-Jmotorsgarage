import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SEO from "../seo/SEO";

export default function AvisoLegal() {
  return (
    <>
      <SEO
        title="Aviso Legal | J&J Motors Garage"
        description="Aviso legal del sitio web de J&J Motors Garage, taller mecánico en Castellón."
        canonical="/aviso-legal"
      />

      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Aviso <span className="text-primary">Legal</span>
          </motion.h1>

          <p className="text-gray-400 max-w-2xl">
            Información legal según la Ley de Servicios de la Sociedad de la
            Información (LSSI).
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-zinc-950 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Titularidad del sitio web
            </h2>
            <p>
              Titular: <strong>Juan Olaya Edo</strong>
              <br />
              NIF/CIF: <strong>CIF: B24781973</strong>
              <br />
              Dirección: Av. de Europa, 217, 12006 Castellón de la Plana, España
              <br />
              Email: jjmotorsgarage@gmail.com
              <br />
              Teléfono: +34 711 20 70 67
              <br />
              Dominio: https://jjmotorsgarage.es
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. Uso del sitio web
            </h2>
            <p>
              El acceso y uso de este sitio web atribuye la condición de usuario
              e implica la aceptación de las condiciones aquí reflejadas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos del sitio web son propiedad del titular o se
              utilizan con autorización. Queda prohibida su reproducción sin
              consentimiento expreso.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Responsabilidad del usuario
            </h2>
            <p>
              El usuario se compromete a usar el sitio web de forma adecuada y a
              no realizar actividades ilícitas o que dañen a terceros.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Enlaces externos
            </h2>
            <p>
              El sitio puede contener enlaces a terceros. El titular no es
              responsable del contenido de dichas páginas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Protección de datos
            </h2>
            <p>
              El tratamiento de datos personales se detalla en nuestra Política
              de Privacidad.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Legislación aplicable
            </h2>
            <p>Este aviso legal se rige por la legislación española.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
