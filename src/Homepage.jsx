// HomePage.jsx (or App.js)
import React from 'react';
import Hero from './Hero';
import Contactform from './Contactform';

const HomePage = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <Hero scrollToContact={scrollToContact} />
      {/* Other components if you have them */}
      <Contactform />
    </div>
  );
};

export default HomePage;