import React from "react";
import AboutUsImage from './image/AboutUs.png';

const AboutUs = () => {
  return (
    
    <div className="flex flex-col sm:flex-row items-center justify-center px-4 py-16 bg-gradient-to-r from-white to-[#eaf5f1] relative">

  {/* White Circle Background */}
  <div className="absolute bg-white w-[300px] m-[-50px] h-[300px] sm:w-[500px] sm:h-[350px] md:w-[550px] md:h-[450px] lg:w-[700px] lg:h-[500px] shadow-[0_-4px_10px_rgba(0,0,0,0.1)] xl:mr-[-300px] xl:w-[800px] xl:h-[500px] left-0 rounded-r-[300px] rounded-br-[300px] z-0"></div>

  {/* Image Section */}
  <div className="w-full sm:w-1/2 flex justify-center mb-10 sm:mb-0 relative z-10">
    <img
      src={AboutUsImage}
      alt="About Us"
      className="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-auto"
    />
  </div>

  {/* Text Section */}
  <div className="w-full sm:w-1/2 px-4 text-center sm:text-left relative z-10">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#193270] mb-4 sm:mb-6">
      About Us
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
      Modern businesses generate vast amounts of data from multiple sources, making data
      management a critical challenge. Our Data Warehousing & ETL Solutions help organizations
      centralize, process, and transform raw data into meaningful insights. Whether you need a
      scalable data warehouse, automated ETL pipelines, or real-time data processing, we provide
      end-to-end solutions that enhance data-driven decision-making.
    </p>
  </div>
</div>

  );
};

export default AboutUs;
