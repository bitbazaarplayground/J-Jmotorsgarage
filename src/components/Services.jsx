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
    <section className="bg-black py-9 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION TITLE */}
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12"
        >
          Nuestros <span className="text-primary">Servicios</span>
        </motion.h2>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-zinc-900/60 p-6 rounded-xl border border-white/10 shadow-lg overflow-hidden backdrop-blur-sm group hover:bg-zinc-900/80 transition"
              >
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] bg-gradient-to-br from-zinc-800 to-black" />

                {/* CONTENT */}
                <div className="relative">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm max-w-[90%] sm:max-w-none leading-relaxed">
                    {service.description}
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
