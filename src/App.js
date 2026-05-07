import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import Exhibitions from "./Pages/Exhibitions/Exhibitions";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:gallerySlug" element={<Gallery />} />
        <Route path="exhibitions" element={<Exhibitions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
