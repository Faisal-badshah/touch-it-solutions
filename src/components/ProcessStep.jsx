import React from "react";
import { motion } from "framer-motion";

const ProcessStep = ({ number, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(229, 9, 20, 0.25)",
      }}
      className="group relative bg-gray-900/50 border border-red-900/20 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300 text-center"
    >
      {/* Step Number */}
      <div className="relative mb-6">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
          {number}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Connection line (except for last step) */}
        {index < 2 && (
          <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-red-500/50 to-transparent" />
        )}
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

export default ProcessStep;
