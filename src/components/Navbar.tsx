
import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg",
        scrolled ? "bg-black/80 shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-hacker-red animate-pulse-glow" />
            <span className="text-xl font-bold font-cyber tracking-wider text-white">
              <span className="text-hacker-red">&gt;</span> SyhrlmyZID
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-hacker-red transition-colors duration-300 relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:bg-hacker-red hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-hacker-red focus:outline-none transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden glass-card overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-hacker-red transition-colors duration-300 py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-hacker-red font-cyber">$</span> {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
