import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { fadeInUp } from "../utils/motion";

const TeamCard = ({ name, role, image, linkedin, twitter, index }) => {
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
      className="group bg-gray-900/50 border border-red-900/20 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300 text-center"
    >
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-red-900/30 group-hover:border-red-500/50 transition-colors duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Glow effect behind image */}
        <div className="absolute inset-0 bg-red-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
        {name}
      </h3>

      <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
        {role}
      </p>

      <div className="flex justify-center space-x-4">
        <motion.a
          href={linkedin}
          whileHover={{ scale: 1.1, color: "#E50914" }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
          aria-label={`${name} LinkedIn`}
        >
          <Linkedin size={20} />
        </motion.a>

        <motion.a
          href={twitter}
          whileHover={{ scale: 1.1, color: "#E50914" }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
          aria-label={`${name} Twitter`}
        >
          <Twitter size={20} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default TeamCard;
