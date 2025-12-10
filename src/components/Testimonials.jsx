import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Laura M.",
    photo: "https://randomuser.me/api/portraits/women/24.jpg",
    text: "Un servicio excelente. Me explicaron todo con claridad y me entregaron el coche antes de lo esperado. Muy profesionales.",
    rating: 5,
  },
  {
    name: "Javier R.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Atención rápida y trato cercano. Se nota que les gusta lo que hacen. Volveré sin duda.",
    rating: 5,
  },
  {
    name: "Marta G.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Fui para una diagnosis y acertaron a la primera. Taller 100% recomendable, transparente y de confianza.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate every 7 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      next();
    }, 7000);

    return () => clearInterval(timerRef.current);
  }, [index]);

  const handleUserClick = (action) => {
    clearInterval(timerRef.current);
    action();
  };

  const t = testimonials[index];

  return (
    <section className="bg-black text-white py-9">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* ---------- TITLE (Updated: opacity only) ---------- */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Opiniones de <span className="text-primary">nuestros clientes</span>
        </motion.h2>

        {/* ---------- CARD (Updated: opacity only) ---------- */}
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-xl"
        >
          {/* PHOTO (added lazy + async for mobile performance) */}
          <img
            src={t.photo}
            alt={t.name}
            loading="lazy"
            decoding="async"
            style={{ contentVisibility: "auto" }}
            className="mx-auto w-20 h-20 rounded-full object-cover border-2 border-primary mb-4"
          />

          {/* NAME */}
          <h3 className="text-xl font-semibold">{t.name}</h3>

          {/* STARS */}
          <div className="flex justify-center gap-1 mt-2 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={18} className="text-primary fill-primary" />
            ))}
          </div>

          {/* TEXT */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            “{t.text}”
          </p>
        </motion.div>

        {/* ARROWS */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() => handleUserClick(prev)}
            className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() => handleUserClick(next)}
            className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
