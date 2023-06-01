// React
import { BrowserRouter, Route, Routes } from "react-router-dom"
// Pages
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;