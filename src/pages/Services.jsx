import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Shield,
  Users,
  Cloud,
  Smartphone,
  Palette,
  TestTube,
  TrendingUp,
  Settings,
  Database,
  Cpu,
  BarChart3,
  Wrench,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import ProcessStep from "../components/ProcessStep";
import { fadeInUp, staggerContainer } from "../utils/motion";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored applications built to meet your specific business requirements and goals.",
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security measures to protect your digital assets and data.",
    },
    {
      icon: Users,
      title: "IT Consulting Services",
      description:
        "Expert guidance to optimize your technology strategy and operations.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Advanced security frameworks for large-scale business operations.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Seamless migration and optimization of cloud-based solutions.",
    },
    {
      icon: Settings,
      title: "Managed IT Support",
      description:
        "24/7 technical support and maintenance for your IT infrastructure.",
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description:
        "Modern, responsive websites that drive engagement and conversions.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that enhance digital experiences.",
    },
    {
      icon: TestTube,
      title: "Software Testing & QA",
      description: "Comprehensive testing to ensure quality and reliability.",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "Strategic modernization of business processes and technology.",
    },
    {
      icon: Database,
      title: "IT Infrastructure Setup",
      description:
        "Complete infrastructure design and implementation services.",
    },
    {
      icon: Cpu,
      title: "DevOps & Cloud Engineering",
      description: "Streamlined development and deployment processes.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & AI Solutions",
      description: "Intelligent insights through advanced analytics and AI.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Ongoing Support",
      description: "Continuous support to keep your systems running smoothly.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation & Planning",
      description:
        "We analyze your needs and create a comprehensive strategy tailored to your business goals.",
    },
    {
      number: "02",
      title: "Development & Integration",
      description:
        "Our expert team builds and integrates solutions using cutting-edge technologies.",
    },
    {
      number: "03",
      title: "Support & Optimization",
      description:
        "Ongoing maintenance and optimization to ensure peak performance and growth.",
    },
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
              Empowering Growth with
              <span className="block text-red-500">Custom IT Solutions</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Explore our expert services that combine innovation and precision
              to meet your business goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-red-500">Process</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A streamlined approach that ensures successful project delivery
              and long-term partnership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
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
            className="bg-gray-900/30 border border-red-900/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your{" "}
              <span className="text-red-500">Business?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our expert services can drive your business
              forward with innovative technology solutions.
            </p>
            <motion.a
              href="contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-500/25"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
