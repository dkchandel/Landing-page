import React from 'react';
import { FaDatabase, FaProjectDiagram, FaExchangeAlt, FaBalanceScale, FaLock } from "react-icons/fa";

const Keybenefits = () => {
  const cardData = [
    {
      icon: <FaDatabase />,
      title: "Centralized Data Storage",
      desc: "Consolidate structured and unstructured data from multiple sources.",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Seamless Data Transformation",
      desc: "Clean, process, and standardize data for accurate analytics.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Automated ETL Pipelines",
      desc: "Reduce manual effort with fully automated extraction, transformation, and loading processes.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Scalability & Performance",
      desc: "Handle large datasets with high-speed processing and minimal latency.",
    },
    {
      icon: <FaLock />,
      title: "Enhanced Data Governance",
      desc: "Ensure compliance with GDPR, HIPAA, and enterprise-grade security.",
    },
  ];

  return (
//  <section className="py-12 bg-white">
//   <div className="text-center mb-10">
//     <h1 className="text-[#193270] text-4xl font-bold">Key Benefits</h1>
//   </div>
    
//   {/* First Row: Always 3 boxes */}
//   <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-6 px-4 md:px-12 mb-18">
//     {cardData.slice(0, 3).map((item, index) => (
//       <div
//         key={index}
//         className="rounded-2xl border p-6 w-full transition-all duration-500
//                    bg-white hover:bg-[#6615b7] 
//                    shadow-[0_10px_25px_rgba(0,0,0,0.1)]
//                    hover:shadow-[0_15px_35px_rgba(102,21,183,0.3)]
//                    group"
//       >
//         <div className="text-4xl mb-4 group-hover:text-white">{item.icon}</div>
//         <h2 className="text-xl font-semibold mb-2 text-[#193270] group-hover:text-white">
//           {item.title}
//         </h2>
//         <p className="text-md text-[#333] group-hover:text-white">
//           {item.desc}
//         </p>
//       </div>
//     ))}
//   </div>

//   {/* Second Row: Last 2 boxes - full width look */}
// <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-22 gap-6 px-2 md:px-12 max-w-screen-lg mx-auto">
//   {cardData.slice(3).map((item, index) => (
//     <div
//       key={index}
//       className="rounded-2xl border p-6 w-full transition-all duration-500
//                  bg-white hover:bg-[#6615b7]
//                  shadow-[0_10px_25px_rgba(0,0,0,0.1)]
//                  hover:shadow-[0_15px_35px_rgba(102,21,183,0.3)]
//                  group"
//     >
//       <div className="text-4xl mb-4 group-hover:text-white">{item.icon}</div>
//       <h2 className="text-xl font-semibold mb-2 text-[#193270] group-hover:text-white">
//         {item.title}
//       </h2>
//       <p className="text-md text-[#333] group-hover:text-white">
//         {item.desc}
//       </p>
//     </div>
//   ))}
// </div>

// </section>




<section className="py-12 bg-white">
  <div className="text-center mb-10">
    <h1 className="text-[#193270] text-4xl font-bold">Key Benefits</h1>
  </div>

  {/* First Row: 3 Boxes */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 md:px-12 mb-18">
    {cardData.slice(0, 3).map((item, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-2xl border p-6 w-full transition-all duration-500
                   bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)]
                   group"
      >
        {/* Left overlay */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#6615b7] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>
        
        {/* Right overlay */}
        <div className="absolute top-0 right-0 w-[51%] h-full bg-[#6615b7] translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 text-[#193270] group-hover:text-white transition duration-300">
          <div className="text-4xl mb-4">{item.icon}</div>
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-md text-[#333] group-hover:text-white">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Second Row: Last 2 Boxes */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 md:px-12 max-w-screen-lg mx-auto">
    {cardData.slice(3).map((item, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-2xl border p-6 w-full transition-all duration-500
                   bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)]
                   group"
      >
        {/* Left overlay */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#6615b7] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>
        
        {/* Right overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6615b7] translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 text-[#193270] group-hover:text-white transition duration-300">
          <div className="text-4xl mb-4">{item.icon}</div>
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-md text-[#333] group-hover:text-white">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>



  );
};

export default Keybenefits;
