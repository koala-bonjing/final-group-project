import { Button } from "@/components/ui/button";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import WelcomePage from "./pages/LandingPage";
import VenuePage from "./pages/VenuePage";
import AddonsPage from "./pages/AddonsPage";
import MealsPage from "./pages/MealsPage";
import { Navbar1 } from "./components/ui/navbar-1";

function AppContent() {
  const location = useLocation();
  const showNarbar = ["/venue", "/meals", "/addons"].includes(
    location.pathname
  );

  return (
    <>
      {showNarbar && <Navbar1 />}
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/venue" element={<VenuePage />}></Route>
        <Route path="/addons" element={<AddonsPage />}></Route>
        <Route path="/meals" element={<MealsPage />}></Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
