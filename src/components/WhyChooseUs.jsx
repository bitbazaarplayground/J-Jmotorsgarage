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
    <section className="bg-black text-white py-9 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12"
        >
          ¿Por qué <span className="text-primary">Elegirnos</span>?
        </motion.h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-zinc-900/60 p-6 rounded-xl border border-white/10 shadow-lg overflow-hidden backdrop-blur-sm hover:bg-zinc-900/80 transition group"
              >
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] bg-gradient-to-br from-zinc-800 to-black" />

                {/* CONTENT */}
                <div className="relative">
                  <div className="mb-4">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
