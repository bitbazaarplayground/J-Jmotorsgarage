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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nuestros <span className="text-primary">Servicios</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-primary/40 transition-shadow border border-white/5"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
