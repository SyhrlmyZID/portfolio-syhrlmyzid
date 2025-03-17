
import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Message sent successfully!", {
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-hacker-darker relative">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: '#ff2d55', strokeWidth: 1 }} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-hacker-red font-cyber">&gt;</span> Contact
          </h2>
          <div className="w-20 h-1 bg-hacker-red mx-auto mb-6"></div>
          <p className="text-gray-300 font-code">
            Let's connect! Reach out to me for collaborations, opportunities, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="glass-card rounded-md p-6 border-hacker-red/20 h-fit">
            <h3 className="text-xl font-bold mb-4 text-hacker-red font-cyber">
              Get in Touch
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1 font-code">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-hacker-gray border border-gray-700 rounded-sm px-4 py-2 text-white focus:border-hacker-red focus:outline-none focus:ring-1 focus:ring-hacker-red"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1 font-code">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-hacker-gray border border-gray-700 rounded-sm px-4 py-2 text-white focus:border-hacker-red focus:outline-none focus:ring-1 focus:ring-hacker-red"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1 font-code">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-hacker-gray border border-gray-700 rounded-sm px-4 py-2 text-white focus:border-hacker-red focus:outline-none focus:ring-1 focus:ring-hacker-red"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-hacker-red text-white font-medium py-2 rounded-sm transition-all hover:bg-red-700 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="glass-card rounded-md p-6 border-hacker-red/20 mb-6">
              <h3 className="text-xl font-bold mb-4 text-hacker-red font-cyber">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-hacker-red/10 flex items-center justify-center text-hacker-red">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:contact@syhrlmyzid.com" className="text-white hover:text-hacker-red transition-colors">
                      contact@syhrlmyzid.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-md p-6 border-hacker-red/20">
              <h3 className="text-xl font-bold mb-4 text-hacker-red font-cyber">
                Socials
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-3 bg-hacker-gray rounded-sm hover:bg-hacker-red/20 transition-colors"
                >
                  <Github size={18} className="text-gray-300" />
                  <span className="text-white">GitHub</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-3 bg-hacker-gray rounded-sm hover:bg-hacker-red/20 transition-colors"
                >
                  <Linkedin size={18} className="text-gray-300" />
                  <span className="text-white">LinkedIn</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-3 bg-hacker-gray rounded-sm hover:bg-hacker-red/20 transition-colors"
                >
                  <Twitter size={18} className="text-gray-300" />
                  <span className="text-white">Twitter</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-3 bg-hacker-gray rounded-sm hover:bg-hacker-red/20 transition-colors"
                >
                  <Mail size={18} className="text-gray-300" />
                  <span className="text-white">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
