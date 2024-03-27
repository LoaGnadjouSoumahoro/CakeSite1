import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavLinks from "./components/NavLinks";
import Home from "./pages/Home";
import "./css/app.css";
import LocalPickup from "./pages/LocalPickup";
import Catering from "./pages/Catering";

function App() {
  return (
    <>
      <NavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/localPickup" element={<LocalPickup />} />
        <Route path="/catering" element={<Catering />} />
      </Routes>
    </>
  );
}

export default App;
