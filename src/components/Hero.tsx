
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const words = ["PROMPT ENGINEER", "FRONT-END DEVELOPER", "HACKER"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center matrix-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      
      {/* Digital rain effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="matrix-rain"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-hacker-red font-cyber text-sm md:text-base tracking-widest mb-4 animate-fade-in">
            INITIALIZE SEQUENCE: IDENTIFY [USER]
          </p>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch-effect" 
            data-text="SyhrlmyZID"
          >
            SyhrlmyZID
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-cyber">
              <span className="text-hacker-red">&gt;</span> {words[index].substring(0, subIndex)}
              <span className={cn("opacity-50", blink ? "opacity-0" : "opacity-100")}>|</span>
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button className="px-8 py-3 bg-hacker-red text-white font-medium rounded-sm transition-all hover:bg-red-700 hover:scale-105 hover:shadow-lg hover:shadow-hacker-red/20 active:scale-95">
              VIEW PROJECTS
            </button>
            <button className="px-8 py-3 bg-transparent border border-hacker-red text-hacker-red font-medium rounded-sm transition-all hover:bg-hacker-red/10 hover:scale-105 hover:shadow-lg hover:shadow-hacker-red/20 active:scale-95">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-300 hover:text-hacker-red transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
