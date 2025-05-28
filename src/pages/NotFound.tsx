import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-purple-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-flex items-center bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;