import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AvisoLegal from "./pages/AvisoLegal";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import PoliticaCookies from "./pages/PoliticaCookies";
import Privacidad from "./pages/Privacidad";
import Servicios from "./pages/Servicios";
import Ubicacion from "./pages/Ubicacion";
import { PUBLIC_PATHS } from "./routePaths";

export function PublicRoutes() {
  return (
    <Routes>
      <Route path={PUBLIC_PATHS[0]} element={<Home />} />
      <Route path={PUBLIC_PATHS[1]} element={<Servicios />} />
      <Route path={PUBLIC_PATHS[2]} element={<Contacto />} />
      <Route path={PUBLIC_PATHS[3]} element={<Ubicacion />} />
      <Route path={PUBLIC_PATHS[4]} element={<About />} />
      <Route path={PUBLIC_PATHS[5]} element={<AvisoLegal />} />
      <Route path={PUBLIC_PATHS[6]} element={<Privacidad />} />
      <Route path={PUBLIC_PATHS[7]} element={<PoliticaCookies />} />
    </Routes>
  );
}
