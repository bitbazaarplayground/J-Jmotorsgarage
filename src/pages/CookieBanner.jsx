import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    window.location.reload();
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-black border-t border-white/10 p-5 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <p className="text-sm text-gray-300 max-w-3xl">
          Utilizamos cookies propias y de terceros (Google Analytics) para
          analizar el uso de la web. Puedes aceptar o rechazar su uso. Más
          información en nuestra{" "}
          <Link
            to="/cookies"
            className="underline hover:text-primary transition"
          >
            Política de Cookies
          </Link>
          .
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-sm border border-white/20 text-white hover:bg-white/10 transition rounded"
          >
            Rechazar
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-primary text-black font-semibold rounded hover:opacity-90 transition"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
