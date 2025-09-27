import React from "react";
import { motion } from "framer-motion";

const Logo = ({ size = 32 }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute inset-0 bg-red-500/20 blur-md rounded-full animate-pulse" />

        {/* Main logo container */}
        <div
          className="relative bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-red-500/25"
          style={{ width: size, height: size, fontSize: size * 0.35 }}
        >
          <span className="tracking-tight">TIS</span>

          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-lg" />
        </div>

        {/* Tech circuit lines */}
        <div className="absolute top-1/2 left-0 w-2 h-px bg-gradient-to-r from-transparent to-red-400/50" />
        <div className="absolute top-1/2 right-0 w-2 h-px bg-gradient-to-l from-transparent to-red-400/50" />
        <div className="absolute left-1/2 top-0 h-2 w-px bg-gradient-to-b from-transparent to-red-400/50" />
        <div className="absolute left-1/2 bottom-0 h-2 w-px bg-gradient-to-t from-transparent to-red-400/50" />
      </div>
    </motion.div>
  );
};

export default Logo;
