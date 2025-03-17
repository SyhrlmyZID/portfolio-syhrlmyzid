
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FileWarning, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-hacker-darker matrix-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      
      <div className="glass-card p-10 rounded-md max-w-md z-10 border border-hacker-red/30 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-hacker-red/10 rounded-full flex items-center justify-center animate-pulse">
            <FileWarning size={40} className="text-hacker-red" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-hacker-red glitch-effect" data-text="404">404</h1>
        <p className="text-xl text-gray-300 mb-6 font-cyber">System Error: Path Not Found</p>
        
        <div className="bg-black/30 p-4 rounded-sm mb-6 text-left">
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-hacker-red">$</span> Error accessing: {location.pathname}
            <br />
            <span className="text-hacker-red">$</span> Initiating redirect protocol...
          </p>
        </div>
        
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-hacker-red text-white px-6 py-3 rounded-sm hover:bg-red-700 transition-colors"
        >
          <ArrowLeft size={16} />
          Return to Base
        </a>
      </div>
    </div>
  );
};

export default NotFound;
