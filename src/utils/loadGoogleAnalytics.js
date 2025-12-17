export function loadGoogleAnalytics(measurementId) {
  if (window.gtag) return; // Prevent double load

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", measurementId, {
    anonymize_ip: true,
  });
}
