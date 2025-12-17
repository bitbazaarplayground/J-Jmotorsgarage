import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import AvisoLegal from "./pages/AvisoLegal";
import Contacto from "./pages/Contacto";
import CookieBanner from "./pages/CookieBanner";
import Home from "./pages/Home";
import PoliticaCookies from "./pages/PoliticaCookies";
import Privacidad from "./pages/Privacidad";
import Servicios from "./pages/Servicios";
import Ubicacion from "./pages/Ubicacion";
import LocalBusinessSchema from "./seo/LocalBusinessSchema";

function App() {
  return (
    <>
      <LocalBusinessSchema />

      <BrowserRouter>
        <CookieBanner />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<PoliticaCookies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
