<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shringar from './components/Shringar';
import VastraKosh from './components/VastraKosh';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
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
=======
import { Routes, Route } from 'react-router-dom';
 import Navbar from './components/Navbar';
 import Fashion from './components/Fashion';
 import EmailPopup from './components/EmailPopup';
 //import Tailors from './components/Tailor';
 import  Etheniccards   from './components/Etheniccards.js';
//  import Resources from './components/Resources';
//  import Contact from './components/Contact';
 import Footer from './components/Footer';
 
 function App() {
   return (
     <>
       <Routes>
         <Route path="/" element={<Navbar />} />
         <Route path="/fashion" element={<Fashion />} />
          <Route path="/Etheniccards" element={<Etheniccards/> }/> 
        {/* //  <Route path="/resources" element={<Resources />} />
        //  <Route path="/contact" element={<Contact />} />  */}
       </Routes>
 
       <EmailPopup></EmailPopup>
       <Footer />
     </>
   );
 }
 
 export default App;
>>>>>>> 1d7fb38 (Initial commit)
