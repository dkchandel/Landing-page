import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdOutlineArrowRightAlt, MdPhoneInTalk } from "react-icons/md";
import logo from './Image/logo-light.jpg'

const Footer = () => {
  return (
    <footer className="bg-[#f3fffb] text-gray-600 px-8 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap- mb-4 sm:font-5">
            <div className="rounded-full" />
            <h2 className="text-2xl font-bold text-black">
                <img src={logo} alt=""/>
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Empower organizations of all sizes to harness the power of Artificial Intelligence and Machine Learning,
            transforming their operations, decision-making, and ultimately, their success.
          </p>
          <div className="flex gap-2 mt-5 text-xl text-black">
          
                <a href="https://www.facebook.com/webmobi360" className="cursor-pointer bg-gray-400 hover:bg-amber-800 h-[35px] hover:text-white w-[36px] px-2 pt-2 rounded-full">
            <FaFacebookF  />
            </a>
                <a href="https://twitter.com" className="cursor-pointer bg-gray-400 hover:bg-amber-800 h-[35px] hover:text-white w-[36px] px-2 pt-2 rounded-full">
            <FaXTwitter />
            </a>
                <a href="https://www.instagram.com/webmobi360" className="cursor-pointer bg-gray-400 hover:bg-amber-800 h-[35px] hover:text-white w-[36px] px-2 pt-2 rounded-full">
            <FaInstagram />
            </a>
                <a href="https://www.linkedin.com/company/webmobi360-b2b-business-solutions/" className="cursor-pointer bg-gray-400 hover:bg-amber-800 h-[35px] hover:text-white w-[36px]  px-2 pt-2 rounded-full">
            <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Blogs", "Careers", "News", "Contact", "Privacy Policy"].map((link, i) => (
              <li key={i} className="flex items-center gap-1">
                <MdOutlineArrowRightAlt />
                <span>{link}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "AIML Services",
              "Digital Transformation",
              "Data Analysis",
              "Data Engineering",
              "Digital Marketing & SEO",
              "Website Application Building"
            ].map((service, i) => (
              <li key={i} className="flex items-center gap-1">
                <MdOutlineArrowRightAlt />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Contact Info</h3>
          <p className="text-sm leading-relaxed">
            101, Opposite to Sukhwani Gracia,<br />
            Pashan Sus Road, Sus Ln, near<br />
            Sunny’s World, Pune, Maharashtra<br />
            42115
          </p>

          <p className="mt-4 text-sm text-orange-500 font-semibold cursor-pointer hover:text-black">
            Hello@webmobi360.co
          </p>

          <div className="mt-4 flex items-center gap-3 text-black text-sm">
            <div className="bg-orange-400 p-3 rounded-full hover:bg-[#B51B41] text-white">
              <MdPhoneInTalk size={20} />
            </div>
            <div>
              <span>Call us now:</span><br />
              <span className="font-bold text-lg">+91 9766331360</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
