import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Endeavors from "./pages/Endeavors";
import Footer from "./sections/Footer";
import AlumniRegistration from "./pages/AlumniRegistration";
import Team from "./pages/Team";
import { Gallery } from "./pages/Gallery";

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/alumni-registration" element={<AlumniRegistration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/endeavors" element={<Endeavors />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {location.pathname !== "/team" && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
