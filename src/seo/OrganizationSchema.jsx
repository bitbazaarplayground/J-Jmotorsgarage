export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://jjmotorsgarage.es/#organization",
    name: "J&J Motors Garage",
    url: "https://jjmotorsgarage.es",
    logo: "https://jjmotorsgarage.es/og-image.jpg",
    email: "jjmotorsgarage@gmail.com",
    telephone: "+34 711 20 70 67",
    sameAs: [
      "https://maps.app.goo.gl/BuJ8qJc3qJ2K5gdp8",
      // Add Instagram or Facebook if you ever create them
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. de Europa, 217",
      addressLocality: "Castellón de la Plana",
      postalCode: "12006",
      addressRegion: "Castellón",
      addressCountry: "ES",
    },
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
