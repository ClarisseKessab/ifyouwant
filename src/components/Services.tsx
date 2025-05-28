import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, RefreshCw, Search } from 'lucide-react';

const services = [
  {
    icon: <Palette size={24} className="text-purple-700" />,
    title: 'Branding Creation',
    description: 'We craft unique brand identities that resonate with your audience and stand out in the market.'
  },
  {
    icon: <Globe size={24} className="text-purple-700" />,
    title: 'Webflow Site Creation',
    description: 'Custom, responsive Webflow websites designed to convert visitors into customers.'
  },
  {
    icon: <RefreshCw size={24} className="text-purple-700" />,
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, user-friendly digital experience.'
  },
  {
    icon: <Search size={24} className="text-purple-700" />,
    title: 'SEO Optimization',
    description: 'Improve your search ranking and drive organic traffic with our proven SEO strategies.'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50\" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What we can do for your business
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 p-3 bg-purple-50 rounded-full inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;