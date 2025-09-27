import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(229, 9, 20, 0.25)",
      }}
      className="group bg-gray-900/50 border border-red-900/20 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
        <Icon className="text-white" size={24} />
      </div>

      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </motion.div>
  );
};

export default ServiceCard;
