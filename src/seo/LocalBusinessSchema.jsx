export default function LocalBusinessSchema() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          "@id": "https://www.jjmotorsgarage.es/#business",
          name: "J&J Motors Garage",
          image: "https://www.jjmotorsgarage.es/img/hero.jpg",
          url: "https://www.jjmotorsgarage.es",
          telephone: "+34 711 20 70 67",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. de Europa, 217",
            addressLocality: "Castellón de la Plana",
            postalCode: "12006",
            addressRegion: "Castellón",
            addressCountry: "ES",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 39.9713293,
            longitude: -0.0754966,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "13:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "15:00",
              closes: "18:00",
            },
            // Saturday and Sunday are closed, so no opening specification is supplied.
          ],
          sameAs: ["https://maps.app.goo.gl/cobSHjEwXnWz5mtq8"],
          description:
            "Taller mecánico en Castellón especializado en mantenimiento, reparación, frenos, suspensión y diagnosis electrónica.",
          makesOffer: [
            { "@type": "Service", name: "Mantenimiento general" },
            { "@type": "Service", name: "Cambio de aceite y filtros" },
            { "@type": "Service", name: "Frenos y suspensión" },
            { "@type": "Service", name: "Diagnosis electrónica" },
            { "@type": "Service", name: "Neumáticos y alineación" },
            { "@type": "Service", name: "Reparaciones de motor" },
          ],
        })}
      </script>
    </>
  );
}
