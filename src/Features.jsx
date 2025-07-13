import React from 'react';
import img1 from './Image/digital-marketing.jpg'; 
import img2 from './Image/website-img-3.jpg';
import img3 from './Image/quality-data.jpg';
import img4 from './Image/ma.jpg'; 
import img5 from './Image/download-4.jpg';
import img6 from './Image/security.jpg';

const Features = () => {
  const imageData = [
    {
      image: img1,
      title: "Cloud & On-Premises Data Warehousing",
      desc: "Supports AWS Redshift, Google BigQuery, Snowflake, and more.",
    },
    {
      image: img2,
      title: "Automated Data Extraction & Loading",
      desc: "Connects with databases, APIs, cloud storage, and real-time data streams.",
    },
    {
      image: img3,
      title: "Data Cleansing & Transformation",
      desc: "ETL processes ensure high-quality, structured data.",
    },
    {
      image: img4,
      title: "Real-Time & Batch Processing",
      desc: "Enables instant insights with high-speed data processing.",
    },
    {
      image: img5,
      title: "Scalable Architecture",
      desc: "Designed to handle growing business data needs efficiently.",
    },
    {
      image: img6,
      title: "Advanced Security & Compliance",
      desc: "Role-based access, encryption, and industry-standard governance policies.",
    },
  ];

  return (
    <div className="text-center text-[5vh] lg:text-[7vh] text-[#193270] font-bold xl:px-[5vw] px-6">
      <h1 className="mb-8">Features</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {imageData.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-md group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-sm group-hover:brightness-50"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 text-white px-4 transform group-hover:translate-y-0 translate-y-[-50%]">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-[18px] font-semibold">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
