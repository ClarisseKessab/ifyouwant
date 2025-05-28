import React from 'react';
import { motion } from 'framer-motion';
import { Construction, ExternalLink } from 'lucide-react';

const ComingSoon: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-700 rounded-full mb-6">
            <Construction size={28} />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Full Website is Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're currently working on our complete portfolio website. 
            In the meantime, you can check out some of our projects and get in touch with us directly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://your-notion-page-url.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Our Projects <ExternalLink size={18} className="ml-2" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center border border-gray-300 hover:border-purple-500 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
          
          <motion.div 
            className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-700">
              Want to be notified when our full site launches? 
              <a href="#contact" className="text-purple-700 font-medium ml-1 hover:underline">
                Leave your email
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;