import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import image from './Image/webmobi-img.jpg';
import HomePage from './Homepage';

const Hero = ({ scrollToContact }) => {
  return (
    <section className="relative overflow-hidden pb-20 sm:pb-10">
      
      <div className="container mt-[60px] mx-auto px-4 flex flex-col md:flex-row items-center xl:ml-[25vh]">

        {/* ===== TEXT SECTION ===== */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-28 z-10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl xl:text-6xl font-semibold text-[#193270] mb-6">
            Efficient Data <br />
            Management & <br />
            Seamless Integration <br />
            for Scalable Insights
          </h1>

          <p className="text-[#999191] text-[18px] mb-6 z-0">
            Optimize your data pipeline with advanced Data Warehousing & ETL solutions, ensuring seamless integration, transformation, and storage for business intelligence.
          </p>

          <button
            onClick={scrollToContact}
            className="bg-[#E9D7FD] hover:bg-[#6615A2] hover:text-white text-[#6615A2] font-semibold px-6 py-2 rounded-lg flex items-center gap-2"
          >
            Get inTouch <FaArrowRightLong />
          </button>
        </motion.div>

        {/* ===== IMAGE SECTION with RIGHT-SQUARE WHITE BACKGROUND ===== */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* White Shape Background */}
          <div className="absolute shadow-xl bg-white w-[400px] h-[400px] md:w-[700px] mr-[-200px] lg:w-[900px] sm:w-[730px] sm:h-[500px] xl:w-[1000px] xl:h-[600px] right-0 rounded-l-[300px] rounded-br-[100px] z-0"></div>

          {/* Foreground Image */}
          <img
            src={image}
            alt="hero"
            className="relative z-10 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[500px] h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;


