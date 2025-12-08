import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Ubicacion from "./pages/Ubicacion";
import LocalBusinessSchema from "./seo/LocalBusinessSchema";

function App() {
  return (
    <>
      <LocalBusinessSchema />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/sobre-nosotros" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
