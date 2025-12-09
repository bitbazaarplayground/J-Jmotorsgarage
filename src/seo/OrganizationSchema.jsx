export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://jjmotorsgarage.es/#organization",
    name: "J&J Motors Garage",
    url: "https://jjmotorsgarage.es",
    logo: "https://jjmotorsgarage.es/logo.jpg",
    email: "jjmotorsgarage@gmail.com",
    telephone: "+34 711 20 70 67",

    // Recommended by Google for customer service
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+34 711 20 70 67",
        contactType: "customer service",
        areaServed: "ES",
        availableLanguage: ["Spanish"],
      },
    ],

    sameAs: [
      "https://maps.app.goo.gl/BuJ8qJc3qJ2K5gdp8",
      // Add Instagram, Facebook, TikTok if created later
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
