import React from "react";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import { fadeInUp, staggerContainer } from "../utils/motion";

const About = () => {
  const teamMembers = [
    {
      name: "Emily Carter",
      role: "Senior Software Engineer",
      image:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Lee",
      role: "Cybersecurity Specialist",
      image:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sofia Martinez",
      role: "IT Consultant",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwd29tYW58ZW58MHx8MHx8fDA%3D?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Nguyen",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
    },
  ];

  const successStories = [
    "Revolutionizing Business Operations with Tailored IT Solutions",
    "Driving Sustainable Growth through Innovative IT Strategies",
    "How One Company Accelerated Growth through IT Innovation",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent"
            >
              Expert Software Development
              <span className="block text-red-500">Services</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Touch IT Solutions is dedicated to empowering businesses through
              innovative technology. Our mission is to deliver tailored software
              and cybersecurity solutions that drive success and protect assets,
              guided by a commitment to excellence and client partnership.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Meet Our <span className="text-red-500">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our diverse team of technology professionals brings years of
              experience and innovative thinking to every project.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Client <span className="text-red-500">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how our innovative solutions have transformed businesses
              across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(229, 9, 20, 0.25)",
                }}
                className="bg-gray-900/50 border border-red-900/20 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {story}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Learn how our comprehensive IT solutions helped businesses
                  overcome challenges, optimize operations, and achieve
                  sustainable growth in today's competitive landscape.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/30 border border-red-900/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our <span className="text-red-500">Mission</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe that technology should empower, not complicate. Our
              mission is to bridge the gap between complex technical solutions
              and real business value, ensuring every client receives
              personalized attention and cutting-edge solutions that drive
              measurable results.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
