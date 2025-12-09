import {
  ClockIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const items = [
  {
    title: "Técnicos certificados",
    description:
      "Profesionales con amplia experiencia en mecánica y diagnosis, garantizando resultados de calidad en cada reparación.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Servicio rápido",
    description:
      "Reparaciones y mantenimientos en tiempos competitivos sin sacrificar calidad.",
    icon: ClockIcon,
  },
  {
    title: "Diagnosis electrónica avanzada",
    description:
      "Equipos actualizados para localizar fallos con máxima precisión y rapidez.",
    icon: CpuChipIcon,
  },
  {
    title: "Transparencia total",
    description:
      "Explicamos cada reparación de forma clara, sin costes ocultos ni sorpresas.",
    icon: Handshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* ---------- TITLE (Flash-free, fade only) ---------- */}
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          ¿Por qué <span className="text-primary">Elegirnos</span>?
        </motion.h2>

        {/* ---------- GRID ---------- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                // FLASH-FREE: no y-movement, no initial opacity reset
                initial={false}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:bg-white/10 transition group"
              >
                {/* ICON */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 border border-primary/30 mb-4 group-hover:bg-primary/30 transition">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* CONTENT */}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
