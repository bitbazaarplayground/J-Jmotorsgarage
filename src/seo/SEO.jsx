import { Link as LinkTag, Meta, Title } from "react-head";

export default function SEO({ title, description, canonical, image }) {
  const siteUrl = "https://jjmotorsgarage.es";
  const url = canonical ? siteUrl + canonical : siteUrl;

  // Use logo.jpg as the default OG image
  const ogImage = image || `${siteUrl}/logo.jpg`;

  return (
    <>
      {/* Page Title */}
      <Title>{title}</Title>

      {/* Meta Description */}
      <Meta name="description" content={description} />
      <meta
        name="google-site-verification"
        content="1hRdCmIfOigEXBSAdegjl-ex4fHy7oWi35_Ar-InMKY"
      />
      {/* Canonical URL */}
      <LinkTag rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:url" content={url} />
      <Meta property="og:image" content={ogImage} />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:type" content="website" />
      <Meta property="og:locale" content="es_ES" />

      {/* Twitter / WhatsApp */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:image" content={ogImage} />
    </>
  );
}
