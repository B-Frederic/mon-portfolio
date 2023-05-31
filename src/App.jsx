// React
import { BrowserRouter, Route, Routes } from "react-router-dom"
// Pages
import Home from "./pages/Home";
import Profil from "./pages/Profil";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;