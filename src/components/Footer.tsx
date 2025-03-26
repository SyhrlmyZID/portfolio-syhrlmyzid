import { Code, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-hacker-darker border-t border-hacker-red/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-cyber text-hacker-red mb-4">
              <span className="text-white">&lt;</span>SyhrlmyZID<span className="text-white">/&gt;</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Crafting digital experiences with passion and precision. 
              Transforming ideas into innovative tech solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-cyber text-hacker-red mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="#" className="text-gray-300 hover:text-hacker-red transition-colors block">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-hacker-red transition-colors block">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-hacker-red transition-colors block">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-hacker-red transition-colors block">
                Contact
              </a>
            </div>
          </div>

          {/* Social and Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-cyber text-hacker-red mb-4">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-hacker-red transition-colors"
                aria-label="Github"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-hacker-red transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-hacker-red transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="mailto:contact@syhrlmyzid.com" 
                className="text-gray-300 hover:text-hacker-red transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              contact@syhrlmyzid.com
            </p>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="border-t border-hacker-red/10 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            <span>© {year} SyhrlmyZID</span>
            <Code size={16} className="text-hacker-red" />
            <span>with</span>
            <Heart size={16} className="text-red-500" />
            <span>by SyhrlmyZID</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            <span className="text-hacker-red">$</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;