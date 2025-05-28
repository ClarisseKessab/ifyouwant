import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background circles */}
      <motion.div 
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-200 opacity-60 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-200 opacity-50 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
              Coming Soon
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We're crafting <span className="text-purple-700">beautiful</span> digital <span className="text-amber-500">experiences</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            IF YOU WANT is a creative duo specializing in branding, website design, 
            and digital optimization for startups and SaaS companies.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="#contact"
              className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all"
            >
              Get in touch
              <ChevronRight size={18} className="ml-1" />
            </a>
            <a 
              href="#projects"
              className="border border-gray-300 hover:border-purple-500 text-gray-800 py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all"
            >
              View our work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;