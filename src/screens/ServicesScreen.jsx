import React from "react";
import { motion } from "framer-motion";
import { FaTv, FaBroadcastTower, FaCamera, FaNetworkWired, FaTools, FaMicrophone } from "react-icons/fa";

const services = [
  { title: "Audio-Visual Integration", icon: <FaTv />, description: "Seamless AV solutions for conference rooms, auditoriums, and events." },
  { title: "Live Event Production", icon: <FaBroadcastTower />, description: "High-quality live event streaming and production services." },
  { title: "Security & Surveillance", icon: <FaCamera />, description: "Advanced CCTV and security system installations for businesses." },
  { title: "Network Solutions", icon: <FaNetworkWired />, description: "Structured cabling and IT network setup for seamless connectivity." },
  { title: "Equipment Maintenance", icon: <FaTools />, description: "Professional repair and maintenance for AV and networking systems." },
  { title: "Pro Audio Systems", icon: <FaMicrophone />, description: "Custom audio installations for businesses, churches, and entertainment venues." },
];

const ServicesScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Services
      </motion.h1>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
        At **Technical Professionals, LLC**, we provide top-tier **Audio-Visual and Networking solutions** tailored to meet your business needs.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-red-500 text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesScreen;

