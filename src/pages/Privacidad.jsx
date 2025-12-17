import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SEO from "../seo/SEO";

export default function Privacidad() {
  return (
    <>
      <SEO
        title="Política de Privacidad | J&J Motors Garage"
        description="Política de privacidad de J&J Motors Garage según el RGPD y LOPDGDD."
        canonical="/privacidad"
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
            Política de <span className="text-primary">Privacidad</span>
          </motion.h1>

          <p className="text-gray-400 max-w-2xl">
            Información detallada sobre cómo tratamos tus datos conforme al
            RGPD.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-zinc-950 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8 leading-relaxed">
          {/* RESPONSABLE */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Responsable del tratamiento
            </h2>
            <p>
              Responsable: <strong>j&jmotorsgarage</strong>
              <br />
              NIF/CIF: <strong>B24781973</strong>
              <br />
              Dirección: Av. de Europa, 217, 12006 Castellón de la Plana
              <br />
              Email: jjmotorsgarage@gmail.com
              <br />
              Teléfono: +34 711 20 70 67
            </p>
          </div>

          {/* DATOS QUE RECOPILAMOS */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. Datos que recopilamos
            </h2>
            <p>
              - Información proporcionada por WhatsApp (nombre, teléfono, datos
              del vehículo, consultas).
              <br />- Datos derivados del uso de integraciones como Google Maps.
            </p>
          </div>

          {/* FINALIDAD */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Finalidad del tratamiento
            </h2>
            <p>
              Atender consultas, gestionar citas, ofrecer información sobre
              servicios y comunicaciones relacionadas.
            </p>
          </div>

          {/* LEGITIMACIÓN */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Legitimación
            </h2>
            <p>
              Consentimiento del usuario al contactarnos por WhatsApp y
              **interés legítimo** para responder consultas.
            </p>
          </div>

          {/* CONSERVACIÓN */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Conservación de datos
            </h2>
            <p>
              Los datos se conservarán mientras exista relación comercial o
              hasta que el usuario solicite su eliminación.
            </p>
          </div>

          {/* DESTINATARIOS */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Destinatarios
            </h2>
            <p>
              No se cederán datos a terceros salvo obligación legal. WhatsApp
              puede actuar como encargado.
            </p>
          </div>

          {/* DERECHOS */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Derechos del usuario
            </h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión,
              oposición, portabilidad y limitación enviando un correo a:{" "}
              <strong>jjmotorsgarage@gmail.com</strong>.
            </p>
          </div>

          {/* SEGURIDAD */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Seguridad
            </h2>
            <p>
              Se aplican medidas técnicas razonables para proteger los datos
              intercambiados.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
