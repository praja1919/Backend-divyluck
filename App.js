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

function App() {
  return (
    <>
    <EmailPopup></EmailPopup>
 
     
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
  
      <Footer />
    </>
  );
}

export default App;
