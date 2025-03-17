
import { Code, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-black border-t border-hacker-red/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <Code className="h-6 w-6 text-hacker-red mr-2" />
            <span className="text-xl font-bold font-cyber text-white">
              <span className="text-hacker-red">&gt;</span> SyhrlmyZID
            </span>
          </div>
          
          <div className="flex space-x-6 mb-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-hacker-red transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-hacker-red transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              <span className="flex items-center justify-center">
                © {year} SyhrlmyZID. Made with <Heart className="h-3 w-3 text-hacker-red mx-1" /> and code.
              </span>
            </p>
            <p className="text-gray-500 text-xs">
              <span className="text-hacker-red">$</span> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
