import React from 'react';
import { FaSyncAlt } from "react-icons/fa";  // Reload icon
import image from './Image/contact-Image.jpg';

const Contactform = () => {
  return (
    <section className="bg-[#f0fffa] min-h-screen flex justify-end items-center p-6">
      <div className="rounded-[20px]">
        <img src={image} alt="" className='h-[600px] mt-[62px] w-[800px] sm:h-[550px] xl:h-[600px] xl:w-[800px] rounded-l-4xl shadow-xl'/>
      </div>
      {/* Heading + Form Card Container */}
      <div className="flex flex-col items-start w-full lg:w-[40%] md:w-[50%]">
        {/* Heading */}
        <h1 className="text-3xl xl:text-4xl font-bold mb-6 text-[#141414]">
          Get in Touch With Us!
        </h1>

        {/* Form Card */}
        <div className="bg-[#d0c9c9] p-6 rounded-tr-4xl rounded-br-4xl w-full space-y-8 shadow-xl xl:h-[600px]">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name:"
            className="w-full px-4 py-2 rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-black placeholder:text-gray-500"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email:"
            className="w-full px-4 py-2 rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-black placeholder:text-gray-500"
          />

          {/* Message Input */}
          <textarea
            placeholder="Message:"
            rows="4"
            className="w-full px-4 py-2 rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-black placeholder:text-gray-500 resize-none"
          ></textarea>

          {/* Captcha Input */}
          <input
            type="text"
            placeholder="Enter Captcha"
            className="w-full px-4 py-2 rounded-md border bg-white text-black placeholder:text-gray-500"
          />

          {/* Captcha Image & Reload */}
          <div className="flex items-center gap-2">
            <img
              src="https://dummyimage.com/200x50/db0000/ffffff&text=S+N+B+9+T"
              alt="captcha"
              className="h-[50px] w-[200px] object-cover"
            />
            <button className="bg-gray-200 hover:bg-green-300 text-green-700 p-3 rounded-md">
              <FaSyncAlt />
            </button>
          </div>

          {/* Submit Button */}
          <button className="bg-gradient-to-r hover: from-orange-400 to-yellow-400 text-white text-lg font-semibold py-2 px-6 rounded-full hover:shadow-md">
            Send Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contactform;