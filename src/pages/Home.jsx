import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Code, Users, TrendingUp } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { fadeInUp, staggerContainer } from "../utils/motion";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored solutions built for your unique business needs",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive protection for your digital assets",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Expert guidance to optimize your technology strategy",
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Data-driven analysis to fuel business growth",
    },
  ];

  const successStories = [
    "How Technology Drove a Business Breakthrough",
    "Revolutionizing Processes with Customized IT",
    "Sustaining Growth through Innovative IT Planning",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.1)_0%,transparent_70%)]" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-red-500 bg-clip-text text-transparent"
          >
            Custom IT Solutions
            <br />
            <span className="text-red-500">Designed for Your Business</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            At Touch IT Solutions, we deliver custom software, cybersecurity,
            and consulting services that empower your business to thrive
            securely and efficiently. Trust our expertise to drive your success
            forward.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
            >
              Discover More
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Empowering Growth Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Empowering Growth with
              <span className="text-red-500"> Tailored IT Solutions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Touch IT Solutions delivers cutting-edge software, cybersecurity,
              and consulting services designed to drive business growth and
              secure your digital future.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900/50 border border-red-900/20 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {story}
                </h3>
                <p className="text-gray-400">
                  Discover how our innovative solutions transformed business
                  operations and drove measurable results.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Turning Visions into{" "}
              <span className="text-red-500">Custom Software</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Partner with us to unlock tailored IT solutions that elevate your
              business growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
            >
              Discover More
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
