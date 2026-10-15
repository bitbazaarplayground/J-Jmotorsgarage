import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./pages/CookieBanner";
import { PublicRoutes } from "./routes";
import LocalBusinessSchema from "./seo/LocalBusinessSchema";

function App() {
  return (
    <>
      <LocalBusinessSchema />
      <CookieBanner />
      <ScrollToTop />
      <PublicRoutes />
    </>
  );
}

export default App;
