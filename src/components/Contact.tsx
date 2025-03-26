import { Mail, Instagram, TikTok, Youtube } from 'lucide-react';

const Contact = () => {
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
            <span className="text-hacker-red font-cyber">&gt;</span> Kontak
          </h2>
          <div className="w-20 h-1 bg-hacker-red mx-auto mb-6"></div>
          <p className="text-gray-300 font-code">
            Jika ingin ada yang ditanyakan silahkan hubungi saya melalui media sosial.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="glass-card rounded-md p-6 border-hacker-red/20">
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
              Sosial Media
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://www.instagram.com/@syhrlmyz.id" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-hacker-gray rounded-sm hover:bg-hacker-red/20 transition-colors"
              >
                <Instagram size={18} className="text-gray-300" />
                <span className="text-white">Instagram</span>
              </a>
              
              <a 
                href="https://www.tiktok.com/@syhrlmyz.id" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-hacker-gray rounded-sm hover:bg-hacker-red/20 transition-colors"
              >
                <TikTok size={18} className="text-gray-300" />
                <span className="text-white">TikTok</span>
              </a>
              
              <a 
                href="https://www.youtube.com/channel/syhrlmyz.id" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-hacker-gray rounded-sm hover:bg-hacker-red/20 transition-colors"
              >
                <Youtube size={18} className="text-gray-300" />
                <span className="text-white">YouTube</span>
              </a>
              
              <a 
                href="mailto:contact@syhrlmyzid.com" 
                className="flex items-center gap-3 p-3 bg-hacker-gray rounded-sm hover:bg-hacker-red/20 transition-colors"
              >
                <Mail size={18} className="text-gray-300" />
                <span className="text-white">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
