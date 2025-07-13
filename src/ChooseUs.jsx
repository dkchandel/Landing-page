import React from "react";
import Slider from "react-slick";
import img1 from './Image/Images-1.jpg';
import img2 from './Image/blog-digital-marketing.jpg';
import img3 from './Image/security-compliance.jpg';
import img4 from './Image/Experties.jpg';
import img5 from './Image/three-Picsart.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

// Custom arrows
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-[#b84af4] text-white p-2 rounded-full cursor-pointer z-10 hover:bg-[#912cd1]"
    onClick={onClick}
  >
    <MdOutlineKeyboardArrowLeft size={28} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-[#b84af4] text-white p-2 rounded-full cursor-pointer z-10 hover:bg-[#912cd1]"
    onClick={onClick}
  >
    <MdOutlineKeyboardArrowRight size={28}  />
  </div>
);

const ChooseUs = () => {
  const imageData = [
    {
      image: img3,
      title: "End-to-End Security & Compliance",
      desc: "Ensuring secure data storage and regulatory compliance.",
    },
    {
      image: img4,
      title: "Proven Expertise in Data Warehousing & ETL",
      desc: "Skilled professionals with hands-on experience in enterprise solutions.",
    },
    {
      image: img5,
      title: "Tailored Solutions for Every Business",
      desc: "Custom architectures to fit your unique data needs.",
    },
    {
      image: img1,
      title: "Seamless Cloud & On-Premises Integration",
      desc: "Supporting all major platforms for flexible deployment.",
    },
    {
      image: img2,
      title: "Automation & Efficiency",
      desc: "Eliminating manual tasks for faster, more accurate data processing.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-[#f5fffa] py-10 px-4 relative">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#141414]">Why Choose Us?</h1>

      <div className="relative mx-32">
        <Slider {...settings}>
          {imageData.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-xl h-[370px] flex flex-col overflow-hidden 
                shadow-[0_4px_25px_rgba(165,42,42,0.3)] border border-[#c9cfcb]">
                <img src={item.image} alt={item.title} className="h-60 w-full object-cover" />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-[#5f259f] mb-2">{item.title}</h2>
                  <p className="text-gray-700 text-[17px] sm:text-[14px]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ChooseUs;
