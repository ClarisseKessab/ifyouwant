import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[8vw] md:text-[6vw] font-bold text-black mb-12 uppercase tracking-tight">
          Notre site est<br />en construction
        </h1>
        <div className="border-t-2 border-black pt-8 mb-12">
          <p className="text-lg md:text-xl text-black font-mono mb-8 leading-relaxed">
            IF YOU WANT est une agence créative spécialisée dans la création de marques, 
            les sites Webflow, la refonte de sites web et l'optimisation SEO pour les startups 
            et les entreprises SaaS.
          </p>
          <a 
            href="https://your-notion-page-url.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black hover:bg-gray-900 text-white px-8 py-4 font-mono transition-colors"
          >
            Voir nos projets <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
        <p className="font-mono text-black">
          Contact : hello@ifyouwant.agency
        </p>
      </motion.div>
    </div>
  );
}

export default App;