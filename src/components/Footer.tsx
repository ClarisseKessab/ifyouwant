import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-xl mb-4">
              <span className="text-purple-700">IF</span> <span className="text-amber-500">YOU</span> <span className="text-purple-700">WANT</span>
            </div>
            <p className="text-gray-600 mb-4">
              A creative duo crafting beautiful digital experiences for startups and SaaS companies.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-600 hover:text-purple-700 transition-colors">
                  Branding Creation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-purple-700 transition-colors">
                  Webflow Site Creation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-purple-700 transition-colors">
                  Website Redesign
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-purple-700 transition-colors">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@ifyouwant.agency" className="text-gray-600 hover:text-purple-700 transition-colors">
                  hello@ifyouwant.agency
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by Clarisse & Andréa — © {year} IF YOU WANT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;