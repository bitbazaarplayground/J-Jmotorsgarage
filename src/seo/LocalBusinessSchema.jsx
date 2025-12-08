export default function LocalBusinessSchema() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          "@id": "https://jjmotorsgarage.es/#business",
          name: "J&J Motors Garage",
          image: "https://jjmotorsgarage.es/og-image.jpg",
          url: "https://jjmotorsgarage.es",
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
            latitude: 39.985713,
            longitude: -0.049264,
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
              closes: "18:00",
            },
          ],
          sameAs: ["https://maps.app.goo.gl/BuJ8qJc3qJ2K5gdp8"],
          description:
            "Taller mecánico en Castellón especializado en mantenimiento, reparación, frenos, suspensión y diagnosis electrónica.",
          makesOffer: [
            { "@type": "Service", name: "Mantenimiento completo" },
            { "@type": "Service", name: "Diagnosis electrónica" },
            { "@type": "Service", name: "Frenos y suspensión" },
            { "@type": "Service", name: "Reparaciones generales" },
          ],
        })}
      </script>
    </>
  );
}
