import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-purple-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-purple-700 font-medium text-lg">Image coming soon</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-amber-400"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-8 border-purple-200"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              We're Clarisse and Andréa, two freelancers who joined forces to create IF YOU WANT, 
              a boutique creative agency focused on helping startups and SaaS companies elevate their digital presence.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With our combined expertise in branding, web design, and digital marketing, 
              we offer a comprehensive approach to help your business stand out in a crowded market.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe in working closely with our clients, understanding their unique needs, 
              and delivering tailored solutions that drive real results.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Clarisse</h3>
                <p className="text-gray-600">Brand Strategist & Designer</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Andréa</h3>
                <p className="text-gray-600">Web Developer & SEO Specialist</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;