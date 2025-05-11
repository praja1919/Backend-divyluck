import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shringar from "./components/Shringar";
import VastraKosh from "./components/VastraKosh";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Newnav from "./components/Newnav";
import TailorRegistration from './components/Tailorregistration';



function App() {
  const location = useLocation();

  // Show Newnav on all pages except the home ("/")
  const showNewnav = location.pathname !== "/";

  return (
    <>
      {showNewnav ? <Newnav /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/shringar" element={<Shringar />} />
        <Route path="/vastrakosh" element={<VastraKosh />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
