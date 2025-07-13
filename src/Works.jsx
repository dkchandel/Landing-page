import React from 'react';
import work from './Image/work.png';

const Works = () => {
  const boxData = [
    {
      number: '01',
      title: 'Data Extraction',
      desc: 'We extract raw data from various sources, including databases, cloud applications, APIs, and IoT devices.',
    },
    {
      number: '02',
      title: 'Data Transformation & Cleansing',
      desc: 'Our ETL processes clean, structure, and standardize data, ensuring consistency and accuracy.',
    },
    {
      number: '03',
      title: 'Data Loading into Warehouse',
      desc: 'Processed data is securely stored in cloud-based or on-premises data warehouses for seamless analysis.',
    },
    {
      number: '04',
      title: 'Performance Optimization & Indexing',
      desc: 'We optimize data retrieval speed and query performance for efficient reporting and analytics.',
    },
    {
      number: '05',
      title: 'Real-Time Monitoring & Governance',
      desc: 'Continuous monitoring ensures data integrity, security compliance, and adaptive improvements.',
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-white to-[#eaf5f1]">
      <div className="container mx-auto px-4 xl:px-20 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Section (Text Boxes) */}
        <div className="w-full md:w-1/2 relative z-10">
          <h1 className="text-[#193270] text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-6 md:mb-10 text-center md:text-left">
            How It Works
          </h1>

          <div className="space-y-4 sm:space-y-5">
            {boxData.map((item, index) => (
              <div
                key={index}
                className="flex items-start bg-white rounded-xl px-3 py-4 sm:px-5 sm:py-5 shadow-md hover:shadow-lg transition duration-300 border border-transparent hover:border-3 hover:border-[#B84AF4]"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#B84AF4] text-white font-bold rounded-full text-sm sm:text-lg mr-3 sm:mr-4">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-md sm:text-lg md:text-xl font-bold text-[#193270] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Image + Circle) */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* White Background Circle */}
          <div className="absolute bg-white w-[300px] m-[-50px] h-[300px] sm:w-[650px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[500px] shadow-[0_-4px_10px_rgba(0,0,0,0.1)] xl:mr-[-300px] xl:w-[1000px] xl:h-[600px] right-0 rounded-l-[300px] rounded-br-[100px] z-0"></div>

          {/* Image */}
          <img
            src={work}
            alt="how-it-works"
            className="relative z-10 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Works;
