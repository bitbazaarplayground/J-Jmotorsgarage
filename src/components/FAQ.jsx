import FAQItem from "./FAQItem";

export default function FAQ() {
  const faqs = [
    {
      question: "¿Necesito pedir cita previa?",
      answer:
        "Recomendamos pedir cita previa para garantizar disponibilidad, pero también atendemos reparaciones rápidas siempre que sea posible.",
    },
    {
      question: "¿Cuánto tarda normalmente una reparación?",
      answer:
        "Depende del tipo de servicio. Mantenimientos básicos suelen completarse el mismo día; reparaciones más complejas pueden requerir más tiempo.",
    },
    {
      question: "¿Trabajáis con todas las marcas de coche?",
      answer:
        "Sí, realizamos mantenimiento y reparaciones en vehículos de todas las marcas, tanto diésel como gasolina.",
    },
    {
      question: "¿Utilizáis recambios originales?",
      answer:
        "Podemos instalar recambios originales o equivalentes de alta calidad, según las preferencias del cliente.",
    },
    {
      question: "¿Qué servicios cubre la diagnosis electrónica?",
      answer:
        "La diagnosis detecta fallos en sistemas del vehículo como motor, frenos, sensores, electrónica y módulos de control.",
    },
  ];

  return (
    <section className="bg-black text-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          Preguntas <span className="text-primary">frecuentes</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
