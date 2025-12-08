import { motion } from "framer-motion";

export default function TestimonialCard({ name, text, role }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-zinc-900 border border-white/10 p-6 rounded-xl shadow-lg"
    >
      <p className="text-gray-300 italic mb-4">"{text}"</p>

      <h4 className="text-white font-semibold">{name}</h4>
      {role && <p className="text-sm text-gray-500">{role}</p>}
    </motion.div>
  );
}
