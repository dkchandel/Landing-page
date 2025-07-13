import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  return (
    <div>
        <a href="https://wa.me/919079098456"
        target="_blank"
        rel="noopener noreferrer"
        className='fixed bottom-6 right-6 animate-float bg-green-400 hover:bg-green-500 text-white p-2 rounded-full shadow-lg z-50'
        >
            <FaWhatsapp size={35}/>
        </a>

    </div>
  )
}

export default Whatsapp;


