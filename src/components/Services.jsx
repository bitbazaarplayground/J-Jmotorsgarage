import {
  AdjustmentsHorizontalIcon,
  BoltIcon,
  Cog6ToothIcon,
  SparklesIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const services = [
  {
    title: "Mantenimiento y revisiones",
    description:
      "Revisiones completas, cambio de filtros y mantenimiento preventivo.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Cambio de aceite",
    description:
      "Servicio rápido y profesional con aceites y filtros de alta calidad.",
    icon: BoltIcon,
  },
  {
    title: "Frenos y suspensión",
    description:
      "Sustitución de pastillas, discos, amortiguadores y alineación.",
    icon: TruckIcon,
  },
  {
    title: "Diagnosis electrónica",
    description:
      "Identificación precisa de averías mediante sistemas avanzados.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Neumáticos",
    description: "Montaje, equilibrado y reparación de pinchazos.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Reparaciones de motor",
    description: "Reparaciones completas y soluciones para cualquier avería.",
    icon: SparklesIcon,
  },
];

export default function Services() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ---------- TITLE (Flash-free) ---------- */}
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nuestros <span className="text-primary">Servicios</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                // ---------- FLASH-FREE ANIMATION ----------
                initial={false}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-zinc-900/60 p-6 rounded-xl border border-white/10 shadow-lg overflow-hidden backdrop-blur-sm group hover:bg-zinc-900/80 transition"
              >
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] bg-gradient-to-br from-zinc-800 to-black" />

                <div className="relative">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
