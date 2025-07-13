import react from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Keybenefits from './Keybenefits.jsx';
import AboutUs from './AboutUs.jsx';
import Features from './Features.jsx';
import Works from './Works.jsx';
import Business from './Business.jsx';
import ChooseUs from './ChooseUs.jsx';
import Contactform from './Contactform.jsx';
import Footer from './Footer.jsx';
import Whatsapp from './Whatsapp.jsx';

function App() {
  return (
    <>
    <div
  className="w-full"
  style={{
    height: '90vh', 
    background: 'linear-gradient(to bottom, #e1f3ed, #fcfdfd)',
  }}
>
  <Navbar />
  <Hero/>
  <Keybenefits />
  <AboutUs />
  <Features />
  <Works />
  <Business />
  <ChooseUs />
  <Contactform />
  <Footer />
  <Whatsapp />
</div>

   
            
    </>
  );
}

export default App;
