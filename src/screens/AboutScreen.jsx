import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const AboutScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Have questions or need assistance? The **Technical Professionals, LLC** team is here to help!  
          Reach out to us for expert technology solutions tailored to your business needs.
        </p>

        <div className="space-y-6 text-gray-700 text-lg">
          <div className="flex items-center justify-center gap-4">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <span>
              **5029 Columbia Road, Ste 302**  
              <br /> Columbia, MD 21044
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <FaPhone className="text-red-500 text-2xl" />
            <a href="tel:4439834541" className="hover:text-red-500 transition">
              (443) 983-4541
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <FaEnvelope className="text-red-500 text-2xl" />
            <a href="mailto:techprodivers@gmail.com" className="hover:text-red-500 transition">
              techprodivers@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <FaGlobe className="text-red-500 text-2xl" />
            <a href="https://www.technical-professionalsllc.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-red-500 transition">
              www.technical-professionalsllc.com
            </a>
          </div>
        </div>

        <p className="text-gray-700 text-lg mt-8">
          We look forward to working with you! Feel free to call, email, or visit our website to learn more.
        </p>
      </div>
    </div>
  );
};

export default AboutScreen;
