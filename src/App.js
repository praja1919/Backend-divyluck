import { Routes, Route, useLocation } from 'react-router-dom';
import Newnav from './components/Newnav'; // Use Newnav instead of Navbar
import VastraKosh from './components/VastraKosh';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmailPopup from './components/EmailPopup';
import Roll from './components/Roll';
import Fashion from './components/Fashion';
import ExploreDesigners from './components/ExploreDesigner';
import ExploreTailor from './components/ExploreTailor';
import ShopRegistration from './components/ShopRegistration';
import Navbar from './components/Navbar'; // Home page navbar
import TailorRegistration from './components/Tailorregistration';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <EmailPopup />

      {/* Show Newnav only if not on home page */}
      {isHomePage ? <Navbar /> : <Newnav />}

      <Routes>
        <Route path="/" element={<Fashion />} /> {/* Assuming Fashion is your homepage */}
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/ExploreDesigner" element={<ExploreDesigners />} />
        <Route path="/ExploreTailor" element={<ExploreTailor />} />
        <Route path="/Roll" element={<Roll />} />
        <Route path="/vastrakosh" element={<VastraKosh />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopregistration" element={<ShopRegistration />} />
         <Route path="/tailorregistration" element={<TailorRegistration />} />
        {/* Add similar routes for tailor and user registration if needed */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
