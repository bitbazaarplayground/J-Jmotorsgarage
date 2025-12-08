import { Link as LinkTag, Meta, Title } from "react-head";

export default function SEO({ title, description, canonical, image }) {
  const siteUrl = "https://jjmotorsgarage.es";
  const url = canonical ? siteUrl + canonical : siteUrl;
  const ogImage = image || `${siteUrl}/og-image.jpg`;

  return (
    <>
      <Title>{title}</Title>

      <Meta name="description" content={description} />

      <LinkTag rel="canonical" href={url} />

      {/* Open Graph */}
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:url" content={url} />
      <Meta property="og:image" content={ogImage} />
      <Meta property="og:type" content="website" />
      <Meta property="og:locale" content="es_ES" />

      {/* Twitter / WhatsApp */}
      <Meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
