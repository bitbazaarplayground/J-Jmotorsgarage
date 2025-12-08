export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Necesito pedir cita previa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Recomendamos pedir cita previa para garantizar disponibilidad, pero también atendemos reparaciones rápidas siempre que sea posible.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda normalmente una reparación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del tipo de servicio. Mantenimientos básicos suelen completarse el mismo día; reparaciones más complejas pueden requerir más tiempo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Trabajáis con todas las marcas de coche?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, realizamos mantenimiento y reparaciones en vehículos de todas las marcas.",
        },
      },
    ],
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
