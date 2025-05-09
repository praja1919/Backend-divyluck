<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import S from './components/Etheniccards';
// import VastraKosh from './components/VastraKosh';
// import Resources from './components/Resources';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import EmailPopup from './components/EmailPopup';
 import Roll from './components/Roll';
//import Etheniccards from './components/Etheniccards';
import Fashion from './components/Fashion';
 import ExploreDesigners from './components/ExploreDesigner';
import ExploreTailor from './components/ExploreTailor';
import ShopRegistration from './components/ShopRegistration';
=======
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shringar from "./components/Shringar";
import VastraKosh from "./components/VastraKosh";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Newnav from "./components/Newnav";

>>>>>>> 0997eb4751e4ea61c6fbbf1e585f80afa2f62b94

function App() {
  const location = useLocation();

  // Show Newnav on all pages except the home ("/")
  const showNewnav = location.pathname !== "/";

  return (
    <>
<<<<<<< HEAD
    <EmailPopup></EmailPopup>
 <ShopRegistration>
  
 </ShopRegistration>
     
           <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/fashion" element={<Fashion/>} />
        <Route path="/ExploreDesigner" element={<ExploreDesigners />} />
        <Route path="/ExploreTailor" element={<ExploreTailor />} />
        <Route path="/Roll" element={<Roll />} />
        {/* <Route path="/vastrakosh" element={<VastraKosh />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
  
=======
      {showNewnav ? <Newnav /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/shringar" element={<Shringar />} />
        <Route path="/vastrakosh" element={<VastraKosh />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

>>>>>>> 0997eb4751e4ea61c6fbbf1e585f80afa2f62b94
      <Footer />
    </>
  );
}

export default App;
