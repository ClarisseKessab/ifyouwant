import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-16" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Check out our latest work
          </motion.p>
        </div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Showcase</h3>
            <p className="text-gray-700 mb-8">
              Our complete portfolio is still being organized, but we've prepared 
              a selection of our best work for you to review in the meantime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="https://your-notion-page-url.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Our Projects <ExternalLink size={18} className="ml-2" />
              </a>
              <p className="text-sm text-gray-500">
                *Hosted on Notion while our main site is under construction
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item}
                className="aspect-square bg-purple-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-purple-700 font-medium">Project {item}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;