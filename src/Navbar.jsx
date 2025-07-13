import React from 'react';
import logo from './Image/logo-light.jpg'; 
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#e1f3ed] px-4 py-2">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        
        {/* Logo */}
        <img
          src={logo} 
          alt="Logo"
          className="h-14 object-contain mb-2 sm:mb-0 lg:ml-40"  
        />

        {/* Call Section */}
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <IoIosCall size={30} color="black" />
          <span className="text-2xl font-bold text-[#922AF0]">9766331360</span>
        </div>

        {/* WhatsApp Button */}
        <div className="flex items-center bg-[#922AF0] xl:mr-80 text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-xl cursor-pointer">
          <span className="mr-2">Want to Connect</span>
          <FaWhatsapp size={18} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
