import { Code, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-hacker-darker border-t border-hacker-red/20">
      <div className="container mx-auto px-6">
    
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