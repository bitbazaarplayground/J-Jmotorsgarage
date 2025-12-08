import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos L.",
      role: "Cliente",
      text: "Servicio rápido y muy profesional. Me explicaron todo con claridad y el coche quedó perfecto.",
    },
    {
      name: "Lucía R.",
      role: "Cliente",
      text: "Taller de confianza en Castellón. Precio justo y un trato excelente. Muy recomendados.",
    },
    {
      name: "Andrés P.",
      role: "Cliente",
      text: "Atención increíble y resultados impecables. Volveré sin duda para el mantenimiento de mi coche.",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          Opiniones de <span className="text-primary">nuestros clientes</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              name={t.name}
              role={t.role}
              text={t.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
