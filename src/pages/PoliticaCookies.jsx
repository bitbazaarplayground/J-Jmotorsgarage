import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SEO from "../seo/SEO";

export default function PoliticaCookies() {
  return (
    <>
      <SEO
        title="Política de Cookies | J&J Motors Garage"
        description="Política de cookies conforme a la normativa española y RGPD."
        canonical="/cookies"
      />

      <Navbar />

      <section className="pt-32 pb-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Política de <span className="text-primary">Cookies</span>
          </motion.h1>

          <p className="text-gray-400 max-w-2xl">
            Información sobre el uso de cookies conforme al RGPD y la normativa
            española.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8 leading-relaxed text-sm">
          <div>
            <h2 className="text-xl text-white font-semibold mb-2">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos que se descargan en el
              dispositivo del usuario al acceder a determinadas páginas web,
              permitiendo almacenar y recuperar información sobre la navegación.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">
              2. Tipos de cookies utilizadas
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Cookies técnicas:</strong> necesarias para el
                funcionamiento del sitio web.
              </li>
              <li>
                <strong>Cookies de análisis:</strong> permiten medir y analizar
                la navegación de los usuarios (Google Analytics).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">
              3. Cookies de terceros
            </h2>
            <p>
              Este sitio web utiliza Google Analytics, un servicio analítico
              prestado por Google LLC. Google puede utilizar cookies para
              recopilar información de forma anónima.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">
              4. Consentimiento
            </h2>
            <p>
              El usuario puede aceptar o rechazar el uso de cookies de análisis
              a través del banner de cookies. Las cookies no esenciales no se
              instalarán sin su consentimiento.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">
              5. Cómo modificar las cookies
            </h2>
            <p>
              El usuario puede cambiar o retirar su consentimiento en cualquier
              momento desde la configuración del navegador o eliminando las
              cookies almacenadas.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-white font-semibold mb-2">
              6. Legislación aplicable
            </h2>
            <p>
              Esta política se rige por el Reglamento General de Protección de
              Datos (RGPD), la LSSI-CE y las directrices de la Agencia Española
              de Protección de Datos (AEPD).
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
