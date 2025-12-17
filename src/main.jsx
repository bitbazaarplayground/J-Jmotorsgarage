import React from "react";
import ReactDOM from "react-dom/client";
import { HeadProvider } from "react-head";
import App from "./App.jsx";
import "./index.css";
import { loadGoogleAnalytics } from "./utils/loadGoogleAnalytics";

const MEASUREMENT_ID = "G-PLH8535DWB";

const consent = localStorage.getItem("cookieConsent");

if (consent === "accepted") {
  loadGoogleAnalytics(MEASUREMENT_ID);
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeadProvider>
      <App />
    </HeadProvider>
  </React.StrictMode>
);

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
