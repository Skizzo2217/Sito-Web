import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Architettura from "./pages/Architettura";
import Arte from "./pages/Arte";
import Contatti from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/architettura" element={<Architettura />} />
      <Route path="/arte" element={<Arte />} />
      <Route path="/contact" element={<Contatti />} />
    </Routes>
  );
}

export default App;
