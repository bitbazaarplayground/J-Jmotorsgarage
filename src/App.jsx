import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import AvisoLegal from "./pages/AvisoLegal";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Privacidad from "./pages/Privacidad";
import Servicios from "./pages/Servicios";
import Ubicacion from "./pages/Ubicacion";
import LocalBusinessSchema from "./seo/LocalBusinessSchema";

function App() {
  return (
    <>
      <LocalBusinessSchema />

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
