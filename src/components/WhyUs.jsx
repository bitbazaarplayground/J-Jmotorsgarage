import {
  ClockIcon,
  CurrencyEuroIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    title: "Técnicos certificados",
    description:
      "Profesionales con amplia experiencia en mecánica y diagnosis.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Servicio rápido",
    description: "Reparaciones y mantenimientos en tiempos competitivos.",
    icon: ClockIcon,
  },
  {
    title: "Precios transparentes",
    description: "Sin sorpresas: presupuesto claro y honesto.",
    icon: CurrencyEuroIcon,
  },
  {
    title: "Calidad garantizada",
    description:
      "Piezas de alta calidad y garantía en todos nuestros trabajos.",
    icon: WrenchIcon,
  },
];

export default function WhyUs() {
  return (
    <section className="bg-zinc-950 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          ¿Por qué <span className="text-primary">elegirnos</span>?
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-zinc-900 p-6 rounded-xl border border-white/5 shadow-sm hover:shadow-primary/30 transition"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
