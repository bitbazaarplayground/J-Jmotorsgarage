import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HeadProvider } from "react-head";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { loadGoogleAnalytics } from "./utils/loadGoogleAnalytics";

const MEASUREMENT_ID = "G-PLH8535DWB";

const consent = localStorage.getItem("cookieConsent");

if (consent === "accepted") {
  loadGoogleAnalytics(MEASUREMENT_ID);
}

const app = (
  <React.StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");

// Vite dev serves the empty shell, while production pages contain prerendered
// elements. Hydration preserves the static HTML and attaches React behaviour.
if (rootElement.childElementCount > 0) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

// const consent = localStorage.getItem("cookieConsent");

// if (consent === "accepted") {
//   const script = document.createElement("script");
//   script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
//   script.async = true;
//   document.head.appendChild(script);

//   window.dataLayer = window.dataLayer || [];
//   function gtag(){window.dataLayer.push(arguments);}
//   gtag("js", new Date());
//   gtag("config", "G-XXXXXXXXXX", { anonymize_ip: true });
// }
