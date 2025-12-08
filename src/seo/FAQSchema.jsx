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

      // ⭐ New FAQ Items
      {
        "@type": "Question",
        name: "¿Cuánto cuesta una diagnosis electrónica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El coste depende del tipo de avería y del vehículo, pero ofrecemos un servicio de diagnosis completo con un presupuesto claro y sin compromiso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Hacéis cambio de pastillas y discos de freno?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, realizamos cambio de pastillas, discos, purgado de frenos y verificamos todo el sistema para garantizar la máxima seguridad.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo pedir un presupuesto antes de hacer la reparación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos presupuestos gratuitos y sin compromiso. Explicamos cada reparación de forma transparente antes de empezar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Preparáis el vehículo para la ITV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, revisamos puntos clave como frenos, luces, neumáticos, emisiones y seguridad para asegurar que tu coche esté listo para pasar la ITV.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué servicios incluye la diagnosis electrónica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La diagnosis detecta fallos en sistemas como motor, ABS, airbag, sensores, electrónica, emisiones y módulos de control, permitiendo localizar averías con precisión.",
        },
      },
    ],
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
